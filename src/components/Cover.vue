<template>
  <div :style="{ height: fullHeight + 'px', color: bgcolor }" class="cover">
123213
  </div>
</template>

<script>
export default {
  name: 'Cover',
  data () {
    return {
      fullWidth: document.documentElement.clientWidth,
      fullHeight: document.documentElement.clientHeight,
      bgcolor: 'white'
    }
  },
  created () {
    window.addEventListener('resize', this.handleReasize)
  },
  beforeDestroy () {
    window.removeEventListener('resize', this.handleReasize)
  },
  methods: {
    handleReasize (event) {
      this.fullWidth = document.documentElement.clientWidth
      this.fullHeight = document.documentElement.clientHeight
      console.log(this.fullHeight)
    }
  }
}
</script>

<style lang="scss">
  .cover{
    width: 100%;
    background: red;
    display: block;
  }
</style>
