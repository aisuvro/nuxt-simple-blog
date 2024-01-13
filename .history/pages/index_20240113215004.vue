<template>
    <div>
        <h1 class="text-3xl font-bold">
            Welcome to my blog
        </h1>

        <div class="mt-8">
            <article v-for="post in posts" :key="post.id" :post="post" class="mt-4">
                <Post />
            </article>
        </div>
    </div>
</template>


<script setup>

    const title = useState('title')

    const { $apiFetch } = useNuxtApp()

    const { data: posts } = await $apiFetch('posts')

    
</script>