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

    // 请求api
    requestData.squareDiaryLooksNum().then(res => {

    })

  },

  onShow() {
    console.log('App  --> onShow执行了');
  },

  /* 
    创建webSocket连接
  */
  // connectWebSocket() {
  //   wx.connectSocket({
  //     url: 'wss://rayss.host/reply/' + this.globalData.openid,
  //     success: res => {
  //       console.log(res);
  //     },
  //     fail: res => {
  //       console.log(res);
  //     }
  //   });
  // },


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
                    console.log('app.js中的返回的openid： ' + res.data.data);
                    // 获取返回数据
                    let backInfo = JSON.parse(res.data.data);
                    // 将openid赋值全局变量
                    that.globalData.openid = backInfo.openid;
                    // 连接webSocket
                    // that.connectWebSocket();
                    resolve('success')
                  },
                  fail: res => {
                    console.log(res);
                    reject('error')
                  }

                })
              }

            })

          },
        })

      }

    })


  },


})