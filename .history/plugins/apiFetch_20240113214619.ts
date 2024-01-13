export default defineNuxtPlugin(() => {
  return {
    provide: {
      apiFetch: (extension : string) => useFetch('http://localhost:8000/api/' + extension)
    }
  }
})