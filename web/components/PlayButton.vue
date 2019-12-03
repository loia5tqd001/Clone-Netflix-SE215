<template>
  <v-btn class="white" fab> 
    <v-icon light color="red" :size="size">mdi-play</v-icon>
  </v-btn>
</template>

<script>
export default {
  props: {
    size: {
      type: Number,
      default: 40
    }
  }
}
</script>

<style scope>
</style>