<script setup lang="ts">
import "@aws-amplify/ui-vue/styles.css";
import { fetchAuthSession } from "aws-amplify/auth";

import { ref, onMounted } from 'vue';

const responseData = ref();

const sendRequest = async () => {
    // JWTの取得
    const { accessToken, idToken } = (await fetchAuthSession()).tokens ?? {};
    const headers = {
        Authorization: `Bearer ${idToken}`,
    };

    try{
        const response = await $fetch("http://localhost:8080/api/hello",{headers})
        responseData.value = response
    }catch (error) {
        console.error('Error sending request ', error)
    }
}

const back = () => {
    window.history.back()
}

onMounted(() => {
    sendRequest()
})
</script>

<template>
    <h1>{{ responseData }}</h1>
    <button @click="back">戻る</button>
</template>