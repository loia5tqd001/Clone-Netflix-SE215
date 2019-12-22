<template>
  <div class="WatchingDetail-container">

    <div class="WatchingDetail-thumbnail">
      <div class="WatchingDetail-thumbnail__img">
        <img src="@/static/watching-thumbnail.jpg" alt="">
      </div>
      <PlayButton class="WatchingDetail-play-button"></PlayButton>
    </div>

    <div class="WatchingDetail-details">


    </div>

  </div>
</template>

<script>
  import PlayButton from './PlayButton'

  export default {
    components: {
      PlayButton,
    },  
  }
</script>

<style lang="scss" scoped>
  .WatchingDetail-container {
    display: grid;
    grid-template-columns: 4fr 6fr;
    height: 100%;
    margin: 0 auto 1rem;
  }

  .WatchingDetail-thumbnail {
    height: 100%;
    position: relative;
    background: transparent;

    &__img {
      width: 100%;
      height: 100%;
      clip-path: ellipse(70% 85% at 30% 50%);
      overflow: hidden;

      img {
        display: block;
        height: 100%;
        width: 100%;
        object-fit: cover;
        transition: transform .5s;
      }
      &:hover img {
        transform: scale(1.1);
      }

      &::after {
        content: '';
        position: absolute;
        top:0; right:0; bottom:0; left:0;
        background: linear-gradient(to bottom, #0007, #0000, #0007);
      }
    }

    .WatchingDetail-play-button {
      position: absolute;
      top: 50%;
      right: 0;
      transform: scale(2);
      cursor: pointer;
      transition: transform .2s;

      &:hover {
        transform: scale(2.2);
      }
    }
  }

  .WatchingDetail-details {
    /* background: blue; */
    height: 100%;

  }

</style>