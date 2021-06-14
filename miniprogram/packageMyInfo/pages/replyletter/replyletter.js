// api
let requestData = require('../../../utils/request');
let timeTools = require('../../../utils/timeTools');
let requestLetterline = require('../../../utils/public');

let app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    //回信内容
    letterContent: `既然你觉得你的成绩差，想要改变那么从现在开始就集中精力好好学习.你要好好努力，然后惊艳所有人，包括你自己.虽然过程是很漫长且煎熬的，但是功不唐捐，你会要到自己想要的结果.所以啊，朋友，从现在开始，自己制定个计划，然后每天去完成.我很喜欢的一句话送给你:如果梦想有捷径的话，那么这条路的名字一定叫坚.持。别回头卯足劲儿向前冲。`,
    //收件人
    consignee: '不吃鱼的猫',
    //回信者
    writer: '房东的猫',
    // 信件信息
    letterInfo: {},
    // 信件id
    letterId: '',
    // 用户openId
    openId: ''
  },
  //点击跳转写信
  replyLetter() {
    // 获取letterId
    let letterId = this.data.letterId;
    // 获取发送者openId
    let senderOpenId = this.data.senderOpenId;
    // 获取我原文的笔名
    let recipientPenName = this.data.recipientPenName;
    // 获取我原文回复者的笔名
    let senderPenName = this.data.senderPenName;
    wx.navigateTo({
      url: '/packageReleaseModule/pages/write/write?type=回信&letterId=' + letterId + '&senderOpenId=' + senderOpenId + '&recipientPenName=' + recipientPenName + '&senderPenName=' + senderPenName,
    })
  },

  // 初始化数据
  Start(openId, replyId, letterId) {
    requestData.replyletter(openId, replyId, letterId).then(res => {
      console.log(res.data.data);
      // 获取信件信息
      let letterInfo = res.data.data;
      // 修改展示时间
      letterInfo.releaseTime = timeTools.squareDiaryTime(letterInfo.releaseTime);
      // 分段显示文本内容
      letterInfo.replyContent = letterInfo.replyContent.split('\n');
      this.setData({
        letterInfo: letterInfo,
      })

    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 获取用户openId
    let openId = app.globalData.openid;
    this.Start(openId, options.replyId, options.letterId);
    this.setData({
      letterId: options.letterId,
      senderOpenId: options.senderOpenId,
      recipientPenName: options.recipientPenName,
      senderPenName: options.senderPenName
    });

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