

export default defineNuxtPlugin(() => {
    const config = useRuntimeConfig().API_URL
    return {
        provide: {
            apiFetch: async (extension: string) => await useFetch(`${config} ${extension}`),
        },
    }
})
