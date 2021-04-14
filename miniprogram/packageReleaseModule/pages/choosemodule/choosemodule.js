// packageReleaseModule/pages/choosemodule/choosemodule.js
let app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  // 跳转发布日记
  toDiary(e) {
    if (app.globalData.userInfo == null) {
      app.getUserProfile().then(res => {
        // 获取类型
        let ChooseType = e.detail.chooseType;
        wx.navigateTo({
          url: '/packageReleaseModule/pages/write/write?type=' + ChooseType,
        });
      })
    } else {
      // 获取类型
      let ChooseType = e.detail.chooseType;
      wx.navigateTo({
        url: '/packageReleaseModule/pages/write/write?type=' + ChooseType,
      });
    }

  },

  // 跳转发布解忧
  toSolveSorrow(e) {
    if (app.globalData.userInfo == null) {
      app.getUserProfile().then(res => {
        // 获取类型
        let ChooseType = e.detail.chooseType;
        wx.navigateTo({
          url: '/packageReleaseModule/pages/write/write?type=' + ChooseType,
        });
      })
    } else {
      // 获取类型
      let ChooseType = e.detail.chooseType;
      wx.navigateTo({
        url: '/packageReleaseModule/pages/write/write?type=' + ChooseType,
      });
    }

  },

  // 跳转发布吐槽
  toComplian(e) {
    if (app.globalData.userInfo == null) {
      app.getUserProfile().then(res => {
        // 获取类型
        let ChooseType = e.detail.chooseType;
        wx.navigateTo({
          url: '/packageReleaseModule/pages/write/write?type=' + ChooseType,
        });
      })
    } else {
      // 获取类型
      let ChooseType = e.detail.chooseType;
      wx.navigateTo({
        url: '/packageReleaseModule/pages/write/write?type=' + ChooseType,
      });
    }
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