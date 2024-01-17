
import type { NuxtLink } from '#build/components';
<script setup>
defineProps({
    post: {
        type: Object
    }

})
</script>
<template>
    <!-- component -->
    <div class="relative flex max-w-[24rem] flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
        <div class="relative m-0 overflow-hidden rounded-none bg-transparent bg-clip-border text-gray-700 shadow-none">
            <img :src="post.image" class="object-cover w-full h-48 rounded-none" :alt="post.title" />
        </div>
        <div class="p-6">
            <h4 class="block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                {{ post.title }}
            </h4>
        </div>
        <div class="flex items-center justify-between p-6">
            <div class="flex items-center -space-x-3">
                <img alt="natali craig"
                    src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1061&amp;q=80"
                    class="relative inline-block h-9 w-9 rounded-full border-2 border-white object-cover object-center hover:z-10"
                    data-tooltip-target="author-1" />
                <img alt="tania andrew"
                    src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1480&amp;q=80"
                    class="relative inline-block h-9 w-9 rounded-full border-2 border-white object-cover object-center hover:z-10"
                    data-tooltip-target="author-2" />

            </div>
            <p class="block font-sans text-base font-normal leading-relaxed text-inherit antialiased">
                <NuxtLink class="flex items-center justify-center px-4 py-2 mt-4 font-semibold text-sm text-white transition-all duration-500 bg-indigo-600 rounded-2xl hover:bg-indigo-700 hover:-translate-y-1">
                    Edit
                </NuxtLink>
            </p>
        </div>
    </div>

</template>

<style scoped>
@import url('https://unpkg.com/@material-tailwind/html@latest/styles/material-tailwind.css');
</style>