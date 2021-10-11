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
@media (max-width: 1215px) {
  .title {
    font-size: 66px;
    left: 40%;
  }
}
@media (max-width: 700px) {
  .backdrop {
    height: 100vw;
  }
  .title {
    font-size: 36px;
    top: 4vw;
    left: 50%;
    width: 125px;
  }
}
</style>