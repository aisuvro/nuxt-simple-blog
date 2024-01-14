<template>
    <div>
        <h1 class="text-3xl font-bold">
            Welcome to my blog
        </h1>

        <div class="mt-8">
            <article v-for="post in posts" :key="post.id" class="mt-4">
                <Post  :post="post" />
            </article>
        </div>
    </div>
</template>


<script setup>

    const title = useState('title')

    const { $apiFetch, $API_URL } = useNuxtApp()

    console.log($API_URL)

    const { data: posts } = await $apiFetch('posts', $API_URL)

    
</script>