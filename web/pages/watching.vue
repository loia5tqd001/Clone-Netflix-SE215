<template>
  <v-container fluid class="main">

    <WatchingDetail class="watching-detail"></WatchingDetail>

    <v-container fluid>
      <RowCarousel 
        class="row-carousel"
        :header="carousel.header"
        :movies="carousel.movies"
      >
      </RowCarousel>
    </v-container>


  </v-container>
</template>

<script>
import WatchingDetail from '@/components/WatchingDetail.vue';
import RowCarousel from '@/components/RowCarousel.vue';

import { watchingCarousel } from '@/assets/mock-data'

export default {
  components: {
    WatchingDetail,
    RowCarousel
  },
  data() {
    return {
      carousel: watchingCarousel
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

  .watching-detail {
    height: 90vh;
  }
  
  

  .row-carousel {
    margin: 0 auto 2rem;
  }
</style>
