<template>
  <v-container fluid class="main">

    <WatchingDetail class="watching-detail"></WatchingDetail>

    <ReviewOnMovie></ReviewOnMovie>

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
import ReviewOnMovie from '@/components/ReviewOnMovie.vue';


import moviesRelatedWatching from '@/assets/mock_data/getMoviesRelatedWatching'

export default {
  components: {
    WatchingDetail,
    RowCarousel,
    ReviewOnMovie
  },
  data() {
    return {
      carousel: moviesRelatedWatching
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
