<template>
  <section>
    <navigation></navigation>
    <h5 class="center-align">Login</h5>
    <section id="firebaseui-auth-container"></section>
  </section>
</template>

<script>
import navigation from "@/components/NavBar.vue";
import firebase from "firebase";
import firebaseui from "firebaseui";
import "firebaseui/dist/firebaseui.css";

export default {
  components: {
    navigation,
  },
  name: "Login",
  data() {
    return {};
  },
  mounted: {
    
  }
};
</script>

<style>
</style>