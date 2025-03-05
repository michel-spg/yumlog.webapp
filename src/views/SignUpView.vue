<template>
    <div class="register-container">
      <h2>Account erstellen</h2>
      <form @submit.prevent="handleRegister" class="register-form">
        <div class="form-group">
          <label for="email">Email</label>
          <input
            type="email"
            id="email"
            v-model="email"
            required
            placeholder="Deine E-Mail-Adresse"
          />
        </div>
        <div class="form-group">
          <label for="password">Passwort</label>
          <input
            type="password"
            id="password"
            v-model="password"
            required
            placeholder="Dein Passwort"
          />
        </div>
        <div class="form-group">
          <label for="confirmPassword">Passwort bestätigen</label>
          <input
            type="password"
            id="confirmPassword"
            v-model="confirmPassword"
            required
            placeholder="Confirm your password"
          />
        </div>
        <button type="submit" class="register-button">Sign Up</button>
        
        <div class="divider">
          <span>or</span>
        </div>
        
        <button 
          type="button" 
          class="google-button"
          @click="handleGoogleSignIn"
        >
          <img src="https://fonts.gstatic.com/s/i/productlogos/googleg/v6/24px.svg" alt="Google logo" />
          Continue with Google
        </button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    name: 'SignUpView',
    data() {
      return {
        email: '',
        password: '',
        confirmPassword: ''
      }
    },
    methods: {
      handleRegister() {
        if (this.password !== this.confirmPassword) {
          alert('Passwords do not match!')
          return
        }
        // TODO: Implement registration logic here
        console.log('Registration attempted with:', this.email)
      },
      handleGoogleSignIn() {
        // TODO: Implement Google Sign-In logic here
        console.log('Google Sign-In attempted')
      }
    }
  }
  </script> 