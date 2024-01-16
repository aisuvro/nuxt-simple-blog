<template>
    <div class="text-sm">
        <Title>My Account | {{title}}</Title>
        

        <div class="mt-8">
            <h1 class="text-3xl font-bold">
                Welcome to my blog
            </h1>
            <p class="mt-4">
               Name: {{ user.name }}
            </p>
            <p class="mt-4">
               Email: {{ user }}
            </p>
        </div>
    </div>
</template>
<script setup>
    const title = useState('title')

    const { $apiAuthGet } = useNuxtApp()

    const user = ref({})

    onMounted(async() => {
        // console.log('mounted');
        const { data: userInfo } = await $apiAuthGet('api/user')
        user.value = userInfo
        console.log(userInfo);
    })
</script>