<template>
  <div class="tags-page">
      <div class="y-tag tag-nav">TAGS > <i class="current-tag">JAVA</i></div>
      <div class="y-tag selected-tag">
        <ul>
          <li><Items /></li>
          <li><Items /></li>
          <li><Items /></li>
        </ul>
      </div>
      <div class="y-tag tag-nav" style="margin-top: 15px">推荐</div>
      <div class="y-tag recommend-tag">
        <ul>
          <li><Items /></li>
          <li><Items /></li>
          <li><Items /></li>
          <li><Items /></li>
        </ul>
      </div>
  </div>
</template>

<script>
import Items from '../components/ArchiveItems.vue'

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
  border-radius: 3px;
  text-align: left;
  box-sizing: border-box;

  .tag-nav{
    background-color: #f4f5f5;
    height: 40px!important;
    font-size: 16px;
    font-weight: bold;
    line-height: 40px;

    & .current-tag{
      font-style: normal;
      color: #6b75ff;
      cursor: pointer;

      &:hover{
        color: rgb(184, 84, 84);
      }
    }
  }

  .y-tag{
    width: 100%;
    height: auto;
    // background-color: #e6e6e6;
    overflow: hidden;
  }

  .selected-tag, .recommend-tag{
    padding: 10px 20px 20px 20px;
    border-radius: 0 0 8px 8px;
    box-sizing: border-box;
    background-color: #fff;

    & li:not(:last-child) .a-item{
      border-bottom: 1px solid rgba(196, 196, 196, 0.281);
    }

    .a-item {
      transition: transform .2s;
    }

    & li:hover .a-item{
      transform: scale(1.01);
    }
  }
}
</style>
