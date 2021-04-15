// packageReleaseModule/pages/write/write.js
let requestData = require('../../../utils/request');
let app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    //选择的类型
    chooseType: '',
    //用户输入的内容
    textValue: '',
    // 信件id
    letterId: ''
  },
  //获取用户输入的内容
  getTextValue(e) {
    let textvalue = e.detail.textvalue;
    this.setData({
      textValue: textvalue
    })
  },
  // 跳转标签选择页面
  ToChooseTag(e) {
    // 获取输入内容
    let subvalue = e.currentTarget.dataset.value;
    // 获取类型选择
    let chooseType = this.data.chooseType;
    // 信件id
    let letterId = this.data.letterId;
    // 原信件发送者id
    let senderOpenId = this.data.senderOpenId;
    if (subvalue.length == 0) {
      wx.showToast({
        title: '请输入内容',
        icon: 'none',
        image: '../../images/input.png'
      })
    } else if (subvalue.length < 50) {
      wx.showToast({
        title: '多写几句吧',
        icon: 'none',
      })
    } else if (chooseType == '回信') {
      /* 
        调用回信接口 ---- 暂时去除此接口 2021.4.14
      */
      // let infoObj = {
      //   letterId: this.data.letterId,
      //   message: this.data.textValue,
      //   recipient: this.data.senderOpenId,
      //   recipientPenName: this.data.senderPenName,
      //   sender: app.globalData.openid,
      //   senderPenName: this.data.recipientPenName
      // };
      // requestData.indexStampReply(infoObj).then(res => {
      //   return new Promise((resolve, reject) => {
      //     // 显示回信成功（同步）
      //     wx.showToast({
      //       title: '回信成功',
      //       image: '../../images/confirm.png',
      //       duration: 1300
      //     });
      //     resolve('success');
      //   })
      // }).then(res => {
      //   if (res == 'success') {
      //     // 接口请求成功后跳转（同步）
      //     setTimeout(() => {
      //       wx.redirectTo({
      //         url: '/packageMyInfo/pages/replylist/replylist'
      //       });
      //     },1300)
      //   }
      // })

    } else {
      wx.navigateTo({
        url: '/packageReleaseModule/pages/lettertype/lettertype?subvalue=' + subvalue + '&type=' + chooseType + '&letterId=' + letterId + '&senderOpenId=' + senderOpenId,
      })
      console.log('执行跳转 ---> ' + senderOpenId);
    }

  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 获取选择类型
    this.setData({
      chooseType: options.type,
      letterId: options.letterId,
      senderOpenId: options.senderOpenId,

      senderOpenId: options.senderOpenId,
      recipientPenName: options.recipientPenName,
      senderPenName: options.senderPenName
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