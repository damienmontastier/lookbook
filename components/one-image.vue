<template>
  <div class="one-image">
    <img class="one-image__image" :src="data[1]" alt="test">
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
  mounted() {}
};
</script>


<style lang="stylus" scoped>
.one-image {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: auto;
  position: relative;

  &__image {
    width: auto;
    height: 50vh;
    position: absolute;
    display: flex;
    justify-content: center;
    align-content: center;
    left: auto;
  }
}
</style>