// Yeo/YeoTextBox/YeoTextBox.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    // 内容
    content: {
      type: String,
      value: '从昨天开始，我要好好学习，天天向上，嘻嘻，因为我是一个爱学习的Man'
    },
    // 用户名
    userName: {
      type: String,
      value: '胡辣汤的朋友'
    },
    // 评论数量
    commentNum: {
      type: Number,
      value: 265
    },
    // 外框宽度
    boxWidth: {
      type: String,
      value: '100%'
    },
    // 外框外边距
    boxMargin: {
      type: String,
      value: '0 0 20rpx'
    },
    // 外框圆角
    boxBordRadius: {
      type: Number,
      value: 25
    },
    // 外框阴影
    boxShadow: {
      type: String,
      value: '0 0 20rpx #cccccc'
    },
    // 内容底部外边距
    contMarginBottom: {
      type: Number,
      value: 0
    },
    // 内容字间距
    contLetterSpacing: {
      type: Number,
      value: 2
    },
    // 内容文字大小
    contFontSize: {
      type: Number,
      value: 28
    },
    // 内容行高
    contLineHeight: {
      type: Number,
      value: 1.55
    },
    // 内容内边距
    contentPadding: {
      type: String,
      value: '30rpx 28rpx 15rpx'
    },
    // 内容背景色
    contentBgColor: {
      type: String,
      value: '#F9F9F9'
    },
    /* *********** 底部栏 *********** */
    // 是否显示用户头像
    isShowHeadPic: {
      type: Boolean,
      value: true
    },
    // 用户头像url
    headPicUrl: {
      type: String,
      value: 'https://dss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2596268243,3122318467&fm=26&gp=0.jpg'
    },
    // 用户头像宽度
    botBarHeadPicWidth: {
      type: Number,
      value: 40
    },
    // 用户头像高度
    botBarHeadPicHeight: {
      type: Number,
      value: 40
    },
    // 用户头像外边距
    botBarHeadPicMargin: {
      type: String,
      value: '0 10rpx 0 0'
    },
    // 用户头像图片圆角
    botBarHeadPicBordRadius: {
      type: String,
      value: '50%'
    },
    // 底部栏布局方式
    botBarJustifyContent: {
      type: String,
      value: 'space-between'
    },
    // 底部栏字体颜色
    botBarFontColor: {
      type: String,
      value: '#767676'
    },
    // 底部栏用户名字间距
    botBarUserNameLetterSpacing: {
      type: Number,
      value: 1
    },
    // 底部栏字体大小
    botBarUserNameFontSize: {
      type: Number,
      value: 26
    },
    // 箭头图标大小
    picSize: {
      type: Number,
      value: 20
    },
    // 底部栏内边距
    botBarPadding: {
      type: String,
      value: '23rpx 28rpx 25rpx'
    },
    // 底部栏背景色
    botBarBgColor: {
      type: String,
      value: '#F3F6F6'
    }


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
    // 点击整体事件
    clickTap(e) {
      // 获取信息
      let info = e.currentTarget.dataset;
      this.triggerEvent('clickevent',{info});
    }
  }
})
