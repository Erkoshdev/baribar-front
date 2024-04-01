<template>
  <div class="main result">
    <div class="result-o">
      <img src="@/assets/img/main/result-o.svg" alt="">
    </div>
    <div class="result-container" ref="container">
      <div class="result-img">
        <img src="@/assets/img/main/result-img.png" alt="">
        <img class="result-img-sm" src="@/assets/img/main/result-img-sm.png" alt="">
      </div>
      <template v-if="point > 0 && point < 5">
        <div class="result-title">Жауап: <span>1-4 балл</span></div>
        <div class="result-subtitle">Сіз алаяқтың тұзағына оңай түсіп қалады екенсіз!</div>
        <div class="result-text">
          Сізге онлайн-қауіпсіздік туралы біраз ізденуге кеңес береміз. Әйтпесе, алаяқтар қалтаңыздағы барлық ақшаны қағып алайын деп тұр.
          <a target="_blank" href="https://blog.olx.kz/security/kak-zashhitit-bankovskuyu-kartu-ot-moshennikov/#:~:text=%25D1%2581%25D1%2582%25D1%2580%25D0%25B0%25D0%25BD%25D0%25BD%25D1%258B%25D0%25BC%2520URL%252D%25D0%25B0%25D0%25B4%25D1%2580%25D0%25B5%25D1%2581%25D0%25BE%25D0%25BC.-,%25D0%259E%25D1%2582%25D0%25BA%25D1%2580%25D0%25BE%25D0%25B9%25D1%2582%25D0%25B5%2520%25D0%25B2%25D0%25B8%25D1%2580%25D1%2582%25D1%2583%25D0%25B0%25D0%25BB%25D1%258C%25D0%25BD%25D1%2583%25D1%258E%2520%25D0%25B1%25D0%25B0%25D0%25BD%25D0%25BA%25D0%25BE%25D0%25B2%25D1%2581%25D0%25BA%25D1%2583%25D1%258E%2520%25D0%25BA%25D0%25B0%25D1%2580%25D1%2582%25D1%2583,-%25D0%25A1%2520%25D0%25B2%25D0%25B8%25D1%2580%25D1%2582%25D1%2583%25D0%25B0%25D0%25BB%25D1%258C%25D0%25BD%25D0%25BE%25D0%25B9%2520%25D0%25BA%25D0%25B0%25D1%2580%25D1%2582%25D0%25BE%25D0%25B9">OLX</a> виртуал карта ашуға кеңес береді. Мұндай картаны жоғалтып алмайсыз, алаяқтар да ондағы нөмірді көре алмайды. Ал өзіңіз ол арқылы онлайн кез келген тауарды да сатып ала аласыз, қолма-қол ақша да шығарып ала аласыз. Оған қоса Baribar.kz редакциясы OLX-пен бірге
          <a target="_blank" href="https://baribar.kz/230110/onlajn-auipsizdik-alaya-tardan-alaj-or-anu-a-bolady/">«Онлайн қауіпсіздік: алаяқтардан қалай қорғануға болады?»</a>
          деген материал жазды. Оқып көріңіз. Ал бұдан да толық ақпаратты
          <a target="_blank" href="https://blog.olx.kz/category/security-kz/">OLX cайтынан</a>
          оқуыңызға болады.
        </div>
      </template>
      <template v-if="point > 4 && point < 8">
        <div class="result-title">Жауап: <span>5-7 балл</span></div>
        <div class="result-subtitle">Алаяқтар айласының біразын біледі екенсіз!</div>
        <div class="result-text">
          Дегенмен тағы біраз ізденуге, сақтануға кеңес береміз. Сақтықта қорлық жоқ!
          <a target="_blank" href="https://blog.olx.kz/security/kak-zashhitit-bankovskuyu-kartu-ot-moshennikov/#:~:text=%25D1%2581%25D1%2582%25D1%2580%25D0%25B0%25D0%25BD%25D0%25BD%25D1%258B%25D0%25BC%2520URL%252D%25D0%25B0%25D0%25B4%25D1%2580%25D0%25B5%25D1%2581%25D0%25BE%25D0%25BC.-,%25D0%259E%25D1%2582%25D0%25BA%25D1%2580%25D0%25BE%25D0%25B9%25D1%2582%25D0%25B5%2520%25D0%25B2%25D0%25B8%25D1%2580%25D1%2582%25D1%2583%25D0%25B0%25D0%25BB%25D1%258C%25D0%25BD%25D1%2583%25D1%258E%2520%25D0%25B1%25D0%25B0%25D0%25BD%25D0%25BA%25D0%25BE%25D0%25B2%25D1%2581%25D0%25BA%25D1%2583%25D1%258E%2520%25D0%25BA%25D0%25B0%25D1%2580%25D1%2582%25D1%2583,-%25D0%25A1%2520%25D0%25B2%25D0%25B8%25D1%2580%25D1%2582%25D1%2583%25D0%25B0%25D0%25BB%25D1%258C%25D0%25BD%25D0%25BE%25D0%25B9%2520%25D0%25BA%25D0%25B0%25D1%2580%25D1%2582%25D0%25BE%25D0%25B9">OLX</a>
          виртуал карта ашуға кеңес береді. Мұндай картаны жоғалтып алмайсыз, алаяқтар да ондағы нөмірді көре алмайды. Ал өзіңіз ол арқылы онлайн кез келген тауарды да сатып ала аласыз, қолма-қол ақша да шығарып ала аласыз. Оған қоса Baribar.kz редакциясы OLX-пен бірге
          <a target="_blank" href="https://baribar.kz/230110/onlajn-auipsizdik-alaya-tardan-alaj-or-anu-a-bolady/">«Онлайн қауіпсіздік: алаяқтардан қалай қорғануға болады?»</a>
          деген материал жазды. Оқып көріңіз. Ал бұдан да толық ақпаратты
          <a target="_blank" href="https://www.figma.com/exit?url=https%3A%2F%2Fblog.olx.kz%2Fcategory%2Fsecurity-kz%2F">OLX cайтынан</a>
          оқуыңызға болады.
        </div>
      </template>
      <template v-if="point > 7">
        <div class="result-title">Жауап: <span>8-10 балл</span></div>
        <div class="result-subtitle">Тамаша! Алаяқтар сізді алдап соғуы мүмкін емес.</div>
        <div class="result-text">
          Өте қырағы екенсіз. Осындай мұқият болғаныңыздың арқасында алаяқтар сізден айласын асыра алмайды. Дегенмен алаяқтар жылдан жылға түрлі әдіс ойлап табатынын ескеріңіз де, онлайн қауіпсіздікке қатысты біліміңізді арттыра беріңіз.
          <a target="_blank" href="https://blog.olx.kz/security/kak-zashhitit-bankovskuyu-kartu-ot-moshennikov/#:~:text=%25D1%2581%25D1%2582%25D1%2580%25D0%25B0%25D0%25BD%25D0%25BD%25D1%258B%25D0%25BC%2520URL%252D%25D0%25B0%25D0%25B4%25D1%2580%25D0%25B5%25D1%2581%25D0%25BE%25D0%25BC.-,%25D0%259E%25D1%2582%25D0%25BA%25D1%2580%25D0%25BE%25D0%25B9%25D1%2582%25D0%25B5%2520%25D0%25B2%25D0%25B8%25D1%2580%25D1%2582%25D1%2583%25D0%25B0%25D0%25BB%25D1%258C%25D0%25BD%25D1%2583%25D1%258E%2520%25D0%25B1%25D0%25B0%25D0%25BD%25D0%25BA%25D0%25BE%25D0%25B2%25D1%2581%25D0%25BA%25D1%2583%25D1%258E%2520%25D0%25BA%25D0%25B0%25D1%2580%25D1%2582%25D1%2583,-%25D0%25A1%2520%25D0%25B2%25D0%25B8%25D1%2580%25D1%2582%25D1%2583%25D0%25B0%25D0%25BB%25D1%258C%25D0%25BD%25D0%25BE%25D0%25B9%2520%25D0%25BA%25D0%25B0%25D1%2580%25D1%2582%25D0%25BE%25D0%25B9">OLX</a>
          виртуал карта ашуға кеңес береді. Мұндай картаны жоғалтып алмайсыз, алаяқтар да ондағы нөмірді көре алмайды. Ал өзіңіз ол арқылы онлайн кез келген тауарды да сатып ала аласыз, қолма-қол ақша да шығарып ала аласыз. Оған қоса Baribar.kz редакциясы OLX-пен бірге
          <a target="_blank" href="https://baribar.kz/230110/onlajn-auipsizdik-alaya-tardan-alaj-or-anu-a-bolady/">«Онлайн қауіпсіздік: алаяқтардан қалай қорғануға болады?»</a>
          деген материал жазды. Оқып көріңіз. Ал бұдан да толық ақпаратты
          <a target="_blank" href="https://blog.olx.kz/category/security-kz/">OLX cайтынан</a>
          оқуыңызға болады.
        </div>
      </template>
      <router-link class="btn btn-main" to="/">Қайтадан тапсырып көріңіз</router-link>
    </div>
    <div class="result-x">
      <img src="@/assets/img/main/result-x.svg" alt="">
    </div>
  </div>
