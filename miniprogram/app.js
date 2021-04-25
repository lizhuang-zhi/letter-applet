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
    let that = this;

    /* 
      去缓存中获取用户授权
    */
    wx.getStorage({
      key: 'userInfo',
      success: res => {
        console.log(res.data);
        // 存储信息到全局变量
        that.globalData.userInfo = res.data;
        that.globalData.openid = res.data.openId;
      },
      fail: res => {
        console.log('---- 缓存中无用户信息 ----');
      }
    })
    /* 
      设置mailbox页面消息缓存
    */
    wx.getStorage({
      key: 'mailboxMessageList',
      success: res => {
        console.log(res);
      },
      fail: res => {
        console.log(res);
        // 存储消息列表数量
        let messageList = [2,3,8,1];
        // 存储当前的时间
        let nowTime = new Date();
        // 封存整体对象
        let mailMessObject = {
          messageList,
          nowTime
        };
        wx.setStorage({
          key: 'mailboxMessageList',
          data: mailMessObject
        })
      }
    })


  },
  onHide() {
    console.log('App  --> onHide执行了');
    /* 
      更新日记浏览量接口
    */
    this.updateDiaryLooksNum();

    /* 
      用户退出，更新登陆时间接口
    */
    // 获取用户openId
    let openId = this.globalData.openid;
    console.log(openId);
    if (openId != null) {
      requestData.userSignOut(openId).then(res => {
        console.log(res);
      })
    }

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
              that.accountUserInfo().then(res => {
                resolve('success');
              })
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
    let userInfoNew = Object.assign(userInfo, {
      openId: that.globalData.openid,
      state: 0,
    });
    /* 
      将用户信息存入缓存
    */
    wx.setStorageSync('userInfo', userInfoNew);
    console.log(userInfoNew);
    return new Promise((resolve, reject) => {
      requestData.userAccount(userInfoNew).then(res => {
        resolve('success');
      })
    })
  },
  // 获取用户授权登陆（此方法调用getUserOpenId）
  getUserProfile() {
    let that = this;
    return new Promise((resolve, reject) => {
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
  },
  // 更新公开日记浏览量
  updateDiaryLooksNum() {
    return new Promise((resolve, reject) => {
      // 获取本地缓存中改变过的浏览量
      wx.getStorage({
        key: 'changeDiaryArr',
        success: res => {
          console.log(res);
          // 获取数组
          let infoArr = res.data;
          // 新数组
          // let newInfoArr = [];
          // for(let ele of infoArr) {
          //   newInfoArr.push(JSON.stringify(ele));
          // };
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
            resolve('success');
          })

        },
        fail: res => {
          console.log(res);
          resolve('fail');
        }
      })
    })
  }

})