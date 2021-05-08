import Dialog from '../../../miniprogram_npm/@vant/weapp/dialog/dialog';
let weather = require('../../../utils/weatherTools');
let timeTools = require('../../../utils/timeTools')
let requestData = require('../../../utils/request');

let app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 活跃标签索引
    activeTabIndex: 0,
    // 开始显示的滑动提示框
    isShow: true,

    /* 解忧 */
    // 解忧数组
    letterArr: [],

    /* 日记 */
    // 日记数组
    diaryArr: [],


    /* 吐槽 */
    // 吐槽数组
    complainArr: [],

  },

  /* *************************解忧************************* */
  // 跳转解忧内容
  ToSorrowTap() {

  },
  // 删除解忧
  deleteSorrowTap(e) {
    // 获取日记对象id
    let id = e.currentTarget.dataset.id;
    Dialog.confirm({
        title: '确认删除',
        message: '小主，你确定要删除吗？',
      })
      .then(() => {
        // on confirm
        wx.showLoading({
          title: '加载中..',
        }).then(res => {
          this.deleteSorrow(id);
        }).then(res => {
          // 刷新数据
          this.Start(app.globalData.openid);
          wx.hideLoading({});
        })
      })
      .catch(() => {
        // on cancel
      });
  },
  // 删除解忧
  deleteSorrow(id) {
    requestData.deleteSorrowLetter(id).then(res => {
      console.log(res);
    })
  },
  /* *************************日记************************* */
  // 跳转日记内容
  ToDiaryContent(e) {
    // 获取点击的日记对象的id
    let id = e.currentTarget.dataset.id;
    wx.navigateTo({
      url: '/packageWriteLetter/pages/diaryletter/diaryletter?id=' + id,
    })
  },
  // 删除日记
  deleteDiaryTap(e) {
    // 获取日记对象id
    let id = e.currentTarget.dataset.id;
    Dialog.confirm({
        title: '确认删除',
        message: '小主，你确定要删除吗？',
      })
      .then(() => {
        // on confirm
        wx.showLoading({
          title: '加载中..',
        }).then(res => {
          this.deleteDiary(id);
        }).then(res => {
          // 刷新数据
          this.Start(app.globalData.openid);
          wx.hideLoading({});
        })
      })
      .catch(() => {
        // on cancel
      });
  },
  // 删除日记接口
  deleteDiary(id) {
    requestData.deleteDiary(id).then(res => {
      console.log(res);
    })
  },
  /* *************************吐槽************************* */
  // 跳转吐槽内容
  ToComplainTap(e) {
    // 获取吐槽对象id
    let id = e.currentTarget.dataset.id;
    console.log(id);
    // 未获取授权
    if (!app.globalData.userInfo) {
      // 弹窗用户授权
      app.getUserProfile().then(res => {
        wx.navigateTo({
          url: '/packageWriteLetter/pages/complaintletter/complaintletter?id=' + id,
        })
      })
    } else { // 已授权
      wx.navigateTo({
        url: '/packageWriteLetter/pages/complaintletter/complaintletter?id=' + id,
      })
    }
  },
  // 删除吐槽
  deleteComplainTap(e) {
    console.log(e);
    // 获取吐槽对象id
    let id = e.currentTarget.dataset.id;
    Dialog.confirm({
        title: '确认删除',
        message: '小主，你确定要删除吗？',
      })
      .then(() => {
        // on confirm
        wx.showLoading({
          title: '加载中..',
        }).then(res => {
          this.deleteComplain(id);
        }).then(res => {
          // 刷新数据
          this.Start(app.globalData.openid);
          wx.hideLoading({});
        })
      })
      .catch(() => {
        // on cancel
      });
  },
  // 删除吐槽接口
  deleteComplain(id) {
    requestData.deleteComplain(id).then(res => {
      console.log(res.data.data);
    })
  },

  // 初始化数据
  Start(openId) {
    // 请求后台数据
    requestData.historyRelease(openId).then(res => {
      console.log(res.data.data);
      // 获取对象信息
      let infoObj = res.data.data;

      infoObj.diaryList.forEach(item => {
        // 修改天气显示格式
        item.weather = weather.weatherWordsToPic(item.weather);
        // 修改日期显示格式
        item.date = timeTools.squareDiaryTime(item.date);
      });

      infoObj.letterList.forEach(item => {
        // 时间格式化
        item.releaseTime = timeTools.indexPostBoxTime(item.releaseTime);
      });

      this.setData({
        letterArr: infoObj.letterList,
        diaryArr: infoObj.diaryList,
        complainArr: infoObj.spittingGroovesList,
      })
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      activeTabIndex: parseInt(options.activeTabIndex)
    })

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

  }
})