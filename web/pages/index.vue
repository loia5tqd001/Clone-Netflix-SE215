<template>
  <v-container fluid>

    <MainCarousel></MainCarousel>

    <!-- <v-row>
     <v-carousel
      cycle
      height="400"
      hide-delimiters
      show-arrows-on-hover
      multiple
      :value="colors"
    >
      <v-carousel-item
        v-for="(color, i) in colors"
        :key="i"
      >
        <movie-card></movie-card>
        <movie-card></movie-card>
        <movie-card></movie-card>
        
        
      </v-carousel-item>
    </v-carousel>
    </v-row> -->

    <!-- <movie-card></movie-card>
    <movie-card></movie-card> -->
<!-- 
    <v-row>
      <v-col cols="12" sm="8" md="6">
        <card-home
          srcImg="../thumbnail-horizontal/3.jpg"
          title="This is the title of the movie"
        ></card-home>
      </v-col>

      <v-col cols="12" sm="8" md="6">
        <card-home
          srcImg="../thumbnail-horizontal/3.jpg"
          title="This is the title of the movie"
        ></card-home>
      </v-col>
    </v-row> -->




  </v-container>
</template>

<script>
import CardHome from "~/components/CardHome";
import CardBrowse from "~/components/CardBrowse";
import Carousel from "~/components/Carousel";
import MovieCard from "~/components/MovieCard";
import MainCarousel from "~/components/MainCarousel";

export default {
  components: {
    CardHome,
    CardBrowse,
    Carousel,
    MovieCard,
    MainCarousel
  },
  data() {
    return {
    };
  }
};
</script>
