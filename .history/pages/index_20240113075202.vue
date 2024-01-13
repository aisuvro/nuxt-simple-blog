<template>
    <div>
        <h1 class="text-md">
            Welcome to my blog
        </h1>

        <div class="mt-8">
            <article v-for="i in 10" :key="i" class="mt-4">
                <Post />
            </article>
        </div>
    </div>
</template>