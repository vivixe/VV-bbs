<!--
 * @Author: vivi.
 * @Date: 2022-07-22 18:10:50
 * @LastEditTime: 2022-07-22 21:54:42
 * @FilePath: \demo-toutiao\src\components\Article\ArticleInfo.vue
 * @Description:
-->
<template>
  <div>
    <van-cell>
      <template #title>
        <div class="title-box">
          <span>{{title}}</span>
          <img :src="cover.images[0]" alt="" class="thumb" v-if="cover.type === 1">
        </div>
        <div class="thumb-box" v-if="cover.type === 3">
          <img :src="item" alt="" v-for="(item,i) in cover.images" :key="i" class="thumb">
        </div>
      </template>
      <template #label>
        <div class="label-box">
          <span>作者 {{author}} &nbsp;&nbsp; {{cmtCount}}评论 &nbsp;&nbsp;&nbsp;&nbsp;  {{time}}</span>
          <van-icon name="cross"/>
        </div>
      </template>
    </van-cell>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: ''
    },
    author: {
      type: String,
      default: 'Vivixe'
    },
    cmtCount: {
      type: [Number, String],
      default: 0
    },
    time: {
      type: String,
      default: ''
    },
    cover: {
      type: Object, default: () => { return { type: 0 } }
    }
  }
}
</script>

<style lang="less" scoped>
  .label-box {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .thumb{
    width:113px;
    height:70px;
    background-color: #f8f8f8;
    object-fit: cover;
  }
  .title-box{
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
  }
  .thumb-box{
    display: flex;
    justify-content: space-between;
    // img{
    //   box-sizing: border-box;
    //   border: 2px solid white;
    // }
  }
</style>
