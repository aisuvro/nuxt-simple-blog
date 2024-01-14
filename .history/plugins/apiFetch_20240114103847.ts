const config = useRuntimeConfig()

export default defineNuxtPlugin(() => {
    return {
        provide: {
            apiFetch: async (extension: string) =>
                await useFetch(config.public.API_URL + extension),
        },
    }
})
