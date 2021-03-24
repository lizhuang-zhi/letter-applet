// 1.这里的路径是相对于我的文件来说（开发者需要自行更改)
let tools = require('../../Yeo/utils/tools');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tabArray: ['公开日记', '吐槽大会'],

    // loading-part组件
    pull: {
      isLoading: false,
      loading: '../../images/loading-2.gif',
      pullText: '正在加载'
    },
    push: {
      isLoading: false,
      loading: '../../images/loading-2.gif',
      pullText: '-上拉加载更多-'
    },
    slideStart: [],
    moveTime: 0,
  },

  // 2.初始化tab页面高度
  TabInit() {
    // 新建数组
    let tabHeiArr = [];
    // 声明异步函数
    new Promise((resolve, reject) => {
      /* 
        分别获取每个tab页的内容高度
        .tab-1 .tab-2 都是选择器
      */
      tools.selectHeight('.tab-1').then(back => {
        tabHeiArr.push(back);
      });
      tools.selectHeight('.tab-2').then(back => {
        tabHeiArr.push(back);
        resolve('success');
      });
    }).then(res => {
      let newArr = tabHeiArr.sort((a, b) => a - b);
      // 最大高度
      let maxHeight = newArr[tabHeiArr.length - 1];
      this.setData({
        // 乘以二是以为rpx到px
        maxHeight: maxHeight * 2
      })
    })
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

  // loading-part组件
    // 监听下拉刷新事件
    refresh(e) {
      console.log('刷新', e)
      this.setData({
        'pull.isLoading': true,
        'pull.loading': '../../images/loading-2.gif',
        'pull.pullText': '正在加载',
      })
      // setTimeout(() => {
      //   this.setData({
      //     'pull.loading': '../../images/loading-1.gif',
      //     'pull.pullText': '刷新完成'
      //   })
      // }, 4000)
      setTimeout(() => {
        this.setData({
          'pull.isLoading': false,
        })
        console.log('+++++ 刷新完成 +++++')
      }, 6000)
    },
    // 监听上拉加载更多
    toload(e) {
      console.log('加载', e),
        this.setData({
          'push.isLoading': true,
          'push.pullText': '正在加载',
          'push.loading': '../../images/loading-2.gif',
        })
        setTimeout(() => {
          this.setData({
            'push.isLoading': false,
            'push.pullText': '- 上拉加载更多 -',
            'push.loading': '../../images/loading-2.gif',
          })
          console.log('===== 加载完成 =====')
        }, 5000)
    },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 初始化tab高度
    this.TabInit();
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