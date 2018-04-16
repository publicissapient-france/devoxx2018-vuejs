<template>
  <div>
    <div class="title">
      <h2>Mes Favoris</h2>
      <span>favorites: {{favorites.length}}</span>
    </div>

    <recipe :data="recipe" v-for="recipe in favorites" :key="recipe.uid" @onFavorite="loadFavorites()"></recipe>
  </div>
</template>

<script>
  import recipesService from '../services/recipes-services'
  import Recipe from './Recipe.vue'

  export default {
    name: 'hello',
    data () {
      return {
        favorites: [],
        msg: 'Welcome to Your Vue.js App'
      }
    },
    created () {
      this.loadFavorites()
    },
    methods: {
      loadFavorites () {
        recipesService.findFavorites()
          .then(favorites => {
            this.favorites = favorites
          });
      }
    },
    components: {Recipe}
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
