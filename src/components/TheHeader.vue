<script setup>
const title = 'YumLog';
// create a slogan for yumlog
const slogan = 'Weil jedes Rezept ein Meisterwerk ist!';
</script>

<template>
  <div class="container mt-3 p-4 text-center bg-miami-vice text-white rounded">
    <h1>{{ title }}</h1>
    <figure>
      <blockquote class="blockquote">
        <p>{{ slogan }}</p>
      </blockquote>
      <figcaption class="blockquote-footer">
        <cite title="ChatGpt">ChatGpt</cite>
      </figcaption>
    </figure>
  </div>
</template>