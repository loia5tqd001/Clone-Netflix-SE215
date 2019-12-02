<template>
  <v-layout>
    <v-col text-xs-center>
      <p class="display-1 text-center mt-4 mb-12">Who is online?</p>

      <v-row>
        <v-hover 
          v-for="(avatar, i) in avatars"
          :key="i"
          v-slot:default="{ hover }"
        >
          <v-card
            :elevation="hover ? 12 : 2"
            class="mx-4"
            tile nuxt exact to="/"
            :width="avatarSize"
            :height="avatarSize"
          >
              <v-img
                :src="avatar.src"
                :height="avatarSize"
                :class="{ scale: hover }"
              ></v-img>
              <v-card-title 
                class="display-1 justify-center" 
                :class="{ scale: hover }"
              >{{ avatar.name }}</v-card-title>
          </v-card>
        </v-hover>
      </v-row>
    </v-col>
  </v-layout>
</template>

<script>
export default {
  layout: 'login',
  data() {
    return {
      avatarSize: 200,
      avatars: [
        { src: 'https://i.pravatar.cc/300', name: 'Loi' },
        { src: 'https://i.pravatar.cc/301', name: 'LaLa' },
        { src: 'https://i.pravatar.cc/302', name: 'Kids' },
        { src: 'https://i.pravatar.cc/303', name: 'David' },
        { src: 'https://i.pravatar.cc/304', name: 'Maria' },
      ]
    }
  }
};
</script>

<style>
  .scale {
    transform: scale(1.05);
    transition: transform .3s;
  }
</style>
