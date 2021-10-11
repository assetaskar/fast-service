<template>
  <div class="city-list-wrap">
    <div class="city-list">
      <div
        class="city-list__item"
        v-for="city in cities"
        :key="city"
        @click="$emit('help', city)"
      >
        {{ city }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "InputSearchHelp",
  props: {
    cities: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style scoped>
.city-list-wrap {
  padding: 0 20px;
  font-size: 20px;
}
.city-list {
  border-top: 1px solid #e9f0eb;
  padding-top: 5px;
}
.city-list__item {
  padding: 25px 20px 10px;
  cursor: pointer;
}
.city-list__item:not(:last-child) {
  border-bottom: 1px solid #e9f0eb;
}
.city-list__item:hover {
  background-color: rgb(238, 238, 238);
}
@media (max-width: 1215px) {
  .city-list-wrap {
    font-size: 16px;
    padding: 0 15px;
  }
  .city-list__item {
    padding: 25px 5px 10px;
  }
}
</style>