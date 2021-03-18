// Yeo/YeoBlurCard/YeoBlurCard.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    // 描述信息
    description: {
      type: String,
      value: '大家好，我是Mr.KLeo，一名正在学习前端的Person。热爱技术，热爱交流，热爱生活。擅长使用Vue、JavaScript、HTML、CSS、Yeo-components开发可复用的视图组件，希望与你共同进步！'
    },
    // 按钮文字
    buttonContent: {
      type: String,
      value: '按钮'
    },
    // 背景图地址（这里的地址是不支持相对路径的）
    bgImgUrl: {
      type: String,
      value: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2164794023,1537310268&fm=26&gp=0.jpg'
    },
    // 背景框圆角
    bgBordRadius: {
      type: Number,
      value: 20
    },
    // 背景框宽度
    bgWidth: {
      type: Number,
      value: 600
    },
    // 背景框高度
    bgHeight: {
      type: Number,
      value: 600
    },
    // 背景图展示形式(cover集中  contain全包含)
    bgSize: {
      type: String,
      value: 'cover'
    },
    // 模糊框宽度(屏幕百分比or数值<带上单位rpx>)
    blurWidth: {
      type: String,
      value: '86%'
    },
    // 模糊框高度(屏幕百分比or数值<带上单位rpx>)
    blurHeight: {
      type: String,
      value: '86%'
    },
    /* 
      模糊框内边距(这里你可以按照padding的规范填写)
        - '20rpx 40rpx'
        - '40rpx 30rpx 20rpx'
        - '40rpx 30rpx 20rpx 10rpx'
    */ 
    blurPadding: {
      type: String,
      value: '30rpx'
    },
    // 模糊框圆角
    blurBordRadius: {
      type: Number,
      value: 30
    },
    // 文字框圆角
    contentBordRadius: {
      type: Number,
      value: 10
    },
    // 文字框内文字大小
    contentSize: {
      type: Number,
      value: 30
    },
    // 文字颜色
    contentColor: {
      type: String,
      value: '#2D4235'
    },
    // 按钮文字颜色
    btnColor: {
      type: String,
      value: 'rgba(255, 255, 255, 0.8)'
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
    // 点击按钮事件
    clickBtn() {
      // 获取文字内容
      let content = this.data.description;
      this.triggerEvent('btnevent',{content});
    }
  }
})
