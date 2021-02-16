<template>
  <div v-if="this.$store.state.showNav" ref="nav"
   :class="[ isActive ? activeClass : nonActiveClass ]"  class="nav" @click.stop="navClick($event)"
   :style="{ background: this.$store.state.scrollTop > 90  ? '#fff' : 'transparent' , 'box-shadow':  this.$store.state.scrollTop > 90 &&  !this.$store.state.isMobile ? '5px -4px 7px rgb(0, 0, 0)' : 'none'}">
      <div class="nav-header">
          <div class="nav-link">
               <ul>
                <li><router-link to="/"><i class="fa fa-home" aria-hidden="true"></i>主站</router-link></li>
                <li><router-link to="/archives/list"><i class="fa fa-archive" aria-hidden="true"></i>归档</router-link></li>
                <li><router-link to="/tags/c" ><i class="fa fa-tag" aria-hidden="true"></i>标签</router-link></li>
                <li><i class="fa fa-envira" aria-hidden="true"></i>工具</li>
                <li><router-link to="/editor" ><i class="fa fa-ravelry" aria-hidden="true"></i>编辑</router-link></li>
                <li><router-link to="/about"><i class="fa fa-snowflake-o" aria-hidden="true"></i>关于</router-link></li>
               </ul>
          </div>
          <div class="nav-search">
            <i class="fa fa-search"></i>
            <input type="text" placeholder="搜索">
          </div>
          <div class="nav-user">
              <ul>
                <li>其它</li>
                <li>登录</li>
               </ul>
          </div>
      </div>
      <div class="mobile-nav" v-if="show" >
        <div class="menu-icon" @click="mobileClick()"><i class="fa fa-bars"></i></div>
        <div class="user-icon"><i class="fas fa-user"></i></div>
      </div>
  </div>
</template>

<script>
import contain from '../util/ArrayUtil'

export default {
  name: 'Nav',
  data: function () {
    return {
      show: false,
      isActive: false,
      activeClass: 'non-trans-bg',
      nonActiveClass: 'trans-bg'
    }
  },
  mounted: function () {
    const w = document.documentElement.offsetWidth || document.body.offsetWidth
    if (w < 395) {
      this.show = true
    }
  },
  methods: {
    navClick (event) {
      if (contain(event.target.className.split(' '), 'nav')) {
        this.isActive = !this.isActive
        this.$refs.nav.style.left = -event.target.offsetWidth + 'px'
      }
    },
    mobileClick () {
      this.$refs.nav.style.left = 0
      this.isActive = !this.isActive
    }
  }
}
</script>

<style lang="scss">
    .nav{
        position: fixed;
        top: 0px;
        width: 100%;
        height: 66px;
        background-color: transparent;
        min-width: 1020px;
        z-index: 9999;
        transition: left .5s, background-color .5s;
        user-select: none;
        color:#673b3b;

        & a{
          color: inherit;
          text-decoration: none;

          &:link{
            color: inherit;
          }

          &:active{
            color:inherit;
          }

          &:hover .fa-home{
            animation: index .3s;
          }

          &:hover .fa-snowflake-o{
            animation: spin .3s;
          }
        }

        .mobile-nav{
          & i, & i::before{
          width: 100%;
          height: 100%;
          font-size: 24px;
          vertical-align: sub;
          }
        }

        .nav-search{
          box-sizing: border-box;
          border: 0;
          outline: none;

          & i, & i::before{
            width: 36px;
            height: 36px;
          }

          & i::before{
            align-items: center;
            zoom: 1.5;
          }

          & i{
            position: absolute;
            right: 0;
            top: 0;
            margin: 5px 10px 5px 0;
          }

          & input{
            box-sizing: border-box;
            width: 100%;
            height: 100%;
            padding:5px 40px 5px 10px;
            border-radius: 5px;
            border-color: transparent;
            outline-color: transparent;
            font-size: 16px;
          }
        }

        .mobile-nav{
            position: absolute;
            width: 100%;
            height: 50px;
            top: 0;
            left: 100%;
            background-color:#fff;

            .menu-icon{
              float: left;
              height: 40px;
              width: 40px;
              margin: 5px 10px;
            }

            .user-icon{
              float: right;
              height: 40px;
              width: 40px;
              margin: 5px 10px;
            }
        }

        &>.nav-header{
            display: flex;
            justify-content: space-between;
            padding: 10px 12px;
            box-sizing: border-box;
            font-size: 16px;

            & li i{
              margin-right: 5px;
            }

            &>.nav-link, .nav-search, .nav-user{
                position: relative;
                display: flex;
                align-items: center;
                height: 46px;
            }

            &>.nav-link{

                &>ul{
                    display: flex;
                    align-items: center;
                    &>li{
                        margin-right: 25px;
                        cursor: pointer;
                    }
                }
            }

            &>.nav-search{
                width: 300px;
                margin: 0 10px;
                transition: width .3s;
            }

            &>.nav-user{

                &>ul{
                    display: flex;
                    align-items: center;
                    &>li{
                        margin-right: 15px;
                        cursor: pointer;
                    }
                }
            }
        }
    }

    .trans-bg{
      background-color: transparent;
    }

    .non-trans-bg{
      background-color: rgba(105,90,90,.85);
    }

    @keyframes index {
      0% {
        transform: translate(0, 0);
      }
      30% {
        transform: translate(0, 5px);
      }
      60% {
        transform: translate(0, -5px);
      }
      100% {
        transform: translate(0, 0);
      }
    }

    @keyframes spin {
      from {
        transform: rotate(0);
      }
      to {
        transform: rotate(180deg);
      }
    }

    .navStateA{
      box-shadow: 5px -4px 7px rgb(0, 0, 0);
      background-color: #fff;
    }

    .navStateN{
      background-color: transparent;
    }
</style>
