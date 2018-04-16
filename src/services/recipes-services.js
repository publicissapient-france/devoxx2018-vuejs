let localRecipes = []

function getRecipe (uid) {
  const findLocalRecipes = localRecipes
    .filter(recipe => recipe.uid === uid)

  if (findLocalRecipes.length > 0) {
    return new Promise(resolve => resolve(findLocalRecipes[0]))
  }

  return window
    .fetch(`https://bhvb4ch330.execute-api.eu-west-1.amazonaws.com/dev/recipes/${uid}`)
    .then(response => response.json())
}

function getRecipes () {
  return window
    .fetch('https://bhvb4ch330.execute-api.eu-west-1.amazonaws.com/dev/recipes')
    .then(response => response.json())
    .then(recipes => [...recipes, ...localRecipes])
}

function addRecipe (recipe) {
  recipe.uid = uid()
  localRecipes.push(recipe)

  return new Promise(resolve => resolve())
}

function uid () {
  return Math.floor((1 + Math.random()) * 0x100000000)
    .toString(16)
}

export default {
  getRecipe,
  getRecipes,
  addRecipe
}
