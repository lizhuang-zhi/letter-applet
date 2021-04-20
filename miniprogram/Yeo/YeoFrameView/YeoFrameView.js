// Yeo/YeoFrameView/YeoFrameView.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    // 方向
    direction: {
      type: String,
      value: 'col'
    },
    // 框架宽度
    frameWidth: {
      type: String,
      value: '100%'
    },
    // 框架高度
    frameHeight: {
      type: String,
      value: '100%'
    },
    // 框架内边距
    framePadding: {
      type: String,
      value: '0rpx'
    },
    // 框架外边距
    frameMargin: {
      type: String,
      value: '0rpx'
    },
    // 框架圆角
    frameBordRadius: {
      type: String,
      value: '20rpx'
    },
    // 框架背景色
    frameBgColor: {
      type: String,
      value: 'green'
    },
    // 框架box-sizing（content-box、border-box）
    frameBoxSizing: {
      type: String,
      value: 'content-box'
    },
    // 框架align-items 
    frameAlignItems: {
      type: String,
      value: 'stretch'
    }
    
  },

  lifetimes: {
    attached() {
      /* 
        初始化行列背景色（易于区分）
      */
      // 获取行列信息
      // let RowOrCol = this.properties.direction;
      // if(RowOrCol == 'row') {
      //   this.setData({
      //     frameBgColor: 'red'
      //   })
      // }

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

  }
})
