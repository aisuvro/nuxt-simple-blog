export default defineNuxtPlugin(() => {
  return {
    provide: {
      hello: () => process.env.API_URL
    }
  }
})