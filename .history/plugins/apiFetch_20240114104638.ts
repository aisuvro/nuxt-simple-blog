

export default defineNuxtPlugin(() => {
    const config = useRuntimeConfig()
    return {
        provide: {
            apiFetch: async (extension: string) => await useFetch(`${config.API_URL}${extension}`),
        },
    }
})
