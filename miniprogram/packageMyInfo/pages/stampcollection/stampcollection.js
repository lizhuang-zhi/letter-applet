// miniprogram/packageMyInfo/pages/stampcollection/stampcollection.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 邮票信息数组
    stampArr: [{
        stampPic: 'https://z3.ax1x.com/2021/04/20/c7I5Ke.png',
        tit: '球鞋漫步',
        stampNumber: 'YDX2104201',
        desc: '球鞋邮票',
        lockTime: '2021年04月11日 23:40',
        edition: 'Edition 2.0',
        isLock: true
      },
      {
        stampPic: 'https://z3.ax1x.com/2021/04/20/c7IRC6.png',
        tit: '潮流穿搭',
        stampNumber: 'YDX2104202',
        desc: '球鞋邮票',
        lockTime: '2021年04月20日 08:40',
        edition: 'Edition 2.0',
        isLock: true
      },
      {
        stampPic: 'https://z3.ax1x.com/2021/04/20/c7IhvD.png',
        tit: '实战利器',
        stampNumber: 'YDX2104203',
        desc: '球鞋邮票',
        lockTime: '2021年03月20日 12:40',
        edition: 'Edition 2.0',
        isLock: true
      },
      {
        stampPic: 'https://z3.ax1x.com/2021/04/20/c7IfgO.png',
        tit: '混搭潮款',
        stampNumber: 'YDX2104204',
        desc: '球鞋邮票',
        lockTime: '2021年04月13日 03:40',
        edition: 'Edition 2.0',
        isLock: true
      },
      {
        stampPic: 'https://z3.ax1x.com/2021/04/20/c7IW8K.png',
        tit: '美国队长',
        stampNumber: 'YDX2104251',
        desc: '最强打药人',
        lockTime: '2021年04月13日 03:40',
        edition: 'Edition 3.0',
        isLock: false
      },
      {
        stampPic: 'https://z3.ax1x.com/2021/04/20/c7IIDH.png',
        tit: '雷神',
        stampNumber: 'YDX2104252',
        desc: '站在地球上的神',
        lockTime: '2021年04月13日 03:40',
        edition: 'Edition 3.0',
        isLock: true
      },
      {
        stampPic: 'https://z3.ax1x.com/2021/04/20/c7Iobd.png',
        tit: '钢铁侠',
        stampNumber: 'YDX2104253',
        desc: '有钱的都是靠科技',
        lockTime: '2021年04月13日 03:40',
        edition: 'Edition 3.0',
        isLock: false
      },
      {
        stampPic: 'https://z3.ax1x.com/2021/04/20/c7IHUI.png',
        tit: '绿巨人浩克',
        stampNumber: 'YDX2104254',
        desc: '没钱的都是靠变异',
        lockTime: '2021年04月13日 03:40',
        edition: 'Edition 3.0',
        isLock: true
      },
    ],

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
    console.log('~~~~~~~ 分享 ~~~~~~~~');
  }

})