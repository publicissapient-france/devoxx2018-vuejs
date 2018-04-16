<template>
  <div class="recipe-full" v-if="recipe">
    <h2>Recette</h2>

    <recipe :data="recipe"></recipe>
    <div class="details">
      <img class="img-big" :src="recipe.img_big"/>

      <div class="ingredients">
        <h4>Ingrédients</h4>

        <ul>
          <li v-for="ingredient in recipe.ingredients" :key="ingredient.label">{{ ingredient.label }}</li>
        </ul>
      </div>
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

<style scoped lang="scss">
  .details {
    position: relative;

    .img-big {
      text-align: center;
      position: absolute;
      z-index: 1;
      opacity: 0.3;
    }

    .ingredients {
      padding: 10px;

      h4 {
        margin-top: 0;
      }
    }
  }
</style>
