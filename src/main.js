// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import firebase from '@/firebase/'
import BootstrapVue from 'bootstrap-vue'
import Vue from 'vue'
import VueFire from 'vuefire'
import App from './App'
import router from './router'
import 'vue-awesome/icons'
import Icon from 'vue-awesome/components/Icon'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(VueFire)

Vue.use(BootstrapVue)
Vue.config.productionTip = false

Vue.component('icon', Icon)

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
