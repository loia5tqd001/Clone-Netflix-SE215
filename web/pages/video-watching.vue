<template>
  <v-content class="container-outer">
    <v-btn class="video-back-btn" @click="$router.go(-1)" fab dark small>
      <v-icon dark>mdi-arrow-left</v-icon>
    </v-btn>

    <section class="container">
      <video ref="video" controls>
        <source src="https://sample-videos.com/video123/mp4/240/big_buck_bunny_240p_10mb.mp4" type="video/mp4">
        <source src="https://sample-videos.com/video123/mp4/240/big_buck_bunny_240p_10mb.mp4" type="video/ogg">
        Your browser does not support HTML5 video.
      </video>
    </section>
  </v-content>
</template>

<script>
  export default {
    // layout: 'video',
    mounted() {
      const video = this.$refs.video

      // https://developer.mozilla.org/en-US/docs/Web/API/Fullscreen_API
      video.requestFullscreen()
      .then(() => video.play())
      .catch(err => {
        console.log(err)
      })
    }
  }
</script>

<style lang="scss" scoped>
  .container-outer {
    width: 100%;
    height: 100%;
    padding: 0 !important;
    margin: 0;
    background: url(/watching-thumbnail.jpg) center/cover;
    position: relative;
  }
  .video-back-btn {
    position: absolute;
    top: 10%;
    left: 10%;
    z-index: 1;
  }
  .container {
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
    display: grid;
    place-items: stretch;
    margin: 0 auto;
    object-fit: contain;
  }
</style>