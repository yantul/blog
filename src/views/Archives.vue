<template>
  <div class="a-arch">
    <ul class="archive">
      <li class="a-date"><h2>12/12/2020</h2></li>
      <li class="a-list">1</li>
      <li class="a-list">2</li>
      <li class="a-list">3</li>
      <li class="a-date"><h2>25/11/2020</h2></li>
      <li class="a-list">1</li>
      <li class="a-list">2</li>
      <li class="a-list">3</li>
      <li class="a-date"><h2>25/10/2020</h2></li>
      <li class="a-list">1</li>
      <li class="a-list">2</li>
      <li class="a-list">3</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Archives'
}
</script>

<style lang="scss">
.a-arch{
  width: 100%;
  min-height: 300px;
  // background-color: rgba(0, 0, 0, 0.397);
  text-align: left;
  padding: 5px 8px;
  box-sizing: border-box;

  .a-date{
    color:darkslateblue;
    list-style:square;
    margin-left: 20px;
    cursor: pointer;
  }

  .a-list{
    width: 100%;
    height: 150px;
    background-color: rgba(250, 128, 114, 0.411);
    margin-bottom: 10px;
  }
}
</style>
