<template>
  <section>
    <no-ssr>
      <!-- 此组件只在客户端呈现，意味着，使用该组件包裹的内容都不属于SSR，在网页源码中都不可见。这点需要注意。 -->
      <vue-particles
        class="lizi"
        color="#fff"
        :particleOpacity="0.7"
        :particlesNumber="60"
        shapeType="circle"
        :particleSize="4"
        linesColor="#fff"
        :linesWidth="1"
        :lineLinked="true"
        :lineOpacity="0.4"
        :linesDistance="150"
        :moveSpeed="2"
        :hoverEffect="true"
        hoverMode="grab"
        :clickEffect="true"
        clickMode="push"
      >
      </vue-particles>
    </no-ssr>
  </section>
</template>
<style>
  .lizi {
    background-color: black;
    width: 98%;
    height: 100px;
    margin: 0 auto;
  }
</style>

<script>
export default {
  name: 'SpecialEffects'
}
</script>