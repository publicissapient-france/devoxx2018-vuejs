<template>
  <div class="recipe-full" v-if="recipe">
    <h2>Recette</h2>

    <recipe :data="recipe"></recipe>
    <div>
      <h4>Ingrédients</h4>

      <ul>
        <li v-for="ingredient in recipe.ingredients">{{ ingredient.label }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
  import Recipe from './Recipe.vue'
  import recipesService from '../services/recipes-services'

  export default {
    props: ['uid'],
    data () {
      return {
        recipe: {}
      }
    },
    created () {
      recipesService.getRecipe(this.uid)
        .then(recipe => {
          this.recipe = recipe
        })
    },
    components: {
      Recipe
    }
  }
</script>
