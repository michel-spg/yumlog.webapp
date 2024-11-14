<script setup>
defineProps(
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
  <div class="row">
    <div class="col-md-8 offset-md-2">
      <div class="card h-100">
        <img :src="getImageUrl(recipe?.imageUrl)" class="img-fluid rounded" :alt="recipe?.title">
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
                <div class="p-2">{{ ingredient.amount }}</div>
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