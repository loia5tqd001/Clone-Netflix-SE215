<template>
  <div light class="history-container">
    <div class="filter">
      <span>For</span>
      <input type="number" v-model="amount" class="amount" @input="reload">
      <select v-model="selectedUnit" class="unit" @change="reload">
        <option value="days">Days</option>
        <option value="weeks">Weeks</option>
        <option value="months">Months</option>
      </select>
    </div>

    <div class="history-movie-grid">
      <MovieCard v-for="movie in movies" :key="movie.name" 
        :movie=movie
      > </MovieCard>
    </div>
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
      amount: 12,
      selectedUnit: 'weeks'
    }
  },
  computed: {
    movies() {
      return history
    }
  },
  methods: {
    reload: _.debounce(function() {
      this.$router.go({
          path: '/history',
          force: true
      })
    }, 500)
  }
}
</script>

<style lang="scss" scoped>
  .history-container {
    margin: 1rem;
  }

  .history-movie-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
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
</style>