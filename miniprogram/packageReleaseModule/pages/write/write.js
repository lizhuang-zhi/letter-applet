import Dialog from '../../../miniprogram_npm/@vant/weapp/dialog/dialog';
let requestData = require('../../../utils/request');
let app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    //选择的类型
    chooseType: '',
    //用户输入的内容
    textValue: '',
    // 信件id
    letterId: ''
  },
  //获取用户输入的内容
  getTextValue(e) {
    let textvalue = e.detail.textvalue;
    this.setData({
      textValue: textvalue
    })
    console.log(this.data.textValue);
  },
  // 跳转标签选择页面
  ToChooseTag(e) {
    wx.showLoading({
      title: '内容审核中..',
    })
    // 获取输入内容
    let subvalue = e.currentTarget.dataset.value;
    // 获取类型选择
    let chooseType = this.data.chooseType;
    // 信件id
    let letterId = this.data.letterId;
    // 原信件发送者id
    let senderOpenId = this.data.senderOpenId;
    if (subvalue.length == 0) {
      wx.showToast({
        title: '请输入内容',
        icon: 'none',
        image: '../../images/input.png'
      });
    } else if (subvalue.length < 50) {
      wx.showToast({
        title: '多写几句吧',
        icon: 'none',
      })
    } else if (chooseType == '回信') {
      /* 
        调用回信接口 ---- 暂时去除此接口 2021.4.14
      */
      // let infoObj = {
      //   letterId: this.data.letterId,
      //   message: this.data.textValue,
      //   recipient: this.data.senderOpenId,
      //   recipientPenName: this.data.senderPenName,
      //   sender: app.globalData.openid,
      //   senderPenName: this.data.recipientPenName
      // };
      // requestData.indexStampReply(infoObj).then(res => {
      //   return new Promise((resolve, reject) => {
      //     // 显示回信成功（同步）
      //     wx.showToast({
      //       title: '回信成功',
      //       image: '../../images/confirm.png',
      //       duration: 1300
      //     });
      //     resolve('success');
      //   })
      // }).then(res => {
      //   if (res == 'success') {
      //     // 接口请求成功后跳转（同步）
      //     setTimeout(() => {
      //       wx.redirectTo({
      //         url: '/packageMyInfo/pages/replylist/replylist'
      //       });
      //     },1300)
      //   }
      // })

    } else { // 文字先提交审核
      console.log(subvalue);
      requestData.textLegal(subvalue).then(res => {
        console.log(res.data);
        // 返回信息
        let resBackInfo = res.data.data;
        if (resBackInfo == 1) {
          // 内容合规
          // Json传输内容
          let JsonSubvalue = JSON.stringify(subvalue);
          wx.navigateTo({
            url: '/packageReleaseModule/pages/lettertype/lettertype?subvalue=' + encodeURIComponent(JsonSubvalue) + '&type=' + chooseType + '&letterId=' + letterId + '&senderOpenId=' + senderOpenId,
          })
          console.log('执行跳转 senderOpenId ---> ' + senderOpenId);
          // 关闭loading
          wx.hideLoading({});
        } else if (resBackInfo == 2 || resBackInfo == 3) {
          // 关闭loading
          wx.hideLoading({});
          // 内容不合规
          Dialog.confirm({
              title: '内容审核结果',
              message: '您发布的内容不当！请修改后重试',
              confirmButtonText: '立即修改',
              cancelButtonText: '交由审核'
            })
            .then(() => {
              // 立即修改
              return;
            })
            .catch(() => {
              // 继续提交
              // Json传输内容
              let JsonSubvalue = JSON.stringify(subvalue);
              wx.navigateTo({
                url: '/packageReleaseModule/pages/lettertype/lettertype?subvalue=' + encodeURIComponent(JsonSubvalue) + '&type=' + chooseType + '&letterId=' + letterId + '&senderOpenId=' + senderOpenId,
              });
              console.log('执行跳转 senderOpenId ---> ' + senderOpenId);
            });
        } else if (resBackInfo == 4) {
          // 关闭loading
          wx.hideLoading({});
          // 网络错误
          Dialog.alert({
            title: '网络错误',
            message: '小主，请稍后再试~',
            theme: 'round-button',
          }).then(() => {
            // on close
          });
        }


      })
    }

  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 获取选择类型
    this.setData({
      chooseType: options.type,
      letterId: options.letterId,
      senderOpenId: options.senderOpenId,

      senderOpenId: options.senderOpenId,
      recipientPenName: options.recipientPenName,
      senderPenName: options.senderPenName
    })
    console.log(this.data.chooseType);
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