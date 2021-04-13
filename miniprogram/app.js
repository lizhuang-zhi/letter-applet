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

  // 获取用户信息 与 openid
  getUserInfo: function (cb) {
    var that = this
    // 使用Promise完成同步！！
    return new Promise(function (resolve, reject) {

      // 已获取用户信息
      if (that.globalData.userInfo) {
        typeof cb == "function" && cb(that.globalData.userInfo)
      } else {
        //调用登录接口
        wx.login({
          success: function (res) {
            // 获取jsCode
            let code = res.code

            // 获取用户信息
            wx.getUserInfo({
              success: function (res) {
                /* 
                  还没授权
                */
                console.log(res);

                that.globalData.userInfo = res.userInfo;
                typeof cb == "function" && cb(that.globalData.userInfo)

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
                    resolve('success')
                  },
                  fail: res => {
                    console.log(res);
                    reject('error')
                  }

                })
              },
              fail: res => {
                console.log(res);
              }

            })

          },
        })

      }

    })


  },

  // 获取用户授权登陆
  getUserAuthor() {
    // 可以通过 wx.getSetting 先查询一下用户是否授权了 "scope.record" 这个 scope
    wx.getSetting({
      success(res) {
        console.log(res);
        console.log(res.authSetting['scope.userInfo']);  // undefined
        if (res.authSetting['scope.userInfo']) {
          console.log("已授权=====")
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称
          // wx.getUserInfo({
          //   success(res) {
          //     console.log("获取用户信息成功", res)
          //     that.setData({
          //       name: res.userInfo.nickName
          //     })
          //   },
          //   fail(res) {
          //     console.log("获取用户信息失败", res)
          //   }
          // })
          wx.getUserProfile({
            success: res => {
              console.log(res);
            },
            fail: res => {
              console.log(res);
            }
          });
        
        } else {
          console.log("未授权=====");
          wx.authorize({
            scope: 'scope.userInfo',
            success () {
              // 用户已经同意小程序使用录音功能，后续调用 wx.startRecord 接口不会弹窗询问
              wx.startRecord()
              console.log(res);
            },
            fail: res => {
              console.log(res);
            }
          })
        }
      }
    })
  }



})