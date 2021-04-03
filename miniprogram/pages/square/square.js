let weather = require('../../utils/weatherTools');
let requestData = require('../../utils/request');
let timeTools = require('../../utils/timeTools');

// 记录当前请求页是否为最后一页（吐槽大会）
let isLastComplianPageNum = null;
// 记录当前请求页是否为最后一页（公开日记）
let isLastDiaryPage = null;
// 获取吐槽大会当前页
let complianPageNum = null;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    //日记数组
    diaryArr: [],
    // 吐槽大会数组
    complianArr: [],

    // 记录当前tab所在标题的索引
    tabCurIndex: 0

  },

  // 跳转日记内容
  ToDiaryContent(e) {
    // 获取点击的日记对象的id
    let id = e.currentTarget.dataset.id;
    wx.navigateTo({
      url: '/packageWriteLetter/pages/diaryletter/diaryletter?id=' + id,
    })
  },

  // 跳转吐槽内容
  ToComplainTap(e) {
    // 获取吐槽对象id
    let id = e.currentTarget.dataset.id;
    wx.navigateTo({
      url: '/packageWriteLetter/pages/complaintletter/complaintletter?id=' + id,
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

  // 监听页面滚动
  onPageScroll(e) {
    if (e.scrollTop > 400) { // 页面上卷高度 大于页面固定按钮位置
      this.setData({
        fixedInputPhone: true // 显示指定区域
      })
    } else {
      this.setData({
        fixedInputPhone: false // 隐藏指定区域
      })
    }
  },
  // 回到顶部事件
  backToTop() {
    wx.pageScrollTo({
      duration: 600,
      scrollTop: 0
    })
  },

  // 初始化数据
  Start() {

    //公开日记数据
    requestData.squareDiary(1).then(res => {
      // 日记对象
      let diaryObj = res.data.data;
      // 日记数组
      let diaryList = diaryObj.list;
      // 记录公开日记是否为最后一页
      isLastDiaryPage = diaryObj.isLastPage;
      console.log(diaryObj);
      diaryList.forEach(item => {
        item.weather = weather.weatherWordsToPic(item.weather);
        item.date = timeTools.squareDiaryTime(item.date);
        // 暂时添加的数据内容
        item.content = '我搜的啥佛山东欧到的手动到哦地方大师傅是豆腐是东方四大'
      })
      this.setData({
        diaryArr: diaryList
      })
    })

    // 吐槽大会请求数据
    requestData.squareComplain(1).then(res => {
      // 获取吐槽大会对象
      let complianObj = res.data.data;
      // 获取吐槽数组
      let complianList = complianObj.list;
      // 获取吐槽大会当前页
      complianPageNum = complianObj.pageNum;
      // 记录当前请求页是否为最后一页
      isLastComplianPageNum = complianObj.isLastPage;

      console.log(complianObj);
      this.setData({
        complianArr: complianList
      })

    });


  },

  // 下拉触底事件（吐槽大会）
  onReachBottomComplain() {
    // 判断是否为最后一页数据并请求
    if (!isLastComplianPageNum) {
      // 再次请求下一页数据
      requestData.squareComplain(++complianPageNum).then(res => {
        // 获取吐槽大会对象
        let complianObj = res.data.data;
        // 获取吐槽数组
        let complianList = complianObj.list;
        // 原吐槽大会数组
        let complianArr = this.data.complianArr;
        // 记录当前请求页是否为最后一页
        isLastComplianPageNum = complianObj.isLastPage;

        console.log(complianList);
        // 合并二次请求对象与原对象
        this.setData({
          complianArr: complianArr.concat(complianList)
        })

      })

    } else {
      wx.showToast({
        title: '没有更多吐槽了',
        icon: 'none'
      })
    }

  },

  // 下拉触底事件（公开日记）
  onReachBottomDiary() {
    // 判断是否为最后一页数据并请求
    if (!isLastDiaryPage) {
      // 再次请求下一页数据
      requestData.squareDiary(++complianPageNum).then(res => {
        // 日记对象
        let diaryObj = res.data.data;
        // 日记数组
        let diaryList = diaryObj.list;
        // 记录公开日记是否为最后一页
        isLastDiaryPage = diaryObj.isLastPage;
        console.log(diaryObj);
        diaryList.forEach(item => {
          item.weather = weather.weatherWordsToPic(item.weather);
          item.date = timeTools.squareDiaryTime(item.date);
          // 暂时添加的数据内容
          item.content = '我是新数据';
        })
        this.setData({
          diaryArr: this.data.diaryArr.concat(diaryList)
        })

      })

    } else {
      wx.showToast({
        title: '没有更多日记了',
        icon: 'none'
      })
    }

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
      // 再次请求数据
      this.onReachBottomDiary();
    } else if (this.data.tabCurIndex == 1) {
      console.log('吐槽大会触底了');
      // 再次请求数据
      this.onReachBottomComplain();
    }

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})