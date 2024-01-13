<template>
    <div class="container mx-auto">
        <nav class="flex justify-between items-center py-4">
            <ul class="flex items-center">
                <li>
                    <NuxtLink class="text-blue-500 hover:text-blue-600 border border-gray-500 px-2 py-1 rounded-md" to="/">Home</NuxtLink>
                </li>
                <li class="ml-16">
                    <NuxtLink class="text-blue-500 hover:text-blue-600 border border-gray-500 px-2 py-1 rounded-md" to="/about">About</NuxtLink>
                </li>
            </ul>
        </nav>

        <slot />
    </div>
</template>