// 引入加载数据
let requestData = require('../../../utils/request');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    replyList: []
  },

  // 点击跳转信件内容
  clickEvent() {
    // 获取信件letterId
    let letterId = null;
    wx.navigateTo({
      url: '/packageMyInfo/pages/replyletter/replyletter?letterId=' + letterId,
    })
  },

  //初始化数据 
  Start() {
    // 获取未读信件
    requestData.replylist().then(res => {
      console.log(res.data.data);
      // 获取未读消息数组
      let unReadLetterArr = res.data.data;

      this.setData({
        replyList: unReadLetterArr
      })

      /* 
        缓存后台请求的未读信件
      */

    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.Start();

  },

  /**1
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
    console.log('----- 监听页面隐藏 ------');


  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    console.log('replylist页面 ----- 监听页面卸载 ------');
    /* 
      当页面卸载时，判断信件是否已读，存储未读信件到缓存
    */
    // wx.setStorage({
    //   key: 'testObj',
    //   data: JsonData,
    //   success: res => {
    //     console.log(res);
    //   },
    //   fail: res => {
    //     console.log(res);
    //   }
    // });

    
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