<template>
  <div>
    <Navbar/>
    <productlist />
    <div class="container mt-6">
      <div class="columns">
        <div class="column is-12 column--align-center">
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
  
</template>
<script>
import productlist from './components/productlist.vue'
import Navbar from './components/core/Navbar'
export default {
  name: 'App',
  components: {
    Navbar,
    productlist
  }
}
</script>
<style>
html,
body {
  height: 100%;
  background: #f2f6fa;
}
</style>
