<template>
  <v-container fluid class="main">

    <MainCarousel class="main-carousel"></MainCarousel>

    <v-container fluid>
      <RowCarousel v-for="carousel in carousels" :key="carousel.header"
        class="row-carousel"
        :header="carousel.header"
        :movies="carousel.movies"
      >
      </RowCarousel>
    </v-container>

  </v-container>
</template>

<script>
import MainCarousel from '@/components/MainCarousel.vue';
import RowCarousel from '@/components/RowCarousel.vue';

import moviesHome from '@/assets/mock_data/getMoviesHome'

export default {
  components: {
    MainCarousel,
    RowCarousel
  },
  data() {
    return {
      carousels: moviesHome
    };
  }
};
</script>

<style lang="scss" scoped>
  .main {
    padding: 0;

    &::before {
      position: absolute;
      top: 0; left: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(to bottom #000c, #000a, #0000);
    }
  }
  
  .main-carousel {
    margin: 0;
    padding: 3rem 0 6rem;
  }

  .row-carousel {
    margin: 0 auto 2rem;
  }
</style>
