import { getCurrentUser } from '@aws-amplify/auth'

export default defineNuxtRouteMiddleware(async (to, from) => {
    if(['/login'].includes(to.path)) { return; }
    try{
        await getCurrentUser();
    }catch(error){
        console.error(error)
        return navigateTo('/login')
    }
});