import Vue from 'vue'
import Router from 'vue-router'
import Recipes from '../components/Recipes.vue'
import RecipeDetail from '../components/RecipeDetail.vue'

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
    }
    // TODO de la step 4 : ajouter la route vers le formulaire d'ajout de recette
  ]
})
