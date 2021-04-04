// packageWriteLetter/pages/diaryletter/diaryletter.js
let requestData = require('../../../utils/request');
const tools = require('../../../utils/timeTools');
let timeTools = require('../../../utils/timeTools');
// 全局变量（判断用户登录）
let app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    
  },

  // 初始化数据
  Start(id) {
    requestData.squareDiaryDetail(id).then(res => {
      // 获取日记对象
      let diaryObj = res.data.data;
      console.log(diaryObj);
      // 修改时间显示格式
      diaryObj.weekDay = '星期' + tools.changeWeekDaysToChinese(new Date(diaryObj.date).getDay());
      diaryObj.dateNum = new Date(diaryObj.date).getDate();
      
      this.setData({
        diaryObj: diaryObj
      })
    })

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 初始化数据
    this.Start(options.id);

    // 获取用户信息
    app.getUserInfo().then(res => {
      console.log(res);
    })
    console.log('获取的openId为 ---> ' + app.globalData.openid);
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