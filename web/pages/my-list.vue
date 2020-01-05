<template>
  <div light class="history-container">

    <transition-group class="history-movie-grid" tag="div" name="fade" mode="out-in">
      <MovieCard v-for="movie in movies" :key="movie.id" :movie=movie :ratio="0.8" ></MovieCard>
    </transition-group>
    
  </div>
</template>

<script>
import MovieCard from '@/components/MovieCard.vue';
import moviesHistory from '@/assets/mock_data/getMoviesHistory';
import _ from 'lodash'

export default {
  components: {
    MovieCard,
  },
  data() {
    return {
      amount: 12,
      selectedUnit: 'weeks',
      movies: this.getMovies()
    }
  },
  methods: {
    getMovies() {
      return moviesHistory.map(movie => ({
        id: movie.imgUrl + new Date(),
        ...movie
      }))
    },
    reload: _.debounce(function() {
      this.movies = _.shuffle(this.getMovies())
    }, 1000)
  },
  watch: {
    amount(value) {
      if (value > 1000) {
        this.amount = 999
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .history-container {
    margin: 1rem;
  }

  .history-movie-grid {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-row-gap: 2rem;
    grid-column-gap: 1rem;
    padding: 1rem 0;
  }

  .filter {
    display: flex;
    
    > * {
      margin-right: 1rem;
    }

    // https://css-tricks.com/snippets/css/turn-off-number-input-spinners/
    input[type=number]::-webkit-inner-spin-button, 
    input[type=number]::-webkit-outer-spin-button { 
      -webkit-appearance: none; 
      margin: 0; 
    }
    .amount, .unit {
      border: 1px solid $color--white-subtle;
      outline: none;
      padding: 0 .5rem;
    }

    .amount {
      width: 4rem;
    }
    .unit {
      width: 5rem;

      option {
        color: black;
      }
    }
  }

  .fade-enter-active, .fade-leave-active {
    transition: opacity .2s;
  }
  .fade-enter, .fade-leave-active {
    opacity: 0;
  }
</style>