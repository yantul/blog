<template>
  <div class="dynamic-bg" v-if="showDBG">
    <!-- <div class="thumb">
    </div> -->
    <div class="trans"></div>
  </div>
</template>

<script>
import contain from '../util/ArrayUtil'
export default {
  name: 'DynamicBg',
  data: function () {
    return {
      showDBG: true
    }
  },
  watch: {
    $route (to, from) {
      this.showDBG = !contain(to.path.split('/'), 'details')
      console.log(to.path)
    }
  }
}
</script>

<style lang="scss">
.dynamic-bg{
    position: relative;
    width: 100%;
    height: 160px;
    min-height: 66px;
    background-color: #e6e6e6;

    .thumb{
      height: 400px;
      width: 100%;
      opacity: 0.2;
      background: url("../assets/images/bg2.png") 100% 100%;
    }
}
</style>
