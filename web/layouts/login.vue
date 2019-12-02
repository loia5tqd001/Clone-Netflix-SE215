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

      <v-spacer></v-spacer>

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
