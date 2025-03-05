<script setup>
</script>

<template>
  <main>
    <!-- Hero Section -->
    <section class="mt-3 text-center d-flex align-items-center">
      <div class="container">
        <h1 class="display-3 fw-bold">Willkommen bei YumLog</h1>
        <p class="lead">Entdecke, speichere und teile deine Lieblingsrezepte.</p>
        <RouterLink to="/recipes" class="btn btn-lg btn-primary">Rezepte entdecken</RouterLink>
      </div>
    </section>

    <!-- Features Section -->
    <section class="container my-3">
      <div class="row text-center">
        <div class="col-md-4">
          <i class="bi bi-search-heart fs-1 text-primary"></i>
          <h3>Rezepte entdecken</h3>
          <p>Durchstöbere eine umfangreiche Sammlung köstlicher Rezepte.</p>
        </div>
        <div class="col-md-4">
          <i class="bi bi-bookmark-heart fs-1 text-success"></i>
          <h3>Favoriten speichern</h3>
          <p>Speichere deine Lieblingsrezepte und greife jederzeit darauf zu.</p>
        </div>
        <div class="col-md-4">
          <i class="bi bi-pencil-square fs-1 text-danger"></i>
          <h3>Rezepte teilen</h3>
          <p>Lade deine eigenen Rezepte hoch und teile sie mit der Community.</p>
        </div>
      </div>
    </section>

    <!-- Random Recipe Section -->
    <!-- TODO: Random Recipe Section -->
  </main>
</template>

