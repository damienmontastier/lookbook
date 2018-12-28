<template>
  <div class="slideshow">
    <button style="position:absolute;right:5%; font-size:40px;color:white;" @click="next">+1 slide</button>

    <div class="slideshow__left">
      <h1>{{ this.appData.slider[this.current].text }}</h1>
      <component :is="dynamicComponent"></component>
    </div>
    <div class="slideshow__right"></div>
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
    return {
      current: 0
    };
  },
  computed: {
    ...mapState({
      appData: "appData"
    }),
    dynamicComponent() {
      //Cette condition ne fonctionne pas, leftCount est undefined...
      console.log(this.leftCount);
      if (this.leftCount == 1) {
        return "oneimage";
      } else {
        return "twoimage";
      }
    }
  },
  mounted() {
    this.left = this.appData.slider[this.current].src.left;
    this.right = this.appData.slider[this.current].src.right;
    this.leftCount = Object.keys(this.left).length;
    this.rightCount = Object.keys(this.right).length;
    console.log("LEFT COUNT IMG : ", this.leftCount);
    console.log("RIGHT COUNT IMG : ", this.rightCount);
  },
  methods: {
    next() {
      this.current++;
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
