// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import firebase from '@/firebase/'

import Vue from 'vue'
import VueFire from 'vuefire'
import App from './App'
import router from './router'

Vue.use(VueFire)

Vue.config.productionTip = false

let app

/* eslint-disable no-unused-vars */
firebase.auth().onAuthStateChanged(function (user) {
  if (!app) {
    /* eslint-disable no-new */
    app = new Vue({
      el: '#app',
      router,
      template: '<App/>',
      components: { App }
    })
  }
})
