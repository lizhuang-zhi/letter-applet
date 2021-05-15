let requestData = require('../../../utils/request');
let timeTools = require('../../../utils/timeTools');
let app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 框架背景颜色
    boxColor: '#FFFFFF',
    // 是否展示弹出框
    isShowPop: false,

    // 邮票信息数组
    stampArr: [{
        stampPic: 'https://z3.ax1x.com/2021/04/20/c7I5Ke.png',
        tit: '球鞋漫步',
        stampNumber: 'YDX2104201',
        desc: '球鞋邮票',
        lockTime: '2021年04月11日 23:40',
        edition: 'Edition 2.0'
      },
      {
        stampPic: 'https://z3.ax1x.com/2021/04/20/c7IRC6.png',
        tit: '潮流穿搭',
        stampNumber: 'YDX2104202',
        desc: '球鞋邮票',
        lockTime: '2021年04月20日 08:40',
        edition: 'Edition 2.0'
      },
      {
        stampPic: 'https://z3.ax1x.com/2021/04/20/c7IhvD.png',
        tit: '实战利器',
        stampNumber: 'YDX2104203',
        desc: '球鞋邮票',
        lockTime: '2021年03月20日 12:40',
        edition: 'Edition 2.0'
      },
      {
        stampPic: 'https://z3.ax1x.com/2021/04/20/c7IfgO.png',
        tit: '混搭潮款',
        stampNumber: 'YDX2104204',
        desc: '球鞋邮票',
        lockTime: '2021年04月13日 03:40',
        edition: 'Edition 2.0'
      },
      {
        stampPic: 'https://z3.ax1x.com/2021/04/20/c7IW8K.png',
        tit: '美国队长',
        stampNumber: 'YDX2104251',
        desc: '最强打药人',
        lockTime: '2021年04月13日 03:40',
        edition: 'Edition 3.0'
      },
      {
        stampPic: 'https://z3.ax1x.com/2021/04/20/c7IIDH.png',
        tit: '雷神',
        stampNumber: 'YDX2104252',
        desc: '站在地球上的神',
        lockTime: '2021年04月13日 03:40',
        edition: 'Edition 3.0'
      },
      {
        stampPic: 'https://z3.ax1x.com/2021/04/20/c7Iobd.png',
        tit: '钢铁侠',
        stampNumber: 'YDX2104253',
        desc: '有钱的都是靠科技',
        lockTime: '2021年04月13日 03:40',
        edition: 'Edition 3.0'
      },
      {
        stampPic: 'https://z3.ax1x.com/2021/04/20/c7IHUI.png',
        tit: '绿巨人浩克',
        stampNumber: 'YDX2104254',
        desc: '没钱的都是靠变异',
        lockTime: '2021年04月13日 03:40',
        edition: 'Edition 3.0'
      },
    ],
  },

  // 弹出邮票详情框
  showStampPopup(e) {
    // 获取要显示的邮票信息
    let stampTit = e.currentTarget.dataset.tit;
    let stampDesc = e.currentTarget.dataset.desc;
    let stampEdition = e.currentTarget.dataset.edition;
    let stampPic = e.currentTarget.dataset.pic;
    this.setData({
      isShowPop: true,
      stampTit: stampTit,
      stampDesc: stampDesc,
      stampEdition: stampEdition,
      stampPic: stampPic
    });
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
    });
    requestData.userStamp(openId).then(res => {
      return new Promise((resolve, reject) => {
        console.log(res.data.data);
        // 获取成就数组
        let stampArr = res.data.data;
        stampArr.forEach(item => {
          item.obtainTime = timeTools.lockTime(item.obtainTime);
        })
        this.setData({
          stampArr: stampArr
        })
        resolve('success');
      })
    }).then(res => {
      wx.hideLoading({});
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

  }
})