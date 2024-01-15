<script setup>
const title = useState('title', () => 'My Blog')
</script>
<template>
    <div class="w-full min-h-screen">
        <Title>{{ title }}</Title>
        <main class="">

            <slot />
        </main>

    </div>
</template>