<template>
  <div class="slideshow">
    <button style="position:absolute;right:5%; font-size:40px;color:white;" @click="next">+1 slide</button>

    <div class="slideshow__left">
      <h1>{{ this.appData.slider[this.$store.state.current].text }}</h1>
      <component :is="dynamicComponent"></component>
    </div>
    <div class="slideshow__right">
      <h1>{{ this.appData.slider[this.$store.state.current].text }}</h1>
      <!-- <component :is="dynamicComponent"></component> -->
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
    dynamicComponent() {
      //Cette condition ne fonctionne pas, leftCount est undefined...
      switch (this.leftCount) {
        case 1:
          return "oneimage";
          break;

        case 2:
          return "twoimage";
          break;

        default:
          console.log("Il y a plus de 2 images, ou 0");
          break;
      }
      // if (this.leftCount == 1) {
      //   return "oneimage";
      // } else {
      //   return "twoimage";
      // }
    }
  },
  created() {
    this.left = this.appData.slider[this.$store.state.current].src.left;
    this.leftCount = Object.keys(this.left).length;
    console.log(
      "Number image on left : ",
      this.leftCount,
      ",  Current slide :  ",
      this.$store.state.current
    );
  },
  methods: {
    next() {
      this.$store.state.current++;
      console.log(
        "Number image on left : ",
        this.leftCount,
        ",  Current slide :  ",
        this.$store.state.current
      );
      let leftbis = this.left;
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
