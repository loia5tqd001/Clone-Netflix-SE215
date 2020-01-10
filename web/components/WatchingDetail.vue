<template>
  <div class="WatchingDetail-container">

    <div class="WatchingDetail-thumbnail">
      <div class="WatchingDetail-thumbnail__img">
        <img src="@/static/watching-thumbnail.jpg" alt="">
      </div>
      <nuxt-link to="/video-watching">  
        <PlayButton class="WatchingDetail-play-button"></PlayButton>
      </nuxt-link>
    </div>

    <div class="WatchingDetail-details">

      <h1 class="WatchingDetail-title">
        the nucraker and <br> the four realms
      </h1>

      <p class="WatchingDetail-categories">
        Adventure, Family, Fantasy
      </p>

      <v-rating readonly :value="defaultRating" color="red"></v-rating>

      <p class="WatchingDetail-info">
        <span><span>Year</span><br>2018</span>
        <span><span>Country</span><br>USA</span>
        <span><span>Length</span><br>112min</span>
      </p>

      <div class="WatchingDetail-description">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, atque nostrum! Quod perferendis natus voluptatum nam alias, eos, vero molestias consequuntur officia eum nesciunt neque at labore eius officiis! Vero maiores temporibus animi consequatur, quibusdam quidem recusandae et necessitatibus fuga laboriosam in, perferendis cumque veniam? Odio corrupti
      </div>

      <div class="WatchingDetail-action-bar">
        <button @click="onAddClick" class="button --add">
          <v-icon v-if="isAdded" title="remove from list">mdi-minus</v-icon>
          <v-icon v-else title="add to list">mdi-plus</v-icon>
        </button>

        <nuxt-link to="/share" class="button --share">
          <v-icon title="share review">mdi-share-variant</v-icon>
        </nuxt-link>

        <button class="button --reviews" @click.prevent="$emit('goToReview')">
          <span title="watch reviews">Reviews</span>
        </button>

      </div>

      <div class="WatchingDetail-screenshots">
        <div class="__title">
          <span>Screenshots</span>
          <v-icon class="__icon">mdi-arrow-right</v-icon>
        </div>
        <div class="__carousel">
          <div class="__images">
            <div class="__img">
              <img src="@/static/screenshots/1.jpg">
            </div>
            <div class="__img">
              <img src="@/static/screenshots/2.jpg">
            </div>
            <div class="__img">
              <img src="@/static/screenshots/3.jpg">
            </div>
          </div>
        </div>
      </div>

    </div>

  </div>
</template>

<script>
  import PlayButton from './PlayButton'

export default {
  components: {
    PlayButton,
  },  
  data() {
    return {
      isAdded: false
    }
  },
  methods: {
    onAddClick() {
      this.isAdded = !this.isAdded
    },
  },
  computed: {
    defaultRating() {
      return 4
    }
  },
  watch: {
    isAdded(newVal) {
      if (newVal) {
        this.$toast('Added THE NUCRAKER AND THE FOUR REALMS from your list')
      } else {
        this.$toast('Removed THE NUCRAKER AND THE FOUR REALMS from your list')
      }
    }
  }
  
}
</script>


<style>
  html {
    scroll-behavior: smooth;
  }
</style>

<style lang="scss" scoped>
  .WatchingDetail-container {
    display: grid;
    grid-template-columns: 4fr 6fr;
    height: 100%;
    margin: 0 auto 1rem;
  }

  @mixin hover-overflow {
    overflow: hidden;

    img {
      object-fit: cover;
      width: 100%;
      height: 100%;
      transition: transform .5s;
    }
    &:hover img {
      transform: scale(1.1);
    }
  }

  .WatchingDetail-thumbnail {
    height: 100%;
    position: relative;
    background: transparent;

    &__img {
      width: 100%;
      height: 100%;
      clip-path: ellipse(70% 85% at 30% 50%);
      @include hover-overflow;

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
      transform: translateY(-50%) scale(2);
      cursor: pointer;
      transition: transform .2s;

      &:hover {
        transform: translateY(-50%) scale(2.2);
      }
    }
  }

  .WatchingDetail-details {
    height: 100%;
    text-align: center;
    padding: 1rem 1rem;

    .WatchingDetail-title {
      text-transform: uppercase;
    }

    .WatchingDetail-categories {
      opacity: .8;
      margin: 0 0 .5rem;
    }

    .WatchingDetail-info {
      display: flex;
      justify-content: space-between;
      padding: 0 15rem;
      margin: 1rem 0 0 1.5rem;
      font-weight: 600;

      span span:first-child {
        opacity: .6;
        margin-right: .3rem;
      }
    }

    .WatchingDetail-description {
      padding: 0 7rem;
      margin: 1rem 0;
      text-align: justify;
    }

    .WatchingDetail-action-bar {
      display: flex;
      margin: 0 7rem;

      .button {
        text-decoration: none;
        color: rgba(white,.8);
        font-weight: bold;
        display: inline-block;
        margin: 0 .3rem;
        transition: transform .2s;
        outline: none;

        
        &:hover {
          transform: translateY(-2px) scale(1.05);
        }

        &.--reviews {
          margin-left: auto;
        }
      }
    }
    
    .WatchingDetail-screenshots {

      .__title {
        margin: 1rem 7rem 0;
        display: flex;
        justify-content: space-between;

        .__icon {
          transition: transform .2s;
          cursor: pointer;

          &:hover {
            transform: translateY(-2px) scale(1.05);
          }
        }
      }

      .__carousel {
        width: 100%;
      }

      .__images {
        max-width: 100%;
        height: 160px;
        display: grid;  
        grid-auto-flow: column;
        margin: 1rem 3rem 0;
        justify-content: center;
        grid-auto-columns: minmax(220px, 1fr);
        grid-gap: 10px;
        overflow-x: auto;

        .__img {
          @include hover-overflow;
          height: 100%;

          border-radius: .5rem;
          box-shadow: $standard-shadow;
        }
      }
    }
  }

</style>