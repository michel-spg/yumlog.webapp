import { defineStore } from "pinia";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
} from "firebase/auth";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    user: null,
    loading: false,
    error: null,
  }),

  getters: {
    isAuthenticated: (state) => !!state.user,
    getUser: (state) => state.user,
    getError: (state) => state.error,
  },

  actions: {
    async registerWithEmail(email, password) {
      this.loading = true;
      this.error = null;
      try {
        const auth = getAuth();
        const { user } = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );
        this.user = user;
        return user;
      } catch (error) {
        this.error = error.message;
        throw error;
      } finally {
        this.loading = false;
      }
    },

    async loginWithEmail(email, password) {
      this.loading = true;
      this.error = null;
      try {
        const auth = getAuth();
        const { user } = await signInWithEmailAndPassword(
          auth,
          email,
          password
        );
        this.user = user;
        return user;
      } catch (error) {
        this.error = error.message;
        throw error;
      } finally {
        this.loading = false;
      }
    },

    async loginWithGoogle() {
      this.loading = true;
      this.error = null;
      try {
        const auth = getAuth();
        const provider = new GoogleAuthProvider();
        const { user } = await signInWithPopup(auth, provider);
        this.user = user;
        return user;
      } catch (error) {
        this.error = error.message;
        throw error;
      } finally {
        this.loading = false;
      }
    },

    async logout() {
      this.loading = true;
      this.error = null;
      try {
        const auth = getAuth();
        await signOut(auth);
        this.user = null;
      } catch (error) {
        this.error = error.message;
        throw error;
      } finally {
        this.loading = false;
      }
    },

    setUser(user) {
      this.user = user;
    },
  },
});
