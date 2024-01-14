

export default defineNuxtPlugin(() => {
    const config = useRuntimeConfig().API_URL
    return {
        provide: {
            apiFetch: async (extension: string, config: string) => await useFetch(`${config}${extension}`),
        },
    }
})
