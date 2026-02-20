<script setup>
defineProps (
  {
    recipe: {
      type: Object,
      required: true
    }
  }
);

const getImageUrl = (imageUrl) => {
  const backendUrl = "http://localhost:3000";
  if (!imageUrl) {
    return `${backendUrl}/images/placeholder.png`;
  }
  return `${backendUrl}${imageUrl}`;
};
</script>

<template>
  <div class="card h-100 mb-4 shadow-sm">
    <img :src="getImageUrl(recipe?.imageUrl)" class="img-fluid rounded" :alt="recipe?.title">
    <div data-test="recipe-item" class="card-body">
      <h5 data-test="recipe-title" class="card-title">{{ recipe.title }}</h5>
      <p class="card-text">{{ recipe.description }}</p>
      <p class="card-text">{{ recipe.duration }} Minuten</p>
      <!-- <RouterLink :to="{ name: 'RecipeDetails', params: { id: recipe.id } }" class="btn btn-primary">Details -->
      <!-- </RouterLink> -->
      <RouterLink :to="`/recipes/${recipe.id}`" data-test="details-button" class="btn btn-primary">Details
      </RouterLink>
    </div>
  </div>
</template>