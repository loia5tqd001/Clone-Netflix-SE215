<template>
  <v-container>
    <v-card 
      class="card"
      nuxt to="/watching" 
      hover :img="srcImg"
      height="300"
    >
    <div class="overlay">
      <play-button class="play-btn align-self-center justify-self-center"></play-button>
      <v-card-title class="card-title justify-center headline font-weight-bold">{{ title }}</v-card-title>
      <v-card-subtitle class="card-title justify-center headline font-weight-bold">{{ title }}</v-card-subtitle>
      <v-card-text class="card-title justify-center headline font-weight-bold">{{ title }}</v-card-text>
    </div>

    </v-card>
  </v-container>
</template>

<script>
import PlayButton from '~/components/PlayButton'

export default {
  components: {
    PlayButton
  },
  props: {
    srcImg: String,
    title: String,
  }
}
</script>

<style scoped>
  .card, .overlay {
    transition: transform .2s;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 500px;
  }
  .overlay {
    /* background: rgba(0,0,0,.1); */
    background: linear-gradient(180deg, rgba(0,0,0,0.05) 0%, rgba(0,0,0,.5) 100%);
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
  }
  .card:hover, 
  .overlay:hover {
    transform: scale(1.02);
  }
  .card .overlay {
    opacity: 0;
    transition: opacity .2s;
  }
  .card:hover .overlay {
    opacity: 1;
  }
</style>