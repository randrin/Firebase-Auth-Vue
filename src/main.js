// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyAoI97OZEueeefa3bsxkWqcPkXO4uCsIew",
  authDomain: "auth-firebase-vue-aa54a.firebaseapp.com",
  databaseURL: "https://auth-firebase-vue-aa54a.firebaseio.com",
  projectId: "auth-firebase-vue-aa54a",
  storageBucket: "auth-firebase-vue-aa54a.appspot.com",
  messagingSenderId: "87463160620",
  appId: "1:87463160620:web:98836a65f968c0a78cda89",
  measurementId: "G-1NJ5M3RPCY"
};
firebase.initializeApp(firebaseConfig);

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
