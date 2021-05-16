let requestData = require('../../../utils/request');
let timeTools = require('../../../utils/timeTools');

let app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {

    // 成就信息数组
    achievementsArr: [],

  },

  // 初始化数据
  Start(openId) {
    wx.showLoading({
      title: '加载中..',
    });
    requestData.userAchieve(openId).then(res => {
      return new Promise((resolve,reject) => {
        console.log(res.data.data);
        // 获取成就数组
        let achieveArr = res.data.data;
        achieveArr.forEach(item => {
          item.obtainTime = timeTools.lockTime(item.obtainTime);
        })
        this.setData({
          achievementsArr: achieveArr
        })
        resolve('success');
      })
    }).then(res => {
      wx.hideLoading({ });
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.Start(app.globalData.openid);
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