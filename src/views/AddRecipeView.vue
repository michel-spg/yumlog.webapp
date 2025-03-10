<script setup>
import { computed, ref } from 'vue';

const title = ref('');
const description = ref('');
const duration = ref('');
const instructions = ref('');
const ingredients = ref([{ name: '', amount: '' }]);
const imageFile = ref(null); // Holds the image file
const successMessage = ref(''); // Holds the success message
const isFormVisible = ref(true); // Controls form visibility
const startValidation = ref(false);

// Add a new ingredient row
const addIngredient = () => {
  ingredients.value.push({ name: '', amount: '' });
};

// Remove an ingredient row
const removeIngredient = (index) => {
  ingredients.value.splice(index, 1);
};

// Handle image selection
const handleImageUpload = (event) => {
  imageFile.value = event.target.files[0];
};

// Form validation
const isValidTitle = computed(() => title.value.length > 2);

const addRecipe = async () => {
  startValidation.value = true;// Start validation
  console.log(isValidTitle.value);

  if (isValidTitle.value) {
    const formData = new FormData();

    formData.append('title', title.value);
    formData.append('description', description.value);
    formData.append('duration', duration.value);
    formData.append('instructions', instructions.value);
    formData.append('image', imageFile.value);

    ingredients.value.forEach((ingredient, index) => {
      formData.append(`ingredients[${index}][name]`, ingredient.name);
      formData.append(`ingredients[${index}][amount]`, ingredient.amount);
    });

    const response = await fetch('http://localhost:3000/api/recipes', {
      method: 'POST',
      body: formData,
    });

    if (response.ok) {
      // Show success message and hide form
      successMessage.value = 'Rezept hinzugefügt!';
      isFormVisible.value = false; // Hide the form
    }
  } else {
    isFormVisible.value = true; // Show the form
    console.log('Form validation failed');
  }
};
</script>

<template>
  <div class="container my-3">
    <div class="row">
      <div class="col-md-6 offset-md-3">
        <!-- Success Message -->
        <div v-if="successMessage" class="alert alert-success text-center">
          {{ successMessage }}
        </div>
        <!-- Form add recipe -->
        <form v-if="isFormVisible" @submit.prevent="addRecipe">
          <div class="mb-3">
            <label for="title" class="form-label">Titel</label>
            <input type="text" class="form-control" id="title" v-model="title" required />
            <p v-if="startValidation && !isValidTitle" class="text-danger">Der Titel muss mindestens 3 Zeichen lang
              sein.</p>
          </div>

          <div class="mb-3">
            <label for="description" class="form-label">Beschreibung</label>
            <textarea class="form-control" id="description" v-model="description" required></textarea>
          </div>

          <div class="mb-3">
            <label for="duration" class="form-label">Dauer (in Minuten)</label>
            <input type="number" class="form-control" id="duration" v-model="duration" required />
          </div>

          <div class="mb-3">
            <label for="instructions" class="form-label">Zubereitung</label>
            <textarea class="form-control" id="instructions" v-model="instructions" required></textarea>
          </div>

          <!-- Image Upload Field -->
          <div class="mb-3">
            <label for="image" class="form-label">Bild hochladen</label>
            <input type="file" class="form-control" id="image" @change="handleImageUpload" accept="image/*" />
          </div>

          <!-- Ingredients Section -->
          <div class="mb-3">
            <label class="form-label">Zutaten</label>
            <div v-for="(ingredient, index) in ingredients" :key="index" class="input-group mb-2">
              <input type="text" class="form-control" placeholder="Name" v-model="ingredient.name" required />
              <input type="text" class="form-control" placeholder="Menge" v-model="ingredient.amount" required />
              <button type="button" class="btn btn-danger" @click="removeIngredient(index)"
                v-if="ingredients.length > 1">
                &times;
              </button>
            </div>
            <button type="button" class="btn btn-secondary mt-2" @click="addIngredient">
              + Zutat hinzufügen
            </button>
          </div>
          <button type="submit" class="btn btn-primary">Speichern</button>
        </form>
      </div>
    </div>
  </div>
</template>
