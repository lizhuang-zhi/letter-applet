let app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 月报数组
    monthReportList: []

  },

  // 去查看月报
  ToCheckOutReport() {
    // 获取openId
    let openId = app.globalData.openid;
    wx.navigateTo({
      url: '/packageMyInfo/pages/myinfomore/myinfomore?openId=' + openId,
    })
  },

  // 初始化数据
  Start() {
    // 从缓存中获取月报数组
    wx.getStorage({
      key: 'officialNewList',
      success: res => {
        console.log(res);
        // 设置月报时间
        // this.setData({
        //   monthReportList: res.data.monthList
        // })
      },
      fail: res => {
        console.log(res);
      }
    })
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