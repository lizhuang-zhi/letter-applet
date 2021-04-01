// miniprogram/pages/mailbox/mailbox.js
let tools = require('../../utils/timeTools');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    dataList: [{
      imgsrc: "../../images/love.png",
      text: "点赞",
      picBgColor: "#FBE9E8"
    }, {
      imgsrc: "https://z3.ax1x.com/2021/03/25/6OofiT.png",
      text: "回信",
      picBgColor: "#E9F1FE"
    }, {
      imgsrc: "../../images/message.png",
      text: "评论",
      picBgColor: "#E6F8F0"
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

  // 跳转个人档案
  ToMyInfoTap() {
    wx.navigateTo({
      url: '/packageMyInfo/pages/indexinfo/indexinfo',
    })
  },

  // 跳转顶栏页面
  ToReplyListTap(e) {
    // 获取索引
    let index = e.detail.index;
    if (index == 0) {
      wx.navigateTo({
        url: '/packageMyInfo/pages/star/star',
      })
    } else if (index == 1) {
      wx.navigateTo({
        url: '/packageMyInfo/pages/replylist/replylist',
      })
    } else if (index == 2) {
      wx.navigateTo({
        url: '/packageMyInfo/pages/comment/comment',
      })
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
    // setTimeout(() => {
    //   this.setData({
    //     'pull.loading': '../../images/loading-1.gif',
    //     'pull.pullText': '刷新完成'
    //   })
    // }, 4000)
    setTimeout(() => {
      this.setData({
        'pull.isLoading': false,
      })
      console.log('+++++ 刷新完成 +++++')
    }, 6000)
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
      console.log('===== 加载完成 =====')
    }, 5000)
  },

  // 初始化数据
  Start() {
    let time = '2020-03-2 14:26:39';

    // 最终显示时间
    let finalTime = tools.mailboxShowMessageTime(time);
    console.log(finalTime);



    /* webSocket获取回信 */
    // 1. 建立连接
    wx.connectSocket({
      url: 'wss://rayss.host/reply/我的openid',
    });
    // 2. 监听连接打开
    // wx.onSocketOpen((result) => {

    // })

    // 监听 WebSocket 接受到服务器的消息事件
    wx.onSocketMessage((result) => {
      console.log(result);
    })


  },

  //


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.Start();

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

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

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

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