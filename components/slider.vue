<template>
  <div class="slideshow">
    <button
      style="position:absolute;right:5%; font-size:40px;color:white;"
      @click="next"
    >slide n°{{ $store.state.current }}</button>

    <div class="slideshow__left">
      <h1 class="slideshow__left__name">{{ this.appData.slider[$store.state.current].text }}</h1>
      <component
        :data="appData.slider[$store.state.current].src.left"
        :is="countImgLeft == 1 ? 'oneimage' : 'twoimage'"
      ></component>
    </div>
    <div class="slideshow__right">
      <h1 class="slideshow__left__name">{{ appData.slider[$store.state.current].text }}</h1>
      <component
        :data="appData.slider[$store.state.current].src.right"
        :is="countImgRight == 1 ? 'oneimage' : 'twoimage'"
      ></component>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import oneimage from "~/components/one-image";
import twoimage from "~/components/two-image";

export default {
  components: {
    oneimage,
    twoimage
  },
  data() {
    return {};
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
      this.$store.commit("increment");
      if (
        this.$store.state.current - 1 ==
        Object.keys(this.appData.slider).length
      ) {
        this.$store.commit("reset");
      }
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
  position: relative;

  &__left, &__right {
    background-color: blue;
    width: 50%;
  }

  &__left {
  }

  &__right {
  }
}
</style>
