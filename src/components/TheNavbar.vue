<template>
  <nav class="navbar navbar-expand-sm bg-miami-vice justify-content-center w-100" data-bs-theme="dark">
    <div class="container">
      <ul class="navbar-nav">
        <li class="nav-item">
          <RouterLink class="nav-link fs-4" to="/">Home</RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink class="nav-link fs-4" to="/recipes">Rezepte</RouterLink>
        </li>
      </ul>
      <ul v-if="!authStore.isAuthenticated" class="navbar-nav ms-auto">
        <li class="nav-item">
          <RouterLink class="nav-link fs-4" to="/signup">Register</RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink class="nav-link fs-4" to="/signin">Login</RouterLink>
        </li>
      </ul>
      <ul v-else class="navbar-nav ms-auto">
        <li class="nav-item">
          <span class="nav-link fs-4">{{ authStore.getUser?.email }}</span>
        </li>
        <li class="nav-item">
          <button class="nav-link fs-4 btn btn-link" @click="handleLogout">
            Logout
          </button>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
import { useAuthStore } from '../stores/auth'
import { useRouter } from 'vue-router'

export default {
  setup() {
    const authStore = useAuthStore()
    const router = useRouter()

    const handleLogout = async () => {
      try {
        await authStore.logout()
        router.push('/signin')
      } catch (error) {
        console.error('Logout failed:', error)
      }
    }

    return {
      authStore,
      handleLogout
    }
  }
}
</script>