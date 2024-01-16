export default defineNuxtPlugin(() => {
    const headers = useRequestHeaders(['cookie'])
    return {
        provide: {
            apiAuthGet: async (extension: string) =>
                await useFetch(extension, {
                    baseURL: 'http://localhost:8000/',
                    method: 'get',
                    headers: headers,
                    credentials: 'include',
                }),
            apiAuthPost: async (extension: string, body: Object) =>
                await useFetch(extension, {
                    baseURL: 'http://localhost:8000/api/',
                    method: 'post',
                    body: body,
                    headers: {
                        'Content-Type': 'application/json',
                        Accept: 'application/json',
                        'X-XSRF-TOKEN': useCookie('XSRF-TOKEN'),
                    },
                    credentials: 'include',
                }),
        },
    }
})
