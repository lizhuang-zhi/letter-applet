// 接口Api
let requestData = require('../../../utils/request');
let timeTools = require('../../../utils/timeTools');
let app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    openid:'',
    dataArr: [
      {StarLetter: '我是第一个评论'},
      {StarLetter: '我是第二个评论'},
      {StarLetter: '我是第三个评论'},
    ]

  },
  //初始化数据
  Start(openId){
    //获取评论列表信息
    requestData.mailboxMessageList(openId).then(res=>{
      return new Promise((resolve,reject)=>{
        console.log(res.data.data);
        // 获取数组
        let dataArr = res.data.data;
        // 修改时间显示
        dataArr.forEach(item => {
          item.date = timeTools.commentListShowTime(item.date);
        });
        this.setData({
          dataArr: dataArr.reverse()
        })
        resolve('success');
      })
    })
  },
  // 点击具体评论组件对象
  toComplainPage(e) {
    // 吐槽对象id
    let id = e.currentTarget.dataset.id;
    wx.navigateTo({
      url: '/packageWriteLetter/pages/complaintletter/complaintletter?id=' + id,
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.Start(options.openid);
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