<template>
  <div>
    <h1>about page</h1>
    <nuxt-link to="/home/article_detail">详情页</nuxt-link>
    <MountainsList />
  </div>
</template>

<script>
import MountainsList from '../../../components/MountainsList.vue';

export default {
    name: "AboutPage",
    components: { MountainsList }
};
</script>

<style>
</style>
