<template>
  <div class="index">
    <div class="wrap">
      <div class="main">
        <div class="left-pan">
          <router-view />
        </div>
        <div class="right-pan">
          <PageCard :cards="tag"/>
          <PageCard />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PageCard from '@/components/PageCard.vue'

export default {
  name: 'Index',
  components: {
    PageCard
  },
  data: function () {
    return {
      tag: [
        { header: '标签', content: '<a href="/tags" class>C#</a>' },
        { header: '标签2', content: '标签二' }
      ]
    }
  }
}
</script>

<style lang="scss">
.index{
  width: 100%;
  // background-color: #e6e6e6;
  padding-bottom: 200px;

  .wrap{
    width: 100%;
    background-color: #e6e6e6;

    .main{
      width: 95%;
      height: calc(100% - 100px);
      margin: 0 auto;
      // background-color: bisque;

      .left-pan{
        display: inline-block;
        width: calc(100% - 340px);
        height: auto;
        vertical-align: top;
        box-sizing: border-box;
        padding: 10px calc(2% / 2) 15px calc(2% / 2);
        // background-color: rgb(151, 151, 204);

        .carousel{
          width: 100%;
          height: 250px;
          background-color: brown;
          border-radius: 4px;
        }

        .items-wrap{
          width: 100%;
          height: auto;
          margin-top: 10px;
          overflow: auto;

          .section{
            overflow: auto;
            box-sizing: border-box;
          }

          .s-title{
            text-align: left;
            margin-left: 10px;
          }

          .content-box{
            width: 100%;
            height: 240px;
            background-color: yellow;
          }
        }
      }

      .right-pan{
        display: inline-block;
        width: 340px;
        height: 100%;
        vertical-align: top;
        // background-color: brown;
      }
    }
  }
}
</style>
