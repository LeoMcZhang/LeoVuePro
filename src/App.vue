<template>
  <div id="app">
  <headerNav></headerNav>
  <router-view></router-view> 
  </div>
</template>

<script>

import HeaderNav from './component/headerNav.vue'

export default{
  components:{

    'headerNav':HeaderNav
  }
}
</script>

<style scope>

</style>
