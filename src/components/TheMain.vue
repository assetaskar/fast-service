<template>
  <div class="wrap">
    <the-header />
    <main class="main"></main>
    <the-footer />
  </div>
</template>

<script>
import TheFooter from "./TheFooter.vue";
import TheHeader from "./TheHeader.vue";
export default {
  components: { TheHeader, TheFooter },
  name: "Main",
};
</script>

<style scoped>
.wrap {
  min-height: 100vh;
  width: 50%;
  padding-left: calc((100vw - 1290px) / 2);
  padding-right: 145px;
  display: flex;
  flex-direction: column;
}
.main {
  flex-grow: 1;
}
</style>