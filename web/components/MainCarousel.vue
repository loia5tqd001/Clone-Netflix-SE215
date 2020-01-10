<template>
  <div class="MainCarousel-container">

  <h1 class="main-title">Top pick for you ✔</h1>


  <client-only placeholder="Loading...">
    <carousel-3d 
      :perspective="0" 
      :space="650" 
      :display="3" 
      :count="movies.length"
      :border="0"
      :controlsVisible="true"
      :controls-prev-html="prevControl" 
      :controls-next-html="nextControl"
    >
      <slide v-for="(movie, i) in movies" :index="i" :key="i">
        <template slot-scope="{ index, isCurrent, leftIndex, rightIndex }">
          <MainMovieCard 
            :ratio="isCurrent ? 1.5 : 1.5"
            :movie="movie"
            :data-index="i"
            :class="{ current: isCurrent, onLeft: (leftIndex >= 0), onRight: (rightIndex >= 0) }"
            :anotherTransform="`translateY(-50%)`"
          ></MainMovieCard>
        </template>
      </slide>
    </carousel-3d>
  </client-only>


  </div>
</template>

<script>
import MainMovieCard from "./MainMovieCard.vue";


export default {
  components: {
    MainMovieCard,
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
          info: ['97% Match', '2 Season'],
          categories: ['Sentimental', 'Romantic','Dramedy']
        },
      ]
    }
  },
  methods: {
    wrapTextshadow(text) {
      return `
        <span style='color:white; text-shadow: 3px 3px 6px #0007, -3px -3px 6px #fff3'>
          ${text}
        </span>
      `
    }
  },
  computed: {
    nextControl() {
      return this.wrapTextshadow('&#10093;')
    },
    prevControl() {
      return this.wrapTextshadow('&#10092;')
    }
  }
}
</script>

<style lang="scss" scoped>
  .MainCarousel-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    height: 100%;

    .main-title {
      text-align: center;
      text-transform: uppercase;
      margin: -.5em 1em 1em .5em;
      color: #D93D27;
      text-shadow: 1px 1px 2px #000, -1px -1px 2px #fff3;
      transition: .2s;

      &:hover {
        text-shadow: 2px 2px 4px #000, -2px -2px 4px #fff3;
        transform: translate(.5px, .5px);
      }
    }
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