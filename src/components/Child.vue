<template>
  <div class="child">
    <p>{{ message }}</p>
  </div>
</template>

<script>
export default {
  name: 'child',
  data () {
    return {
      message: 'I am nested',
    }
  }
}

</script>

<style scoped>

</style>

