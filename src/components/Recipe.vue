<template>
  <div class="recipe">
    <h3>
      <router-link :to="{ name: 'recipe', params: { uid : data.uid }}">{{ data.nom }}</router-link>
    </h3>
    <div class="details">
      <div class="info">
        <img :src="data.img_small"/>
        <div>Durée : {{ data.cuisson }} minutes</div>
      </div>
      <div class="story">
        <p class="description">{{ data.histoire }}</p>
        <!-- TODO étape 5 : utiliser le composant 'Star' qui permet d'ajouter la recette en favoris -->
      </div>
    </div>
  </div>
</template>

<script>
  // TODO étape 5 : importer composant Star
  // TODO étape 5 : importer le recipes service

  export default {
    props: ['data']
    // TODO étape 5 : gérer le changement d'état du composant Star via l'événement onChange
    // en ajoutant ou retirant le favori
  }
</script>

<style scoped lang="scss">
  .recipe {
    background: #eee;
    padding: 10px;
    border-radius: 10px;
    margin-bottom: 20px;
    box-shadow: 0 8px 13px 0 #aeadad;

    .details {
      display: flex;

      .info {
        text-align: center;
        margin-right: 10px;
        img {
          width: 160px;
        }
      }

      .story {
        flex: 1;
        display: flex;
        flex-direction: column;
        text-align: justify;

        .description {
          flex: 1;
          margin: 0;
        }

        .favorite {
          align-self: flex-end;
        }
      }
    }
  }
</style>
