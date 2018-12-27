<template>
  <!-- Canvas -->
  <div id="main">
    <slider></slider>
  </div>
</template>

<script>
import Slider from "../components/slider";

import { mapState, mapGetters } from "vuex";

export default {
  components: {
    Slider
  },
  computed: {
    ...mapGetters({
      appLoaded: "isAppLoaded",
    })
  },

  data() {
    return {};
  },

  mounted() {}
};
</script>

<style lang="stylus" scoped>
#main {
  position: relative;
  z-index: 1;
  width: 100%;
  height: 100%;
}