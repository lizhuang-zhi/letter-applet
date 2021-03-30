// components/EmptyDisplay/EmptyDisplay.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    //盒子外边距
    BoxMargin: {
      type: String,
      value: '30vw auto'
    },
    //无记录图片
    Src: {
      type: String,
      value: "https://z3.ax1x.com/2021/03/30/cF3icV.png"
    },
    //图片宽度
    ImgWidth: {
      type: String,
      value: '100%'
    },

    //无记录文字内容
    Text: {
      type: String,
      value: '你还没有任何评论'
    },
    //无记录文字大小
    TextSize: {
      type: String,
      value: '32rpx'
    },
    //无记录文字颜色
    TextColor:{
      type:String,
      value:'grey'
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