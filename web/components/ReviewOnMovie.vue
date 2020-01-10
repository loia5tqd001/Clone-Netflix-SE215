<template>
  <div class="ReviewOnMovie-container">
    <div class="ReviewOnMovie-left">
      <img class="__avatar" :src="`../avatars/avatar-${random(9)}.jpeg`" alt="avatar">
      <v-rating dense readonly value="3" color="red"></v-rating>

    </div>
    <div class="ReviewOnMovie-right">
      <p class="__name">Alisabet</p>
      <p class="__content">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima. Lorem ipsum Lorem ipsum dolor</p>
    </div>
  </div>
</template>

<script>
import { random } from 'lodash'
import MovieCard from '@/components/MovieCard.vue';

export default {
  components: {
    MovieCard,
  },
  props: {
    caption: {
      type: String,
      default: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id molestias consequuntur fuga repellendus natus recusandae sapiente quis nemo assumenda cumque nesciunt ex, eveniet voluptatibus laudantium sunt cupiditate nisi odit nam.'
    },
  },
  data() {
    return {
      
    }
  },
  methods: {
    random: random
  }
}
</script>

<style lang="scss" scoped>
  .ReviewOnMovie-container {
    display: inline-flex;
    height: 10em;
    width: 30em;
    border-radius: .3em;
    margin: .5em;
  }
  .ReviewOnMovie-left {
    display: grid;
    flex-direction: column;
    place-content: center;
    place-items: center;

    .__avatar {
      display: block;
      box-shadow: $standard-shadow;
      border-radius: 50%;
      width: 6em;
      height: 6em;
      margin: 0 .5em;
    }
  }
  .ReviewOnMovie-right {
    display: flex;
    padding: 0 .5em 0 1em;
    flex-direction: column;

    .__name {
      font-weight: bold;
      margin-top: 1em;
      font-size: 1.3rem;
      color: #fffd
    }
    .__content {
      color: #fffd
    }
  }


</style>