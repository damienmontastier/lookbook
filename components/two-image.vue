<template>
  <div>
    <img v-for="imgData in data" :src="imgData" alt="test">
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
img {
  height: 40%;
  width: 40%;
  display: block;
}
</style>