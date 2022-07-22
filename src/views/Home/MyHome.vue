<!--
 * @Author: vivi.
 * @Date: 2022-07-22 15:48:08
 * @LastEditTime: 2022-07-22 20:08:44
 * @FilePath: \demo-toutiao\src\views\Home\MyHome.vue
 * @Description:
-->
<template>
  <div class="home-container">
    <van-nav-bar title="" fixed>
  <template #left>
    <van-icon name="search" size="18" />
  </template>
  <template #right>
    <van-icon name="search" size="18" />
  </template>
</van-nav-bar>
    <ArticleInfo
      v-for="item in artlist"
      :key="item.id"
      :title="item.title"
      :cmt-count="item.comm_count"
      :time="item.pubdate"
      :cover="item.cover"
    ></ArticleInfo>
  </div>
</template>

<script>
import { getArticleListAPI } from '@/api/articleAPI'
import ArticleInfo from '@/components/Article/ArticleInfo'

export default {
  name: 'MyHome',
  data () {
    return {
      page: 2,
      limit: 10,
      artlist: []
    }
  },
  methods: {
    // 封装获取文章列表的方法
    async initArticleList () {
      const { data: res } = await getArticleListAPI(this.page, this.limit)
      this.artlist = res
    }
  },
  components: {
    ArticleInfo
  },
  created () {
    this.initArticleList()
  }
}
</script>

<style lang="less" scoped>
.home-container {
  padding: 46px 0 50px 0;
  .van-nav-bar {
    background-color: white;
  }
  /deep/.van-nav-bar__title {
    color: white;
  }
}
</style>
