<!--
 * @Author: vivi.
 * @Date: 2022-07-22 15:48:08
 * @LastEditTime: 2022-07-22 21:58:17
 * @FilePath: \demo-toutiao\src\views\Home\MyHome.vue
 * @Description:
-->
<template>
  <div class="home-container">
    <div v-if="navbarVisible">
      <van-nav-bar title="程序狗" fixed >
        <template #right>
          <van-icon name="add-o" size="24" />
        </template>
        <template #left>
          <van-icon name="search" size="22" @click="showSearch" />
        </template>
      </van-nav-bar>
    </div>
    <div class="home-search" v-else>
      <van-search
        v-model="value"
        show-action
        placeholder="请输入搜索关键词"
        @search="onSearch"
        @cancel="onCancel"
      />
    </div>
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
      artlist: [],
      value: '',
      navbarVisible: true
    }
  },
  methods: {
    // 封装获取文章列表的方法
    async initArticleList () {
      const { data: res } = await getArticleListAPI(this.page, this.limit)
      this.artlist = res
    },
    // 搜索按钮点击事件
    showSearch () {
      this.navbarVisible = false
    },
    // 搜索框取消按钮点击事件
    onCancel () {
      this.navbarVisible = true
    },
    // 搜索框搜索按钮点击事件
    onSearch () {
      console.log(this.value)
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
  .home-search{
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 999;
    .van-search{
      width: 100%;
      .van-search__cancel{
        color: #333;
      }
    }
  }
  .van-nav-bar {
    background-color: #f9552f;
    .van-icon{
      color:#fff;
    }
  }
  /deep/.van-nav-bar__title {
    color: #fff;
    font-size: 20px;
  }
}
</style>
