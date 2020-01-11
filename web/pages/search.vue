<template>
  <div light class="search-container">
    <p>Explorer titles related to: 
      <a class="search-key" 
         v-for="(searchKey, i) in searchKeys.slice(0, ~~(searchText ? searchText.length : 0))" 
         :key="searchKey"
         @click.prevent="changeSearchKey(i)"
      >
        <strong :class="{ 'current-search-key': i === curSelectedSearchKey }" > 
          {{ searchKey }} 
        </strong>
      </a>
    </p>
    <transition-group class="search-movie-grid" tag="div" name="fade" mode="out-in">
      <MovieCard v-for="movie in movies" :key="movie.id" :movie=movie ></MovieCard>
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
      movies: this.getMovies(),
      searchText: this.$store.getters.getSearchText,
      curSelectedSearchKey: 0,
      searchKeys: [
        'Horror Movies',
        'Horror',
        'Thriller & Horror',
        'Chilling Horror Movies',
        'Psychological Horror Movies',
        'Demon Horror Movies',
        'Horror Comedies',
        'Supernatural Hornor Movies',
        'The Last Horror Film',
        'Horror Comedies',
        'Movies About Horses'
      ]
    }
  },
  methods: {
    getMovies() {
      return moviesHistory.map(movie => ({
        id: movie.imgUrl + new Date(),
        ...movie
      }))
    },
    changeSearchKey(i) {
      if (i === this.curSelectedSearchKey) return
  
      this.reloadWith(i)
    },

    reloadWith: _.debounce(function(index) {
      this.curSelectedSearchKey = index
      
      this.movies = _.shuffle(this.getMovies()),
      this.searchText = this.$store.getters.getSearchText
    }, 
    100),

    reload: _.debounce(function() {
      this.curSelectedSearchKey = 0

      this.movies = _.shuffle(this.getMovies()),
      this.searchText = this.$store.getters.getSearchText
    }, 
    500)
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

  .search-key {
    color: white;

    transition: .2s;
    
    &:hover {
      text-shadow: 2px 2px 4px #000, -2px -2px 4px #fff4;
    }
  }
  .search-key:not(:last-child)::after {
    content: ' | ';
    background: transparent !important;
  }
  .current-search-key {
    background: red;

    transition: .2s;
    
    &:hover {
      text-shadow: 2px 2px 4px #0007, -2px -2px 4px #fff7;
    }
  }


  .fade-enter-active, .fade-leave-active {
    transition: opacity .2s;
  }
  .fade-enter, .fade-leave-active {
    opacity: 0;
  }
</style>