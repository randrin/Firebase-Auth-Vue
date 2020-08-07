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

import "firebaseui/dist/firebaseui.css";

export default {
  components: {
    navigation
  },
  name: "Login",
  data() {
    return {};
  },
  mounted() {
    let ui = firebaseui.auth.AuthUI.getInstance();
    if (!ui) {
      ui = new firebaseui.auth.AuthUI(firebase.auth());
    }
    var uiConfig = {
      signInSuccessUrl: "/profile",
      signInOptions: [firebase.auth.FacebookAuthProvider.PROVIDER_ID]
    };
    ui.start("#firebaseui-auth-container", uiConfig);
  }
};
</script>

<style></style>
