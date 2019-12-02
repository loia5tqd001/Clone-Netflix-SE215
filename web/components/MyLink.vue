<template>
  <v-hover v-slot:default="{ hover }">
    <v-btn text nuxt small exact active-class="link-active" :class="{ 'link-active': hover }" :to="to">
      <slot/>
    </v-btn>
  </v-hover>
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

<style scope>
  .link-active:before {
    font-size: 1.1rem;
    background: none;
  }
</style>