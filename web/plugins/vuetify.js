import Vue from "vue";
import Vuetify, { VSnackbar, VBtn, VIcon } from "vuetify";
import VuetifyToast from "vuetify-toast-snackbar";

Vue.use(Vuetify, {
  components: {
    VSnackbar,
    VBtn,
    VIcon
  }
});

// https://github.com/eolant/vuetify-toast-snackbar
Vue.use(VuetifyToast, {
  x: "left",
  y: "bottom",
  color: "error", // default
  classes: ["title"]
});
