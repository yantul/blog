<template>
  <div class="a-arch">
    <ul class="archive">
      <li class="a-date">
        <h2 @click="itemClick($event)" class="a-active">12/12/2020</h2>
        <ul>
          <li class="a-list">
            <AItem />
          </li>
        </ul>
      </li>
      <li class="a-date">
        <h2 @click="itemClick($event)">25/11/2020</h2>
        <ul>
          <li class="a-list">
            <AItem />
          </li>
          <li class="a-list">
            <AItem />
          </li>
        </ul>
      </li>
      <li class="a-date">
        <h2 @click="itemClick($event)">22/10/2020</h2>
        <ul>
          <li class="a-list">
            <AItem />
          </li>
          <li class="a-list">
            <AItem />
          </li>
          <li class="a-list">
            <AItem />
          </li>
        </ul>
      </li>
      <li class="a-date">
        <h2 @click="itemClick($event)">21/10/2020</h2>
        <ul>
          <li class="a-list">
            <AItem />
          </li>
          <li class="a-list">
            <AItem />
          </li>
          <li class="a-list">
            <AItem />
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
import contain from '../util/ArrayUtil'
import AItem from '../components/ArchiveItems'

export default {
  name: 'Archives',
  components: {
    AItem
  },
  methods: {
    // lazyLoad (event) {
    //   const that = this
    //   let de = document.getElementsByClassName('a-date')
    //   de.forEach((element, index) => {
    //     let offsetTop = element.offsetTop
    //     let scrollTop = that.$store.state.scrollTop
    //     if (typeof (scrollTop) === 'undefined') {
    //       scrollTop = 0
    //     }
    //     if ((offsetTop - scrollTop) <= 0) {
    //       element.classList.add('c-sticky')
    //     } else {
    //       element.classList.remove('c-sticky')
    //     }
    //     if ((offsetTop - scrollTop) <= 0) {
    //       element.classList.add('a-date-active')
    //     }
    //   })
    //   // console.log(de)
    // }
    itemClick (event) {
      if (contain(event.target.classList, 'a-active')) {
        event.target.classList.remove('a-active')
      } else {
        event.target.classList.add('a-active')
      }
    }
  },
  mounted () {
    window.addEventListener('scroll', this.lazyLoad)
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
    list-style:square;
    margin-left: 20px;
    cursor: pointer;
    height: auto;
    background-color: #fff;
    border-radius: 8px;

    h2{
      user-select: none;
      height: 30px;
      margin-bottom: 0;
      color:#43b984;
      background-color:#f4f5f5;
    }

    & ul{
      display: none;
      overflow: auto;
      border-radius: 8px;
      box-sizing: border-box;
      padding-left: 20px;
      padding-right: 20px;
      overflow: hidden;

      & li:not(:last-child) .a-item{
        border-bottom: 1px solid rgba(196, 196, 196, 0.281);
      }
    }
  }

  .a-date-active{
    & ul{
      display: block;
    }
    // & + li ul{
    //   display: block;
    // }
  }

  .a-list{
    width: 100%;
    height: auto;
    // background-color: rgba(250, 128, 114, 0.411);
    box-sizing: border-box;
    transition: transform .2s;

    &:hover{
      transform: scale(1.01);
    }
  }

  .a-active + ul{
    display: block;
  }
}
</style>