</template>

<script>
export default {
  name: "VResult",

  mounted() {
    this.setFrameSize()
  },

  data() {
    return {
      point: this.$route.query.point
    }
  },

  computed: {
    isDesktop() {
      return window.innerWidth > 767;
    }
  },

  methods: {
    setFrameSize() {
      const result = this.$refs.container;
      if(this.isDesktop) {
        const rightDistance = window.innerWidth - result.getBoundingClientRect().right;
        document.querySelector('.result-o').style.width = rightDistance + 'px';
        document.querySelector('.result-x').style.width = rightDistance + 'px'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.result {
  display: flex;
  flex-direction: column;
}
.result-o {
  position: fixed;
  left: 0;
  top: 80px;
  height: calc(100vh - 80px);
  overflow: hidden;
  background: #CBF7EE;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
.result-container {
  padding: 10px 55px 55px;
  background: #fff;
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 736px;
  margin: 0 auto;
  flex: 1;
}
.result-img-sm {
  display: none;
}
.result-img img {
  max-width: 100%;
}
.result-title {
  color: #002F34;
  font-family: "Platform OLX App";
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: 124.74%; /* 39.917px */
  text-transform: uppercase;
  margin-top: 20px;
  text-align: center;
  span {
    color: #23E5DB;
  }
}
.result-subtitle {
  margin-top: 20px;
  color: #002F34;
  text-align: center;
  font-family: "Platform OLX";
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 150%; /* 27px */
}
.result-text {
  color: #002F34;
  font-family: "Platform OLX";
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  text-align: center;
  a {
    color: #3B77FF;
  }
}
.result-container .btn {
  margin-top: 20px;
}
.result-x {
  position: fixed;
  right: 0;
  top: 80px;
  height: calc(100vh - 80px);
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
  }
}

@media (min-width: 992px) and (max-width: 1199px) {
  .result-container {
    width: 600px;
  }
}

@media (min-width: 768px) and (max-width: 991px) {
  .result-container {
    width: 500px;
  }
}

@media (max-width: 767px) {
  .result-o, .result-x {
    display: none;
  }
  .result-container {
    padding: 20px 15px;
    width: 100%;
  }
  .result-img img {
    display: none;
  }
  .result-img img.result-img-sm {
    display: block;
  }
  .result-title {
    margin-top: 30px;
    font-size: 26px;
  }
  .result-container .btn {
    width: 100%;
  }
}
</style>