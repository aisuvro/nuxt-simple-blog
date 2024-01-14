
export default defineNuxtPlugin(() => {

    const config = useRuntimeConfig()
    return {
        provide: {
            apiFetch: (extension: string) => useFetch(extension, {baseURL: process.env.API_URL}),
        },
    }
})
