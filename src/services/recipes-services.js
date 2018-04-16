function getRecipe () {
  return {
    uid: 'DFG024543TGJVZ2139RGKG',
    nom: 'Crêpes aux trois sucres',
    type: 'Végétarien',
    cuisson: 20,
    ingredients: [
      {label: '250 g de farine'},
      {label: '4 œufs'},
      {label: '50 cl de lait'},
      {label: '50 g de beurre fondu'},
      {label: '85 g de sucre en poudre'},
      {label: '10 cl de sirop de sucre de canne'},
      {label: '5 sachets de sucre vanillé'},
      {label: '(Bourbon de préférence) 15 cl de Cognac'},
      {label: '1 pincée de sel'},
      {label: '250 g de farine'}
    ],
    histoire: `Spécialité culinaire bretonne la crèpe se constitue d'une fine couche de pâte durcie dans la poêle que l'on déguste pour le repas ou à l'heure du goûter. Sa pâte, à base de farine de blé ou de sarrasin, de lait et d'oeuf est cuite sur les deux côtés puis roulée ou pliée en 4 selon les envies. La crêpe Suzette est une recette incontournable française imaginée par Auguste Escoffier. En Bretagne, la crêpe est le plus souvent connue sous le nom de galette. Sa pâte est réalisée avec de la farine de sarrasin et la crêpe se garnit de fromage, jambon, sucre ou pâte à tartiner...`,
    img_small: 'https://images.marmitoncdn.org/recipephotos/multiphoto/83/83f69e59-8663-4d27-bb84-63d8a43066ab_tn-80x80.jpg',
    img_big: 'https://image.afcdn.com/recipe/20170404/49483_w420h344c1cx3024cy2016.jpg'
  }
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
