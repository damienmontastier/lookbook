<template>
  <img :src="data[1]" alt="test">
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
}
</style>