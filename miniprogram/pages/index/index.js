/* 
  1. 用户审核：不良内容（暴力、传销..）
  2. 消息提示
  3. 解决如何推送解忧信（服务器发件的负载均衡，每个人都可以收到）
  4. 信件量 > 用户量

  莫忧 借忧 寻觅
 */
let tools = require('../../utils/timeTools');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    dataArr: [{
        bgUrl: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2738668818,2590397852&fm=26&gp=0.jpg',
        title: 'Tomorr',
        time: '2021-1-5',
        isStar: true
      },
      {
        bgUrl: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3569081884,3982453064&fm=26&gp=0.jpg',
        title: 'Blue Guy',
        time: '2021-2-13',
        isStar: false
      },
      {
        bgUrl: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1105979147,3553146784&fm=26&gp=0.jpg',
        title: 'Red Coal',
        time: '2021-2-3',
        isStar: false
      }
    ]
  },

  // 去到美文内容页
  ToBeautyTap(e) {
    // 获取点击背景图
    let bgUrl = e.detail;
    console.log(bgUrl);
    wx.navigateTo({
      url: '/packageWriteLetter/pages/beautyletter/beautyletter?picUrl=' + bgUrl,
    })
  },

  // 跳转解忧页
  ToSorrowTap() {
    wx.navigateTo({
      url: '/packageWriteLetter/pages/sorrowletter/sorrowletter',
    })
  },

  // 初始化数据
  Start() {
    // 设置解忧杂货店显示时间
    let time = '2021-03-24 20:39:00';

    // 显示时间
    let finalShowTime = tools.indexPostBoxTime(time);
    console.log(finalShowTime);


  },

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
        selected: 0
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