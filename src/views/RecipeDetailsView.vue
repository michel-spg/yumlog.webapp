<script setup>
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import RecipeItemDetails from '../components/RecipeItemDetails.vue';

const route = useRoute();

const recipe = ref({});

const fetchRecipe = async () => {
  const id = route.params.id;
  const response = await fetch(`http://localhost:3000/api/recipes/${id}`);
  recipe.value = await response.json();
  console.log(recipe.value);
};

onMounted(() => {
  fetchRecipe();
});
</script>

<template>
  <div class="container mt-3">
    <RecipeItemDetails :recipe="recipe" />
  </div>
</template>