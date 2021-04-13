// packageWriteLetter/pages/sorrowletter/sorrowletter.js
let requestData = require('../../../utils/request');
let requestLetterline = require('../../../utils/public');
let app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    //解答次数
    LastTimes: 1,
    //解答次数文字大小
    TimesFontSize: "32rpx",
    //解答次数颜色
    TiemsColor: 'grey',
    // 用户openId
    openId: '',
    // 信件信息
    letterInfo: {},

    /* 
      keo ------------
    */
    //信件内容
    lettercontent:'我是信件行数测试数据,我是信件行数测试数据我是信件行数测试数据我是信件行数测试数据我是信件行数测试数据我是信件行数测试数据我是信件行数测试数据',
    // 行数组
    lettercontentArr:[],
    // 行字数
    lineNum: 17
  },

  //点击跳转写信
  replyLetter() {
    wx.navigateTo({
      url: '/packageReleaseModule/pages/write/write?type=解答',
    })
  },

  // 初始化数据
  Start(id) {
    // 获取用户的openId
    let openId = this.data.openId;
    requestData.replyletter(openId, id).then(res => {
      console.log(res.data.data);
      // 获取信件信息
      let letterInfo = res.data.data;
      console.log(letterInfo.replyContent);
      this.setData({
        letterInfo: letterInfo
      })
    })
    /*
      获取信件行信息  -----   keo
    */
    //获取信件行
    let content = this.data.lettercontent;
    let contentArr = this.data.lettercontentArr;
    let linenum = this.data.lineNum;
    let resultArr = requestLetterline.Interceptletterline(content,contentArr,linenum)
    console.log(requestLetterline.Interceptletterline(content,contentArr,linenum));
    this.setData({
      lettercontentArr:resultArr
    })
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log('sorrowletter页面 ----------- 监听页面加载');
    // 获取用户openId
    app.getUserInfo().then(res => {
      this.setData({
        openId: app.globalData.openid
      })
    }).then(res => {
      // 登陆成功后（获取用户openId），获取信件信息
      this.Start(options.id);
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
    console.log('sorrowletter页面 ----------- 监听页面显示');

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