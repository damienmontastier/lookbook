<template>
  <div class="one-image">
    <div data-hover class="one-image__container">
      <img
        class="one-image__container__image"
        :style="{width : widthTween+'%'}"
        :src="data[1]"
        alt="one-image"
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
      console.log("mousePosition.x component", mousePosition.x);
      console.log("mousePosition.y component", mousePosition.y);
    }
  },
  mounted() {},
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
    width: 320px;

    &__image {
      overflow: hidden;
      object-fit: cover;
      width: 100%;
      height: 100%;
      position: absolute;
      right: 0;
    }
  }
}
</style>