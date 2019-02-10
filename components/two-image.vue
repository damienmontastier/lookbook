<template>
  <div class="two-image">
    <img
      ref="twoimage"
      class="two-image__image"
      v-for="imgData in data"
      :src="imgData"
      alt="imgData"
    >
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: {
    data: {
      type: Object
    }
  },
  computed: {},
  methods: {},
  mounted() {
    //faire boucle for pour récupèrer les size  des deux images
    let imgs = this.$refs.twoimage;
    let objectImage = {};
    for (let a = 0; a < imgs.length; a++) {
      let width = imgs[a].width;
      let height = imgs[a].height;
      console.log("imgs ", a, " ", imgs);
      console.log("height img : ", height);
      objectImage = {
        id: a,
        width: width,
        height: height
      };
    }
    // console.log(objectImage);
  }
};
</script>


<style lang="stylus" scoped>


.two-image {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: auto;
  position: relative;

  &__image {
    width: 20%;
  }
}
</style>