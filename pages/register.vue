<template>
    <!-- component -->
    <div class="flex h-screen">
        <div class="flex items-center justify-center w-full space-y-8 bg-white login_img_section">
            <div class="w-full px-8 md:px-32 lg:px-24">
                <form class="p-5 mx-auto bg-white rounded-md shadow-2xl w-80 md:w-96">
                    <h1 class="mb-1 text-2xl font-bold text-gray-800">To become a member</h1>
                    <p class="mb-8 text-sm font-normal text-gray-600">register now</p>

                    <div class="flex items-center px-3 py-2 mb-8 border-2 rounded-2xl">
                        <input id="name" class="w-full pl-2 border-none outline-none " type="email" name="name"
                            placeholder="Full name" />
                    </div>
                    <div class="flex items-center px-3 py-2 mb-8 border-2 rounded-2xl">
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-gray-400" fill="none"
                            viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                        </svg>
                        <input id="email" class="w-full pl-2 border-none outline-none " type="email" name="email"
                            placeholder="Email Address" />
                    </div>
                    <div class="flex items-center px-3 py-2 mb-8 border-2 rounded-2xl ">
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-gray-400" viewBox="0 0 20 20"
                            fill="currentColor">
                            <path fillRule="evenodd"
                                d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                                clipRule="evenodd" />
                        </svg>
                        <input class="w-full pl-2 border-none outline-none" type="password" name="password" id="password"
                            placeholder="Password" />

                    </div>
                    <div class="flex items-center px-3 py-2 mb-12 border-2 rounded-2xl ">
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-gray-400" viewBox="0 0 20 20"
                            fill="currentColor">
                            <path fillRule="evenodd"
                                d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                                clipRule="evenodd" />
                        </svg>
                        <input class="w-full pl-2 border-none outline-none" type="password" name="confirm_password"
                            placeholder="Confirm Password" />
                    </div>
                    <button type="submit"
                        class="block w-full py-2 mt-5 mb-2 font-semibold text-white transition-all duration-500 bg-indigo-600 rounded-2xl hover:bg-indigo-700 hover:-translate-y-1">Register</button>
                    <div class="flex justify-between mt-4">
                        <NuxtLink href="/login"
                            class="ml-2 text-sm transition-all duration-500 cursor-pointer hover:text-blue-500 hover:-translate-y-1">
                            Forgot
                            Password ?</NuxtLink>

                        <NuxtLink href="/login"
                            class="ml-2 text-sm underline transition-all duration-500 cursor-pointer hover:text-blue-500 hover:-translate-y-1">
                            already have an account yet?</NuxtLink>
                    </div>

                </form>
            </div>

        </div>
    </div>
</template>

<script setup>

definePageMeta({
    layout: 'fullscreen',
    middleware: 'guest'
})
</script>


<style scoped>
.login_img_section {
    background: linear-gradient(rgba(2, 2, 2, .7), rgba(0, 0, 0, .7)), url(https://images.unsplash.com/photo-1650825556125-060e52d40bd0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80) center center;
    background-size: cover;
}
</style>