export default defineNuxtPlugin(() => {
    return {
        provide: {
            apiFetch: async (extension: string) =>
                await useFetch(process.env.API_URL + extension),
        },
    }
})
