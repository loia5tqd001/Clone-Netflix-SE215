<template>
  <div :style="cssVars" class="MovieCard-container">

    <div class="MovieCard-thumbnail">
      <img :src="movie.imgUrl" alt="movie card">
    </div>

    <div class="MovieCard-overlay">
      <PlayButton class="MovieCard-play-button">
      </PlayButton>

      <div class="MovieCard-movie-detail">
        <h3 class="MovieCard-movie-name">
          {{ movie.name }}
        </h3>
  
        <p class="MovieCard-movie-info">
          <span>{{ movie.info[0] }}</span>
          <span>{{ movie.info[1] }}</span>
        </p>
  
        <p class="MovieCard-movie-category">
          <span v-for="category in movie.categories" :key="category">
            {{ category }}
          </span>
        </p>
      </div>
    </div>

  </div>
</template>

<script>
import PlayButton from './PlayButton'

export default {
  props: {
    ratio: {
      default: 1,
    },
    movie: {
      type: Object,
      required: true,
      default() {
        return {
          imgUrl: '../thumbnail-horizontal/2.jpg',
          name: 'Romance Is a Bonus Book',
          info: ['98% Match', '1 Season'],
          categories: ['Sentimental', 'Romantic','Dramedy']
        }
      }
    },
  },
  components: {
    PlayButton
  },
  computed: {
    // https://www.telerik.com/blogs/passing-variables-to-css-on-a-vue-component
    cssVars() {
      return {
        '--ratio': this.ratio
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  $transition: .2s ease-in;

  /* ---- Static State ---- */

  *, p {
    padding: 0;
    margin: 0;
  }

  .MovieCard-container {
    position: relative;
    border-radius: 1rem;
    overflow: hidden;
    width: calc(21rem * var(--ratio)) !important;
    height: calc(12rem * var(--ratio)) !important;

    transition: box-shadow $transition, transform $transition;
    box-shadow: 0 4px 10px #100a;

    &:hover {
      box-shadow: 0 4px 25px #100d;
      transform: scale(1.05);
    }
  }

  .MovieCard-thumbnail {
    width: 100%;
    height: 100%;

    img {
      object-fit: cover;
      width: 100%;
      height: 100%;
    }
  }

  .MovieCard-overlay {
    position: absolute;
    left:0; top:0; right:0; bottom:0;
    display: grid; 
    place-items: center;

    .MovieCard-movie-detail {
      color: $color--white-subtle;
      position: absolute;

      $size: calc(.8rem * var(--ratio));
      left: $size; bottom: $size;
      font-size: $size;

      .MovieCard-movie-info :first-child {
        color: #0f0;
        font-weight: bold;
      }

      .MovieCard-movie-category {
        /* https://stackoverflow.com/q/59339023/9787887 */
        font-size: .8em;
        display: inline-flex;
        justify-content: space-between;

        > span:not(:last-child) {
          $distance: 1em;
          $half-distance: $distance / 2;
          margin: 0 $distance 0 0;

          position: relative;
          
          &::after {
            $size: .2em;
            $half-size: $size / 2;

            content: '';
            position: absolute;
            top: calc(50% - #{$half-size});
            left: calc(100% + #{$half-distance} - #{$half-size});

            display: block;
            width: $size;
            height: $size;
            border-radius: 50%;
            background: $color--white-subtle;
          }
        }
      }
    }
  }

  /* ---- Animation - Transition ---- */

  .MovieCard-overlay {
    background: linear-gradient(to top, #0008, #0000);
    transition: background-color $transition;
    &:hover {
      background: linear-gradient(to top, #000, #0000);
    }

    .MovieCard-play-button {
      opacity: 0;
      transform: scale(calc( .3 * var(--ratio) ));
      transition: transform $transition, opacity $transition;
    }
    &:hover .MovieCard-play-button {
      opacity: 1;
      transform: scale(var(--ratio));
    }

    .MovieCard-movie-detail {
      opacity: 0;
      transform: translateX(-2rem);
      transition: transform $transition, opacity $transition;
    }
    &:hover .MovieCard-movie-detail {
      opacity: 1;
      transform: translateX(0);
    }
  }
</style>