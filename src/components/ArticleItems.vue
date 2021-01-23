<template>
  <div class="a-items">
      <h3><a href="#">BootStrap</a><i>(12/12/2020)</i></h3>
      <div class="a-prev">
          Bootstrap，来自 Twitter，是目前最受欢迎的前端框架。Bootstrap 是基于 HTML、CSS、JAVASCRIPT 的，它简洁灵活，使得 Web 开发更加快捷。
本教程将向您讲解 Bootstrap 框架的基础，通过学习这些内容
      </div>
  </div>
</template>

<script>
export default {
  name: 'ArticleItems'
}
</script>

<style lang="scss">
.a-items{
    width: 100%;
    height: auto;
    // background-color: rgba(92, 92, 116, 0.493);
    padding: 5px;
    box-sizing: border-box;

    h3{
        margin-top: 7px;
        margin-bottom: 8px;
        border-bottom: 1px solid #b99c9c7a;

        a{
            text-decoration: none;
            color: #000;
        }
    }

    .a-prev{
        color: #796f6f;
        word-break: break-all;
        -webkit-line-clamp: 2;
        overflow-wrap: break-word;
        text-overflow: ellipsis;
        overflow: hidden;
        display: -webkit-box;
        -webkit-box-orient:vertical;
    }
}
</style>
