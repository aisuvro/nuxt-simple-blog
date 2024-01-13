<template>
    <div class="w-full min-h-screen">
        <!-- <Title>{{title}}</Title> -->
        <!-- <header class="bg-gray-100 border-b border-gray-500 shadow-lg">
            <nav class="container sticky flex items-center justify-between max-w-screen-lg py-10 mx-auto">
                <h1 class="text-3xl font-bold">
                    <NuxtLink class="text-blue-500 hover:text-blue-600" to="/">My Blog</NuxtLink>
                </h1>
                <ul class="flex items-center justify-end">
                    <li>
                        <NuxtLink class="px-2 py-1 text-blue-500 border border-gray-500 rounded-md hover:text-blue-600"
                            to="/">Home</NuxtLink>
                    </li>
                    <li class="ml-16">
                        <NuxtLink class="px-2 py-1 text-blue-500 border border-gray-500 rounded-md hover:text-blue-600"
                            to="/about">About</NuxtLink>
                    </li>
                </ul>
            </nav>
        </header>
        <main class="container max-w-screen-lg mx-auto mt-10">
        </main> -->

        <NuxtLayout>
            <NuxtPage />
          </NuxtLayout>
    </div>
</template>
<script setup>
    const title = useState('title', () => 'My Blog')
</script>