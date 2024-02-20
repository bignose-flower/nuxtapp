<script setup lang="ts">
definePageMeta({
    // middleware: ['authenticated','session']
})
</script>

<template>
    <Header>
    </Header>
    <Details>
        <NuxtLink class="sample-button" to="/home">To Home</NuxtLink>
    </Details>
    <Footer />
</template>

<style>
.sample-button{
    width: 200px;
    display: inline-block;
    padding: 10px 20px;
    font-size: 16px;
    font-weight: bold;
    text-align: center;
    text-decoration: none;
    cursor: pointer;
    border: 2px solid #3498db;
    border-radius: 5px;
    color: #ffffff;
    background-color: #3498db;
    transition: background-color 0.3s ease, color 0.3s ease;
}
</style>