<template>
  <div class="tags-page">
      <div class="y-tag tag-nav">TAGS</div>
      <div class="y-tag selected-tag">
        <Items />
        <Items />
        <Items />
        <Items />
      </div>
      <div class="y-tag tag-nav">推荐</div>
      <div class="y-tag recommend-tag">
        <Items />
        <Items />
        <Items />
        <Items />
      </div>
  </div>
</template>

<script>
import Items from '../components/ArticleItems.vue'

export default {
  name: 'TagsPage',
  components: {
    Items
  }

}
</script>

<style lang="scss">
.tags-page{
  min-height: 700px;
  background-color: #fff;
  border-radius: 3px;
  text-align: left;
  box-sizing: border-box;

  .tag-nav{
    background-color: #e6e6e6;
    height: 40px!important;
    font-size: 16px;
    font-weight: bold;
    line-height: 40px;
  }

  .y-tag{
    width: 100%;
    height: auto;
    // background-color: #e6e6e6;
    overflow: hidden;
  }

  .selected-tag, .recommend-tag{
    padding-bottom: 20px;
    padding-top: 10px;
  }
}
</style>
