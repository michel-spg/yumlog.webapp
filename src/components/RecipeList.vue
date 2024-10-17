<script setup>
// import { RouterLink } from 'vue-router';
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
    <div class="col-md-4" v-for="recipe in recipes" :key="recipe.id">
      <div class="card h-100 mb-4 shadow-sm">
        <div class="card-body">
          <h5 class="card-title">{{ recipe.title }}</h5>
          <p class="card-text">{{ recipe.description }}</p>
          <p class="card-text">{{ recipe.duration }} Minuten</p>
          <!-- <RouterLink :to="{ name: 'RecipeDetails', params: { id: recipe.id } }" class="btn btn-primary">Details -->
          <!-- </RouterLink> -->
          <RouterLink :to="`/recipes/${recipe.id}`" class="btn btn-primary">Details
          </RouterLink>
        </div>
      </div>
    </div>
  </div>
</template>