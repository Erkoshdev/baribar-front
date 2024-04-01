<template>
  <div class="main test">
    <div class="container">
      <div class="test-row" ref="testRow">
        <div class="test-container">
          <div class="test-header">
            <img src="@/assets/img/main/robot-sm.svg" alt="">
            <div class="test-number">
              Сұрақ: <span>{{ currentQuestion.id }}</span>  /  {{ questions.length }}
            </div>
          </div>
          <div class="test-question">{{ currentQuestion.question }}</div>
          <div class="test-answers">
            <div
                class="test-answer"
                v-for="(item, itemIdx) in currentQuestion.answers"
                :key="itemIdx"
            >
              <button
                  class="test-answer-label"
                  :class="[isSelected && selectedAnswer === item? 'active': '', item.isCorrect? 'success': 'error']"
                  @click="handleAnswer(item)"
                  :disabled="isSelected"
              >
                <span class="checkmark"></span>
                {{ item.answer }}
              </button>
              <div class="test-answer-correct" v-show="isSelected && selectedAnswer === item">
                <b>Жауап</b>: {{ item.answerDesc }}
              </div>
            </div>
          </div>
          <div class="test-navigation" v-show="isSelected">
            <button class="btn btn-main" v-if="isLastQuestion" @click="handleFinish">Нәтижелерге</button>
            <button class="btn btn-main" v-else @click="handleNextQuestion">Келесі сұрақ</button>
          </div>
        </div>
        <div class="test-img">
          <img :src="currentQuestion.img" alt="">
          <img class="test-img-sm" :src="currentQuestion.imgSm" alt="">
        </div>
        <div class="test-x">
          <img src="@/assets/img/main/frame-x.svg" alt="">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import list from '../jsons/test'
export default {
  name: "VTest",

  mounted() {
    this.setPromoFrame();
    this.setDefaultCurrentQuestion()
  },

  data() {
    return {
      questions: list,
      currentQuestion: {},
      answers: [],
      isSelected: false,
      selectedAnswer: {},
    }
  },

  computed: {
    isDesktop() {
      return window.innerWidth > 767;
    },
    isLastQuestion() {
      const lastIdx = this.questions?.length - 1;
      const idx = this.questions?.findIndex(el => el.id === this.currentQuestion.id)
      return idx === lastIdx;
    },
    point() {
      return this.answers.filter(item => {
        return item === true
      }).length;
    }
  },

  methods: {
    setPromoFrame() {
      const promo = this.$refs.testRow;
      if(this.isDesktop) {
        const promoRightDistance = window.innerWidth - promo.getBoundingClientRect().right;
        document.querySelector('.test-x').style.width = promoRightDistance + 'px';
        document.querySelector('.test-img').style.right = promoRightDistance + 'px'
      }
    },
    setDefaultCurrentQuestion() {
      this.currentQuestion = this.questions[0];
    },
    handleNextQuestion() {
      let index = this.questions.findIndex(item => {
        return item === this.currentQuestion
      })
      this.isSelected = false;
      this.selectedAnswer = {};
      this.currentQuestion = this.questions[index + 1];
    },
    handleAnswer(item) {
      this.answers.push(item.isCorrect);
      this.isSelected = true;
      this.selectedAnswer = item;
    },
    handleFinish() {
      this.$router.push({ path: '/result', query: { point: this.point } })
    }
  }
}
</script>

<style lang="scss" scoped>
.test-row {
  position: relative;
  padding-right: 470px;
}
.test-container {
  flex: 1;
  padding: 42px 74px 42px 0;
}
.test-header {
  display: flex;
  align-items: center;
  gap: 27px;
}
.test-number {
  color: #002F34;
  font-family: "Platform OLX App";
  font-size: 21px;
  font-style: normal;
  font-weight: 700;
  line-height: 124.74%; /* 26.195px */
  text-transform: uppercase;
  white-space: nowrap;
  span {
    color: #23E5DB;
  }
}
.test-question {
  margin-top: 20px;
  color: #002F34;
  font-family: "Platform OLX";
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 27px */
}
.test-answers {
  margin-top: 20px;
}
.test-answer {
  padding: 15px 0;
  border-top: 1px solid #D9D9D9;
  border-bottom: 1px solid #D9D9D9;
}
.test-answer + .test-answer {
  border-top: none;
}
.test-answer-label {
  display: flex;
  gap: 20px;
  cursor: pointer;
  position: relative;
  width: 100%;
  border: none;
  background: transparent;
  color: #002F34;
  font-family: "Platform OLX";
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 124.74%;
  text-align: start;
}
.test-answer-label.active {
  &.success .checkmark:before {
    background-image: url("@/assets/img/icon/checkmark-success.svg");
  }
  &.error .checkmark:before {
    background-image: url("@/assets/img/icon/checkmark-error.svg");
  }
}
.checkmark {
  width: 24px;
  height: 24px;
  flex-shrink: 0;
  pointer-events: none;
}
.checkmark:before {
  content: '';
  background-image: url("@/assets/img/icon/checkmark.svg");
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  position: absolute;
  left: 0;
  top: 0;
  width: 24px;
  height: 24px;
}
.test-answer-checkbox.success {
  input:checked ~ p {
    color: #00CAC0;
  }
  input:checked ~ .checkmark:before {
    background-image: url("@/assets/img/icon/checkmark-success.svg");
  }
}
.test-answer-checkbox.error {
  input:checked ~ p {
    color: #FF5636;
  }
  input:checked ~ .checkmark:before {
    background-image: url("@/assets/img/icon/checkmark-error.svg");
  }
}
.test-answer-correct {
  margin-top: 15px;
  color: #002F34;
  font-family: "Platform OLX";
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
}
.test-answer-correct b {
  font-weight: 700;
}
.test-navigation {
  margin-top: 33px;
  .btn {
    width: 100%;
  }
}
.test-img {
  width: 470px;
  height: calc(100vh - 80px);
  position: fixed;
  top: 80px;
  flex-shrink: 0;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
.test-img-sm {
  display: none;
}
.test-x {
  position: fixed;
  right: 0;
  top: 80px;
  height: calc(100vh - 80px);
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}





@media (min-width: 992px) and (max-width: 1199px) {
  .test-x {
    display: none;
  }
}

@media (min-width: 768px) and (max-width: 991px) {
  .test-x {
    display: none;
  }
  .test-row {
    display: flex;
    flex-direction: column;
    padding: 30px 0;
  }
  .test-img {
    position: static;
    order: 1;
    width: 550px;
    height: 314px;
    margin: 0 auto;
  }
  .test-container {
    order: 2;
    padding: 0;
    margin-top: 30px;
  }
}

@media (max-width: 767px) {
  .test-x {
    display: none;
  }
  .test-row {
    padding: 21px 0;
    display: flex;
    flex-direction: column;
  }
  .test-img {
    position: static;
    width: 100%;
    height: initial;
    order: 1;
    img {
      display: none;
    }
    img.test-img-sm {
      display: block;
      height: initial;
    }
  }
  .test-container {
    order: 2;
    padding: 20px 0;
  }
  .test-header img {
    display: none;
  }
}
</style>