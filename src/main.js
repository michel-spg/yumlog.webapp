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

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBM1_lJJuXTETS_G0Fd0Pt3myn1kYQLEGE",
  authDomain: "yumlog-50f87.firebaseapp.com",
  projectId: "yumlog-50f87",
  storageBucket: "yumlog-50f87.firebasestorage.app",
  messagingSenderId: "730170076140",
  appId: "1:730170076140:web:d48cbf898dcb4dd1dbeec9",
};

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
