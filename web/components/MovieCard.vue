<template>
  <div class="container">
    <div class="thumbnail">
      <img src="../static/thumbnail-horizontal/1.jpg" alt="movie card">
    </div>

    <div class="overlay">
      <play-button class="play-button">
      </play-button>

      <div class="movie-detail">
        <h3 class="movie-title">
          Romance Is a Bonus Book
        </h3>
  
        <p class="movie-info">
          <span>98% Match</span>
          <span>1 Season</span>
        </p>
  
        <p class="movie-category">
          <span>Sentimental</span>
          <span>Romantic</span>
          <span>Dramedy</span>
        </p>
      </div>
    </div>

  </div>
</template>

<script>
import PlayButton from './PlayButton'

export default {
  components: {
    PlayButton
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

  .container {
    position: relative;
    border-radius: 1rem;
    overflow: hidden;
    width: 21rem;
    height: 12rem;

    transition: box-shadow $transition, transform $transition;
    box-shadow: 0 4px 15px #0008;

    &:hover {
      box-shadow: 0 4px 30px #0008;
      transform: scale(1.05);
    }
  }

  .thumbnail {
    height: 100%;
    background: red;  

    img {
      object-fit: cover;
      width: 100%;
      height: 100%;
    }
  }

  .overlay {
    position: absolute;
    left:0; top:0; right:0; bottom:0;
    display: grid; 
    place-items: center;

    .movie-detail {
      color: $color--white-subtle;
      position: absolute;
      left: .8rem; bottom: .8rem;
      font-size: .8rem;

      .movie-info :first-child {
        color: #0f0;
        font-weight: bold;
      }
      .movie-category {
        font-size: .8em;
      }
    }
  }

  /* ---- Animation - Transition ---- */

  .overlay {
    background: linear-gradient(to top, #0008, #0000);
    transition: background-color $transition;
    &:hover {
      background: linear-gradient(to top, #000, #0000);
    }

    .play-button {
      opacity: 0;
      transform: scale(.3);
      transition: transform $transition, opacity $transition;
    }
    &:hover .play-button {
      opacity: 1;
      transform: scale(1);
    }

    .movie-detail {
      opacity: 0;
      transform: translateX(-2rem);
      transition: transform $transition, opacity $transition;
    }
    &:hover .movie-detail {
      opacity: 1;
      transform: translateX(0);
    }
  }
</style>