let favorites = JSON.parse(window.localStorage.getItem('favorites')) || []
let localRecipes = []

function applyFavorites (recipes) {
  favorites.forEach(fuid => recipes.filter(r => r.uid === fuid).forEach(r => { r.favorite = true }))
  return recipes
}

function applyFavorite (recipe) {
  if (favorites.includes(recipe.uid)) {
    recipe.favorite = true;
  }

  return recipe;
}

function findFavorites () {
  return getRecipes()
    .then(recipes => recipes.filter(recipe => recipe.favorite));
}

function addFavorite (recipe) {
  favorites.push(recipe.uid)
  window.localStorage.setItem('favorites', JSON.stringify(favorites))
}

function removeFavorite (recipe) {
  const newFavorites = favorites.filter(favorite => favorite !== recipe.uid)
  window.localStorage.setItem('favorites', JSON.stringify(newFavorites))
  favorites = JSON.parse(window.localStorage.getItem('favorites'))
}

function getRecipes () {
  return window
    .fetch('https://bhvb4ch330.execute-api.eu-west-1.amazonaws.com/dev/recipes')
    .then(response => response.json())
    .then(recipes => [...recipes, ...localRecipes])
    .then(applyFavorites)
}

function getRecipe (uid) {
  const findLocalRecipes = localRecipes
    .filter(recipe => recipe.uid === uid)
    .map(recipe => applyFavorite(recipe))

  if (findLocalRecipes.length > 0) {
    return new Promise(resolve => resolve(findLocalRecipes[0]))
  }

  return window
    .fetch(`https://bhvb4ch330.execute-api.eu-west-1.amazonaws.com/dev/recipes/${uid}`)
    .then(response => response.json())
    .then(recipe => applyFavorite(recipe))
}

function addRecipe (recipe) {
  recipe.uid = uid()
  localRecipes.push(recipe)

  return new Promise(resolve => resolve());
}

function uid () {
  return Math.floor((1 + Math.random()) * 0x100000000)
    .toString(16)
}

export default {
  getRecipes,
  getRecipe,
  addFavorite,
  removeFavorite,
  findFavorites,
  addRecipe
}
