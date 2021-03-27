// Yeo/YeoDiaryBox/YeoDiaryBox.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    // 标题
    diaryTit: {
      type: String,
      value: '日记男孩'
    },
    // 日记内容
    diaryContent: {
      type: String,
      value: '我们总是打扫房间思想水利电力谁都得四我看看水电费计息撒旦法大反馈了山东中路上的方块第三方'
    },
    // 日记时间
    diaryDate: {
      type: String,
      value: '3月5日'
    },
    // 外框阴影
    boxShadow: {
      type: String,
      value: '0 0 20rpx #dddddd'
    },
    // 字体颜色
    fontColor: {
      type: String,
      value: '#293939'
    },
    // 背景色
    bgColor: {
      type: String,
      value: '#f6f6f6'
    },
    // 外框圆角
    bordRadius: {
      type: Number,
      value: 25
    },
    // 内边距
    padding: {
      type: Number,
      value: 30
    },
    // 外框底部外边距
    marginBottom: {
      type: Number,
      value: 20
    },
    // 标题字体大小
    titFontSize: {
      type: Number,
      value: 35
    },
    // 标题字体粗细
    titFontWeight: {
      type: String,
      value: 'bold'
    },
    // 标题顶部内边距
    titPaddingTop: {
      type: Number,
      value: 15
    },
    // 标题底部外边距
    titMarginBottom: {
      type: Number,
      value: 20
    },
    // 内容字间距
    contentLetterSpacing: {
      type: Number,
      value: 2
    },
    // 内容字体大小
    contentFontSize: {
      type: Number,
      value: 27
    },
    // 内容底部外边距
    contentMarginBottom: {
      type: Number,
      value: 25
    },
    // 日期字体大小
    dateFontSize: {
      type: Number,
      value: 30
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
