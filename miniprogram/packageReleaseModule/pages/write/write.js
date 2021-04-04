// packageReleaseModule/pages/write/write.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    //选择的类型
    chooseType:'',
    //用户输入的内容
    textValue:''
  },
  //获取用户输入的内容
  getTextValue(e){
    let textvalue = e.detail.textvalue;
    this.setData({
      textValue:textvalue
    })
  },
  // 跳转标签选择页面
  ToChooseTag(e) {
    // 获取输入内容
    let subvalue = e.currentTarget.dataset.value;
    // 获取类型选择
    let chooseType = this.data.chooseType;
    wx.navigateTo({
      url: '/packageReleaseModule/pages/lettertype/lettertype?subvalue='+ subvalue + '&type=' + chooseType,
    })
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 获取选择类型
    this.setData({
      chooseType:options.type
    })
    console.log(this.data.chooseType);
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