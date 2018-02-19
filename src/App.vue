<template>
  <div id="app">
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
body {
  margin: 0;
  background-color: #35495E;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

main {
  text-align: center;
  height: 100vh;
  background-color: #ffffff;
}

header {
  margin: 0;
  height: 56px;
  padding: 0 16px 0 24px;
  background-color: #35495E;
  color: #ffffff;
  font-size: 20px;
  line-height: 1;
  letter-spacing: .02em;
  font-weight: 400;
  display: flex;
}

header .logo {
  flex: 1;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}

header .player {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}

header .settings {
   flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
</style>
