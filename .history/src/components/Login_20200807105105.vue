<template>
  <section>
    <navigation></navigation>
    <h5 class="center-align">Login</h5>
  </section>
</template>

<script>
import navigation from "@/components/NavBar.vue";
import firebase from "firebase";
import firebaseui from "firebaseui";
import "firebaseui/dist/firebaseui.css";

export default {
  name: "Login",
  data() {
    return {};
  },
  components: {
    navigation,
  },
};
</script>

<style>
</style>