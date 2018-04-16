function getRecipe (uid) {
  return window
    .fetch(`https://bhvb4ch330.execute-api.eu-west-1.amazonaws.com/dev/recipes/${uid}`)
    .then(response => response.json())
}

function getRecipes () {
  return window
    .fetch('https://bhvb4ch330.execute-api.eu-west-1.amazonaws.com/dev/recipes')
    .then(response => response.json())
}

export default {
  getRecipe,
  getRecipes
}
