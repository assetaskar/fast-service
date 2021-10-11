<template>
  <div class="wrap">
    <delivery-list v-if="length" />
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
  flex: 48.2% 1 0;
  border-radius: 40px 0 0 40px;
  background-color: #f7f7f7;
  overflow: hidden;
}
@media (max-width: 700px) {
  .wrap {
    border-radius: 40px 40px 0 0;
  }
}
</style>