<template>
  <div class="reviews-container">
    <div class="reviews-reviews">
      <div class="--wrapper">
        <h2>Reviews</h2>
  
        <ReviewCard class="reviews-review-card"></ReviewCard>
        <ReviewCard class="reviews-review-card"></ReviewCard>
        <ReviewCard class="reviews-review-card"></ReviewCard>
      </div>

    </div>

    <div class="reviews-new-trailers">
      <h2 class="--title">New Trailers</h2>

      <ul class="reviews-list-trailers">
        <li v-for="trailer in trailers" :key="trailer.id">
          <MovieCard :movie="trailer"></MovieCard>
        </li>
      </ul>
    </div>

  </div>
</template>

<script>
import MovieCard from '@/components/MovieCard.vue';
import ReviewCard from '@/components/ReviewCard.vue';
import { history } from '@/assets/mock-data';

export default {
  components: {
    MovieCard,
    ReviewCard,
  },
  data() {
    return {
      trailers: this.getMovies()
    }
  },
  methods: {
    getMovies() {
      return history.map(movie => ({
        id: movie.imgUrl + new Date(),
        ...movie
      })).slice(0, 10)
    },
  }
}
</script>

<style lang="scss" scoped>
  .reviews-container {
    display: flex;
    height: 100%;
    margin: 1.5rem auto;
    max-width: 1300px;
  }

  h2 {
    margin: -1rem 0 1rem;
  }

  .reviews-reviews {
    flex: 1;
    
    .--wrapper {
      margin: 1rem auto;
      max-width: 650px;
    }

    .reviews-review-card {
      margin: 0 auto 5rem;
    }
  }

  .reviews-new-trailers {
    margin: 0 5rem;

    .--title {
      margin: 0 auto 1rem;
    }

    .reviews-list-trailers {
      list-style: none;

      li {
        padding: 0;
        margin: 1rem 0 2rem;
      }
    }
  }


</style>