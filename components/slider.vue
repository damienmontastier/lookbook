<template>
  <div class="slideshow">
    <button
      style="position:absolute;right:5%; font-size:40px;color:white;z-index:9999;"
      @click="next"
    >slide n°{{ $store.state.current }}</button>
    <div class="slideshow__left">
      <div v-bind:style="{ float: floatDirection }" class="slideshow__container">
        <component
          :data="appData.slider[$store.state.current].src.left"
          :is="countImgLeft == 1 ? 'oneimage' : 'twoimage'"
        ></component>
        <h1 class="slideshow__right__name">{{ appData.slider[$store.state.current].text }}</h1>
      </div>
    </div>
    <div class="slideshow__right">
      <div v-bind:style="{ float: floatDirection }" class="slideshow__container">
        <component
          :data="appData.slider[$store.state.current].src.right"
          :is="countImgRight == 1 ? 'oneimage' : 'twoimage'"
        ></component>
      </div>
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
      floatDirection: ""
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
      TweenMax.to(".slideshow__container", 1, {
        width: "0%",
        onCompleteScope: this,
        onComplete: () => {
          this.$store.commit("increment");
          if (
            this.$store.state.current - 1 ==
            Object.keys(this.appData.slider).length
          ) {
            this.$store.commit("reset");
          }
          this.floatDirection = "right";
          TweenMax.to(".slideshow__container", 1, {
            width: "100%",
            onComplete: () => {}
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

    .slideshow__container {
      background-color: #e2dfd9;
      height: 100%;
      width: 100%;
      overflow: hidden;
    }
  }

  &__left {
    position: relative;

    h1 {
      position: absolute;
      top: 10vh;
      right: 0;
      color: transparent;
      transform: rotate(90deg);
      -webkit-text-stroke-width: 2px;
      -webkit-text-stroke-color: #fff;
    }
  }
}
</style>
