<template>
  <v-container fluid class="main">

    <MainCarousel class="main-carousel"></MainCarousel>

    <v-container fluid>
      <RowCarousel v-for="carousel in carousels" :key="carousel.header"
        class="row-carousel"
        :header="carousel.header"
        :movies="carousel.movies"
      >
      </RowCarousel>
    </v-container>






  </v-container>
</template>

<script>
import CardHome from '@/components/CardHome.vue';
import CardBrowse from '@/components/CardBrowse.vue';
import Carousel from '@/components/Carousel.vue';
import MovieCard from '@/components/MovieCard.vue';
import MainCarousel from '@/components/MainCarousel.vue';
import RowCarousel from '@/components/RowCarousel.vue';

export default {
  components: {
    CardHome,
    CardBrowse,
    Carousel,
    MovieCard,
    MainCarousel,
    RowCarousel
  },
  data() {
    return {
      carousels: [
        {
          header: 'Continue watching for Loi',
          movies: [
            {
              imgUrl: '../thumbnail-horizontal/2.jpg',
              name: 'Romance Is a Bonus Book',
              info: ['98% Match', '1 Season'],
              categories: ['Sentimental', 'Romantic','Dramedy']
            },
            {
              imgUrl: '../thumbnail-horizontal/2.jpg',
              name: 'Romance Is a Bonus Book',
              info: ['98% Match', '1 Season'],
              categories: ['Sentimental', 'Romantic','Dramedy']
            },
            {
              imgUrl: '../thumbnail-horizontal/2.jpg',
              name: 'Romance Is a Bonus Book',
              info: ['98% Match', '1 Season'],
              categories: ['Sentimental', 'Romantic','Dramedy']
            },
            {
              imgUrl: '../thumbnail-horizontal/2.jpg',
              name: 'Romance Is a Bonus Book',
              info: ['98% Match', '1 Season'],
              categories: ['Sentimental', 'Romantic','Dramedy']
            },
          ]
        },
        {
          header: 'Popular on Netflix',
          movies: [
            {
              imgUrl: '../thumbnail-horizontal/2.jpg',
              name: 'Romance Is a Bonus Book',
              info: ['98% Match', '1 Season'],
              categories: ['Sentimental', 'Romantic','Dramedy']
            },
            {
              imgUrl: '../thumbnail-horizontal/2.jpg',
              name: 'Romance Is a Bonus Book',
              info: ['98% Match', '1 Season'],
              categories: ['Sentimental', 'Romantic','Dramedy']
            },
            {
              imgUrl: '../thumbnail-horizontal/2.jpg',
              name: 'Romance Is a Bonus Book',
              info: ['98% Match', '1 Season'],
              categories: ['Sentimental', 'Romantic','Dramedy']
            },
            {
              imgUrl: '../thumbnail-horizontal/2.jpg',
              name: 'Romance Is a Bonus Book',
              info: ['98% Match', '1 Season'],
              categories: ['Sentimental', 'Romantic','Dramedy']
            },
          ]
        },
        {
          header: 'Trending Now',
          movies: [
            {
              imgUrl: '../thumbnail-horizontal/2.jpg',
              name: 'Romance Is a Bonus Book',
              info: ['98% Match', '1 Season'],
              categories: ['Sentimental', 'Romantic','Dramedy']
            },
            {
              imgUrl: '../thumbnail-horizontal/2.jpg',
              name: 'Romance Is a Bonus Book',
              info: ['98% Match', '1 Season'],
              categories: ['Sentimental', 'Romantic','Dramedy']
            },
            {
              imgUrl: '../thumbnail-horizontal/2.jpg',
              name: 'Romance Is a Bonus Book',
              info: ['98% Match', '1 Season'],
              categories: ['Sentimental', 'Romantic','Dramedy']
            },
            {
              imgUrl: '../thumbnail-horizontal/2.jpg',
              name: 'Romance Is a Bonus Book',
              info: ['98% Match', '1 Season'],
              categories: ['Sentimental', 'Romantic','Dramedy']
            },
          ]
        },
        {
          header: 'New Releases',
          movies: [
            {
              imgUrl: '../thumbnail-horizontal/2.jpg',
              name: 'Romance Is a Bonus Book',
              info: ['98% Match', '1 Season'],
              categories: ['Sentimental', 'Romantic','Dramedy']
            },
            {
              imgUrl: '../thumbnail-horizontal/2.jpg',
              name: 'Romance Is a Bonus Book',
              info: ['98% Match', '1 Season'],
              categories: ['Sentimental', 'Romantic','Dramedy']
            },
            {
              imgUrl: '../thumbnail-horizontal/2.jpg',
              name: 'Romance Is a Bonus Book',
              info: ['98% Match', '1 Season'],
              categories: ['Sentimental', 'Romantic','Dramedy']
            },
            {
              imgUrl: '../thumbnail-horizontal/2.jpg',
              name: 'Romance Is a Bonus Book',
              info: ['98% Match', '1 Season'],
              categories: ['Sentimental', 'Romantic','Dramedy']
            },
          ]
        },
        {
          header: 'Top Picks for Loi',
          movies: [
            {
              imgUrl: '../thumbnail-horizontal/2.jpg',
              name: 'Romance Is a Bonus Book',
              info: ['98% Match', '1 Season'],
              categories: ['Sentimental', 'Romantic','Dramedy']
            },
            {
              imgUrl: '../thumbnail-horizontal/2.jpg',
              name: 'Romance Is a Bonus Book',
              info: ['98% Match', '1 Season'],
              categories: ['Sentimental', 'Romantic','Dramedy']
            },
            {
              imgUrl: '../thumbnail-horizontal/2.jpg',
              name: 'Romance Is a Bonus Book',
              info: ['98% Match', '1 Season'],
              categories: ['Sentimental', 'Romantic','Dramedy']
            },
            {
              imgUrl: '../thumbnail-horizontal/2.jpg',
              name: 'Romance Is a Bonus Book',
              info: ['98% Match', '1 Season'],
              categories: ['Sentimental', 'Romantic','Dramedy']
            },
          ]
        },
        {
          header: 'Because you watched Vegabond',
          movies: [
            {
              imgUrl: '../thumbnail-horizontal/2.jpg',
              name: 'Romance Is a Bonus Book',
              info: ['98% Match', '1 Season'],
              categories: ['Sentimental', 'Romantic','Dramedy']
            },
            {
              imgUrl: '../thumbnail-horizontal/2.jpg',
              name: 'Romance Is a Bonus Book',
              info: ['98% Match', '1 Season'],
              categories: ['Sentimental', 'Romantic','Dramedy']
            },
            {
              imgUrl: '../thumbnail-horizontal/2.jpg',
              name: 'Romance Is a Bonus Book',
              info: ['98% Match', '1 Season'],
              categories: ['Sentimental', 'Romantic','Dramedy']
            },
            {
              imgUrl: '../thumbnail-horizontal/2.jpg',
              name: 'Romance Is a Bonus Book',
              info: ['98% Match', '1 Season'],
              categories: ['Sentimental', 'Romantic','Dramedy']
            },
          ]
        },
        
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
  .main {
    padding: 0;

    &::before {
      position: absolute;
      top: 0; left: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(to bottom #000c, #000a, #0000);
    }
  }
  
  .main-carousel {
    margin: 0;
    padding: 3rem 0 6rem;
  }

  .row-carousel {
    margin: 0 auto 2rem;
  }
</style>
