// miniprogram/pages/mailbox/mailbox.js
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

  // 跳转我的页面
  ToMyInfoTap() {
    wx.navigateTo({
      url: '/packageMyInfo/pages/indexinfo/indexinfo',
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

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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