<script setup>
import RecipeList from '../components/RecipeList.vue'
import { recipes } from '@/assets/temp-data'
// import { recipes } from '../assets/temp-data'
</script>

<template>
  <div class="container mt-3">
    <RecipeList :recipes="recipes" />
  </div>
</template>