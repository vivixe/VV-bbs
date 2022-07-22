/*
 * @Author: vivi.
 * @Date: 2022-07-22 17:47:41
 * @LastEditTime: 2022-07-22 17:53:34
 * @FilePath: \demo-toutiao\src\api\articleAPI.js
 * @Description:
 */
import request from '@/utils/request'

export const getArticleListAPI = function (_page, _limit) {
  return request.get('/articles', {
    params: {
      _page,
      _limit
    }
  })
}
