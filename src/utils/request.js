/*
 * @Author: vivi.
 * @Date: 2022-07-22 17:29:03
 * @LastEditTime: 2022-07-22 17:30:31
 * @FilePath: \demo-toutiao\src\utils\request.js
 * @Description:
 */
import axios from 'axios'

const request = axios.create({
  baseURL: 'https://www.escook.cn'
})

export default request
