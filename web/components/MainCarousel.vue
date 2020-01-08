<template>
  <div class="MainCarousel-container">

  <no-ssr placeholder="Loading...">
    <carousel-3d 
      :perspective="0" 
      :space="650" 
      :display="3" 
      :count="movies.length"
      :border="0"
      :controlsVisible="true"
      :controls-prev-html="`<span style='color:white'>&#10092;</span>`" 
      :controls-next-html="`<span style='color:white'>&#10093;</span>`"
    >
      <slide v-for="(movie, i) in movies" :index="i" :key="i">
        <template slot-scope="{ index, isCurrent, leftIndex, rightIndex }">
          <MovieCard 
            :ratio="isCurrent ? 1.6 : 1.5"
            :movie="movie"
            :data-index="i"
            :class="{ current: isCurrent, onLeft: (leftIndex >= 0), onRight: (rightIndex >= 0) }"
            :anotherTransform="`translateY(-50%)`"
          ></MovieCard>
        </template>
      </slide>
    </carousel-3d>
  </no-ssr>

  </div>
</template>

<script>
import MovieCard from "./MovieCard.vue";


export default {
  components: {
    MovieCard,
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
        {
          imgUrl: '../thumbnail-horizontal/96.jpg',
          name: 'Street Food',
          info: ['97% Match', '2 Season'],
          categories: ['Sentimental', 'Romantic','Dramedy']
        },
        {
          imgUrl: '../thumbnail-horizontal/95.jpg',
          name: 'Jeff Garlin',
          info: ['67% Match', '2 Season'],
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
  @mixin refresh {
    /* override: https://github.com/Wlada/vue-carousel-3d/blob/43dbb603eb1a37efbb5a877853336323b6a6bc41/src/Carousel3d.vue#L453-L471 */
    background: none !important;
    width: auto !important;
    height: auto !important;
    overflow: visible !important;
  }
  .carousel-3d-container {
    @include refresh();
    width: 100% !important;

    .carousel-3d-slider {
      @include refresh();

      .carousel-3d-slide {
        @include refresh();
        top: 50% !important;
      }
    }

  }

</style>