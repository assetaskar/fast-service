<template>
  <div class="delivery-list">
    <delivery-list-item
      v-for="item in delivery"
      :key="item.type"
      v-bind="item"
      v-model="picked"
    />
  </div>
</template>

<script>
import DeliveryListItem from "./DeliveryListItem.vue";

export default {
  components: { DeliveryListItem },
  name: "DeliveryList",
  data: () => ({
    picked: "",
  }),
  computed: {
    delivery() {
      return this.$store.state.delivery;
    },
  },
};
</script>

<style scoped>
.delivery-list {
  padding: 25px;
}
</style>