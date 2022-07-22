<!--
 * @Author: vivi.
 * @Date: 2022-07-22 15:49:13
 * @LastEditTime: 2022-07-22 21:59:51
 * @FilePath: \demo-toutiao\src\views\User\MyUser.vue
 * @Description:
-->
<template>
  <div class="user-container">
    <div class="user-card">
      <van-cell>
        <template #icon>
          <img src="../../assets/headpic.jpg" alt="" class="avatar"/>
        </template>
        <template #title>
            <span class="username">肥肥狗</span>
        </template>
        <template #label>
            <van-tag color="#fff" text-color="#f9552f">前端开发</van-tag>
        </template>
      </van-cell>

      <!-- 动态、关注、粉丝 -->
      <div class="user-data">
        <div class="user-data-item">
          <span>67</span>
          <span>动态</span>
        </div>
        <div class="user-data-item">
          <span>43</span>
          <span>关注</span>
        </div>
        <div class="user-data-item">
          <span>1.9W</span>
          <span>粉丝</span>
        </div>
      </div>
    </div>

    <!-- 操作面板 -->
    <van-cell-group class="action-card">
      <van-cell icon="edit" title="编辑资料" is-link/>
      <van-cell icon="chat-o" title="联系客服" is-link/>
      <van-cell icon="warning-o" title="退出登录" is-link/>
    </van-cell-group>
  </div>
</template>

<script>
export default {
  name: 'MyUser'

}
</script>

<style lang="less" scoped>
.user-container {
  .user-card{
    background-color: #f9552f;
    color: white;
    padding-top: 20px;
    .van-cell{
      background-color: #f9552f;
      color: white;
      &::after{
        display: none;
      }
      .avatar{
        width: 60px;
        height: 60px;
        background-color: #fff;
        border-radius: 50%;
        margin-right: 10px;
      }
      .username{
        font-size: 14px;
        font-weight: bold;
      }
    }
  }
  .user-data{
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    font-size: 14px;
    padding: 30px 0;
    .user-data-item{
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 33.33%;
    }
  }
}
</style>
