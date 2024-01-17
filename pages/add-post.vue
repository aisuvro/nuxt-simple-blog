<template>
    <div class="text-sm">
        <Title>Add Post | {{title}}</Title>
        

        <div class="mt-8 w-full">
            <h1 class="text-3xl font-bold">
                My Posts
            </h1>
            <div class="w-full">
                
            </div>
        </div>
    </div>
</template>
<script setup>
    const title = useState('title')

    const { $apiAuthGet } = useNuxtApp()

    const user = ref({})

    // onMounted(async() => {
        // console.log('mounted');
        const { data: userInfo } = await $apiAuthGet('api/user/posts')
        user.value = userInfo.value
    // })
</script>