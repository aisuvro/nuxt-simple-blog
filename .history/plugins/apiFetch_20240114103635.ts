export default defineNuxtPlugin(() => {
    return {
        provide: {
            apiFetch: async (extension: string) =>
                await useFetch(config.API_URL + extension),
        },
    }
})
