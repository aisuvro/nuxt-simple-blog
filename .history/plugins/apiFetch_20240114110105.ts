

export default defineNuxtPlugin(() => {
    return {
        provide: {
            apiFetch: async (url: string) => await useFetch('http://localhost:8000/api/' + extension),
        },
    }
})
