<template>
  <div>
    <h2 class="title">Most popular cities</h2>
    <ul class="list">
      <li
        class="item"
        v-for="city in cities"
        :key="city"
        @click="$emit('getCity', city)"
      >
        {{ city }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "PopularCities",
  data: () => ({
    cities: [
      "Nur-Sultan",
      "Zhana Turmis",
      "Almaty",
      "Karaganda",
      "Shymkent",
      "Kentau",
      "Atyrau",
      "Aktau",
      "Pavlodar",
      "Kokshetau",
    ],
  }),
};
</script>

<style scoped>
.title {
  font-size: 24px;
  margin-bottom: 30px;
}
.list {
  padding-inline-start: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.item {
  list-style: none;
  width: 42%;
  font-size: 20px;
  line-height: 2;
  color: rgba(40, 48, 68, 0.5);
  border-bottom: 1px solid #e9f0eb;
  margin-bottom: 10px;
  padding-left: 20px;
  cursor: pointer;
}
.item:hover {
  background-color: #e9f0eb;
}
@media (max-width: 1215px) {
  .title {
    font-size: 16px;
    font-weight: normal;
  }
  .item {
    font-size: 14px;
    line-height: 2.5;
    width: 45%;
    padding-left: 15px;
  }
}
</style>