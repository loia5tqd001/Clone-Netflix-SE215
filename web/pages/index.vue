<template>
  <v-container>
    <v-row>
      <v-col cols="12" sm="8" md="6">
        <card-home
          srcImg="../3.jpg"
          title="This is the title of the movie"
        ></card-home>
      </v-col>

      <v-col cols="12" sm="8" md="6">
        <card-home
          srcImg="../3.jpg"
          title="This is the title of the movie"
        ></card-home>
      </v-col>

    </v-row>

    <v-row>
      <netflix-carousel></netflix-carousel>
    </v-row>
  </v-container>
</template>

<script>
import CardHome from "~/components/CardHome";
import CardBrowse from "~/components/CardBrowse";
import NetflixCarousel from '~/components/NetflixCarousel'

export default {
  components: {
    CardHome,
    CardBrowse,
    NetflixCarousel
  },
  data() {
    return {};
  }
};
</script>
