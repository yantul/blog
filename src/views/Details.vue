<template>
  <div class="details">
      <div class="main-wrap">
          <div class="prev-area">
              <h1>HAhahs哈哈的哈哈苏打水</h1>
              <p>nihaoa你好啊</p>
              <h2>zeze啧啧</h2>
          </div>
          <div class="anchor-area"></div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'Details',
  mounted: function () {
    this.$store.commit('disableDBG')
    this.$store.commit('disableFooter')
  },
  destroyed: function () {
    this.$store.commit('enableDBG')
    this.$store.commit('enableFooter')
  }
}
</script>

<style lang="scss">
.details{
    width: 100%;
    // background-color: turquoise;
    overflow: auto;
    margin-top: 80px;

    .main-wrap{
        width: 1200px;
        height: 900px;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        box-shadow: 0px -3px 4px #00000036;

        .prev-area{
            flex: 1;
            height: 100%;
            // background-color: rgba(64, 224, 208, 0.226);
        }

        .anchor-area{
            flex-basis: 260px;
            height: 100%;
            // background-color: rgba(230, 62, 62, 0.884);
            border-left: 1px solid #00000021;
        }
    }
}
</style>
