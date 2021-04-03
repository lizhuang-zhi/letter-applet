// packageReleaseModule/pages/attention/attention.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    chooseType: '',
    PromptData1: ["请文明用语", "违规内容会屏蔽", "小伙伴会解答您的内容"],
    PromptData2: ['叙事为主，抒情为辅', '人名、地点使用别名'],
    PromptData3: ['解答并非答案，仅供参考，自行斟酌', '遇到不良内容请投诉'],
    tipcontent: '谢谢您的信任，准备将心里话说给TA。但请注意，为了维护良好的环境，请遵循以下规则'
  },
  //跳转页面
  ToWriteArea() {
    let type = this.data.chooseType;   
    if (type=='解忧'){
      wx.navigateTo({
        url: '/packageReleaseModule/pages/write/write?type=解忧',
      })
    } else if(type=='吐槽'){
      wx.navigateTo({
        url: '/packageReleaseModule/pages/write/write?type=吐槽',
      })
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      chooseType: options.type
    })
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