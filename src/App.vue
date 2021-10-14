<template>
  <div id="app">
    <div class="main">
      <div class="container">
        <the-main />
      </div>
    </div>
    <div class="delivery">
      <the-delivery />
    </div>
    <div class="footer">
      <div class="container">
        <the-footer />
      </div>
    </div>
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
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-areas: "main delivery" "footer delivery";
  align-content: space-between;
  min-height: 100vh;
  font-family: "Roboto", sans-serif;
  color: #283044;
}
.main {
  grid-area: main;
}
.container {
  max-width: 575px;
  margin-left: max(0px, calc(((100vw - 1290px) / 2) - 25px));
}
.delivery {
  grid-area: delivery;
}
.footer {
  grid-area: footer;
}
@media (max-width: 700px) {
  #app {
    grid-template-columns: 1fr;
    grid-template-areas: "main" "delivery" "footer";
    grid-template-rows: auto 1fr auto;
  }
  .container {
    max-width: none;
  }
}
</style>
