<template>
  <div id="app">
    <nav>
      <ul>
        <li><router-link to="/todox">Foo</router-link></li>
        <li><router-link to="/todox">Todo with VueX</router-link></li>

      </ul>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
