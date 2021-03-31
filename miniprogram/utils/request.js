import apiUrl from '../utils/api';

// 用户openId
const openId = 'vx001';

let requestData = {
  // 首页美文
  indexBeauty() {
    return new Promise((resolve,reject)=>{
      wx.request({
        url: apiUrl.getIndexBeautyUrl(),
        success: res => {
          resolve(res);
        },
        fail: res => {
          reject(res);
        }
      });
    });
  },
  // 首页三封信件
  indexLetters() {
    return new Promise((resolve,reject) => {
      wx.request({
        url: apiUrl.getIndexLetters(),
        data: {
          openId: openId
        },
        success: res => {
          resolve(res)
        },
        fail: res => {
          reject(res)
        }
      })
    })
  },
  // 获取美文内容
  beautyletter(articleIndex) {
    return new Promise((resolve,reject) => {
      wx.request({
        url: apiUrl.getBeautyletter(),
        data: {
          index: articleIndex
        },
        success: res => {
          resolve(res)
        },
        fail: res => {
          reject(res)
        }
      })
    })
  }


}


module.exports = requestData;

