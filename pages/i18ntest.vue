<template>
  <div>
    {{ $t("welcome") }}
    {{ $t("messages") }}
    <hr>
    切换语言：
    <nuxt-link :to="switchLocalePath('en')">en</nuxt-link>
    <br>
    <nuxt-link :to="switchLocalePath('zh')">zh</nuxt-link>
    路由跳转(前提是配置好test路由)：
     <NuxtLink to="/" >跳转</NuxtLink>
    <br>
    <button @click="getI18n">获取到i18n实例</button>
  </div>
</template>

<script>
export default {
  name: "I18ntestPage",
  components: {},
  data() {
    return {};
  },
  methods: {
    getI18n() {
      console.log(this.$i18n);
    }
  },
  mounted() {},
  asyncData() {},
};
</script>
