<template>
    <div class="a-card" @mouseover="hover = true" @mouseleave="hover = false">
      <div class="img-wrap"><img src="" title="未知图片..." /></div>
      <div class="content-wrap">
        <h3>测试</h3>
        <p>background-size指定背景图像的大小。CSS3以前，背景图像大小由图像的实际大小决定。

CSS3中可以指定背景图片，让我们重新在不同的环境中指定背景图片的大小。您可以指定像素或百分比大小。

你指定的大小是相对于父元素的宽度和高度的百分比的大小。</p>
      </div>
      <div class="info-layer" :class="{ open: hover }" >
        <div class="pic-mask"></div>
        <div class="more-mask">
          <span>
            <p>25/12/2020 08:00 PM <i>#JAVA</i></p>
            <router-link :to='{path:"/details/"+id}' >Click</router-link>
          </span>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'ArticleCard',
  data: function () {
    return {
      hover: false,
      id: 1
    }
  },
  methods: {
  },
  mounted: function () {
  }
}
</script>

<style lang="scss">
.a-card{
  width: calc(97% / 3);
  height: 140px;
  background-color: rgb(252, 249, 249);
  float: left;
  margin: 2px 7px 6px 7px;
  box-sizing: border-box;
  border-radius: 2px;
  overflow: hidden;
  position: relative;
  display: flex;
  justify-content:space-between;
  box-shadow: 3px -2px 6px 0px #00000069;

  .img-wrap{
    height: 100%;
    // background-color: violet;
    display: flex;
    flex-basis: 170px;

    &>img{
      width: 100%;
      height: 100%;
    }
  }

  .content-wrap{
    flex: 1;
    box-sizing: border-box;
    padding: 0 7px 5px 7px;
    text-align: left;

    h3{
      margin-top: 7px;
      margin-bottom: 12px;
    }

    p{
      word-break: break-all;
      -webkit-line-clamp: 3;
      overflow-wrap: break-word;
      text-overflow: ellipsis;
      overflow: hidden;
      display: -webkit-box;
      -webkit-box-orient:vertical;
      margin-bottom: 8px;
      line-height: 20px;
    }
  }

  .info-layer{
    position: absolute;
    width: 100%;
    height: 100%;
    top: 76%;
    left: 0;
    transition: top .3s;
    display: flex;
    justify-content: space-between;

    .pic-mask{
      flex-basis: 170px;
      height: 100%;
    }

    .more-mask{
      flex: 1;
      height: 100%;
      position: relative;
      transition: background-color .3s;

      span{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        text-align: left;
        box-sizing: border-box;
        padding:0 10px;

        p{
          margin-top: 10px;
          // color: #000;
        }

        i{
          // color:#000;
          float: right;
        }
      }
    }
  }
}

.open{
  top: 0!important;
}

.a-card:hover .more-mask{
    background-color: #4c4c4ccb!important;

    p{
      color: #fff;
    }
  }
</style>
