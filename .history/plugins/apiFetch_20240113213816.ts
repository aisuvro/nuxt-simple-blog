export default defineNuxtPlugin(() => {
  return {
    provide: {
      apiFetch: () => $fetch.create({
        baseURL: process.env.API_URL,
      })
    }
  }
})