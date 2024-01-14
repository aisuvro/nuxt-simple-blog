
export default defineNuxtPlugin(() => {

    const config = useRuntimeConfig()
    return {
        provide: {
            apiFetch: async (extension: string) => await useFetch(extension, {baseURL: 'http://localhost:8000/api/'}),
        },
    }
})
