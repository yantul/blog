<template>
  <div id="app">
    <Nav />
    <DynamicBg />
    <keep-alive include="MDEditor">
      <router-view/>
    </keep-alive>
    <Footer />
  </div>
</template>

<script>
import Nav from '@/components/Nav.vue'
import Footer from '@/components/Footer.vue'
import DynamicBg from '@/components/DynamicBg.vue'
import { scrollTop } from './util/ArrayUtil'

export default {
  components: {
    Nav,
    Footer,
    DynamicBg
  },
  data: function () {
    return {
      screenWidth: 0,
      screenHeight: 0,
      scrollTopVal: 0,
      oldScrollVal: 0
    }
  },
  mounted () {
    const that = this
    that.screenWidth = document.documentElement.clientWidth
    that.screenHeight = document.documentElement.clientHeight
    window.onresize = () => {
      return (() => {
        that.screenWidth = document.documentElement.clientWidth
        that.screenHeight = document.documentElement.clientHeight
      })()
    }
    window.onscroll = () => {
      return (() => {
        that.scrollTopVal = scrollTop()
      })()
    }
  },
  watch: {
    screenWidth (val) {
      const that = this
      setTimeout(function () {
        that.$store.commit('modifyScreenWidth', {
          screenWidth: that.screenWidth
        })
        if (that.screenWidth <= 400) {
          that.$store.commit('browserType', {
            isMobile: true
          })
        }
      }, 500)
    },
    screenHeight (val) {
      const that = this
      setTimeout(function () {
        that.$store.commit('modifyScreenHeight', {
          screenHeight: that.screenHeight
        })
      }, 400)
    },
    scrollTopVal (val) {
      const that = this
      that.$store.commit('modifyScrollTop', {
        scrollTop: that.scrollTopVal
      })
      setTimeout(function () {
        let DIRECTION = 0
        if (that.scrollTopVal - that.oldScrollVal > 0) {
          DIRECTION = -1
        } else if (that.scrollTopVal - that.oldScrollVal < 0) {
          DIRECTION = 1
        }
        that.oldScrollVal = that.scrollTopVal
        that.$store.commit('modifyScrollDirection', {
          scrollDirection: DIRECTION
        })
      }, 500)
    }
  }
}

</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
