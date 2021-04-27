// miniprogram/packageMyInfo/pages/myachievements/myachievements.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

    // 成就信息数组
    achievementsArr: [{
        isLock: false,
        achievementsPic: '../../images/lock.png',
        tit: '解答专家',
        desc: '解答30封信件',
        lockTime: '2021年04月11日 23:40',
        edition: 'Edition 2.0'
      },
      {
        isLock: true,
        achievementsPic: 'https://z3.ax1x.com/2021/04/27/gphqoV.png',
        tit: '解答大师',
        desc: '解答100封信件',
        lockTime: '2021年04月20日 08:40',
        edition: 'Edition 2.0'
      },
      {
        isLock: true,
        achievementsPic: 'https://z3.ax1x.com/2021/04/27/gphOiT.png',
        tit: '老朋友',
        desc: '收到一封回信',
        lockTime: '2021年03月20日 12:40',
        edition: 'Edition 2.0'
      },
      {
        isLock: true,
        achievementsPic: 'https://z3.ax1x.com/2021/04/27/gphXJU.png',
        tit: '吐槽名家',
        desc: '发布20篇吐槽',
        lockTime: '2021年04月13日 03:40',
        edition: 'Edition 2.0'
      },
      {
        isLock: false,
        achievementsPic: 'https://z3.ax1x.com/2021/04/20/c7IW8K.png',
        tit: '日记小能手',
        desc: '完成30篇日记',
        lockTime: '2021年04月13日 03:40',
        edition: 'Edition 3.0'
      },
      {
        isLock: true,
        achievementsPic: 'https://z3.ax1x.com/2021/04/27/gphbd0.png',
        tit: '集邮达人',
        desc: '收集到10枚邮票',
        lockTime: '2021年04月13日 03:40',
        edition: 'Edition 3.0'
      },
      {
        isLock: false,
        achievementsPic: 'https://z3.ax1x.com/2021/04/20/c7Iobd.png',
        tit: '校园专家',
        desc: '解答关于10封校园的解忧信',
        lockTime: '2021年04月13日 03:40',
        edition: 'Edition 3.0'
      },
      {
        isLock: false,
        achievementsPic: 'https://z3.ax1x.com/2021/04/20/c7IHUI.png',
        tit: '痛苦面具',
        desc: '发布20篇解忧信件',
        lockTime: '2021年04月13日 03:40',
        edition: 'Edition 3.0'
      },
    ],

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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