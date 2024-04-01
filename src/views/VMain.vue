<template>
  <div class="main promo">
    <div class="container">
      <div class="promo-row" ref="promoRow">
        <div class="promo-o">
          <img src="@/assets/img/main/frame-o.svg" alt="">
        </div>
        <div class="promo-caption">
          <img src="@/assets/img/main/robot-lg.svg" alt="">
          <h1>Тест: Интернет-алаяқтардан қаншалық қорғана аласыз?</h1>
          <p>10 сұрақ</p>
          <router-link class="btn btn-main" to="/test">Тест тапсыру</router-link>
        </div>
        <div class="promo-img">
          <img src="@/assets/img/main/hacker-man-laptop.png" alt="">
        </div>
        <div class="promo-x">
          <img src="@/assets/img/main/frame-x.svg" alt="">
          <img class="promo-x-sm" src="@/assets/img/main/frame-x-sm.svg" alt="">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "VMain",

  data() {
    return {

    }
  },

  mounted() {
    this.setPromoFrame()
  },

  computed: {
    isDesktop() {
      return window.innerWidth > 767;
    }
  },

  methods: {
    setPromoFrame() {
      const promo = this.$refs.promoRow;
      if(this.isDesktop) {
        const promoRightDistance = window.innerWidth - promo.getBoundingClientRect().right;
        document.querySelector('.promo-x').style.cssText = `right: -${promoRightDistance}px; width: ${promoRightDistance + 52}px`;
      }
    }
  }


}
</script>

<style lang="scss" scoped>
.promo {
  overflow-y: hidden;
  height: calc(100vh - 80px);
  position: relative;
}
.promo-row {
  display: flex;
  position: relative;
  padding-right: 52px;
}
.promo-o {
  display: none;
}
.promo-caption {
  width: 860px;
  height: 860px;
  padding: 30px;
  flex-shrink: 0;
  background: #fff;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 20px;
  border: 180px solid #23E5DB;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: -180px;
  h1 {
    text-align: center;
    font-family: "Platform-OLX-App";
    font-size: 32px;
    font-style: normal;
    font-weight: 700;
    text-transform: uppercase;
  }
  p {
    color: #002F34;
    text-align: center;
    font-family: Platform;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 124.74%; /* 22.453px */
  }
}
.promo-img {
  width: 473px;
  height: calc(100vh - 80px);
  flex-shrink: 0;
  margin-left: auto;
  overflow: hidden;
  position: relative;
  z-index: 1;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
.promo-x {
  position: absolute;
  right: 0;
  top: 0;
  height: calc(100vh - 80px);
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
.promo-x-sm {
  display: none;
}

@media (min-width: 992px) and (max-width: 1199px) {
  .promo-img {
    width: 400px;
  }
  .promo-caption {
    width: 700px;
    height: 700px;
    border-width: 120px;
    left: -120px;
  }
}

@media (min-width: 768px) and (max-width: 991px) {
  .promo {
    padding: 30px 0;
  }
  .promo-img {
    display: none;
  }
  .promo-caption {
    position: static;
    transform: none;
    width: 670px;
    height: 670px;
    border-width: 100px;
    padding: 24px;
    gap: 15px;
  }
  .promo-caption h1 {
    font-size: 28px;
  }
  .promo-x {
    display: none;
  }
}

@media (max-width: 767px) {
  .promo {
    height: initial;
    overflow-y: initial;
    display: flex;
    flex-direction: column;
    min-height: calc(100vh - 60px);
    .container {
      display: flex;
      flex-direction: column;
      flex: 1;
    }
  }
  .promo-row {
    padding: 0;
    width: calc(100% + 30px);
    margin: 0 -15px;
    flex-direction: column;
    flex: 1;
  }
  .promo-caption {
    flex: 1;
    width: 100%;
    height: fit-content;
    padding: 35px 20px;
    gap: 27px;
    border: none;
    position: static;
    transform: none;
    img {
      width: 63px;
    }
    h1 {
      font-size: 26px;
    }
    .btn {
      width: 100%;
    }
  }
  .promo-img{
    display: none;
  }
  .promo-o {
    display: block;
    height: 85px;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  .promo-x img {
    display: none;
  }
  .promo-x img.promo-x-sm {
    display: block;
  }
  .promo-x {
    position: static;
    height: 85px;
    width: 100%;
  }
}
</style>