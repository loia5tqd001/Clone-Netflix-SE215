<template>
  <div class="share-container">

    <v-btn class="share-back-btn" @click="$router.go(-1)" fab dark small>
      <v-icon dark>mdi-arrow-left</v-icon>
    </v-btn>

    <div class="share-review-card">
      <h3 class="share-main-title">review on</h3>
      <h3 class="share-movie-name">THE NUTCRACKER AND THE FOUR REALMS</h3>
      
      <v-rating class="share-rating" :value="defaultRating" color="red"></v-rating>
  
      <v-textarea
        name="input-7-1"
        label="write your comment here"
        value="The Woodman set to work at once, and so sharp was his axe that the tree was soon chopped nearly through."
        hint="Is this film awesome, bad?"
        rounded
        solo
        full-width
        style="width: 100%"
      ></v-textarea>
  
      <v-checkbox class="share-checkbox" label="Also notify friends"></v-checkbox>
  
      <button class="share-btn-post" @click="onPostClick">Post</button>
    </div>

  </div>
</template>

<script>
import { random } from 'lodash'

export default {
  methods: {
    onPostClick() {
      this.$toast(`review added`)
      this.$router.go(-1)
    },
  },
  computed: {
    defaultRating() {
      return 4
    }
  }
}
</script>

<style lang="scss" scoped>
  .share-container {
    background: #1c1b1b;
    height: 100%;
    position: relative;
    display: grid;
    place-items: center;
  }

  .share-back-btn {
    position: absolute;
    top: 10%;
    left: 10%;
  }

  .share-review-card {
    display: grid;
    place-items: center;
    place-content: center;
    padding: 2em;
    border-radius: .5em;

    transition: box-shadow .4s;
    box-shadow: 2px 2px 4px #fff3, -2px -2px 4px #fff3;
    &:hover {
      box-shadow: 3px 3px 6px #fff3, -3px -3px 6px #fff3;
    }
  }

  .share-main-title {
    text-align: center;
    color: white;
    text-transform: uppercase;  
  }

  .share-movie-name {
    color: white;
  }

  .share-rating {
    margin: 1em;
  }

  .share-checkbox {
    margin: -.5em 0 0;
  }

  .share-btn-post {
    padding: .5em;
    color: white;
    background: linear-gradient(to bottom, #E35151, #943232);
    font-weight: bold;
    font-size: 1.5rem;
    border-radius: .5em;
    width: 8em;
    outline: none;
  }


</style>