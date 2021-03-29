let weather = require('../../utils/weatherTools');
let requestData = require('../../utils/request');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    diaryArr: [],


    // 记录当前tab所在标题的索引
    tabCurIndex: 0

  },

  // 跳转日记内容
  ToDiaryContent() {
    wx.navigateTo({
      url: '/packageWriteLetter/pages/diaryletter/diaryletter',
    })
  },

  // 跳转吐槽内容
  ToComplainTap() {
    wx.navigateTo({
      url: '/packageWriteLetter/pages/complaintletter/complaintletter',
    })
  },

  // 标签tab切换事件
  changeTap(e) {
    // 获得改变后的tab索引
    let curIndex = e.detail.index;
    this.setData({
      tabCurIndex: curIndex
    })




  },

  // 初始化数据
  Start() {
    // 获取日记数组数据
    let diaryArr = [{
        content: '我是一篇日记，记录我的心情',
        weather: '多云'
      },
      {
        content: '我是一篇日记，记录我的心情',
        weather: '晴'
      },
      {
        content: '记录我的心情',
        weather: '雨天'
      },
      {
        content: '我是一篇日记，记录我的心情',
        weather: '多云'
      },
      {
        content: '我是一篇日记，记录我的心情',
        weather: '多云'
      },
      {
        content: '我是一篇日记，记录我的心情',
        weather: '多云'
      },
      {
        content: '注册小程序中的一个页面。接受一个 Object 类型参数，其指定页面的初始数据、生命周期回调、事件处理函数等。我是一篇日记，记录我的心情',
        weather: '阴'
      },
    ];

    // 天气转化工具类
    diaryArr.forEach((item, index, array) => {
      item.weather = weather.weatherWordsToPic(item.weather);
    });

    this.setData({
      diaryArr: diaryArr
    })

    // 处理请求数据
    // requestData.indexBeauty().then(res => { 
    //   console.log(res);
    // });


  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.Start();
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
    if (typeof this.getTabBar === 'function' &&
      this.getTabBar()) {
      this.getTabBar().setData({
        selected: 1
      })
    }
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
    console.log('我上拉了');
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    if (this.data.tabCurIndex == 0) {
      console.log('公开日记触底了');
    } else if (this.data.tabCurIndex == 1) {
      console.log('吐槽大会触底了');
    }

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})