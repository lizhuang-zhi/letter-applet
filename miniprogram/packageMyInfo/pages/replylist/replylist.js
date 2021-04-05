// 引入加载数据
let requestData = require('../../../utils/request');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    replyData:{}
  },
  //初始化数据 
  Start(){
    /**
     * 写在index
     */
    //获取回信数据
    requestData.mailboxReplylist(this.data.replyData).then(res=>{
      console.log(res);
      // 404与500
      if (res.statusCode == 404 || res.statusCode == 500) {
        return new Promise((resolve, reject) => {
          resolve('error');
        });
      } else{
        let replyArr = res.data.data;
        console.log(replyArr);
      }
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