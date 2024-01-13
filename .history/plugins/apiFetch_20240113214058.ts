export default defineNuxtPlugin(() => {
  return {
    provide: {
      apiFetch: () => $fetch.create({
        baseURL: 'http://localhost:8000/api/'
      })
    }
  }
})