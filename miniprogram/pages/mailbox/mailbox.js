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
      imgsrc: "../../images/user.png",
      text: "我的",
      picBgColor: "#E9F1FE"
    }, {
      imgsrc: "../../images/message.png",
      text: "评论",
      picBgColor: "#E6F8F0"
    }]
  },

  // 跳转我的页面
  ToMyInfoTap(e) {
    // 获取点击索引
    let index = e.detail.index;
    console.log(index);
    if(index == 1){
      wx.navigateTo({
        url: '/packageMyInfo/pages/indexinfo/indexinfo',
      })
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