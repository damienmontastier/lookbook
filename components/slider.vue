<template>
  <div id="slideshow">
    <h1>coucou</h1>
    <!-- <div id="slideshow__left"> -->
    <!-- <imagetest></imagetest> -->
    <!-- <h1>{{ slider[current].name }}</h1> -->
    <!-- <img :src="slider[current].src.left[0]"> -->
  </div>
  <!-- <div id="slideshow__right"> -->
  <!-- <h1>{{ slider[current].text }}</h1> -->
  <!-- <img :src="this.slider[current].src.right[0]"> -->
  <!-- </div> -->
  <!-- <button style="position:absolute;right:5%" @click="next">+</button> -->
  <!-- </div> -->
</template>

<script>
// import imagetest from "../components/image";

import { mapState } from "vuex";

export default {
  components: {
    // imagetest,
  },
  data() {
    return {
      current: 0
    };
  },
  computed: {
    ...mapState({
      datapp: data
    })
  },
  mounted() {
    console.log(this.datapp);
  },
  methods: {
    // next() {
    //   this.current++;
    // }
  }
};
</script>


<style lang="stylus" scoped>
#slideshow {
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
