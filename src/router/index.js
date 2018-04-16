import Vue from 'vue'
import Router from 'vue-router'
import Recipes from '../components/Recipes.vue'
import RecipeDetail from '../components/RecipeDetail.vue'
import AddRecipe from '../components/AddRecipe.vue'
import Favorites from '../components/Favorites.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/recipes',
      name: 'recipes',
      component: Recipes,
      alias: '/'
    },
    {
      path: '/recipes/:uid',
      name: 'recipe',
      component: RecipeDetail,
      props: true
    },
    {
      path: '/add-recipe',
      name: 'add-recipe',
      component: AddRecipe
    },
    {
      path: '/favorites',
      name: 'favorites',
      component: Favorites
    }
  ]
})
