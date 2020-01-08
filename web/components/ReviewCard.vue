<template>
  <div class="ReviewCard-container">
    <div class="ReviewCard-user">
      <img class="ReviewCard-user__avatar" :src="`../avatars/avatar-${random(9)}.jpeg`" alt="avatar">

      <div class="ReviewCard-user__info">
        <p class="--name"><span>Lisa</span> reviews on</p>
        <p class="--movie-name">The nutcreaker and thr four realms</p>
        <p class="--time">20 minutes ago</p>
        <v-rating readonly value="3" color="red"></v-rating>
      </div>

    </div>

    <div class="ReviewCard-caption">
      <p>{{ caption }}</p>
    </div>

    <div class="ReviewCard-movie-card-container">
      <MovieCard :ratio="1.62" class="ReviewCard-movie-card"></MovieCard>
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
  .ReviewCard-container {
    display: flex;
    flex-direction: column;
    max-width: 700px;
  }

  .ReviewCard-user {
    height: 120px;
    display: flex;
    align-items: center;

    .ReviewCard-user__avatar {
      display: inline-block;
      box-shadow: $standard-shadow;
      border-radius: 50%;
      width: 100px;
      height: 100px;
      margin-right: 2rem;
    }

    .ReviewCard-user__info {
      display: flex;
      flex-direction: column;

      p { 
        padding: 0;
        margin: 0;
      }

      .--name span:hover {
        font-weight: bold;
        cursor: pointer;
      }

      .--movie-name {
        text-transform: uppercase;
        font-weight: bold;
      }
    }
  }

  .ReviewCard-caption p {
    word-break: break-all;
    margin: .5rem 0;
  }

  .ReviewCard-movie-card-container {
    width: 100%;

    .ReviewCard-movie-card {
      margin: 1rem 0;
      width: 100%; 
      height: 100%;
    }
  }


</style>