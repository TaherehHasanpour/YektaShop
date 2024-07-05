export default defineNuxtPlugin(nuxtApp => {
    const authStor = userAuthStor();
    authStor.SetCurrentUserValue();
})