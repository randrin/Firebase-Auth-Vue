<template>
  <section>
    <navigation></navigation>
    <h5 class="center-align">Profile</h5>
  </section>
</template>

<script>
import navigation from "@/components/NavBar.vue";
import firebase from "firebase";
export default {
  data() {
    return {
      user: null
    };
  },
  components: {
    navigation
  },
  created() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.user = user;
      }
    });
  }
};
</script>
