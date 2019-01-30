<template>
  <div class="one-image">
    <div class="one-image__container">
      <img
        ref="oneimage"
        class="one-image__container__image"
        :style="{width : widthTween+'%'}"
        :src="data[1]"
        alt="test"
      >
    </div>
  </div>
</template>

<script>
// get les img via $ref et calcul de la distance entre les deux et augmenter la taille plus on se rapproche
export default {
  data() {
    return {};
  },
  props: {
    data: {
      type: Object
    },
    widthTween: {
      type: Number
    },
    mousePosition: {
      type: Object
    }
  },
  methods: {
    getMousePosition(mousePosition) {
      console.log(mousePosition.x);
      console.log(mousePosition.y);
    }
  },
  mounted() {
    let img = this.$refs.oneimage;
    
    console.log(img.getAttribute("scrollHeight"));
  },
  watch: {
    //Update la position du props : mousePosition
    mousePosition: function(mousePosition) {
      this.getMousePosition(mousePosition);
    }
  }
};
</script>

<style lang="stylus" scoped>
// object fit cover
.one-image {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;

  &__container {
    position: relative;
    overflow: hidden;
    height: 500px;
    width: 50%;

    &__image {
      object-fit: cover;
      width: 100%;
      height: 500px;
      position: absolute;
      top: 50%;
      right: 0;
      transform: translateY(-50%);
    }
  }
}
</style>