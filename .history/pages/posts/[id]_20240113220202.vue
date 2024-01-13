<template>
    <div>
        <Title>Post | {{title}}</Title>
        <h1 class="text-3xl font-bold">
            {{ post.title }}
        </h1>

        <div class="mt-8">
            <article class="mt-4">
                {{ post.body }}
            </article>
        </div>
    </div>
</template>


<script setup>
    const title = useState('title')

    const route = useRoute()

    const { $apiFetch } = useNuxtApp()

    const { data: post } = await $apiFetch(`posts/${route.params.id}`)
</script>