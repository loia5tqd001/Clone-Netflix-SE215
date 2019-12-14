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

      <my-link to="/">Home</my-link>
      <my-link to="/history">History</my-link>
      <my-link to="/my-list">My List</my-link>
      <my-link to="/recently-added">Recently Added</my-link>
      <my-link to="/reviews">Reviews</my-link>
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
      >
        <template #activator="{ on }">
          <v-avatar 
            v-on="on"
            tile
            color="white"
            size="44"
            class="mx-8"
          ><img class="avatar" src="https://i.pravatar.cc/100">
          </v-avatar>
        </template>
        <v-list>
          <v-list-item> 
            <v-list-item-title> Kiona Anh </v-list-item-title> 
            <my-link class="ml-4" to="/login">Switch</my-link>
          </v-list-item>
          <v-list-item to="/login"> 
            <v-list-item-title> Account </v-list-item-title> 
          </v-list-item>
          <v-list-item to="/login"> 
            <v-list-item-title> Help Center </v-list-item-title> 
          </v-list-item>
          <v-list-item to="/login"> 
            <v-list-item-title> Sign Out </v-list-item-title> 
          </v-list-item>
        </v-list>
      </v-menu>

    </v-app-bar>

    <v-content>
      <nuxt/>
    </v-content>

    <v-footer>
      <span>&copy; 2019</span>
    </v-footer>
  </v-app>
</template>

<script>
import MyLink from '~/components/MyLink'

export default {
  components: {
    MyLink
  },
  data () {
    return {
    }
  }
}
</script>

<style scoped>
  .avatar {
    border-radius: 10%;
    box-shadow: 0 4px 15px #0008;
  }
</style>
