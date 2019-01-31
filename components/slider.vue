<template>
  <div @mousemove="getMouseMove" class="slideshow">
    <div class="slideshow__left">
      <h1 class="slideshow__left__nameSlide">{{ appData.slider[$store.state.current].text }}</h1>
      <p class="slideshow__left__logo">OTB</p>
      <p
        class="slideshow__left__currentSlide"
      >{{ appData.slider[$store.state.current].id }} | {{ Object.keys(appData.slider).length }}</p>
      <div :class="[putOnLeft ? 'classLeft' : 'classRight']" class="slideshow__container"></div>
      <component
        :mousePosition="mousePosition"
        :widthTween="tweenedWidth"
        :data="appData.slider[$store.state.current].src.left"
        :is="countImgLeft == 1 ? 'oneimage' : 'twoimage'"
      ></component>
    </div>

    <div class="slideshow__right">
      <p class="slideshow__right__back" @click="previous">
        <img @click="previous" :src="appData.config.leftArrow" alt="left-arrow">Back
      </p>
      <div :class="[putOnLeft ? 'classLeft' : 'classRight']" class="slideshow__container"></div>
      <component
        :widthTween="tweenedWidth"
        :data="appData.slider[$store.state.current].src.right"
        :is="countImgRight == 1 ? 'oneimage' : 'twoimage'"
      ></component>
      <img
        @click="next"
        class="slideshow__right__arrowRightImg"
        :src="appData.config.rightArrow"
        alt="right-arrow"
      >
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import TweenMax from "gsap";
import oneimage from "~/components/one-image";
import twoimage from "~/components/two-image";

export default {
  components: {
    oneimage,
    twoimage
  },
  data() {
    return {
      floatValue: "",
      tweenedWidth: 100,
      putOnRight: false,
      putOnLeft: false,
      mousePosition: { x: 0, y: 0 }
    };
  },
  computed: {
    ...mapState({
      appData: "appData"
    }),
    countImgLeft() {
      this.left = this.appData.slider[this.$store.state.current].src.left;
      return Object.keys(this.left).length;
    },
    countImgRight() {
      this.right = this.appData.slider[this.$store.state.current].src.right;
      return Object.keys(this.right).length;
    }
  },
  methods: {
    getMouseMove(e) {
      this.mousePosition = {
        x: e.clientX,
        y: e.clientY
      };
    },
    next() {
      console.log("next");
      this.putOnLeft = false;
      TweenMax.to(".slideshow__container", 1.2, {
        width: "100%",
        ease: Expo.easeIn,
        onCompleteScope: this,
        onComplete: () => {
          this.putOnLeft = true;
          this.tweenedWidth = 0;
          this.$store.commit("increment");
          TweenMax.to(".slideshow__container", 1.5, {
            width: 0,
            ease: Expo.easeOut
          });
          TweenMax.to(this, 1.8, {
            tweenedWidth: 100,
            ease: Expo.easeOut
          });
        }
      });
    },
    previous() {
      this.putOnLeft = true;
      TweenMax.to(".slideshow__container", 1.2, {
        width: "100%",
        ease: Expo.easeIn,
        onCompleteScope: this,
        onComplete: () => {
          this.putOnLeft = false;
          this.tweenedWidth = 100;
          this.$store.commit("decrement");
          TweenMax.to(".slideshow__container", 1.5, {
            width: 0,
            ease: Expo.easeOut
          });
        }
      });
    }
  }
};
</script>


<style lang="stylus" scoped>
.slideshow {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: row;

  &__left, &__right {
    width: 50vw;
    position: relative;
    background-color: #e2dfd9;
    padding: 0;
    margin: 0;

    .classLeft {
      left: 0;
    }

    .classRight {
      right: 0;
    }

    .slideshow__container {
      background-color: white;
      height: 100%;
      width: 0;
      overflow: hidden;
      position: absolute;
      top: 0;
      z-index: 2;
    }
  }

  &__left {
    border-right: 1px solid #a8a49f;

    p&__logo {
      position: absolute;
      top: 20px;
      left: 20px;
      z-index: 6;
      font-weight: 900;
    }

    p&__currentSlide {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      left: 20px;
      z-index: 5;
      color: #a8a49f;
    }

    h1&__nameSlide {
      position: absolute;
      top: calc(10vh + 100px);
      right: 0;
      font-size: 6em;
      color: transparent;
      transform: translateX(50%) rotate(-90deg) translateY(-65%);
      -webkit-text-stroke-width: 2px;
      -webkit-text-stroke-color: #fff;
    }
  }

  &__right {
    &__arrowRightImg {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      right: 20px;
      z-index: 3;
      height: 25px;
      width: 25px;
    }

    p&__back {
      position: absolute;
      display: flex;
      justify-content: center;
      align-items: center;
      top: 20px;
      left: 20px;
      z-index: 4;
      color: #a8a49f;

      & img {
        height: 20px;
        width: 20px;
        margin-right: 10px;
      }
    }
  }
}
</style>
