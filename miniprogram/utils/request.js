import apiUrl from '../utils/api';


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

