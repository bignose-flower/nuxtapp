import { fetchAuthSession  } from '@aws-amplify/auth'

// accessTokenとidTokenを取得する
export default defineNuxtRouteMiddleware(async (to, from) => {
    if(['/login]'].includes(to.path)) { return; }
    try{
        const { accessToken, idToken } = (await fetchAuthSession()).tokens ?? {};
    }catch(error){
        console.error('auth token is missing...')
        console.error(error);
        return navigateTo('/login');
    }
});