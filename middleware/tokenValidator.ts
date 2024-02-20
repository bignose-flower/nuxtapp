
/* localStorageを参照してidTokenを取得し、認証済みかどうかをチェックする
 認証済みの場合はURLに設定されたページに遷移する
*/

import { getCognitoTokenFromCookie } from "~/services/get-cognito-tokne-from-cookie";
import { refreshCognitoTokenThenSetCookie } from "~/services/refresh-cognito-token-then-set-cookie";
import { verifyCognitoToken } from "~/services/verify-cognito-tokens";
import type { CognitoToken } from "~/types/cognito-tokens";

// 認証必要パスと不要パスの設定
const unauthenticatedPaths: string[] = ["/"]
const authenticatedPaths: string[] = ["/home"]

// ゲストユーザが認証必要パスにアクセスするのをブロック
export default defineNuxtRouteMiddleware((to, from) => {
  // cookieにidTokenがない場合は、ログイン画面に遷移する
  
})