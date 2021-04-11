// packageMyInfo/pages/comment/comment.js
// 接口Api
let requestData = require('../../../utils/request')
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
  Start(){
    //获取评论信息
    requestData.mailboxMessageList().then(res=>{

    })
  },
  // 点击具体评论组件对象
  clickObjTap(e) {
    console.log(e.detail);
  },
  

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.Start();
    this.setData({
      openid:options.openid
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