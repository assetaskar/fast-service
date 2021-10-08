<template>
  <div>
    <span class="payment"><img src="@/assets/visa.png" alt="visa" /></span>
    <span class="payment"
      ><img src="@/assets/mastercard.png" alt="mastercard"
    /></span>
    <span class="payment"
      ><img src="@/assets/maestro.png" alt="maestro"
    /></span>
    <span class="payment"
      ><img src="@/assets/processing.png" alt="processing.kz"
    /></span>
  </div>
</template>

<script>
export default {
  name: "Payments",
};
</script>

<style>
.payment:not(:last-child) {
  margin-right: 10px;
}
</style>