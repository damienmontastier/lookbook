<template>
  <div @mousemove="mouseMove" class="slideshow">
    <div class="slideshow__left">
      <div :class="[putOnLeft ? 'classLeft' : 'classRight']" class="slideshow__container"></div>
      <component
        :mousePosition="mousePosition"
        :widthTween="tweenedWidth"
        :data="appData.slider[$store.state.current].src.left"
        :is="countImgLeft == 1 ? 'oneimage' : 'twoimage'"
      ></component>
      <h1 class="slideshow__left__name">{{ appData.slider[$store.state.current].text }}</h1>
    </div>

    <div class="slideshow__right">
      <p class="slideshow__right__back" @click="previous">
        <img @click="next" :src="appData.config.leftArrow" alt="left-arrow">Back
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
      mousePosition: {}
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
    mouseMove(e) {
      this.mousePosition = {
        x: e.clientX,
        y: e.clientY
      };
    },
    next() {
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
    width: 50%;
    position: relative;
    background-color: #e2dfd9;

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
    h1&__name {
      position: absolute;
      top: 10%;
      right: 0;
      color: transparent;
      transform: rotate(90deg);
      -webkit-text-stroke-width: 2px;
      -webkit-text-stroke-color: #fff;
    }
  }

  &__right {
    &__arrowRightImg {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      right: 30px;
      z-index: 3;
      height: 25px;
      width: 25px;
    }

    p&__back {
      position: absolute;
      display: flex;
      justify-content: center;
      align-items: center;
      top: 10px;
      left: 30px;
      z-index: 4;

      & img {
        height: 20px;
        width: 20px;
      }
    }
  }
}
</style>
