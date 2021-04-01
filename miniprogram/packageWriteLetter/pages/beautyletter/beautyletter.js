// packageWriteLetter/pages/beautyletter/beautyletter.js
let requestData = require('../../../utils/request');
const tools = require('../../../utils/timeTools');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 底部标签
    tagArr: ['文章来源：雨点美文网','文章标签：美文摘抄']
  },


  // 初始化数据
  Start(index) {
    requestData.beautyletter(index).then(res => {
      console.log(res.data.data);
      // 存储对象
      let dataObj = res.data.data;
      // 修改时间显示
      dataObj.articleTime = dataObj.articleTime.split(' ')[0]
      // 给对象添加周几
      dataObj.days = tools.beautyletterTime(dataObj.articleTime);
      this.setData({
        articleObj: dataObj
      })

    })

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.Start(options.articleIndex);


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