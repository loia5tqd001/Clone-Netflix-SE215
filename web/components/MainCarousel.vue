<template>
  <div class="-container">

    <div v-for="(movie, i) in movies" :key="movie" class="-movie">
      <movie-card 
        :ratio="i === 1 ? 1.5 : 1.2"
        :movie="movie"
      ></movie-card>
    </div>
    
  </div>
</template>

<script>
import MovieCard from "./MovieCard";

export default {
  components: {
    MovieCard
  },
  data() {
    return {
      movies: [
        {
          imgUrl: '../thumbnail-horizontal/0.jpg',
          name: 'Romance Is a Bonus Book',
          info: ['98% Match', '1 Season'],
          categories: ['Sentimental', 'Romantic','Dramedy']
        },
        {
          imgUrl: '../thumbnail-horizontal/1.jpg',
          name: 'Romance Is a Bonus Book',
          info: ['99% Match', '3h 35m'],
          categories: ['Sentimental', 'Romantic','Dramedy']
        },
        {
          imgUrl: '../thumbnail-horizontal/2.jpg',
          name: 'Romance Is a Bonus Book',
          info: ['97% Match', '1 Season'],
          categories: ['Sentimental', 'Romantic','Dramedy']
        },
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
  .-container {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    height: 100%;
  } 

</style>