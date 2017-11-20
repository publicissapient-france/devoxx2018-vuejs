<template>
  <div class="recipe">
    <h3>
      <!-- TODO insérer le nom -->
    </h3>
    <div class="details">
      <div class="info">
        <!--- TODO insérer l'image --->
        <div><!-- TODO insérer le temps de cuisson --></div>
      </div>
      <div class="story">
        <p class="description"><!-- TODO insérer l'histoire --></p>
      </div>
    </div>
  </div>
</template>

<script>
  // TODO écrire le code du composant
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
