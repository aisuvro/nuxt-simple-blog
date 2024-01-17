<template>
    <div class="text-sm">
        <Title>Add Post | {{ title }}</Title>


        <div class="mt-8 w-full">
            <h1 class="text-3xl font-bold">
                Add Posts
            </h1>
            <div class="w-full">
                <!-- Write a form to create a blog post including title and body text box -->
                <div class="mt-8 w-full">
                    <form @submit.prevent="createPost">

                        <ul class="px-2 py-4 text-sm" v-if="error.errors">
                            <li class="text-red-500" v-for="(e, i) in error.errors" :key="i">{{ e[0] }}</li>
                        </ul>


                        <div class="flex flex-col md:flex-row space-y-4">
                            <div class="flex-grow">
                                <input type="text" class="border border-gray-400 px-2 py-1 rounded-lg w-full"
                                    aria-label="Blog Title" v-model="post.title" />
                            </div>
                            <div class="flex-grow">
                                <textarea class="border border-gray-400 px-2 py-1 rounded-lg w-full" aria-label="Blog Body"
                                    v-model="post.body"></textarea>
                            </div>
                            <div class="flex-grow">
                                <button type="submit" class="border border-blue-500 bg-blue-500 text-white px-2 py-1 rounded-lg w-full"
                                    >Create</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
definePageMeta({
    middleware: 'auth'
})

const title = useState('title')
const error = ref('')

const { $apiAuthPost } = useNuxtApp()

const user = ref({})

const router = useRouter()

const post = ref({
    title: '',
    body: ''

})



const createPost = async () => {
   const { error: errors, data } = await $apiAuthPost('user/posts', post)
   if (!errors.value) {
        router.push('/user-post')
    } else {
        error.value = errors.value.data
    }
}
</script>