<template>
  <div class="index-page">
          <div class="carousel">
            111
          </div>
          <div class="items-wrap">
            <div class="section section-latest">
              <h2 class="s-title">最新发布</h2>
              <ArticleCard >12321asdasdasdas</ArticleCard>
              <ArticleCard />
              <ArticleCard />
              <ArticleCard />
              <ArticleCard />
              <ArticleCard />
            </div>
            <div class="section section-hot">
              <h2 class="s-title">最热</h2>
              <ArticleCard />
              <ArticleCard />
              <ArticleCard />
              <ArticleCard />
              <ArticleCard />
              <ArticleCard />
              <ArticleCard />
              <ArticleCard />
              <ArticleCard />
            </div>
            <div class="section section-other">
              <h2 class="s-title">其它</h2>
              <div class="content-box">
                1
              </div>
            </div>
          </div>
  </div>
</template>

<script>
import ArticleCard from '@/components/ArticleCard.vue'

export default {
  name: 'IndexPage',
  components: {
    ArticleCard
  },
  data: function () {
    return {
      tag: ''
    }
  }
}
</script>

<style lang="scss">
.index-page{
        display: inline-block;
        width: 100%;
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
</style>
