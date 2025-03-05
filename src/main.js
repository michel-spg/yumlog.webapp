import "./assets/main.css";

import { createApp } from "vue";
import { initializeApp } from "firebase/app";
import { createPinia } from "pinia";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import App from "./App.vue";
import router from "./router";
import { useAuthStore } from "./stores/auth";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import "bootstrap-icons/font/bootstrap-icons.min.css";

const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
    projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
    storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
    appId: import.meta.env.VITE_FIREBASE_APP_ID
  }

// Initialize Firebase
initializeApp(firebaseConfig);

const app = createApp(App);
const pinia = createPinia();

app.use(pinia);
app.use(router);

// Initialize auth state
const auth = getAuth();
onAuthStateChanged(auth, (user) => {
  const authStore = useAuthStore();
  authStore.setUser(user);
});

app.mount("#app");
