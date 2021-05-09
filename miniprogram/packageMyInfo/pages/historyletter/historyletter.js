let requestData = require('../../../utils/request');
let timeTools = require('../../../utils/timeTools');
let app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    replyList: [],
    pageNum: 1,
    isLastPage: null
  },

  // 点击跳转信件内容
  clickEvent(e) {
    // 获取信件letterId
    let letterId = e.currentTarget.dataset.letterid;
    // 获取发送者的openId
    let senderOpenId = e.currentTarget.dataset.senderopenid;
    // 获取接收者的笔名
    let recipientPenName = e.currentTarget.dataset.recipientpenname;
    // 获取发送者的笔名
    let senderPenName = e.currentTarget.dataset.senderpenname;
    // 获取replyId
    let replyId = e.currentTarget.dataset.replyid;

    wx.navigateTo({
      url: '/packageMyInfo/pages/replyletter/replyletter?letterId=' + letterId + '&senderOpenId=' + senderOpenId + '&recipientPenName=' + recipientPenName + '&senderPenName=' + senderPenName + '&replyId=' + replyId,
    })

  },

  // 初始化数据
  Start(openId) {
    requestData.historyLetter(openId, 1).then(res => {
      console.log(res.data.data);
      // 获取对象
      let dataObj = res.data.data;
      // 获取对象中的列表数组
      let list = dataObj.list;

      // 修改时间显示
      list.forEach(item => {
        item.senderTime = timeTools.historyLetterShowTime(item.senderTime);
      })
      this.setData({
        isLastPage: dataObj.isLastPage,
        replyList: list
      })

    })
  },

  // 上拉触底加载
  onReachBottomLoad() {
    if (!this.data.isLastPage) {
      requestData.historyLetter(openId, ++this.data.pageNum).then(res => {
        console.log(res.data.data);
        // 获取数组对象
        let dataObj = res.data.data;
        this.setData({
          isLastPage: dataObj.isLastPage,
          replyList: this.data.replyList.concat(dataObj.list)
        })
      })
    } else {
      wx.showToast({
        title: '没有更多历史信件',
        icon: 'none'
      })
    }

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
    this.onReachBottomLoad();
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})