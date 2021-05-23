let requestData = require('../../../utils/request');
let app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 第一个问题
    items_1: [{
        value: 1,
        name: '从未出现'
      },
      {
        value: 2,
        name: '偶尔出现'
      },
      {
        value: 3,
        name: '经常出现'
      },
    ],
    // 第二个问题
    items_2: [{
        value: 1,
        name: '非常有帮助'
      },
      {
        value: 2,
        name: '有一定帮助'
      },
      {
        value: 3,
        name: '没有帮助'
      },
    ],

    // 第一个问题值
    firstQuesVal: 0,
    // 第二个问题值
    SecQuesVal: 0,

    // 趣味性评分
    playValue: 0,
    // 页面设计评分
    uiValue: 0,
    // 相对我们说
    adviseValue: '',

    // 提交按钮是否加载中
    isBtnLoading: false
  },

  // 第一个问题
  radioChange_1(e) {
    console.log('选择第一个问题，携带value值为：', parseInt(e.detail.value))
    const items = this.data.items_1;
    for (let i = 0, len = items.length; i < len; ++i) {
      items[i].checked = items[i].value === parseInt(e.detail.value);
    }
    this.setData({
      items_1: items,
      firstQuesVal: e.detail.value
    })
  },
  // 第二个问题
  radioChange_2(e) {
    console.log('选择第二个问题，携带value值为：', parseInt(e.detail.value))
    const items = this.data.items_2;
    for (let i = 0, len = items.length; i < len; ++i) {
      items[i].checked = items[i].value === parseInt(e.detail.value);
    }
    this.setData({
      items_2: items,
      SecQuesVal: e.detail.value
    })
  },
  // 第三个问题（趣味性）
  onPlayValueChange(event) {
    console.log(event.detail);
    this.setData({
      playValue: event.detail,
    });
  },
  // 第四个问题（页面设计）
  onUiValueChange(event) {
    console.log(event.detail);
    this.setData({
      uiValue: event.detail,
    });
  },

  // 想对我们说
  bindTextAreaInput: function (e) {
    console.log(e.detail.value);
    this.setData({
      adviseValue: e.detail.value
    })
  },

  // 提交表单
  submitTap() {
    this.setData({
      isBtnLoading: true
    })
    let that = this;
    // 获取问题值
    let isIllegal = that.data.firstQuesVal;
    let isHelp = that.data.SecQuesVal;
    let interestScore = that.data.playValue;
    let pageScore = that.data.uiValue;
    let otherSpeech = that.data.adviseValue;
    // 获取openId
    let openId = app.globalData.openid;

    if (isIllegal == 0 || isHelp == 0 || interestScore == 0 || pageScore == 0 || otherSpeech == '') {
      wx.showToast({
        title: '小主，信息还没填完呢~',
        icon: 'none'
      })
      this.setData({
        isBtnLoading: false
      })
    } else {
      // 异步缓存数据
      that.storeInfo();
      // 保存到后台
      requestData.investigate({
        interestScore,
        isHelp,
        isIllegal,
        openId,
        otherSpeech,
        pageScore
      }).then(res => {
        console.log(res.data);
        // 按钮loading
        this.setData({
          isBtnLoading: false
        })
        wx.showToast({
          title: '提交成功',
          duration: 1300
        });
        let time = setTimeout(() => {
          wx.navigateBack({
            url: '/packageMyInfo/pages/latestevents/latestevents',
          })
          clearTimeout(time);
        }, 1300);

      })
    }

  },

  // 异步存储用户问卷调查
  storeInfo() {
    // 获取第一个问题数组
    let firArr = this.data.items_1;
    // 获取第一个问题数组
    let secArr = this.data.items_2;
    // 趣味性的值
    let playValue = this.data.playValue;
    // 页面设计的值
    let uiValue = this.data.uiValue;
    // 建议的文本内容
    let adviseValue = this.data.adviseValue;
    // 赋值不可选
    firArr.forEach(item => {
      item.disabled = true;
    });
    secArr.forEach(item => {
      item.disabled = true;
    });

    try {
      wx.setStorageSync('investigation', {
        firArr,
        secArr,
        play: {
          value: playValue,
          playValueReadOnly: true
        },
        ui: {
          value: uiValue,
          uiValueReadOnly: true
        },
        advise: {
          value: adviseValue,
          adviseDisabled: true
        },
        btn: {
          btnDisabled: true
        }
      })
    } catch (e) {
      console.log('存储调查问卷异常');
    }
  },

  // 初始化数据
  Start() {
    wx.showLoading({
      title: '加载中..',
    })
    // 加载缓存中的填写数据
    wx.getStorage({
      key: 'investigation',
      success: res => {
        console.log(res.data);
        // 获取对象
        let dataObj = res.data;
        if (dataObj) {
          this.setData({
            items_1: dataObj.firArr,
            items_2: dataObj.secArr,
            playValueReadOnly: dataObj.play.playValueReadOnly,
            playValue: dataObj.play.value,
            uiValueReadOnly: dataObj.ui.uiValueReadOnly,
            uiValue: dataObj.ui.value,
            adviseDisabled: dataObj.advise.adviseDisabled,
            adviseValue: dataObj.advise.value,
            btnDisabled: dataObj.btn.btnDisabled
          })
          wx.hideLoading({ });
        }
      },
      fail: res => {
        console.log(res);
        wx.hideLoading({ });
      }
    })
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