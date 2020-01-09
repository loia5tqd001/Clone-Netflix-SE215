<template>
  <v-app dark>

    <v-content class="video-outer-container">
      <v-container class="video-container">
        <nuxt />
      </v-container>
    </v-content>

  </v-app>
</template>

<script>
export default {
  data () {
    return {
    }
  }
}
</script>

<style scoped>
  .video-outer-container {
    background: url(/watching-thumbnail.jpg) center/cover;
  }
  .video-container {
    width: 100vw;
    height: 100%;
    padding: 0;
  }
</style>
