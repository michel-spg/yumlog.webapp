<script setup>
import { onMounted, ref } from 'vue';
import RecipeList from '../components/RecipeList.vue';

const recipes = ref([]); // reactive variable

async function fetchRecipes() {
  const response = await fetch('http://localhost:3000/api/recipes');
  recipes.value = await response.json();
  console.log(recipes.value);
}

onMounted(() => {
  fetchRecipes();
});

</script>

<template>
  <div class="container mt-3">
    <RecipeList :recipes="recipes" />
  </div>
</template>