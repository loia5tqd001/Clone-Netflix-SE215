<template>
  <v-container fluid class="main">

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
import RowCarousel from '@/components/RowCarousel.vue';

import moviesRecentlyAdded from '@/assets/mock_data/getMoviesRecentlyAdded'

export default {
  components: {
    RowCarousel
  },
  data() {
    return {
      carousels: moviesRecentlyAdded
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


  .row-carousel {
    margin: 0 auto 2rem;
  }
</style>
