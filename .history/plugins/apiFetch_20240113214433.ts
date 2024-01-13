export default defineNuxtPlugin(() => {
    return {
        provide: {
            apiFetch: async (extension: string) =>
                await useFetch('http://localhost:8000/api/' + extension),
        },
    }
})
