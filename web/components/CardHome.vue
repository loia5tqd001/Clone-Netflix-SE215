<template>
  <v-container>
    <v-card 
      class="card"
      nuxt to="/watching" 
      hover :img="srcImg"
      height="300"
    >

      <play-button class="play-btn align-self-center justify-self-center"></play-button>
      <v-card-title class="card-title justify-center headline font-weight-bold">{{ title }}</v-card-title>
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
  .card {
    transition: transform .2s;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .card:hover {
    transform: scale(1.02);
  }
  .card::before {
    content: '';
    background: rgba(0,0,0,.1);
    position: absolute;
    width: 100%;
    height: 100%;
    opacity: 1;
  }
  .card:hover::before {
    background: linear-gradient(180deg, rgba(0,0,0,0.05) 0%, rgba(0,0,0,.5) 100%);
  }
  .card .card-title {
    position: absolute;
    bottom: 0;
  }
  .card .play-btn,
  .card .card-title {
    opacity: 0;
    transition: opacity .2s;
  }
  .card:hover .play-btn,
  .card:hover .card-title {
    opacity: 1;
  }
</style>