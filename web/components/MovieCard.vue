<template>
  <div :style="cssVars" class="-container">

    <div class="-thumbnail">
      <img :src="movie.imgUrl" alt="movie card">
    </div>

    <div class="-overlay">
      <play-button class="-play-button">
      </play-button>

      <div class="-movie-detail">
        <h3 class="-movie-name">
          {{ movie.name }}
        </h3>
  
        <p class="-movie-info">
          <span>{{ movie.info[0] }}</span>
          <span>{{ movie.info[1] }}</span>
        </p>
  
        <p class="-movie-category">
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

  .-container {
    position: relative;
    border-radius: 1rem;
    overflow: hidden;
    width: calc(21rem * var(--ratio)) !important;
    height: calc(12rem * var(--ratio)) !important;

    transition: box-shadow $transition, transform $transition;
    box-shadow: 0 4px 15px #0008;

    &:hover {
      box-shadow: 0 4px 30px #0008;
      transform: scale(1.05);
    }
  }

  .-thumbnail {
    width: 100%;
    height: 100%;

    img {
      object-fit: cover;
      width: 100%;
      height: 100%;
    }
  }

  .-overlay {
    position: absolute;
    left:0; top:0; right:0; bottom:0;
    display: grid; 
    place-items: center;

    .-movie-detail {
      color: $color--white-subtle;
      position: absolute;

      $size: calc(.8rem * var(--ratio));
      left: $size; bottom: $size;
      font-size: $size;

      .-movie-info :first-child {
        color: #0f0;
        font-weight: bold;
      }
    }
  }

  /* ---- Animation - Transition ---- */

  .-overlay {
    background: linear-gradient(to top, #0008, #0000);
    transition: background-color $transition;
    &:hover {
      background: linear-gradient(to top, #000, #0000);
    }

    .-play-button {
      opacity: 0;
      transform: scale(calc( .3 * var(--ratio) ));
      transition: transform $transition, opacity $transition;
    }
    &:hover .-play-button {
      opacity: 1;
      transform: scale(var(--ratio));
    }

    .-movie-detail {
      opacity: 0;
      transform: translateX(-2rem);
      transition: transform $transition, opacity $transition;
    }
    &:hover .-movie-detail {
      opacity: 1;
      transform: translateX(0);
    }
  }
</style>