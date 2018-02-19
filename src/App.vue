<template>
  <div id="app">
    <header>
      <div style="float:left;"><icon name="headphones"></icon> ArenaDJ</div>
      <div v-if="isLoggedIn" style="float: right;"><icon name="cog"></icon></div>
    </header>
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
export default {
  name: 'app',
  computed: {
    isLoggedIn: function () {
      return this.$route.meta.requiresAuth
    }
  }
}
</script>

<style>
body {
  margin: 0;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

main {
  text-align: center;
  margin-top: 40px;
}

header {
  margin: 0;
  height: 56px;
  padding: 0 16px 0 24px;
  background-color: #35495E;
  color: #ffffff;
}

header div {
  font-size: 20px;
  line-height: 1;
  letter-spacing: .02em;
  font-weight: 400;
  padding-top: 16px;
}
</style>
