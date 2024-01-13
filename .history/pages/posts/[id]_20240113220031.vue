<template>
    <div>
        <Title>Post | {{title}}</Title>
        <h1 class="text-3xl font-bold">
            Cyber security
        </h1>

        <div class="mt-8">
            <article class="mt-4">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium obcaecati reiciendis soluta, dolorem
                culpa voluptatibus iusto veniam delectus explicabo eligendi quo, pariatur esse, blanditiis aliquam animi
                sunt mollitia repudiandae qui.
            </article>
        </div>
    </div>
</template>


<script setup>
    const title = useState('title')

    const { $apiFetch } = useNuxtApp()

    const { data: posts } = await $apiFetch(`posts/${$route.params.id}`)
</script>