<template>
  <div class="footer" v-if="this.$store.state.showFooter">Footer</div>
</template>

<script>
export default {
  name: 'Footer'
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
