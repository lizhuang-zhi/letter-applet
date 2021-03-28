// packageReleaseModule/pages/write/write.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    //按钮宽度
    BtnWidth:'200rpx',
    //按钮高度
    BtnHeight:'80rpx',
    //按钮圆角
    BtnRadius:'20rpx',
    //行高
    LineHeight:'80rpx',
    //背景颜色
    BtnBackColor:'#F0934F',
    //文字颜色
    BtnColor:'white'
  },

  // 跳转标签选择页面
  ToChooseTag() {
    wx.navigateTo({
      url: '/packageReleaseModule/pages/lettertype/lettertype',
    })
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