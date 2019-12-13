<template>
  <v-container>

    <movie-card></movie-card>
    <movie-card></movie-card>
    <movie-card></movie-card>

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
    </v-row>

    <v-row>
      <carousel></carousel>
      <carousel></carousel>
      <carousel></carousel>
      <carousel></carousel>
      <carousel></carousel>
    </v-row>

  </v-container>
</template>

<script>
import CardHome from "~/components/CardHome";
import CardBrowse from "~/components/CardBrowse";
import Carousel from "~/components/Carousel";
import MovieCard from "~/components/MovieCard";

export default {
  components: {
    CardHome,
    CardBrowse,
    Carousel,
    MovieCard
  },
  data() {
    return {};
  }
};
</script>
