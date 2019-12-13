<template>
  <div class="wrapper">
    <v-icon light color="#db0000" :size="size">mdi-play</v-icon>
  </div>
</template>

<script>
export default {
  props: {
    size: {
      type: Number,
      default: 30
    }
  }
}
</script>

<style lang="scss" scope>
  * {
    --size: 2.5rem;
  }
  .wrapper {
    width: var(--size);
    height: var(--size);
    background: $color--white-subtle;
    border-radius: 50%;
    box-shadow: 0 4px 15px #0008;
    display: grid;
    place-content: center;
  }
</style>