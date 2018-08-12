<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <welcome msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Welcome from '@/components/welcom.vue'

export default {
  name: 'home',
  components: {
    Welcome
  }
}
</script>
