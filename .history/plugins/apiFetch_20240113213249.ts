export default defineNuxtPlugin(() => {
  return {
    provide: {
      API_URL: () => process.env.API_URL
    }
  }
})