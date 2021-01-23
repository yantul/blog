<template>
  <div class="footer" v-if="showDBG">Footer</div>
</template>

<script>
import contain from '../util/ArrayUtil'

export default {
  name: 'Footer',
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

<style>
.footer{
  width: 100%;
  height: 200px;
  background-color: #fff;
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: -1;
  padding: 10px 5px;
  box-sizing: border-box;
}
</style>
