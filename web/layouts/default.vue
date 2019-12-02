<template>
  <v-app dark>
    <v-app-bar app>
      <nuxt-link to="/">
        <v-img
          class="mx-8 my-4"
          src="../netflix_logo.svg"
          max-height="100%"
          max-width="120"
        ></v-img>
      </nuxt-link>

      <v-btn text small nuxt exact active-class="link-active" to="/">Home</v-btn>
      <v-btn text small nuxt exact active-class="link-active" to="/history">History</v-btn>
      <v-btn text small nuxt exact active-class="link-active" to="/my-list">My List</v-btn>
      <v-btn text small nuxt exact active-class="link-active" to="/recently-added">Recently Added</v-btn>
      <v-btn text small nuxt exact active-class="link-active" to="/reviews">Reviews</v-btn>

      <v-spacer></v-spacer>

      <v-text-field 
        clearable 
        color="white"
        class="ml-12 mt-4"
        append-icon="mdi-magnify"
      ></v-text-field>

      <v-menu
        open-on-hover
        offset-x
        offset-y
        close-on-click
        close-on-content-click
      >
        <template v-slot:activator="{ on }">
          <v-avatar 
            v-on="on"
            tile
            color="red"
            size="44"
            class="mx-8"
          ><img src="https://i.pravatar.cc/300">
          </v-avatar>
        </template>
        <v-list>
          <v-list-item> 
            <v-list-item-title> Kiona Anh </v-list-item-title> 
            <v-btn text large nuxt to="/login">Switch</v-btn>
          </v-list-item>
          <v-list-item @click=""> 
            <v-list-item-title> Account </v-list-item-title> 
          </v-list-item>
          <v-list-item @click=""> 
            <v-list-item-title> Help Center </v-list-item-title> 
          </v-list-item>
          <v-list-item @click=""> 
            <v-list-item-title> Sign Out </v-list-item-title> 
          </v-list-item>
        </v-list>
      </v-menu>

    </v-app-bar>

    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>

    <v-footer>
      <span>&copy; 2019</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
    }
  }
}
</script>

<style lang="scss" scoped>
  .link-active {
    background: red;
  }

</style>
