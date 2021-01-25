<template>
  <div class="a-arch">
    <ul class="archive">
      <li class="a-date">
        <h2>12/12/2020</h2>
        <ul>
          <li class="a-list">1</li>
          <li class="a-list">2</li>
          <li class="a-list">3</li>
        </ul>
      </li>
      <li class="a-date  a-date-active">
        <h2>25/11/2020</h2>
        <ul>
          <li class="a-list">{{ this.$store.state.scrollTop }}</li>
          <li class="a-list">2</li>
          <li class="a-list">3</li>
        </ul>
      </li>
      <li class="a-date">
        <h2>24/10/2020</h2>
        <ul>
          <li class="a-list">1</li>
          <li class="a-list">2</li>
          <li class="a-list">3</li>
        </ul>
      </li>
      <li class="a-date">
        <h2>23/10/2020</h2>
        <ul>
          <li class="a-list">1</li>
          <li class="a-list">2</li>
          <li class="a-list">3</li>
        </ul>
      </li>
      <li class="a-date">
        <h2>22/10/2020</h2>
        <ul>
          <li class="a-list">1</li>
          <li class="a-list">2</li>
          <li class="a-list">3</li>
        </ul>
      </li>
      <li class="a-date">
        <h2>21/10/2020</h2>
        <ul>
          <li class="a-list">1</li>
          <li class="a-list">2</li>
          <li class="a-list">3</li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Archives',
  methods: {
    lazyLoad (event) {
      console.log(event)
    }
  },
  mounted () {
    // let _alist = document.getElementsByClassName('a-date')
  }
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
    color:#43b984;
    list-style:square;
    margin-left: 20px;
    cursor: pointer;

    & ul{
      display: none;
    }
  }

  .a-date-active{
    & ul{
      display: block;
    }

    & + li ul{
      display: block;
    }
  }

  .a-list{
    width: 100%;
    height: 150px;
    background-color: rgba(250, 128, 114, 0.411);
    margin-bottom: 10px;
  }
}
</style>
