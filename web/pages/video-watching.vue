<template>
  <section class="container">
    <video ref="video" controls>
      <source src="https://sample-videos.com/video123/mp4/240/big_buck_bunny_240p_10mb.mp4" type="video/mp4">
      <source src="https://sample-videos.com/video123/mp4/240/big_buck_bunny_240p_10mb.mp4" type="video/ogg">
      Your browser does not support HTML5 video.
    </video>
  </section>
</template>

<script>
  export default {
    layout: 'video',
    mounted() {
      this.$refs.video.requestFullscreen().catch(err => {
        console.log(err)
      })
    }
  }
</script>

<style lang="scss" scoped>
  .container {
    width: 100%;
    height: 100%;
    display: grid;
    place-items: stretch;
    margin: 0 auto;
    object-fit: contain;
  }
</style>