<template>
  <v-container>
    <p class="text-center mt-lg-4 mb-lg-12" :class="responsiveSize.font">Who is online?</p>

    <v-row>
      <v-col v-for="(avatar, i) in avatars" :key="i" class="avatar-wrapper">
        <nuxt-link tag="div" class="avatar" to="/">
          <v-img
            class="img"
            :src="avatar.src"
            :height="responsiveSize.avatar"
            :width="responsiveSize.avatar"
          ></v-img>
          <h1 class="mt-2 text-center" :class="responsiveSize.font">
            {{ avatar.name }}
          </h1>
        </nuxt-link>
      </v-col>
    </v-row>

  </v-container>
</template>

<script>
export default {
  layout: "login",
  data() {
    return {
      avatars: [
        { src: "avatars/avatar-1.jpeg", name: "Loi" },
        { src: "avatars/avatar-2.jpeg", name: "LaLa" },
        { src: "avatars/avatar-3.jpeg", name: "Kids" },
        { src: "avatars/avatar-4.jpeg", name: "David" },
        { src: "avatars/avatar-5.jpeg", name: "Maria" }
      ]
    };
  },
  computed: {
    responsiveSize() {
      const { breakpoint } = this.$vuetify
      if (breakpoint.smAndDown) {
        return { avatar: 100, font: 'title' }
      } else if (breakpoint.mdAndDown) {
        return { avatar: 150, font: 'headline' }
      } else {
        return { avatar: 200, font: 'display-1' }
      }
    }
  }
};
</script>

<style scoped>
  .avatar-wrapper {
    display: flex;
    justify-content: center;
  }
  .avatar {
    display: inline-block;
    transition: transform .2s, cursor .2s;
  }
  .avatar:hover {
    transform: scale(1.05);
    cursor: pointer;
  }
  .avatar:hover .img {
    transition: border .2s;
    border: 2px solid white;
  }
</style>
