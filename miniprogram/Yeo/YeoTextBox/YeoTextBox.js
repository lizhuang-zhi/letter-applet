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
    // 背景色
    bgColor: {
      type: String,
      value: '#FFFFFF'
    },
    // 内边距
    padding: {
      type: Number,
      value: 28
    },
    // 外框圆角
    boxBordRadius: {
      type: Number,
      value: 25
    },
    // 内容底部外边距
    contMarginBottom: {
      type: Number,
      value: 25
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
