<template>
  <section>
    <navigation></navigation>
    <div class="ui middle aligned center aligned grid">
      <div class="column">
        <form class="ui large form">
          <div class="ui stacked secondary segment">
            <div class="field"></div>
            <div class="field">
              <div class="ui left icon input large">
                <i class="mail icon"></i>
                <input
                  type="text"
                  name="email"
                  placeholder="E-mail address"
                  v-model="email"
                />
              </div>
            </div>
            <div class="field">
              <div class="ui left icon input large">
                <i class="lock icon"></i>
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  v-model="password"
                />
              </div>
            </div>
            <div
              class="ui fluid large pink submit button"
              @click="registerButtonPressed"
            >
              Register
            </div>
          </div>
          <div class="ui error message"></div>
        </form>
        <div class="ui message">
          Have an account already?
          <router-link :to="{ name: 'Login' }">Login</router-link>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import navigation from "@/components/NavBar.vue";
import firebase from "firebase";

export default {
  name: "Register",
  components: {
    navigation
  },
  data() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    async registerButtonPressed() {
      try {
        var { user } = await firebase
          .auth()
          .createUserWithEmailAndPassword(this.email, this.password);
        // signout
        firebase
          .auth()
          .signOut()
          .then(user => {
            this.$toast.open({
              message: "User created succefully. Please go to login page",
              type: "success",
              position: "top-right",
              dismissible: true
            });
            this.$router.push("/login");
          });
      } catch (error) {
        this.$toast.open({
          message: error.message,
          type: "error",
          position: "top-right",
          dismissible: true
        });
      }
    }
  }
};
</script>
