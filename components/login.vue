<template>
    <div class="form-wrapper">
      <h1><b>Sign In</b></h1>
      <div>
        <div>{{ errorMsg }}</div>
        <div class="form-item">
          <label for="username"></label>
          <input type="text" name="username" required="required" placeholder="username" v-model="username">
        </div>
        <div class="form-item">
          <label for="password"></label>
          <input type="password" name="password" required="required" placeholder="Password" v-model="password">
        </div>
        <div class="button-panel">
          <button class="signin-button" title="Sign In" @click="_signIn">Sign In</button>
        </div>
      </div>
      <!-- <div class="form-footer">
        <nuxt-link to="/signup">Create an account</nuxt-link>
      </div> -->
    </div>
  </template>
  
<script setup lang="ts">
import { signIn, type SignInInput, getCurrentUser } from '@aws-amplify/auth';

const username: Ref<string> = ref('');
const password: Ref<string> = ref('');
const errorMsg: Ref<string> = ref('');

const _signIn = async () => {
  const signinInput: SignInInput = {
    username: username.value, 
    password: password.value
  };
  try{
    const { isSignedIn, nextStep } = await signIn(signinInput);
    await getCurrentUser();
    if(isSignedIn){
      navigateTo('/');
    }
  }catch(error: any) {
      errorMsg.value = "認証に失敗しました。";
      console.error('error signing in:', error.code + ":" + error.message + ":" + error.name);
      return;
  }
}
        
</script>