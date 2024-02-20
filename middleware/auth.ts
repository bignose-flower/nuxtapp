import { useAuthenticator } from "@aws-amplify/ui-vue";

const unauthenticatedPaths: string[] = ["/"]
const authenticatedPaths: string[] = ["/home"]

const url = process.env.APP_BASE_URL
const singin: string = `${url}/`;
const home: string = `${url}/home`;

export default defineNuxtRouteMiddleware(async (to, from) => {
    // if(process.client){
    //   console.log("to path : " + to.path);
  
    //   // Cookieからtokenが取得できないかつ、認証必須画面アクセスの場合ログイン画面へ
    //   const {}
    //   if(!!_hasIdToken && authenticatedPaths.includes(to.path)){ 
    //     return navigateTo('/')
    //   }
  
    //   // // idTokenの検証を行う
    //   try{
    //     await verifyCognitoToken();
    //   }catch(error){
    //     console.log("ID Token is not valid", error);
  
    //     // refreshTokenを使ってtoken再生成、idToken/accessTokenをCookieにセット
        
    //   }

    //   // それ以外の場合はログインページに遷移
    //   throw createError({ statusCode: 404, statusMessage: 'Page Not Fount'})
    // }
  })