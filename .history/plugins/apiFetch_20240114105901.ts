

export default defineNuxtPlugin(() => {
    return {
        provide: {
            apiFetch: async (url: string) => await useFetch(url),
        },
    }
})
