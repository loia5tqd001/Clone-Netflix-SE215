<template>
  <div>
    <h3>{{ header }}</h3>
    <div class="RowCarousel-row">

      <MovieCard v-for="movie in movies.slice(0, 4)" :key="movie.imgUrl"
        class="RowCarousel-item"
        :movie="movie"
      ></MovieCard>

    </div>
  </div>
</template>

<script>
import MovieCard from '@/components/MovieCard.vue'

export default {
  props: {
    header: {
      type: String,
      default: 'Popular on Netflix',
      required: true
    },
    movies: {
      type: Array,
      required: true
    },
  },
  components: {
    MovieCard,
  },
}
</script>

<style lang="scss" scoped>
  .RowCarousel-row {
    display: flex;
    width: 100%;
    justify-content: space-between;
    margin: 1rem auto;
  }
  .RowCarousel-item {
    display: inline-block ;
  }
</style>