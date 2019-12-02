<template>
  <v-btn text nuxt small exact active-class="link" :to="to">
    <slot/>
  </v-btn>
</template>

<script>
export default {
  props: {
    to: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
  .link {
    background: red;
  }
</style>