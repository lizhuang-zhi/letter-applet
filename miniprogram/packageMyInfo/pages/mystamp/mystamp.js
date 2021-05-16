let requestData = require('../../../utils/request');
let timeTools = require('../../../utils/timeTools');
let app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 框架背景颜色
    boxColor: '#FFFFFF',
    // 是否展示弹出框
    isShowPop: false,

    // 邮票信息数组
    stampArr: [],
  },

  // 弹出邮票详情框
  showStampPopup(e) {
    // 获取要显示的邮票信息
    let stampTit = e.currentTarget.dataset.tit;
    let stampDesc = e.currentTarget.dataset.desc;
    let stampEdition = e.currentTarget.dataset.edition;
    let stampPic = e.currentTarget.dataset.pic;
    this.setData({
      isShowPop: true,
      stampTit: stampTit,
      stampDesc: stampDesc,
      stampEdition: stampEdition,
      stampPic: stampPic
    });
  },
  // 关闭邮票详情框
  onStampClose() {
    this.setData({
      isShowPop: false
    });
  },

  // 初始化数据
  Start(openId) {
    wx.showLoading({
      title: '加载中..',
    });
    requestData.userStamp(openId).then(res => {
      return new Promise((resolve, reject) => {
        console.log(res.data.data);
        // 获取成就数组
        let stampArr = res.data.data;
        stampArr.forEach(item => {
          item.obtainTime = timeTools.lockTime(item.obtainTime);
        })
        this.setData({
          stampArr: stampArr
        })
        resolve('success');
      })
    }).then(res => {
      wx.hideLoading({});
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