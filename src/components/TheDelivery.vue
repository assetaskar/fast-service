<template>
  <div class="wrap">
    <div class="list-container" v-if="length">
      <div class="list">
        <delivery-list />
      </div>
    </div>
    <delivery-background v-else />
  </div>
</template>

<script>
import DeliveryBackground from "./DeliveryBackground.vue";
import DeliveryList from "./DeliveryList.vue";

export default {
  name: "Delivery",
  components: { DeliveryBackground, DeliveryList },
  computed: {
    length() {
      return this.$store.state.delivery.length;
    },
  },
};
</script>

<style scoped>
.wrap {
  height: 100%;
  border-radius: 40px 0 0 40px;
  background-color: #f7f7f7;
  overflow: hidden;
}
.list-container {
  height: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding-right: calc(((100vw - 1290px) / 2) - 25px);
}
.list {
  flex-grow: 1;
  max-width: 575px;
}
@media (max-width: 700px) {
  .wrap {
    border-radius: 40px 40px 0 0;
  }
  .list {
    max-width: none;
  }
}
</style>