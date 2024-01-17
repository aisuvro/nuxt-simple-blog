export default defineNuxtRouteMiddleware((to, from) => {
    const auth = useCookie('auth').value ? true : false
    if (auth === true && to.path !== '/account') {
        return navigateTo('/account')
    }
})
