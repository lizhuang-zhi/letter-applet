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
  },
  // 广场吐槽大会
  squareComplain(pageNum) {
    return new Promise((resolve,reject) => {
      wx.request({
        url: apiUrl.getSquareComplain(),
        data: {
          pageNum: pageNum
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
  // 吐槽大会的内容详情页
  complainDetail(id) {
    return new Promise((resolve,reject) => {
      wx.request({
        url: apiUrl.getComplainletter(),
        data: {
          id: id
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
  // 吐槽大会的内容详情页评论集合
  complainDetailComment(id,pageNum) {
    return new Promise((resolve,reject) => {
      wx.request({
        url: apiUrl.getComplainletterComment(),
        data: {
          id: id,
          pageNum: pageNum
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

