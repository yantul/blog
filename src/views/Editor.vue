<template>
  <div ref="MDEditor" class="MDEditor" :style="{ height: (this.$store.state.screenHeight - 22) + 'px' }">
    <mavonEditor style="height: 100%" />
  </div>
</template>

<script>
import { mavonEditor } from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'

export default {
  name: 'MDEditor',
  components: {
    mavonEditor
  },
  methods: {
  },
  activated: function () {
    this.$store.commit('disableDBG')
    this.$store.commit('disableFooter')
  },
  deactivated () {
    this.$store.commit('enableDBG')
    this.$store.commit('enableFooter')
  }
}
</script>

<style>
.MDEditor{
    box-sizing: border-box;
    padding: 66px 10px 0 10px;
    height: 800px;
}
</style>
