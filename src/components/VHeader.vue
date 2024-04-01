<template>
  <div class="header">
    <div class="container">
      <div class="header-row">
        <span class="logo">
          <img src="@/assets/img/logo/logo.svg" alt="">
        </span>
        <span class="logo-olx">
          <img src="@/assets/img/logo/olx.svg" alt="">
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "VHeader"
}
</script>

<style lang="scss" scoped>
.header {
  background: #002F34;
  z-index: 5;
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
}
.header-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px 0;
  min-height: 80px;
}

@media (max-width: 767px) {
  .logo img {
    width: 108px;
  }
  .logo-olx img {
    width: 44px;
  }
  .header-row {
    min-height: 60px;
  }
}
</style>