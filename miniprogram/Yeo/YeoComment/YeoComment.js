// Yeo/YeoComment/YeoComment.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    // 评论组件上外边距
    boxTopMargin: {
      type: Number,
      value: 50
    },
    // 评论组件左右外边距
    boxSizeMargin: {
      type: Number,
      value: 40
    },
    // 评论组件下外边距
    boxBotMargin: {
      type: Number,
      value: 40
    },
    // 评论顶标题
    commentTitle: {
      type: String,
      value: '最新评论'
    },
    // 评论顶标题颜色
    commentColor: {
      type: String,
      value: '#188AFC'
    },
    // 下划线长度（百分比or具体数值）
    lineWidth: {
      type: String,
      value: '94rpx'
    },
    // 下划线颜色
    lineColor: {
      type: String,
      value: '#5AC3D6'
    },
    // 搜索框圆角
    searBordRadius: {
      type: Number,
      value: 20
    },
    // 输入框占位文字
    placeholder: {
      type: String,
      value: '快来留下你精彩的评论...'
    },
    // 初始化输入内容
    initValue: {
      type: String,
      value: ''
    },



  },

  /**
   * 组件的初始数据
   */
  data: {



  },

  /**
   * 组件的方法列表
   */
  methods: {

    // 回车发送评论事件
    sendMessage(e) {
      // 评论内容
      let comment_cont = e.detail.obj.value;
      this.triggerEvent('sendenterevent',{comment_cont});
    },
    // 键盘输入事件
    inputMessage(e) {
      // 实时评论内容
      let realtime_comment = e.detail.obj.value;
      this.triggerEvent('inputevent',{realtime_comment});
    },
    // 点击发送图标发送评论事件
    sendMessageTap() {
      this.triggerEvent('sendmessageevent',{});
    },

  }
})





// // 新建评论对象
// let newCont = {
//   userImg: 'https://s3.ax1x.com/2021/03/09/63FNEn.jpg',
//   headPendant: 0,
//   userName: '荒野大道',
//   content
// };
// this.data.commentArr.push(newCont);
// this.setData({
//   commentArr: this.data.commentArr
// })
// wx.showToast({
//   title: '发布成功',
// })