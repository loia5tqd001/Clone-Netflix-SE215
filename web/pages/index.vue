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
  </v-container>
</template>

<script>
import CardHome from "~/components/CardHome";

export default {
  components: {
    CardHome
  },
  data() {
    return {};
  }
};
</script>
