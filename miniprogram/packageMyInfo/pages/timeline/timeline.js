// miniprogram/packageMyInfo/pages/timeline/timeline.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    axis: [{
        time: '2021-02-15 21:02',
        event: '迷失的蝴蝶评论了你'
      },
      {
        time: '2021-02-15 04:02',
        event: '可爱的甜筒回复信件'
      },
      {
        time: '2021-03-15 11:32',
        event: '你评论了可爱的甜筒'
      },
      {
        time: '2021-02-23 21:02',
        event: '你书写了一篇日记'
      },
    ],

    // 是否最后一页
    

  },

  // 初始化
  Start() {
    
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