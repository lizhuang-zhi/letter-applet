import Notify from '../../miniprogram_npm/@vant/weapp/notify/notify';
let timeTools = require('../../utils/timeTools');
// 接口Api
let requestData = require('../../utils/request')
// 月报拉取的间隔时间（毫秒）
const getReportTime = 1000 * 24 * 3600;
let app = getApp();
/*
  设置论循定时器 
*/
let setTimeInterVal = null;
// 轮循间隔时长（毫秒）
let timeInterVal = 15 * 1000;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    //openid
    openId: '',
    dataList: [{
      imgsrc: "https://z3.ax1x.com/2021/03/25/6OoQPO.png",
      text: "我的",
      picBgColor: "#FEF7E2",
      notifiNum: 0
    }, {
      imgsrc: "https://z3.ax1x.com/2021/03/25/6OofiT.png",
      text: "回信",
      picBgColor: "#E9F1FE",
      notifiNum: 0
    }, {
      imgsrc: "../../images/message.png",
      text: "评论",
      picBgColor: "#E6F8F0",
      notifiNum: 0
    }],
    // 列表消息的消息个数
    messageList: [],
    // 官方消息个数
    officialNewsNum: 0,
    // 官方消息的最新消息时间
    officialNewsTime: '03-21',

    // loading组件
    pull: {
      isLoading: false,
      loading: 'https://yundingxikj.oss-cn-beijing.aliyuncs.com/LetterStation/loading-2.gif',
      pullText: '正在加载'
    },
    push: {
      isLoading: false,
      loading: 'https://yundingxikj.oss-cn-beijing.aliyuncs.com/LetterStation/loading-2.gif',
      pullText: '-上拉加载更多-'
    },
    slideStart: [],
    moveTime: 0,
  },

  // 跳转顶栏页面
  ToReplyListTap(e) {
    // 获取索引
    let index = e.detail.index;

    // 未获取用户信息与openId
    if (app.globalData.userInfo == null) {
      app.getUserProfile().then(res => {
        // 获取openId
        let openId = app.globalData.openid;
        console.log('《----》' + openId);
        if (index == 0) {
          wx.navigateTo({
            url: '/packageMyInfo/pages/indexinfo/indexinfo?openId=' + openId,
          })
        } else if (index == 1) {
          wx.navigateTo({
            url: '/packageMyInfo/pages/replylist/replylist?openId=' + openId,
          });
          // 将消息提示数量置为0
          let dataList = this.data.dataList;
          dataList[1].notifiNum = 0;
          this.setData({
            dataList: dataList
          });
        } else if (index == 2) {
          wx.navigateTo({
            url: '/packageMyInfo/pages/comment/comment?openid=' + openId,
          })
        }
      })
    } else { // 已获取用户信息与openId
      // 获取openId
      let openId = app.globalData.openid;
      if (index == 0) {
        wx.navigateTo({
          url: '/packageMyInfo/pages/indexinfo/indexinfo?openId=' + openId,
        })
      } else if (index == 1) {
        wx.navigateTo({
          url: '/packageMyInfo/pages/replylist/replylist?openId=' + openId,
        });
        // 将消息提示数量置为0
        let dataList = this.data.dataList;
        dataList[1].notifiNum = 0;
        this.setData({
          dataList: dataList
        });
      } else if (index == 2) {
        wx.navigateTo({
          url: '/packageMyInfo/pages/comment/comment?openid=' + openId,
        })
      }
    }

  },
  // 跳转历史信件
  ToHistoryLetter() {
    // 判断用户登陆并跳转
    this.judgeUserInfoToJump('/packageMyInfo/pages/historyletter/historyletter');
  },
  //跳转到最新活动
  ToLatestevents() {
    /* 置0最新活动数量 */
    this.setMessageListNum(0);
    // 判断用户登陆并跳转
    this.judgeUserInfoToJump('/packageMyInfo/pages/latestevents/latestevents');
  },
  //跳转到官方消息
  ToOfficialnews() {
    /* 置0最新活动数量 */
    this.setMessageListNum(1);
    /* 置0官方消息的月报数量 */
    wx.getStorage({
      key: 'officialNewsReportList',
      success: res => {
        // 获取原数据
        let reportList = res.data.reportList;
        let time = res.data.time;
        wx.setStorage({
          key: 'officialNewsReportList',
          data: {
            reportList: reportList,
            time: time,
            unReadNum: 0
          },
        })
      }
    });

    // 判断用户登陆并跳转
    this.judgeUserInfoToJump('/packageMyInfo/pages/officialnews/officialnews');
  },
  // 跳转我的邮票
  ToMyStamp() {
    /* 置0我的邮票数量 */
    this.setMessageListNum(2);
    // 判断用户登陆并跳转
    this.judgeUserInfoToJump('/packageMyInfo/pages/mystamp/mystamp');
  },
  // 跳转我的成就
  ToMyAchievement() {
    /* 置0我的邮票数量 */
    this.setMessageListNum(3);
    // 判断用户登陆并跳转
    this.judgeUserInfoToJump('/packageMyInfo/pages/myachievements/myachievements');
  },
  // 监听下拉刷新事件
  refresh(openId) {
    // 授权成功
    if (app.globalData.userInfo) {
      // 下拉动作
      this.setData({
        'pull.isLoading': true,
        'pull.loading': 'https://yundingxikj.oss-cn-beijing.aliyuncs.com/LetterStation/loading-2.gif',
        'pull.pullText': '正在加载',
      })
      // 获取接口数据
      this.apiNumberData(app.globalData.openid);
    } else {
      wx.showToast({
        title: '请先完成授权',
        image: '../../images/fail.png'
      })
    }
  },
  // 监听上拉加载更多
  toload(e) {
    console.log('加载', e),
      this.setData({
        'push.isLoading': true,
        'push.pullText': '正在加载',
        'push.loading': 'https://yundingxikj.oss-cn-beijing.aliyuncs.com/LetterStation/loading-2.gif',
      })
    setTimeout(() => {
      this.setData({
        'push.isLoading': false,
        'push.pullText': '- 上拉加载更多 -',
        'push.loading': 'https://yundingxikj.oss-cn-beijing.aliyuncs.com/LetterStation/loading-2.gif',
      })
      console.log('===== 加载完成 =====');
    }, 2300)
  },
  // 初始化数据
  Start(openId) {
    /* 
      进入页面拉取数据接口
    */
    // 开启下拉加载并请求数据
    this.refresh(openId);
    // 获取缓存中的消息数组
    wx.getStorage({
      key: 'mailboxMessageList',
      success: res => {
        this.setData({
          messageList: res.data.messageList
        })
      }
    });
    // 获取官方消息的缓存
    wx.getStorage({
      key: 'officialNewsReportList',
      success: res => {
        // 获取消息数量
        let newsNum = res.data.unReadNum;
        console.log(timeTools.mailboxShowMessageTime(res.data.time));
        this.setData({
          officialNewsNum: newsNum,
          // 官方消息显示时间
          officialNewsTime: timeTools.mailboxShowMessageTime(res.data.time)
        })
      }
    })
  },


  // 判断是否拉取官方消息月报
  isGetMonthReport(time) {
    // 月报拉取的间隔时间（毫秒）
    let timeLong = getReportTime;
    // 时间差（毫秒）
    let timeDifference = new Date() - new Date(time);
    if (timeDifference >= timeLong) {
      /* 
        请求获取月报接口 
       */
      // 获取openId
      let openId = app.globalData.openid;
      // 获取当前时间
      let nowTime = new Date().getTime();
      let reportItem = {};
      reportItem.time = nowTime;
      requestData.monthReport(openId, nowTime).then(res => {
        return new Promise((resolve, reject) => {
          console.log(res);
          // 获取数据集合
          reportItem.data = res.data.data;
          // 赋值数据
          resolve('success');
        })
      }).then(res => {
        if (res == 'success') {
          // 将月报数据存储进缓存
          wx.getStorage({
            key: 'officialNewsReportList',
            success: res => {
              console.log(res);
              // 当前时间戳
              let nowTime = new Date().getTime();
              // 消息个数
              let unReadNum = res.data.unReadNum + 1;
              // 设置页面显示信息
              this.setData({
                // 官方消息显示消息数量
                officialNewsNum: unReadNum,
                // 官方消息显示最新消息时间
                officialNewsTime: timeTools.mailboxShowMessageTime(nowTime)
              })
              // 将拉取到的月报对象存入数组
              res.data.reportList.unshift(reportItem);
              // 存储请求到的月报对象到数组
              wx.setStorage({
                key: 'officialNewsReportList',
                data: {
                  time: nowTime,
                  unReadNum: unReadNum,
                  reportList: res.data.reportList
                },
              })
              // 消息通知
              Notify({
                message: '您有新的月报已送达~',
                color: '#E9F1FE',
                background: '#4C84F6',
                safeAreaInsetTop: true,
                duration: 2000
              });
            },
            fail: res => {
              console.log(res);
            }
          })
        }
      })

    } else {
      console.log('--- 时间未满，不拉取月报 ---');
    }
  },
  // API方法
  apiNumberData(openId) {
    // 获取未读信件数量
    requestData.mailboxNumberOfLetter(openId).then(res => {
      console.log(res.data.data);
      // 获取回信数量
      let letterNum = res.data.data[1];
      // 获取评论数量
      let commentNum = res.data.data[2];
      // 赋值消息提示数量
      let dataList = this.data.dataList;
      dataList[1].notifiNum = letterNum;
      dataList[2].notifiNum = commentNum;
      this.setData({
        dataList: dataList
      });

      // 获取审核数据
      return requestData.officialCheck(openId);

    }).then(res => {
      return new Promise((resolve, reject) => {
        console.log(res.data.data);
        // 获取到的审核消息
        let checkInfo = res.data.data;
        if (checkInfo == null) {
          console.log('------- 暂无审核信息返回 --------');
        } else {
          // 存储信息对象
          let infoObj = {
            time: new Date().getTime(),
            data: checkInfo
          };

          wx.getStorage({
            key: 'officialNewsReportList',
            success: res => {
              // 获取原数据
              let reportList = res.data.reportList;
              let time = res.data.time;
              let unReadNum = res.data.unReadNum;
              // 添加审核对象
              let newList = reportList.concat(infoObj);
              wx.setStorage({
                key: 'officialNewsReportList',
                data: {
                  reportList: newList,
                  time: time,
                  unReadNum: unReadNum
                },
              })
            }
          });
        }
        resolve('success');
      })
    }).then(res => {
      if (res == 'success') {
        // 关闭下拉加载
        this.setData({
          'pull.isLoading': false,
        })
        console.log('-------- 刷新完成 ---------');
      }
    })

  },
  // 轮循方法
  timeToGetData(openId) {
    // 获取接口数据
    this.apiNumberData(openId);
    // 获取缓存中的时间
    wx.getStorage({
      key: 'officialNewsReportList',
      success: res => {
        // 上一次获取月报的时间
        let beforeTimeToGetMonthReport = res.data.time;
        // 拉取官方消息
        this.isGetMonthReport(beforeTimeToGetMonthReport);
      }
    })
  },
  // 置空消息列表数量
  setMessageListNum(index) {
    wx.getStorage({
      key: 'mailboxMessageList',
      success: res => {
        // 获取数组列表
        let list = res.data.messageList;
        list[index] = 0;
        // 获取缓存时间并存储
        let time = res.data.nowTime;
        let obj = {
          messageList: list,
          nowTime: time
        }
        wx.setStorage({
          key: 'mailboxMessageList',
          data: obj,
        })
      }
    })
  },
  // 判断用户登陆，并跳转
  judgeUserInfoToJump(pageUrl) {
    /* 
        判断登陆与否
      */
    wx.getStorage({
      key: 'userInfo',
      success: res => {
        console.log(res.data);
        // 缓存中存在用户信息（已授权）
        if (res.data != null) {
          wx.navigateTo({
            url: pageUrl,
          })
        }
      },
      fail: res => {
        console.log(res);
        // 先授权
        app.getUserProfile().then(res => {
          wx.navigateTo({
            url: pageUrl,
          })
        })
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log('mailbox页面 ------ 监听页面加载');

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    console.log('监听页面初次渲染完成');

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    // if (typeof this.getTabBar === 'function' &&
    //   this.getTabBar()) {
    //   this.getTabBar().setData({
    //     selected: 2
    //   })
    // }
    console.log('mailbox页面  ------- 监听页面显示');

    // 页面显示时，若用户已登录授权则拉取一次信息
    if (app.globalData.userInfo) {
      this.Start(app.globalData.openid);
    }

    /* 
      设置轮循进行接口拉取
    */
    if (app.globalData.userInfo) {
      setTimeInterVal = setInterval(() => {
        /* 拉取数据 */
        this.timeToGetData(app.globalData.openid);
      }, timeInterVal);
    } else {
      console.log('--- 未授权！不进行轮询拉取 ---');
    }


  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    console.log('mailbox页面 ----- 监听页面隐藏');

    /* 
      当页面被隐藏时，清除定时器
    */
    clearInterval(setTimeInterVal);
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    console.log('监听页面卸载');

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})