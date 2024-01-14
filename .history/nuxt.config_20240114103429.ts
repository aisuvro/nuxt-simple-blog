// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    publicRuntimeConfig:{
        API_URL: process.env.API_URL || 'http://localhost:3000',
    },
    devtools: { enabled: false },
    css: ['~/assets/css/main.css'],
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },
})
