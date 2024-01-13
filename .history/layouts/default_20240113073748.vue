<template>
    <div class="">
        <header class="border-b  border-gray-500 shadow-sm my-10">
            <nav class="flex justify-between items-center py-10 container max-w-screen-lg mx-auto">
                <h1 class="text-3xl font-bold">
                    <NuxtLink class="text-blue-500 hover:text-blue-600" to="/">My Blog</NuxtLink>
                </h1>
                <ul class="flex items-center">
                    <li>
                        <NuxtLink class="text-blue-500 hover:text-blue-600 border border-gray-500 px-2 py-1 rounded-md"
                            to="/">Home</NuxtLink>
                    </li>
                    <li class="ml-16">
                        <NuxtLink class="text-blue-500 hover:text-blue-600 border border-gray-500 px-2 py-1 rounded-md"
                            to="/about">About</NuxtLink>
                    </li>
                </ul>
            </nav>
        </header>

        <slot />
    </div>
</template>