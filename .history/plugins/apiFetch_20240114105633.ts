

export default defineNuxtPlugin(() => {
    return {
        provide: {
            apiFetch: async (extension: string, API_URL: string) => await useFetch(`${API_URL}${extension}`),
        },
    }
})
