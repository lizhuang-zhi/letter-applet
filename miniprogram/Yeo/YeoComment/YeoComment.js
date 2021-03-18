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
    /* 评论数组数据 */
    commentArr: {
      type: Array,
      value: [{
          userImg: 'https://s3.ax1x.com/2021/03/09/63FF1O.jpg',
          headPendant: 7,
          userName: '人是非',
          content: '我说的话叫评论，我做的事叫论评，你看我评论还是论评都是非常的坦荡',
          time: '2021-2-21'
        },
        {
          userImg: 'https://s3.ax1x.com/2021/03/09/63FUNq.jpg',
          headPendant: 3,
          userName: '陌生的兄弟',
          content: '楼上说的对',
          time: '2021-02-22'
        },
        {
          userImg: 'https://s3.ax1x.com/2021/03/09/63FNEn.jpg',
          headPendant: 5,
          userName: '可爱的猫',
          content: '楼上说的有道理',
          time: '2021-1-05'
        },
      ]
    }


  },

  /**
   * 组件的初始数据
   */
  data: {
    // 实时评论内容
    relcomment: '',

  },

  /**
   * 组件的方法列表
   */
  methods: {
    // 发送评论
    sendMsg(content) {
      // 新建评论对象
      let newCont = {
        userImg: 'https://s3.ax1x.com/2021/03/09/63FNEn.jpg',
        headPendant: 0,
        userName: '荒野大道',
        content
      };
      this.data.commentArr.push(newCont);
      this.setData({
        commentArr: this.data.commentArr
      })
    },
    // 发送评论事件
    sendMessage(e) {
      // 评论内容
      let comment_cont = e.detail.obj.value;
      this.sendMsg(comment_cont);
    },
    // 键盘输入事件
    inputMessage(e) {
      // 实时评论内容
      let realtime_comment = e.detail.obj.value;
      this.setData({
        relcomment: realtime_comment
      })
    },
    // 点击发送图标发送评论事件
    sendMessageTap() {
      // 评论内容
      let comment_cont = this.data.relcomment;
      this.sendMsg(comment_cont);
    },


    /* 点击用户头像事件 */
    clickUserImg(e) {
      // 用户信息
      let userInfo = e.detail.obj;
      this.triggerEvent('userimgevent',{userInfo});
    },
    /* 点击用户评论内容事件 */
    clickContent(e) {
      // 用户评论信息
      let commentInfo = e.detail.obj;
      this.triggerEvent('commentevent',{commentInfo});
    }
  }
})