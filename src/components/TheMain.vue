<template>
  <main class="main">
    <the-header />
  </main>
</template>

<script>
import TheHeader from "./TheHeader.vue";
export default {
  components: { TheHeader },
  name: "Main",
};
</script>

<style scoped>
.main {
  min-height: 100vh;
  width: 50%;
  padding-left: calc((100vw - 1290px) / 2);
}
</style>