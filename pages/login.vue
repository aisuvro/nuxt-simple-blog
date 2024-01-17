<template>
    <!-- component -->
    <div class="flex h-screen">
        <div class="items-center justify-around hidden w-full lg:flex lg:w-1/2 login_img_section">
            <div class="inset-0 z-0 bg-black opacity-20">

            </div>
            <div class="flex-col items-center w-full px-2 mx-auto space-y-6 md:px-20">
                <h1 class="font-sans text-4xl font-bold text-white">My Blog</h1>
                <p class="mt-1 text-white">Login to your account.</p>
                <div class="flex justify-center mt-6 lg:justify-start">
                    <NuxtLink to="/"
                        class="px-4 py-2 mt-4 mb-2 font-bold text-indigo-800 transition-all duration-500 bg-white hover:bg-indigo-700 hover:text-white hover:-translate-y-1 rounded-2xl">
                        Get
                        back to home page</NuxtLink>
                </div>
            </div>
        </div>
        <div class="flex items-center justify-center w-full space-y-8 bg-white lg:w-1/2">



            <div class="w-full px-0 md:px-32 lg:px-24">
             
                <form class="p-5 mx-auto bg-white rounded-md shadow-2xl w-80 md:w-96" @submit.prevent="submit">

                    <ul class="px-2 py-4 text-sm" v-if="error.errors">
                        <li class="text-red-500" v-for="(e, i) in error.errors" :key="i">{{ e[0] }}</li>
                    </ul>
                    
                    <h1 class="mb-1 text-2xl font-bold text-gray-800">Welcome member</h1>
                    <p class="mb-8 text-sm font-normal text-gray-600">login now</p>
                    <div class="flex items-center px-3 py-2 mb-8 border-2 rounded-2xl">
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-gray-400" fill="none"
                            viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                        </svg>
                        <input id="email" class="w-full pl-2 border-none outline-none " type="email" name="email"
                            placeholder="Email Address" v-model="email" />
                    </div>
                    <div class="flex items-center px-3 py-2 mb-12 border-2 rounded-2xl ">
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-gray-400" viewBox="0 0 20 20"
                            fill="currentColor">
                            <path fillRule="evenodd"
                                d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                                clipRule="evenodd" />
                        </svg>
                        <input class="w-full pl-2 border-none outline-none" type="password" name="password" id="password"
                            placeholder="Password" v-model="password" />

                    </div>
                    <button type="submit" @click="submit"
                        class="block w-full py-2 mt-5 mb-2 font-semibold text-white transition-all duration-500 bg-indigo-600 rounded-2xl hover:bg-indigo-700 hover:-translate-y-1">Login</button>
                    <div class="flex justify-between mt-4">
                        <span
                            class="ml-2 text-sm transition-all duration-500 cursor-pointer hover:text-blue-500 hover:-translate-y-1">Forgot
                            Password ?</span>

                        <NuxtLink to="/register"
                            class="ml-2 text-sm transition-all duration-500 cursor-pointer hover:text-blue-500 hover:-translate-y-1">
                            Don't
                            have an account yet?</NuxtLink>
                    </div>

                </form>
            </div>

        </div>
    </div>
</template>

<script setup>

definePageMeta({
    layout: 'fullscreen'
})

const email = ref('')
const password = ref('')
const error = ref('')
const loading = ref(false)

const { $apiAuthGet, $apiAuthPost } = useNuxtApp()
const router = useRouter()



$apiAuthGet('sanctum/csrf-cookie')

async function submit() {


    const { data: loginInfo, error: errors } = await $apiAuthPost('login',
        {
            email: email.value,
            password: password.value
        }
    )

    // console.log(errors.value.data);
    

    if (!errors.value) {
        // route.to = '/'
        // window.location.href = '/'
        router.push('/account')
    } else {
        error.value = errors.value.data
    }
}
</script>


<style scoped>
.login_img_section {
    background: linear-gradient(rgba(2, 2, 2, .7), rgba(0, 0, 0, .7)), url(https://images.unsplash.com/photo-1650825556125-060e52d40bd0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80) center center;

    background-size: cover;
}
</style>