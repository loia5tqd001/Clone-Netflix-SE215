<template>
  <div class="MainCarousel-container">

    <div v-for="(movie, i) in movies" :key="i">
      <MovieCard 
        :ratio="i === 1 ? 1.6 : 1.2"
        :movie="movie"
      ></MovieCard>
    </div>

  </div>
</template>

<script>
import MovieCard from "./MovieCard.vue";

export default {
  components: {
    MovieCard
  },
  data() {
    return {
      movies: [
        {
          imgUrl: '../thumbnail-horizontal/98.jpg',
          name: 'Everything Sucks',
          info: ['98% Match', '1 Season'],
          categories: ['Action', 'Teen','Drama']
        },
        {
          imgUrl: '../thumbnail-horizontal/99.jpg',
          name: 'The Boss Baby',
          info: ['99% Match', '3h 35m'],
          categories: ['Children', 'Family','Catoon']
        },
        {
          imgUrl: '../thumbnail-horizontal/97.jpg',
          name: 'Insatiable',
          info: ['97% Match', '2 Season'],
          categories: ['Sentimental', 'Romantic','Dramedy']
        },
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
  .MainCarousel-container {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    height: 100%;
  } 

</style>