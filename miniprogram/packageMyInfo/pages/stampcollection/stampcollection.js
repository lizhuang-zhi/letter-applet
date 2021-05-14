let requestData = require('../../../utils/request');
let app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 邮票信息数组
    stampArr: [],
    // 是否显示弹出
    isShowPop: false,
  },

  // 点击弹出对应邮票
  showContent(e) {
    // 邮票数组
    let stampArr = this.data.stampArr;
    // 点击邮票索引
    let index = e.currentTarget.dataset.index;
    // 获取要显示的邮票信息
    let stampTit = e.currentTarget.dataset.tit;
    let stampDesc = e.currentTarget.dataset.desc;
    let stampEdition = e.currentTarget.dataset.edition;
    let stampPic = e.currentTarget.dataset.pic;
    // 获取点击邮票是否解锁
    if (stampArr[index].isLock) {
      this.setData({
        isShowPop: true,
        stampTit: stampTit,
        stampDesc: stampDesc,
        stampEdition: stampEdition,
        stampPic: stampPic
      });
    } else {
      wx.showToast({
        title: '此邮票还未解锁呢~',
        icon: 'none'
      })
    }
  },
  // 关闭邮票详情框
  onStampClose() {
    this.setData({
      isShowPop: false
    });
  },

  // 初始化数据
  Start(openId) {
    wx.showLoading({
      title: '加载中..',
    })
    requestData.stampCollection(openId).then(res => {
      return new Promise((resolve, reject) =>  {
        console.log(res.data.data);
        this.setData({
          stampArr: res.data.data
        })
        resolve('success');
      })
    }).then(res => {
      wx.hideLoading({ });
    })
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

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    console.log('~~~~~~~ 分享 ~~~~~~~~');
  }

})