let timeTools = require('../../../utils/timeTools');
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
  ToCheckOutReport(e) {
    // 获取点击月报对象的索引
    let reportIndex = e.currentTarget.dataset.index;
    console.log(reportIndex);
    wx.navigateTo({
      url: '/packageMyInfo/pages/myinfomore/myinfomore?reportIndex=' + reportIndex,
    })
  },

  // 初始化数据
  Start() {
    // 从缓存中获取月报数组
    wx.getStorage({
      key: 'officialNewsReportList',
      success: res => {
        console.log(res);
        let reportList = res.data.reportList;
        // 修改显示时间格式
        reportList.forEach(item => {
          item.time = timeTools.mailboxShowMessageTime(item.time);
        });
        
        // 设置月报和审核数组
        this.setData({
          monthReportList: reportList
        })
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