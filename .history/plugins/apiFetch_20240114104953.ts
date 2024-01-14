

export default defineNuxtPlugin(() => {
    const config = useRuntimeConfig().API_URL
    return {
        provide: {
            apiFetch: async (extension: string) => await useFetch(process.env.API_URL + extension),
        },
    }
})
