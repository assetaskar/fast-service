<template>
  <footer class="footer">
    <div class="copyright">
      <div>All rights reserved</div>
      <div>Fast service {{ new Date().getFullYear() }}</div>
    </div>
    <the-payments />
  </footer>
</template>

<script>
import ThePayments from "./ThePayments.vue";
export default {
  components: { ThePayments },
  name: "Footer",
};
</script>

<style scoped>
.footer {
  padding: 30px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.copyright {
  font-size: 14px;
  color: #283044;
}
</style>