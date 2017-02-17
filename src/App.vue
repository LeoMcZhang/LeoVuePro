<template>
  <div id="app">
    <el-button @click="visible = true">按钮</el-button>
    
    <ul>
        <li>
            <router-link to="/home">home</router-link> 
        </li>
        <li>
            <router-link to="/news">news</router-link>
        </li>
    </ul>
  <router-view></router-view> 
  </div>
</template>

<script>

</script>

<style>

</style>
