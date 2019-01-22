<template>
  <div class="two-image">
    <img class="two-image__image" v-for="imgData in data" :src="imgData" alt="imgData">
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
.two-image {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: auto;
  position: relative;

  &__image {
    width: auto;
    height: 50vh;
  }
}
</style>