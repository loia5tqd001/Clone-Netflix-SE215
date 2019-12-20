<template>
  <div light class="search-container">
    <p>All related to: <strong>{{ searchText }}</strong></p>
    <transition-group class="search-movie-grid" tag="div" name="fade" mode="out-in">
      <MovieCard v-for="movie in movies" :key="movie.id" :movie=movie ></MovieCard>
    </transition-group>
  </div>
</template>

<script>
import MovieCard from '@/components/MovieCard.vue';
import { history } from '@/assets/mock-data';
import _ from 'lodash'

export default {
  components: {
    MovieCard,
  },
  data() {
    return {
      movies: this.getMovies(),
      searchText: this.$store.getters.getSearchText
    }
  },
  methods: {
    getMovies() {
      return history.map(movie => ({
        id: movie.imgUrl + new Date(),
        ...movie
      }))
    },
    reload: _.debounce(function() {
      this.movies = _.shuffle(this.getMovies()),
      this.searchText = this.$store.getters.getSearchText
    }, 500)
  },
  watch: {
    // stackoverflow.com/questions/43270159/vuejs-2-how-to-watch-store-values-from-vuex
    '$store.state.searchText': function() {
      this.reload()
    }
  }
}
</script>

<style lang="scss" scoped>
  .search-container {
    margin: 1rem;
  }

  .search-movie-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-row-gap: 2rem;
    grid-column-gap: 1rem;
    padding: 1rem 0;
  }

  .fade-enter-active, .fade-leave-active {
    transition: opacity .2s;
  }
  .fade-enter, .fade-leave-active {
    opacity: 0;
  }
</style>