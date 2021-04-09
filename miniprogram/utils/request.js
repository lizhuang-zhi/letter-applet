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
  },
  // 广场页面公开日记
  squareDiary(pageNum){
    return new Promise((resolve,reject) => {
      wx.request({
        url: apiUrl.getSquareDiary(),
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
  // 吐槽大会的内容详情页中发送评论
  complainletterSendComment(commentObj) {
    return new Promise((resolve,reject) => {
      wx.request({
        header: {
          'content-type':'application/x-www-form-urlencoded'
        },
        method: "POST",
        url: apiUrl.getComplainletterSendComment(),
        data: {
          content: commentObj.content,
          openId: commentObj.openId,
          sgId: commentObj.sgId,
          state: commentObj.state
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
  // 广场日记具体内容
  squareDiaryDetail(id) {
    return new Promise((resolve,reject) => {
      wx.request({
        url: apiUrl.getSquareDiaryDetail(),
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
  // 保存信件
  lettertypeLetterSend(letterObj) {
    return new Promise((resolve,reject) => {
      wx.request({
        header: {
          'content-type':'application/x-www-form-urlencoded'
        },
        method: "POST",
        url: apiUrl.getLettertypeLetterSend(),
        data: {
          content: letterObj.content,
          openId: openId,
          penName: letterObj.penName,
          releaseTime: letterObj.releaseTime,
          stampUrl: letterObj.stampUrl,
          state: letterObj.state,
          tapIds: letterObj.tapIds
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
  // 保存日记
  lettertypeDiarySend(diaryObj) {
    return new Promise((resolve,reject) => {
      wx.request({
        header: {
          'content-type':'application/x-www-form-urlencoded'
        },
        method: "POST",
        url: apiUrl.getLettertypeDiarySend(),
        data: {
          content: diaryObj.content,
          openId: openId,
          penName: diaryObj.penName,
          state: diaryObj.state,
          weather: diaryObj.weather
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
  // 保存吐槽
  lettertypeComplainSend(complainObj) {
    return new Promise((resolve,reject) => {
      wx.request({
        header: {
          'content-type':'application/x-www-form-urlencoded'
        },
        method: "POST",
        url: apiUrl.getLettertypeDiarySend(),
        data: {
          avatarUrl: complainObj.avatarUrl,
          content: complainObj.content,
          date: complainObj.date,
          number: complainObj.number,
          openId: openId,
          penName: complainObj.penName,
          state: complainObj.state,
          title: complainObj.title,
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
  //信箱页面回复信件
  mailboxReplylist(replyObj){
    return new Promise((resolve,reject) => {
      wx.request({
        header: {
          'content-type':'application/x-www-form-urlencoded'
        },
        method: "POST",
        url: apiUrl.getMailboxReplylist(),
        data: {
          letterId:replyObj.letterId,
          message:replyObj.message,
          penName:replyObj.penName,
          recipient:replyObj.recipient,
          sender:replyObj.sender
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
  // 获取未读信件数量
  mailboxNumberOfLetter() {
    return new Promise((resolve,reject) => {
      wx.request({
        url: apiUrl.getMailboxNumberOfLetter(),
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

  }











}


module.exports = requestData;

