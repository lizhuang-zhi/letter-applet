// packageWriteLetter/pages/complaintletter/complaintletter.js
let requestData = require('../../../utils/request');
let timeTools = require('../../../utils/timeTools.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // loading组件
    isShowLoading: true,

    // 评论数组
    commentArr: []

  },

  // 初始化数据
  Start(id) {
    // 请求后台数据
    requestData.complainDetail(id).then(res => {
      // 处理评论对象数据
      if (res.statusCode == 200) {
        // 存储对象
        let complianObj = res.data.data;
        // 处理对象时间
        complianObj.date = timeTools.indexBeautyTime(complianObj.date);
        // 处理数据
        this.setData({
          complianObj: complianObj
        })
        // 请求评论数据
        return requestData.complainDetailComment(id, 1);
      } else {
        return new Promise((resolve, reject) => {
          resolve('error');
        })
      }

    }).then(res => {
      return new Promise((resolve, reject) => {
        if (res == 'error') {
          console.log(res);
          reject('error');
        } else {
          // 处理评论数据
          // 评论对象
          let commentObj = res.data.data;
          // 评论集合
          let commentList = commentObj.list;
          console.log(commentList);
          this.setData({
            commentArr: commentList
          })
          resolve('success');
        }

      })

    }).then(res => {
      if (res == 'success') {
        // loading加载完毕
        this.setData({
          isShowLoading: false
        })
      } else {
        console.log('服务器请求错误！！');
      }

    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.Start(options.id);
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