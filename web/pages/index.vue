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
        <v-slide-group
          v-model="model"
          class="pa-4"
        >
          <v-slide-item
            v-for="n in 5"
            :key="n"
            #default="{ active, toggle }"
          >
            <v-col cols="6">
              <card-browse
                :color="active ? 'primary' : 'grey lighten-1'"
                class="ma-4"
                height="200"
                @click="toggle"
                srcImg="../4.jpg"
                title=""
              >
                <v-row
                  class="fill-height"
                  align="center"
                  justify="center"
                >
                  <v-scale-transition>
                    <v-icon
                      v-if="active"
                      color="white"
                      size="48"
                      v-text="'mdi-close-circle-outline'"
                    ></v-icon>
                  </v-scale-transition>
                </v-row>
              </card-browse>
            </v-col>
          </v-slide-item>
        </v-slide-group>
    </v-row>
  </v-container>
</template>

<script>
import CardHome from "~/components/CardHome";
import CardBrowse from "~/components/CardBrowse";

export default {
  components: {
    CardHome,
    CardBrowse
  },
  data() {
    return {};
  }
};
</script>
