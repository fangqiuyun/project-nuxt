<template>
  <div>
    <article>
      <h1>{{ page.title }}</h1>
      <nuxt-content :document="page" />
    </article>
  </div>
</template>

<script>
export default {
  async asyncData ({$content }) {
    console.log("$content", $content);
    const page = await $content('test').fetch()
    return {
      page
    }
  },
};
</script>
