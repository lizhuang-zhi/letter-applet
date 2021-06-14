let requestData = require('../../../utils/request');
let requestLetterline = require('../../../utils/public');
let timeTools = require('../../../utils/timeTools');
let app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    //解答次数
    LastTimes: 1,
    //解答次数文字大小
    TimesFontSize: "32rpx",
    //解答次数颜色
    TiemsColor: 'grey',
    // 信件信息
    letterInfo: {},
    // 信件id
    letterId: '',

    /* 
      keo ------------
    */
    // 行数组
    // lettercontentArr: [],
    // 行字数
    // lineNum: 17
  },

  //点击跳转写信
  replyLetter() {
    /* 
      从缓存中获取今日可解答次数
    */
    wx.getStorage({
      key: 'userBackLetterNum',
      success: res => {
        console.log(res.data);
        // 获取对象数据
        let dataObj = res.data;
        if (dataObj.letterBackNum == 1) {
          // 获取信件id
          let letterId = this.data.letterId;
          // 获取首页原信件 发送者openId
          let senderOpenId = this.data.senderOpenId;
          wx.navigateTo({
            url: '/packageReleaseModule/pages/attention/attention?type=解答' + '&letterId=' + letterId + '&senderOpenId=' + senderOpenId,
          })
        } else {
          wx.showToast({
            title: '今日已没有解答次数~',
            icon: 'none'
          })
        }

      }
    })
  },

  // 初始化数据
  Start(id) {
    wx.showLoading({
      title: '加载中..',
    })
    // 获取用户的openId
    let openId = app.globalData.openid;
    requestData.sorrowletter(id, openId).then(res => {
      return new Promise((resolve, reject) => {
        console.log(res.data.data);
        // 获取信件信息
        let letterInfo = res.data.data;
        // 处理显示时间
        letterInfo.releaseTime = timeTools.squareDiaryTime(letterInfo.releaseTime);
        // 分段显示文本内容
        letterInfo.content = letterInfo.content.split('\n');

        this.setData({
          letterInfo: letterInfo,
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
    console.log('sorrowletter页面 ----------- 监听页面加载');

    this.setData({
      letterId: options.id,
      senderOpenId: options.senderOpenId
    });

    // 缓存中获取解答次数
    wx.getStorage({
      key: 'userBackLetterNum',
      success: res => {
        // 获取解答次数
        this.setData({
          LastTimes: res.data.letterBackNum
        })
      }
    })

    // 登陆成功后（获取用户openId），获取信件信息
    this.Start(options.id);

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
    console.log('sorrowletter页面 ----------- 监听页面显示');

    wx.getStorage({
      key: 'userBackLetterNum',
      success: res => {
        // 获取缓存时间
        let beforeTime = new Date(res.data.judgeTime).getTime();
        // 获取缓存可解答次数
        let letterBackNum = res.data.letterBackNum;
        if(letterBackNum == 1) {
          return;
        }
        // 获取当前时间
        let nowTime = new Date().getTime();
        console.log(new Date(beforeTime));
        if (nowTime > beforeTime) {
          console.log('-- 重刷新解答次数 --');
          wx.setStorage({
            key: 'userBackLetterNum',
            data: {
              letterBackNum: 1,
              judgeTime: new Date()
            }
          })
          this.setData({
            LastTimes: 1
          })
        }

      }
    })

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
    console.log('sorrowletter页面 ---> 监听页面卸载');
    // 消掉计时器
    // clearTimeout(backNumTimeOut);

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