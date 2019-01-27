<template>
  <div class="one-image">
    <div class="one-image__container">
      <img
        class="one-image__container__image"
        :style="{width : widthTween+'%'}"
        :src="data[1]"
        alt="test"
      >
    </div>
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
    },
    widthTween: {
      type: Number
    }
  },
  computed: {},
  methods: {},
  mounted() {}
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