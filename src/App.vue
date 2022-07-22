<!--
 * @Author: vivi.
 * @Date: 2022-07-22 15:22:06
 * @LastEditTime: 2022-07-22 19:11:05
 * @FilePath: \demo-toutiao\src\App.vue
 * @Description:
-->
<template>
  <div>
    <!-- 路由占位符 -->
    <router-view></router-view>

    <!-- 底部导航栏组件 -->
    <van-tabbar route active-color="#ee0a24" inactive-color="#000">
      <van-tabbar-item  to="/" icon="home-o" dot>首页</van-tabbar-item>
      <van-tabbar-item  to="/message" icon="friends-o" badge="99+">消息</van-tabbar-item>
      <van-tabbar-item  to="/user" icon="user-o">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  name: 'App'
  // data () {
  //   return {
  //     active: 0
  //   }
  // }
}
</script>

<style lang="less" scoped></style>
