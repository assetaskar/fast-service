<template>
  <div class="backdrop">
    <div class="title">Fast Service</div>
    <img src="@/assets/bg-delivery.png" alt="delivery" class="image" />
  </div>
</template>

<script>
export default {
  name: "DeliveryBackground",
};
</script>

<style scoped>
.backdrop {
  height: 100%;
  position: relative;
}
.title {
  width: 325px;
  font-size: 96px;
  font-weight: bold;
  color: rgba(40, 48, 68, 0.1);
  position: absolute;
  left: 48%;
  top: 8.5vh;
}
.image {
  width: 100%;
  position: absolute;
  left: 0;
  bottom: 0;
}
</style>