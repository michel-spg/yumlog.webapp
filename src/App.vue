<script setup>
import { RouterLink, RouterView } from 'vue-router'
import TheHeader from './components/TheHeader.vue';
import TheNavbar from './components/TheNavbar.vue';
</script>

<template>
  <header>
    <TheNavbar />
    <TheHeader />
  </header>

  <RouterView />
</template>