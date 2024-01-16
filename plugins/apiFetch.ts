export default defineNuxtPlugin(() => {
    return {
        provide: {
            apiFetch: async (extension: string) =>
                await useFetch(extension, {
                    baseURL: 'http://localhost:8000/api/',
                    referrer: 'http://localhost:8000',
                }),
        },
    }
})
