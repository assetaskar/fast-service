<template>
  <div id="app">
    <the-main />
    <the-delivery />
    <the-footer class="mobile-footer" />
  </div>
</template>

<script>
import TheMain from "@/components/TheMain.vue";
import TheDelivery from "./components/TheDelivery.vue";
import TheFooter from "./components/TheFooter.vue";

export default {
  name: "App",
  components: { TheMain, TheDelivery, TheFooter },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap");

* {
  box-sizing: border-box;
}
#app {
  display: flex;
  font-family: "Roboto", sans-serif;
  color: #283044;
}
.mobile-footer {
  display: none !important;
}
@media (max-width: 700px) {
  #app {
    flex-direction: column;
  }
  .mobile-footer {
    display: flex !important;
  }
}
</style>
