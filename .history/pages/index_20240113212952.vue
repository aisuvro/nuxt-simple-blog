<template>
    <div>
        <h1 class="text-3xl font-bold">
            Welcome to my blog
        </h1>

        <div class="mt-8">
            <!-- <article v-for="post in posts" :key="post.id" class="mt-4">
                <Post />
            </article> -->
        </div>
    </div>
</template>


<script setup>
    import hello from "~/plugins/hello"


    const title = useState('title')

    const $hello = hello()

    console.log($hello)

    // const { data: posts } = await useFetch('posts', {
    //     baseURL: process.env.API_URL
    // })
</script>