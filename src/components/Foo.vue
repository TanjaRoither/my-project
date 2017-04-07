<template>
  <div class="foo">
    <p>{{ message }}</p>
    <nav>
      <ul>
        <li><router-link to="/foo/fooa">Foo A</router-link></li>
        <li><router-link to="/foo/foob">Foo B</router-link></li>
        <li> | <router-link to="/foo">Close</router-link></li>
      </ul>
    </nav>
    <router-view></router-view>
  </div>

</template>

<script>
export default {
  data () {
    return {
      message: 'I am foo',
    }
  }
}

</script>

<style scoped>

</style>

