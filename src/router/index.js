import Vue from 'vue'
import Router from 'vue-router'
import Recipes from '../components/Recipes.vue'
import RecipeDetail from '../components/RecipeDetail.vue'
import AddRecipe from '../components/AddRecipe.vue'

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
    }
    // TODO de la step 5 : ajouter la route vers la liste des favoris
  ]
})
