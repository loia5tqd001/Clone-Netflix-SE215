<template>
  <div
    :style="cssVars"
    class="MovieCard-container"
  >

    <div class="MovieCard-thumbnail">
      <img :src="movie.imgUrl" alt="movie card" />
    </div>

    <div class="MovieCard-overlay">
      <nuxt-link to="/watching" tag="div" class="MovieCard-play-button">
        <PlayButton> </PlayButton>
      </nuxt-link>

      <div class="MovieCard-buttons-container">
        <button 
          class="button-action"
          :class="{ 'toggle-on': isLiked }" 
          @click.stop="onLike"
          :title="isLiked ? 'you liked' : 'like'"
        >
          <v-icon v-if="isLiked">mdi-thumb-up</v-icon>
          <v-icon v-else>mdi-thumb-up-outline</v-icon>
        </button>

        <button 
          class="button-action" 
          :class="{ 'toggle-on': isDisliked }" 
          @click.stop="onDislike"
          :title="isDisliked ? 'you disliked' : 'dislike'"
        >
          <v-icon v-if="isDisliked">mdi-thumb-down</v-icon>
          <v-icon v-else>mdi-thumb-down-outline</v-icon>
        </button>

        <button 
          class="button-action" 
          :class="{ 'toggle-on': isAdded }" 
          @click.stop="onAdd"
          :title="isAdded ? 'already on your list' : 'add to my list'"
        >
          <v-icon v-if="isAdded">mdi-plus</v-icon>
          <v-icon v-else>mdi-plus</v-icon>
        </button>

      </div>

      <div class="MovieCard-movie-detail">
        <h3 class="MovieCard-movie-name">
          {{ movie.name }}
        </h3>

        <p class="MovieCard-movie-info">
          <span>{{ movie.info[0] }}</span>
          <span>{{ movie.info[1] }}</span>
        </p>

        <p class="MovieCard-movie-category">
          <span
            v-for="(category, i) in movie.categories"
            :key="category + i + Math.random()"
          >
            {{ category }}
          </span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { random } from 'lodash'
import getRandomMovieName from '@/assets/helpers/getRandomMovieName'
import getRandomCategories from '@/assets/helpers/getRandomCategories'
import getRandomMovieInfo from '@/assets/helpers/getRandomMovieInfo'
import PlayButton from "./PlayButton";

export default {
  props: {
    ratio: {
      default: 1
    },
    anotherTransform: {
      type: String,
      default: 'translateY(0)',
    },
    movie: {
      type: Object,
      required: true,
      default() {
        return {
          imgUrl: `../thumbnail-horizontal/${random(100)}.jpg`,
          name: getRandomMovieName(),
          info: getRandomMovieInfo(),
          categories: getRandomCategories()
        };
      }
    }
  },
  data() {
    return {
      isLiked: false,
      isDisliked: false,
      isAdded: false,
    }
  },
  components: {
    PlayButton
  },
  methods: {
    onLike(e) {
      this.isLiked = !this.isLiked
    },
    onDislike(e) {
      this.isDisliked = !this.isDisliked
    },
    onAdd(e) {
      this.isAdded = !this.isAdded
    }
  },
  watch: {
    isLiked(newVal) {
      if (newVal === true && this.isDisliked) {
        this.isDisliked = false
      }

      if (newVal) {
        this.$toast(`liked "${this.movie.name}"`)
      } else {
        this.$toast(`unliked "${this.movie.name}"`)
      }
    },
    isDisliked(newVal) {
      if (newVal === true && this.isLiked) {
        this.isLiked = false
      }

      if (newVal) {
        this.$toast(`disliked "${this.movie.name}"`)
      } else {
        this.$toast(`undisliked "${this.movie.name}"`)
      }
    },
    isAdded(newVal) {
      if (newVal) {
        this.$toast(`added "${this.movie.name}"`)
      } else {
        this.$toast(`removed "${this.movie.name}"`)
      }
    }
  },
  computed: {
    // https://www.telerik.com/blogs/passing-variables-to-css-on-a-vue-component
    cssVars() {
      return {
        "--ratio": this.ratio,
        "--another-transform": this.anotherTransform
      };
    }
  }
};
</script>

<style lang="scss" scoped>
$transition: 0.2s ease-in;
$micro-transition: 0.1s;

@function proportion($value) {
  @return calc( #{$value} * var(--ratio) );
}

/* ---- Static State ---- */

*,
p {
  padding: 0;
  margin: 0;
}

.MovieCard-container {
  position: relative;
  border-radius: 1rem;
  overflow: hidden;
  width: proportion(21em) !important;
  height: proportion(12em) !important;
  transform: var(--another-transform);

  transition: box-shadow $transition, transform $transition;
  box-shadow: 0 4px 5px #100a;


  &:hover {
    box-shadow: 0 4px 15px #100d;
    transform: var(--another-transform) scale(1.05);
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
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  display: grid;
  place-items: center;

  .MovieCard-play-button {
    cursor: pointer;
    
    > * {
      transition: transform $micro-transition;
    }
    &:hover > * {
      transform: scale(1.1);
    }
    &:active > * {
      transform: scale(1.2);
    }
  }

  .MovieCard-buttons-container {
    $button-size: proportion(1.8em);

    position: absolute;
    right: proportion(1em);
    width: $button-size;
    height: proportion(6em);
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .button-action {
      width: $button-size;
      height: $button-size;
      border-radius: 50%;
      border: proportion(1px) solid #eee;
      background: #0006;
      padding: proportion(.3em);
      display: grid;
      place-content: center;
      transition: $micro-transition;
      outline: none;

      &.toggle-on {
        background: #fffa;

        > * {
          text-shadow: 1px 1px #0003, -1px -1px #fff3;
        }
      }

      &:hover {
        border: proportion(2px) solid white;
        transform: scale(1.2);
      }
      &:active {
        transform: scale(1.1);
      }

      > * {
        font-size: proportion(1.2rem);
      }
    }
  }

  .MovieCard-movie-detail {
    color: $color--white-subtle;
    position: absolute;

    $size: proportion(.8em);
    left: $size;
    bottom: $size;
    font-size: $size;

    .MovieCard-movie-info :first-child {
      color: #0f0;
      font-weight: bold;
    }

    .MovieCard-movie-category {
      /* https://stackoverflow.com/q/59339023/9787887 */
      font-size: 0.8em;
      display: inline-flex;
      justify-content: space-between;

      > span:not(:last-child) {
        $distance: 1em;
        $half-distance: $distance / 2;
        margin: 0 $distance 0 0;

        position: relative;

        &::after {
          $size: 0.2em;
          $half-size: $size / 2;

          content: "";
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
    transform: scale(proportion(0.3));
    transition: transform $transition, opacity $transition;
  }
  &:hover .MovieCard-play-button {
    opacity: 1;
    transform: scale(proportion(1));
  }

  .MovieCard-buttons-container {
    opacity: 0;
    transform: translateX(proportion(2em));
    transition: transform $transition, opacity $transition;
  }
  &:hover .MovieCard-buttons-container {
    opacity: 1;
    transform: translateX(0);
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
