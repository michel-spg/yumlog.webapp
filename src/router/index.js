import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import NotFoundView from "../views/NotFoundView.vue";
import RecipesView from "@/views/RecipesView.vue";
import RecipeDetailsView from "@/views/RecipeDetailsView.vue";
import AddRecipeView from "@/views/AddRecipeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/recipes",
      name: "recipes",
      component: RecipesView,
    },
    {
      path: "/recipes/:id",
      name: "recipeDetails",
      component: RecipeDetailsView,
    },
    {
      path: "/recipes/add",
      name: "addrecipe",
      component: AddRecipeView,
    },
    {
      path: "/:catchAll(.*)",
      component: NotFoundView,
    },
  ],
});

export default router;
