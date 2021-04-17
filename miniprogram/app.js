//app.js
let requestData = require('./utils/request');
App({
  // 定义全局变量
  globalData: {
    openid: null,
    token: '',
    userInfo: null
  },

  onLaunch: function () {
    console.log('App  --> onLaunch执行了');

    console.log(this.globalData);
    // this.globalData = {}

  },

  onHide() {
    console.log('App  --> onHide执行了');
    /* 
      调用日记浏览量接口
    */
    // 获取本地缓存中改变过的浏览量
    wx.getStorage({
      key: 'changeDiaryArr',
      success: res => {
        console.log(res);
        // 获取数组
        let infoArr = res.data;
        // 请求api
        requestData.squareDiaryLooksNum(infoArr).then(res => {
          console.log(res);
          /* 请求成功，清除缓存 */
          wx.removeStorage({
            key: 'changeDiaryArr',
            success: res => {
              console.log('清理公开日记浏览量本地缓存');
            }
          })
        })

      },
      fail: res => {
        console.log(res);
      }
    })

  },

  onShow() {
    console.log('App  --> onShow执行了');
  },

  // 获取用户openid
  getUserOpenId() {
    var that = this
    // 使用Promise完成同步！！
    return new Promise(function (resolve, reject) {
      //调用登录接口
      wx.login({
        success: function (res) {
          // 获取jsCode
          let code = res.code;

          //获取openid接口
          wx.request({
            url: 'https://rayss.host/user/getKey',
            data: {
              jsCode: code
            },
            method: 'GET',
            success: function (res) {
              // 获取返回数据
              let backInfo = JSON.parse(res.data.data);
              // 将openid赋值全局变量
              that.globalData.openid = backInfo.openid;
              // 用户注册
              // that.accountUserInfo().then(res => {
              // })
              resolve('success');
            },
            fail: res => {
              console.log(res);
              reject('error')
            }

          });

        },
      })

    })

  },

  // 用户注册（userInfo)
  accountUserInfo() {
    let that = this;
    // 获取用户信息
    let userInfo = that.globalData.userInfo;
    let userInfoNew = Object.assign(userInfo,{
      openId: that.globalData.openid,
      state: 0,
    });
    console.log(userInfoNew);
    return new Promise((resolve,reject) => {
      requestData.userAccount(userInfoNew).then(res => {
        console.log(res);
      })
    })
  },

  // 获取用户授权登陆（此方法调用getUserOpenId）
  getUserProfile() {
    let that = this;
    return new Promise((resolve,reject) => {
      wx.getSetting({
        success(res) {
          // 未授权用户信息
          if (!res.authSetting['scope.userInfo']) {
            wx.authorize({
              scope: 'scope.userInfo',
              success: res => {
                console.log(res);
              },
              fail: res => {
                console.log(res);
              }
            })
          } else { // 授权用户信息
            wx.getUserProfile({
              desc: '获取用户信息',
              success: res => {
                console.log(res);
                // 将获取的用户信息赋值全局变量
                that.globalData.userInfo = res.userInfo;
                // 获取用户openId
                that.getUserOpenId().then(res => {
                  resolve('获取用户信息成功');
                })
              },
              fail: res => {
                console.log(res);
              }
            });
          }
        }
      })
    })
  }



})