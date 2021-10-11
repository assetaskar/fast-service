<template>
  <div class="list">
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
.list {
  height: 100%;
  display: flex;
  justify-content: flex-end;
  flex-wrap: wrap;
  align-content: center;
  padding: 25px 0;
  padding-right: calc(((100vw - 1290px) / 2) - 25px);
  margin: 0 25px;
}
</style>