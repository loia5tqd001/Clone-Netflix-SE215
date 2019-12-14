<template>
  <div>
    <h3>{{ header }}</h3>
    <div class="RowCarousel-row">
      <MovieCard class="RowCarousel-item"></MovieCard>
      <MovieCard class="RowCarousel-item"></MovieCard>
      <MovieCard class="RowCarousel-item"></MovieCard>
      <MovieCard class="RowCarousel-item"></MovieCard>
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