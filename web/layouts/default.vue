<template>
  <v-app class="app" dark>
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
        @blur="goBack"
        v-model="searchText"
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
          ><img class="avatar" src="avatars/avatar-2.jpeg">
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

    <v-footer class="footer">
      <span style="margin-right: auto">&copy; 2019</span>
      <i class="social-icon fab fa-facebook-square"></i>
      <i class="social-icon fab fa-instagram"></i>
      <i class="social-icon fab fa-twitter"></i>
      <i class="social-icon fab fa-youtube"></i>
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
      searchText: ''
    }
  },
  methods: {
    goBack() {
      if (!this.searchText && this.$route.name === 'search') {
        this.$router.go(-1)
      }
    },
  },
  watch: {
    searchText(newValue) {
      if (newValue && this.$route.name !== 'search') {
        this.$router.push('/search')
      } 
      this.$store.commit("setSearchText", newValue)
    }
  }
}
</script>

<style scoped>
  .app {
    font-family: 'Montserrat', sans-serif;
  }

  .avatar {
    border-radius: 10%;
    box-shadow: 0 4px 15px #0008;
  }
  
  .footer {
    height: 3.5rem;
    display: flex;
    align-items: center;
    padding: 0 4rem;
  }

  .social-icon {
    margin-right: 1rem;
    display: inline-block;
    justify-self: flex-end;
  }
  .social-icon:hover {
    cursor: pointer;
  }
</style>
