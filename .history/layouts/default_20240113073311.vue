<template>
    <div class="container mx-auto">
        <nav class="flex justify-between items-center py-4">
            <ul class="flex items-center">
                <li>
                    <NuxtLink class="text-blue-500 hover:text-blue-600 border-2 border-gray-500" to="/">Home</NuxtLink>
                </li>
                <li class="ml-16">
                    <NuxtLink class="text-blue-500 hover:text-blue-600 border-2 border-gray-500" to="/about">About</NuxtLink>
                </li>
            </ul>
        </nav>

        <slot />
    </div>
</template>