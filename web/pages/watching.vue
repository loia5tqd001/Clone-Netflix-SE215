<template>
  <v-container fluid class="main">

    <WatchingDetail @goToReview="goToReview" class="watching-detail"></WatchingDetail>

      <div id="reviews" ref="reviews">
        <h3>Featured Reviews</h3>
        <div class="reviews">
          <ReviewOnMovie></ReviewOnMovie>
          <ReviewOnMovie></ReviewOnMovie>
          <ReviewOnMovie></ReviewOnMovie>
        </div>
      </div>

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
  },
  methods: {
    goToReview() {
      this.$refs.reviews.scrollIntoView({ behavior: 'smooth' })
    }
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

  #reviews {
    margin-top: 3em;
    h3 {
      margin-left: .5em;
    }
  }
  
  .reviews {
    display: flex;
    overflow-x: auto;
    overflow-y: hidden;
    > * {
      flex: 0 0 32%;
    }
  }

  .row-carousel {
    margin: 0 auto 2rem;
  }
</style>
