<template>
    <div class="text-sm">
        <Title>Add Post | {{title}}</Title>
        

        <div class="mt-8 w-full">
            <h1 class="text-3xl font-bold">
                My Posts
            </h1>
            <div class="w-full grid grid-cols-4 gap-3 my-5">
                <UserPost v-for="post in posts" :key="post.id" :post="post" />
            </div>
        </div>
    </div>
</template>
<script setup>
definePageMeta({
    middleware: 'auth'

})
    const title = useState('title')

    const { $apiAuthGet } = useNuxtApp()

    const posts = ref({})

    // onMounted(async() => {
        // console.log('mounted');
        const { data: allPost } = await $apiAuthGet('api/user/posts')
        posts.value = allPost.value
    // })
</script>