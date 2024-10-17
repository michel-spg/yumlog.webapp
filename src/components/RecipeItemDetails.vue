<script setup>
import { useRoute } from 'vue-router';
import { ref, onMounted } from 'vue';
import { recipes } from '@/assets/temp-data';

const recipeId = ref(-1);
const recipe = ref({});

const route = useRoute();

const fetchRecipe = () => {
  const id = route.params.id;
  recipe.value = recipes.find(recipe => recipe.id === id);
};

onMounted(() => {
  fetchRecipe();
});
</script>

<template>
  <div class="row">
    <div class="col-md-6 offset-md-3">
      <div class="card h-100">
        <!-- <img class="card-img-top" :src="recipe?.imageUrl" alt="Card image" style="width:100%"> -->
        <div class="card-body">
          <h4 class="card-title">{{ recipe?.title }}</h4>
          <p class="card-text">{{ recipe?.description }}</p>
          <p class="card-text"><strong>Dauer:</strong> {{ recipe?.duration }} minutes</p>
          <!-- add the ingredients -->
          <p class="card-text"><strong>Zutaten:</strong></p>
          <ul class="list-group">
            <li class="list-group-item" v-for="ingredient in recipe?.ingredients" :key="ingredient">
              <div class="d-flex justify-content-start">
                <div class="p-2 w-25">{{ ingredient.name }}</div>
                <div class="p-2">{{ ingredient.menge }}</div>
              </div>
            </li>
          </ul>
          <!-- add the instruction -->
          <p class="card-text"><strong>Zubereitung:</strong></p>
          <p class="card-text">{{ recipe?.instructions }}</p>
        </div>
      </div>
    </div>
  </div>
</template>