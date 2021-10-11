<template>
  <footer class="footer">
    <div class="copyright">
      <div>All rights reserved</div>
      <div>Fast service {{ new Date().getFullYear() }}</div>
    </div>
    <the-payments class="m" />
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
}
@media (max-width: 700px) {
  .footer {
    padding: 40px 25px 25px;
  }
}
@media (max-width: 350px) {
  .footer {
    flex-direction: column;
    align-items: flex-start;
  }
  .copyright {
    order: 2;
  }
  .m {
    margin-bottom: 20px;
    margin-right: 30px;
  }
}
</style>