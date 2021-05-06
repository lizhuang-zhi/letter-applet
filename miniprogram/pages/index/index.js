let tools = require('../../utils/timeTools');
let publicTools = require('../../utils/public');
// 引入加载数据
let requestData = require('../../utils/request');
let app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 赏美文数组
    dataBeautyArr: [],
    // 信件数组
    letterArr: [],
    // 是否显示提示框
    isShowToastBox: 'block',
    // 是否已经打开信箱
    isOpenStampBox: false,
    // loading组件（覆盖层）
    isShowLoading: true,
    // 信栈小贴士显示
    showTipPop: false,

    // 弹出层
    imgUrls: [
      {title: '文明书写，不伤害他人', picUrl: '../../images/tips-send.png'},
      {title: '正视他人言论，吸取有益之处', picUrl: '../../images/tips-mailbox.png'},
      {title: '善于思考，学会日记', picUrl: '../../images/tips-diary.png'},
      {title: '集邮票，解成就，完成你的历练之路', picUrl: '../../images/tips-achievement.png'}
    ],
    swiperIdx: 0,

  },

  // 去到美文内容页
  ToBeautyTap(e) {
    // 获取点击对象的文章index
    let articleIndex = e.detail.index;
    // 获取点击背景图
    wx.navigateTo({
      url: '/packageWriteLetter/pages/beautyletter/beautyletter?articleIndex=' + articleIndex,
    })
  },
  // 跳转解忧页
  ToSorrowTap(e) {
    console.log(e);
    // 信件id
    let id = e.currentTarget.dataset.id;
    // 信件发送者id
    let senderOpenId = e.currentTarget.dataset.senderopenid;
    wx.navigateTo({
      url: '/packageWriteLetter/pages/sorrowletter/sorrowletter?id=' + id + '&senderOpenId=' + senderOpenId,
    })

  },
  // 获取解忧信件点击事件
  obtainLetter() {
    /* 
      先授权登录，然后获取信件
    */
    if (app.globalData.userInfo == null && this.data.isOpenStampBox == false) {
      app.getUserProfile().then(res => {
        // 获取用户openId
        let openId = app.globalData.openid;
        // 获取三封信件
        requestData.indexLetters(openId).then(res => {
          console.log(res);
          return new Promise((resolve, reject) => {
            // 获取返回信件数组
            let letterArr = res.data.data;
            letterArr.forEach(item => {
              // 时间格式化
              item.releaseTime = tools.indexPostBoxTime(item.releaseTime);
              // 内容格式化
              item.content = item.content.length > 25 ? item.content.substring(0, 25) + '..' : item.content;
              // 笔名格式化
              item.senderPenName = item.senderPenName.substring(0, 8);
            });

            this.setData({
              letterArr: letterArr,
              isShowToastBox: 'none',
              isOpenStampBox: true
            })
            resolve('success');
          })
        }).then(res => {
          if (res == 'success') {
            wx.showToast({
              title: '小主，您的信件已送达~',
              image: '../../images/send-car.png'
            })
          }
        })
      })
    } else if (app.globalData.userInfo && this.data.isOpenStampBox == false) {
      // 获取用户openId
      let openId = app.globalData.openid;
      // 获取三封信件
      requestData.indexLetters(openId).then(res => {
        console.log(res.data.data);
        return new Promise((resolve, reject) => {

          // 获取返回信件数组
          let letterArr = res.data.data;
          letterArr.forEach(item => {
            // 时间格式化
            item.releaseTime = tools.indexPostBoxTime(item.releaseTime);
            // 内容格式化
            item.content = item.content.length > 25 ? item.content.substring(0, 25) + '..' : item.content;
            // 笔名格式化
            item.penName = item.senderPenName.substring(0, 8);
          });

          this.setData({
            letterArr: letterArr,
            isShowToastBox: 'none',
            isOpenStampBox: true
          })
          resolve('success');
        })
      }).then(res => {
        if (res == 'success') {
          wx.showToast({
            title: '小主，您的信件已送达~',
            image: '../../images/send-car.png'
          })
        }
      })
    } else if (app.globalData.userInfo != null && this.data.isOpenStampBox == true) {
      wx.showToast({
        title: '暂时没有更多信件',
        image: '../../images/empty-letter.png',
        icon: 'none'
      })
    }
  },
  // 信栈小贴士
  tipTap() {
    this.setData({
      showTipPop: true
    })
  },
  // 关闭弹出层
  onTipClose() {
    this.setData({
      showTipPop: false
    })
  },
  // 我已了解事件
  understandTap() {
    this.setData({
      showTipPop: false
    })
  },
  // 初始化数据
  Start() {
    // 获取美文集合
    requestData.indexBeauty().then(res => {
      console.log(res.data.data);

      return new Promise((resolve, reject) => {
        // 404与500
        if (res.statusCode == 404 || res.statusCode == 500) {
          resolve('error');
        } else {
          // 获取数组
          let artArr = res.data.data;
          try {
            // 处理数据
            artArr.forEach(item => {
              // 修改对象键名
              publicTools.renameKey(item, 'articleTime', 'time');
              publicTools.renameKey(item, 'img_url', 'bgUrl');
              publicTools.renameKey(item, 'articleTitle', 'title');
              // 格式化时间
              item.time = tools.indexBeautyTime(item.time);
              // 修改标题
              item.title = item.title.length > 8 ? item.title.substring(0, 8) + ' ..' : item.title;
            });
          } catch (error) {
            /* 
              从前端拉取默认假数据
            */
            console.log('---------------------------> 美文异常');
            artArr = publicTools.indexBeautyArticleError();
            console.log(artArr);
          };
          this.setData({
            dataBeautyArr: artArr
          });
          resolve('success');
        }
      })

    }).then(res => {
      console.log(res);
      if (res == 'error') {
        console.log('404 or 500，请检查请求');
      } else {
        // 关闭loading覆盖层 
        this.setData({
          isShowLoading: false
        })
      }
    })

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log('index页面 ======> 监听页面加载');
    // 初始化美文集合
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
        selected: 0
      })
    }
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    console.log('index页面 ======> 监听页面隐藏');

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    console.log('index页面 ======> 监听页面卸载');

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