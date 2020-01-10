import Vue from "vue";
import VuetifyToast from "vuetify-toast-snackbar";

// https://github.com/eolant/vuetify-toast-snackbar#usage
Vue.use(VuetifyToast, {
  x: "left",
  y: "bottom",
  color: "error",
  classes: ["title"]
});
