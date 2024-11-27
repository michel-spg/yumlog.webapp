<script setup>
// import { RouterLink } from 'vue-router';
import RecipeItem from './RecipeItem.vue';
defineProps(
  {
    recipes: {
      type: Array,
      required: true
    }
  }
);
</script>

<template>
  <div class="row">
    <div class="col-md-4 mb-3" v-for="recipe in recipes" :key="recipe.id">
      <RecipeItem :recipe="recipe" />
    </div>
  </div>
</template>