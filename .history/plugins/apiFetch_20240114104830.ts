

export default defineNuxtPlugin(() => {
    const config = useRuntimeConfig().API_URL
    return {
        provide: {
            apiFetch: async (extension: string) => await useFetch(`${useRuntimeConfig().$API_URL} ${extension}`),
        },
    }
})
