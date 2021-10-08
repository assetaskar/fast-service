<template>
  <header class="header">
    <img alt="Vue logo" src="@/assets/logo.svg" class="img" />
    <span class="title">FastService</span>
  </header>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style scoped>
.header {
  display: flex;
  align-items: center;
  padding: 20px 0;
}
.img {
  margin-right: 15px;
}
.title {
  color: #283044;
  font-size: 24px;
  font-weight: bold;
}
</style>