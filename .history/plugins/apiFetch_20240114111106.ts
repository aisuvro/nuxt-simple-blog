
export default defineNuxtPlugin(() => {

    const config = useRuntimeConfig()
    return {
        provide: {
            apiFetch: async (extension: string) => await useFetch(extension, {baseURL: process.env.API_URL}),
        },
    }
})
