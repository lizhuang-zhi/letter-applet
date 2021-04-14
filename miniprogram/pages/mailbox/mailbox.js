// miniprogram/pages/mailbox/mailbox.js
let tools = require('../../utils/timeTools');
// 接口Api
let requestData = require('../../utils/request')

let app = getApp();
/*
  设置论循定时器 
*/
let setTimeInterVal = null;
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
      isShowNum: 'block',
      notifiNum: 0
    }, {
      imgsrc: "https://z3.ax1x.com/2021/03/25/6OofiT.png",
      text: "回信",
      picBgColor: "#E9F1FE",
      isShowNum: 'block',
      notifiNum: 0
    }, {
      imgsrc: "../../images/message.png",
      text: "评论",
      picBgColor: "#E6F8F0",
      isShowNum: 'block',
      notifiNum: 0
    }],

    // loading组件
    pull: {
      isLoading: false,
      loading: '../../images/loading-2.gif',
      pullText: '正在加载'
    },
    push: {
      isLoading: false,
      loading: '../../images/loading-2.gif',
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
    if (!app.globalData.userInfo) {
      app.getUserProfile().then(res => {
        // 获取openId
        let openId = app.globalData.openid;
        if (index == 0) {
          wx.navigateTo({
            url: '/packageMyInfo/pages/indexinfo/indexinfo',
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
          url: '/packageMyInfo/pages/indexinfo/indexinfo',
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
  //挑转到官方消息
  ToOfficialnews() {
    wx.navigateTo({
      url: '/packageMyInfo/pages/officialnews/officialnews',
    })
  },
  //挑转到最新活动
  ToLatestevents() {
    wx.navigateTo({
      url: '/packageMyInfo/pages/latestevents/latestevents',
    })
  },
  // 监听下拉刷新事件
  refresh(e) {
    console.log('刷新', e)
    this.setData({
      'pull.isLoading': true,
      'pull.loading': '../../images/loading-2.gif',
      'pull.pullText': '正在加载',
    })
  },
  // 监听上拉加载更多
  toload(e) {
    console.log('加载', e),
      this.setData({
        'push.isLoading': true,
        'push.pullText': '正在加载',
        'push.loading': '../../images/loading-2.gif',
      })
    setTimeout(() => {
      this.setData({
        'push.isLoading': false,
        'push.pullText': '- 上拉加载更多 -',
        'push.loading': '../../images/loading-2.gif',
      })
      console.log('===== 加载完成 =====');
    }, 3000)
  },

  // 初始化数据
  Start(openId) {
    // let time = '2020-03-2 14:26:39';

    // // 最终显示时间
    // let finalTime = tools.mailboxShowMessageTime(time);
    // console.log(finalTime);

    /* 
      进入页面拉取数据接口
    */
    // 开启下拉加载
    this.refresh();
    // 获取接口数据
    this.apiNumberData(openId);

  },

  // API方法
  apiNumberData(openId) {
    // 获取未读信件数量
    requestData.mailboxNumberOfLetter(openId).then(res => {
      console.log(res.data.data);
      return new Promise((resolve, reject) => {
        // 获取回信数量
        let letterNum = res.data.data[1];
        // 赋值消息提示数量
        let dataList = this.data.dataList;
        dataList[1].notifiNum = letterNum;
        this.setData({
          dataList: dataList
        });
        resolve('success');
      })
    }).then(res => {
      if (res == 'success') {
        /* 
          获取收到评论请求个数
        */
        return new Promise((resolve, reject) => {
          let openId = this.data.openId;
          requestData.mailboxNumberOfmessage(openId).then(res => {
            let arrList = this.data.dataList;
            if (res.data.data == null) {
              arrList[2].isShowNum = 'none';
              this.setData({
                dataList: arrList
              })
            } else {
              arrList[2].notifiNum = res.data.data;
              this.setData({
                dataList: arrList
              });
            }
            resolve('success');
          })
        })
      }
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
  timeToGetData() {
    // 获取opneId
    let openId = this.data.openId;
    // 获取接口数据
    this.apiNumberData(openId);
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
    if (typeof this.getTabBar === 'function' &&
      this.getTabBar()) {
      this.getTabBar().setData({
        selected: 2
      })
    }
    console.log('mailbox页面  ------- 监听页面显示');

    // 页面显示时，若用户已登录授权则拉取一次信息
    if(app.globalData.userInfo) {
      this.Start();
    }

    /* 
      设置轮循进行接口拉取
    */
    setTimeInterVal = setInterval(() => {
      /* 拉取数据 */
      this.timeToGetData();
    }, 15000);

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