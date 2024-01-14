

export default defineNuxtPlugin(() => {
    const config = useRuntimeConfig()
    console.log(config.app.API_URL);
    return {
        provide: {
            apiFetch: async (extension: string) => await useFetch(config.API_URL + extension),
        },
    }
})
