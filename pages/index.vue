<template class="container">
  <div>
    <h1 class="hello">hello sister</h1>
    <nuxt-link to="/home/about">相关页</nuxt-link>
    <nuxt-link to="/login">去登录</nuxt-link>
  </div>
</template>

<script>
export default {
  name: "IndexPage",
}
</script>

<style>
.hello {
  font-family: '@font-face';
}
</style>
