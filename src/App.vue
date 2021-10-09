<template>
  <div id="app">
    <the-main />
    <the-delivery />
  </div>
</template>

<script>
import TheMain from "@/components/TheMain.vue";
import TheDelivery from "./components/TheDelivery.vue";
export default {
  name: "App",
  components: { TheMain, TheDelivery },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap");

#app {
  display: flex;
  font-family: "Roboto", sans-serif;
  color: #283044;
}
</style>
