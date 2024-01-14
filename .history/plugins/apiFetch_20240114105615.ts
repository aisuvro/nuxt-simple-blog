

export default defineNuxtPlugin(() => {
    const config = useRuntimeConfig()
    const API_URL = useRuntimeConfig().API_URL
    return {
        provide: {
            apiFetch: async (extension: string, API_URL: string) => await useFetch(`${API_URL}${extension}`),
        },
    }
})
