// Yeo/YeoCategory/YeoCategory.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    // 外框宽度
    boxWidth: {
      type: String,
      value: '250rpx'
    },
    // 是否显示左侧配图
    isShowPic: {
      type: Boolean,
      value: true
    },
    // 背景颜色
    bgColor: {
      type: String,
      value: '#948CFF'
    },
    // 图片地址
    picUrl: {
      type: String,
      value: 'https://s3.ax1x.com/2021/03/09/63FkcD.png'
    },
    // 图片大小
    picSize: {
      type: Number,
      value: 46
    },
    // 图片距离框体左侧内边距
    paddingLeftofPic: {
      type: Number,
      value: 30
    },
    // 框体圆角
    boxRadius: {
      type: Number,
      value: 32
    },
    // 框体底部外边距
    boxMarginBottom: {
      type: Number,
      value: 38
    }
  },

  options: {
    multipleSlots: true
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

  }
})
