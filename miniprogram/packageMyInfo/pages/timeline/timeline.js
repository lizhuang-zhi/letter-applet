let requestData = require('../../../utils/request');
let timeTools = require('../../../utils/timeTools')
let app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    axis: [],

    // 是否最后一页
    isLastPage: null,
    // 记录页数
    pageNum: 1

  },

  // 用户下拉触底事件
  onReachBotToGetMoreInfo(openId, pageNum) {
    wx.showLoading({
      title: '加载中..',
    })
    requestData.userTimeLine(openId, pageNum).then(res => {
      return new Promise((resolve, reject) => {
        console.log(res.data.data);
        // 原数组
        let beforeArr = this.data.axis;
        // 获取返回对象
        let backObj = res.data.data;
        // 是否为最后一页
        let isLastPage = backObj.isLastPage;
        // 修改显示日期格式与显示文字
        let infoArr = this.changeFormTools(backObj.list);
        this.setData({
          axis: beforeArr.concat(infoArr),
          isLastPage: isLastPage
        })
        resolve('success');
      })
    }).then(res => {
      wx.hideLoading({});
    })
  },

  // 初始化
  Start(openId) {
    wx.showLoading({
      title: '加载中..',
    })
    requestData.userTimeLine(openId, this.data.pageNum).then(res => {
      return new Promise((resolve, reject) => {
        console.log(res.data.data);
        // 获取返回对象
        let backObj = res.data.data;
        // 修改显示日期格式与显示文字
        let infoArr = this.changeFormTools(backObj.list);
        // 是否为最后一页
        let isLastPage = backObj.isLastPage;
        this.setData({
          axis: infoArr,
          isLastPage: isLastPage
        })
        resolve('success');
      })
    }).then(res => {
      wx.hideLoading({});
    })
  },

  // 返回数据显示转换
  changeFormTools(infoArr) {
    infoArr.forEach(item => {
      // item.eventTime = timeTools.timeline(item.eventTime);
      item.eventType = this.changeEngToChina(item.eventType);
    })
    return infoArr;
  },
  // 英文改中文
  changeEngToChina(params) {
    if(params == 'diary') {
      return '日记';
    }else if(params == 'letter') {
      return '解忧';
    }else if(params == 'spit') {
      return '吐槽';
    }
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
    if (!this.data.isLastPage) {
      this.onReachBotToGetMoreInfo(app.globalData.openid, ++this.data.pageNum);
    } else {
      wx.showToast({
        title: '暂无更多发布',
        icon: 'none'
      })
    }
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})