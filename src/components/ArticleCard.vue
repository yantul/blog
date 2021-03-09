<template>
    <!-- <div class="a-card" @mouseover="hover = true" @mouseleave="hover = false"> -->
    <div class="a-card">
      <div class="img-wrap">
        <div class="img-cover"></div>
      </div>
      <div class="content-wrap">
        <h3>测试background-size指定背景图像的大小</h3>
        <p>1{{ this.$store.state.isMobile }}background-size指定背景图像的大小。CSS3以前，背景图像大小由图像的实际大小决定。

CSS3中可以指定背景图片，让我们重新在不同的环境中指定背景图片的大小。您可以指定像素或百分比大小。

你指定的大小是相对于父元素的宽度和高度的百分比的大小。</p>
      </div>
      <div class="info-layer" :class="[ !this.$store.state.isMobile && hover ? 'open' : '']" >
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
  width: calc(98% / 1);
  height: 270px;
  background-color: rgb(252, 249, 249);
  float: left;
  margin: 12px 5px 12px 5px;
  box-sizing: border-box;
  border-radius: 2px;
  overflow: hidden;
  position: relative;
  display: flex;
  justify-content:space-between;
  // box-shadow: 3px -2px 6px 0px #00000069;

  &:hover .img-cover{
    transform: scale(1.12);
  }

  .img-wrap{
    height: 100%;
    // background-color: violet;
    display: flex;
    flex-basis: 250px;
    overflow: hidden;

    &>.img-cover{
      width: 100%;
      height: 100%;
      background-image: url("https://img.iplaysoft.com/wp-content/uploads/2019/free-images/free_stock_photo.jpg!0x0.webp");
      background-size: cover;
      background-position: center;
      transition: transform .5s;
    }
  }

  .content-wrap{
    flex: 1;
    box-sizing: border-box;
    padding: 0 7px 5px 40px;
    text-align: left;

    h3{
      margin-top: 7px;
      margin-bottom: 12px;
      font-size: 30px;
      word-break: break-all;
      -webkit-line-clamp: 1;
      overflow-wrap: break-word;
      text-overflow: ellipsis;
      overflow: hidden;
      -webkit-box-orient:vertical;
    }

    p{
      word-break: break-all;
      -webkit-line-clamp: 4;
      overflow-wrap: break-word;
      text-overflow: ellipsis;
      overflow: hidden;
      display: -webkit-box;
      -webkit-box-orient:vertical;
      margin-bottom: 8px;
      line-height: 30px;
      font-size: 20px;
      color: #4a4848e0;
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
      flex-basis: 250px;
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
