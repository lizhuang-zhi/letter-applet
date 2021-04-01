// packageWriteLetter/pages/complaintletter/complaintletter.js
let requestData = require('../../../utils/request');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // loading组件
    isShowLoading: true,

  },

  // 初始化数据
  Start(id) {
    requestData.complainDetail(id).then(res => {
      return new Promise((resolve, reject) => {
        if (res.statusCode == 200) {
          // 存储对象
          let complianObj = res.data.data;
          console.log(complianObj);
          // 处理数据
          this.setData({
            complianObj: complianObj
          })

          resolve('success');
        } else {
          reject('error');
        }

      });

    }).then(res => {
      if (res == 'success') {
        // loading加载完毕
        this.setData({
          isShowLoading: false
        })
      } else {
        console.log(res);
      }

    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.Start(options.id);
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