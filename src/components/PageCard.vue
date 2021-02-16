<template>
  <div class="page-card" :style="{ height: cardHeight }">
      <div ref="card_header" class="card-header" :style="{ backgroundColor: headBackground }">
          <ul>
              <li v-for="(item, index) in cards" :key="item.header" @click="itemClick(index, $event)">{{ item.header }}</li>
          </ul>
          <div v-if="showScrollBar || cards.length > 1" ref="scrollblock" :style="{ left: offsetLeft + 'px', width: offsetWidth + 'px' }" class="scroll-block"></div>
      </div>
      <div class="card-body">
          <ul>
            <li v-for="(item, index) in cards" v-show="index == checked" :key="item.content" >
              <div class="card-wrap" :style="{ backgroundColor: bodyBackground }" v-html="item.content">
                {{ item.content }}
              </div>
            </li>
          </ul>
      </div>
  </div>
</template>

<script>
export default {
  name: 'PageCard',
  data: function () {
    return {
      offsetLeft: 8,
      offsetWidth: 56,
      checked: 0
    }
  },
  props: {
    cardHeight: {
      type: String,
      default: '400px'
    },
    cards: {
      type: Array,
      default: function () {
        return [
          { header: '默认卡片', content: '<del>默认卡片</del>' }
        ]
      }
    },
    bodyBackground: {
      type: String,
      default: '#fff'
    },
    headBackground: {
      type: String,
      default: '#fff'
    },
    showScrollBar: {
      type: Boolean,
      default: false
    }
  },
  mounted () {
    this.offsetWidth = this.$refs.card_header.children[0].children[0].offsetWidth + 14
  },
  methods: {
    enter (index, event) {
      if (this.cards.length <= 1) return
      this.offsetWidth = event.toElement.offsetWidth + 14
      this.offsetLeft = event.toElement.offsetLeft - 6
      // console.log(event)
    },
    itemClick (index, event) {
      this.enter(index, event)
      this.checked = index
    }
  }
}
</script>

<style lang="scss">
.page-card{
    width: 98%;
    // height: 400px;
    margin: 10px calc(2% / 2) 15px calc(2% / 2);
    box-sizing: border-box;
    // background-color: rgb(230, 230, 230);
    border-radius: 3px;
    overflow: hidden;
    position: relative;

    .card-header{
        position: relative;
        width: 1%;
        height: 50px;
        // background-color: #fff;
        box-sizing: border-box;
        padding: 6px;
        border-bottom: 4px solid transparent;
        font-size: 16px;
        user-select: none;
        display: table-cell;
        vertical-align: middle;

        &>ul{
            overflow: auto;

            &>li{
            padding: 4px;
            margin:0 8px;
            float: left;
            cursor: pointer;

              &:hover{
                color: #78be34;
              }
            }
        }

        .scroll-block{
            height: 4px;
            width: 56px;
            left: 8px;
            background-color: #36a6b3;
            position: absolute;
            top: 46px;
            transition: width .3s, left .3s;
        }
    }

    .card-body{
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        top: 50px;
        background-color:#fff;

        ul{
          width: 100%;
          height: 100%;
          box-sizing: border-box;

          &>li{
            width: 100%;
            height: 100%;
            overflow: hidden;
            position: absolute;
            top: 0;
            left: 0;

            &>.card-wrap{
              width: 100%;
              height: 100%;
              // background-color: rgb(146, 114, 114);
              text-align: start;
            }
          }
        }
    }
}
</style>
