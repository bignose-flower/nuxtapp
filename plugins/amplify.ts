import { Amplify } from "aws-amplify"
import amplifyconfig from "../src/amplifyconfiguration.json"
import { cognitoUserPoolsTokenProvider } from "aws-amplify/auth/cognito"
import { CookieStorage, I18n } from "aws-amplify/utils"
import { translations } from "@aws-amplify/ui-vue"

export default defineNuxtPlugin(() => {
  Amplify.configure(amplifyconfig)
  cognitoUserPoolsTokenProvider.setKeyValueStorage(new CookieStorage());

  I18n.putVocabularies(translations)
  I18n.setLanguage('ja');

  I18n.putVocabularies({
      ja: {
        'Sign in': 'ログインする',
        'Sign In': 'ログイン',
        'Sign out': 'サインアウトする',
        'Sign Out': 'サインアウト',
        'Sign Up': '会員登録する',
        'Create Account': '会員登録',
        'Email': 'メールアドレス',
        'Enter your Username': 'メールアドレスを入力してください',
        'Enter your Password': 'パスワードを入力してください',
        'Password': 'パスワード',
        'Please confirm your Password': '確認用パスワードを入力してください',
        'Nickname': 'ニックネーム',
        'Enter your Nickname': 'ニックネームを入力してください',
        'Your passwords must match': 'パスワードを合致させてください',
        'Invalid verification code provided, please try again.': '確認コードに誤りがあるため、再度お試しください',
        'Back to Sign In': 'ログイン画面に戻る',
        'Cannot reset password for the user as there is no registered/verified email or phone_number': '会員登録されていないためパスワードリセットできません',
        'There is already a signed in user.' : '既にログイン済みのユーザです',
        'Forgot Password': 'パスワードを忘れた場合'
      },
    });
})