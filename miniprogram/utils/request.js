import apiUrl from '../utils/api';


let requestData = {
  // 首页美文
  indexBeauty() {
    return new Promise((resolve,reject)=>{
      wx.request({
        url: apiUrl.getIndexBeautyUrl(),
        success: res => {
          resolve(res.data);
        },
        fail: res => {
          reject(res.data);
        }
      });
    });
  },


}


module.exports = requestData;

