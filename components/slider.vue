<template>
  <div class="slideshow">
    <button
      style="position:absolute;right:5%; font-size:40px;color:white;z-index:9999;"
      @click="next"
    >slide n°{{ $store.state.current }}</button>
    <div class="slideshow__left">
      <div v-bind:style="{ left: floatDirection }" class="slideshow__container"></div>
      <component
        :widthTween="tweenedWidth"
        :data="appData.slider[$store.state.current].src.left"
        :is="countImgLeft == 1 ? 'oneimage' : 'twoimage'"
      ></component>
      <h1 class="slideshow__right__name">{{ appData.slider[$store.state.current].text }}</h1>
    </div>
    <div class="slideshow__right">
      <div v-bind:style="{ left: floatDirection }" class="slideshow__container"></div>
      <component
        :widthTween="tweenedWidth"
        :data="appData.slider[$store.state.current].src.right"
        :is="countImgRight == 1 ? 'oneimage' : 'twoimage'"
      ></component>
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
      floatDirection: "none",
      tweenedWidth: 100
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
    next() {
      TweenMax.to(".slideshow__container", 1.2, {
        width: "100%",
        ease: Expo.easeIn,
        onCompleteScope: this,
        onComplete: () => {
          this.tweenedWidth = 0;
          this.$store.commit("increment");
          if (
            this.$store.state.current - 1 ==
            Object.keys(this.appData.slider).length
          ) {
            this.$store.commit("reset");
          }
          this.floatDirection = 0;
          TweenMax.to(".slideshow__container", 1.5, {
            width: 0,
            ease: Expo.easeOut,
            onComplete: () => {}
          });
          TweenMax.to(this, 1.8, {
            tweenedWidth: 100,
            ease: Expo.easeOut
          });
        }
      });
      this.floatDirection = "";
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

    .slideshow__container {
      background-color: white;
      height: 100%;
      width: 0;
      overflow: hidden;
      position: absolute;
      top: 0;
      right: 0;
      z-index: 10;
    }
  }

  &__left {
    h1 {
      position: absolute;
      top: 10%;
      right: 0;
      color: transparent;
      transform: rotate(90deg);
      -webkit-text-stroke-width: 2px;
      -webkit-text-stroke-color: #fff;
    }
  }
}
</style>
