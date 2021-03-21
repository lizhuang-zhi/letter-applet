// Yeo/YeoStampText/YeoStampText.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    // 外框宽度
    boxWidth: {
      type: Number,
      value: 300
    },
    // 内边距
    boxPadding: {
      type: String,
      value: '20rpx 30rpx'
    },
    // 背景色
    boxBgColor: {
      type: String,
      value: '#ffffff'
    },
    // 外框圆角
    boxBordRadius: {
      type: Number,
      value: 10
    },
    // 外框阴影
    boxShadow: {
      type: String,
      value: '0 0 10rpx #bbbbbb'
    },
    // 字体
    fontFamily: {
      type: String,
      value: `'Courier New', Courier, monospace`
    },
    // 顶部邮票栏内边距
    stampTopPadding: {
      type: String,
      value: '0 0 30rpx'
    },
    // 顶部邮票栏左图
    stampTopLeftPic: {
      type: String,
      value: 'https://s4.ax1x.com/2021/03/20/6hQpOf.png'
    },
    // 顶部邮票栏左图大小
    stampTopLeftPicSize: {
      type: Number,
      value: 50
    },
    // 顶部邮票栏邮票图片地址
    stampPic: {
      type: String,
      value: 'https://s4.ax1x.com/2021/03/20/6h1kzn.png'
    },
    // 顶部邮票栏邮票图片宽度
    stampPicWidthSize: {
      type: Number,
      value: 90
    },
    // 顶部邮票栏邮票图片高度
    stampPicHeightSize: {
      type: Number,
      value: 120
    },
    // 内容框字体颜色
    contentFontColor: {
      type: String,
      value: '#4B4B4B'
    },
    // 内容框字体大小
    contentFontSize: {
      type: Number,
      value: 26
    },
    // 内容框内边距
    contentPadding: {
      type: String,
      value: '0 0 60rpx'
    },
    // 内容框行高
    contentLineHeight: {
      type: Number,
      value: 1.6
    },
    // 内容框字间距
    contentLetterSpacing: {
      type: Number,
      value: 1
    },
    // 信息栏用户名字体大小
    infoNameFontSize: {
      type: Number,
      value: 30
    },
    // 信息框用户名内边距
    infoNamePadding: {
      type: String,
      value: '0 0 5rpx'
    },
    // 信息框用户名字体颜色
    infoNameFontColor: {
      type: String,
      value: '#24314C'
    },
    // 信息框用户名字体粗细
    infoNameFontWeight: {
      type: String,
      value: 'bold'
    },
    // 内容
    content: {
      type: String,
      value: '这是一个关于邮票的文本框，用户可以自定义邮票与内容'
    },
    // 用户名
    name: {
      type: String,
      value: '幸运小木头'
    },
    // 时间
    date: {
      type: String,
      value: '今天上午 11:32'
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
      // 获取全部信息
      let info = e.currentTarget.dataset;
      this.triggerEvent('clickevent',{info});
    }
  }
})