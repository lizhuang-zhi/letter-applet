// components/FunBlocks/FunBlocks.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    // 功能块 数组
    dataList:{
      type:Array,
      value:[
        {
          // 功能块图片
          imgsrc:"https://s4.ax1x.com/2021/03/19/6WYN5D.png",
          // 功能块 文字
          text:"wallet",
          picBgColor: "#FBE9E8"
        },
        {
          imgsrc:"https://s4.ax1x.com/2021/03/19/6WrCw9.png",
          text:"gift",
          picBgColor: "#FBE9E8"
        },
        {
          imgsrc:"https://s4.ax1x.com/2021/03/19/6WYYVK.png",
          text:"news",
          picBgColor: "#FBE9E8"
        },
        {
          imgsrc:"https://s4.ax1x.com/2021/03/19/6WYGb6.png",
          text:"envelope"
        }
      ]
    },
    // 外层宽度
    OuterWidth:{
      type:String,
      value:"100vw"
    },
    // 外层外边距
    OuterMargin:{
      type:String,
      value:"30rpx auto"
    },
    //功能块图片宽度
    BlockWidth:{
      type:String,
      value:"100rpx"
    },
    //功能块图片高度
    BlockHeight:{
      type:String,
      value:"100rpx"
    },
    //功能块文字大小
    BlockFontSize:{
      type:String,
      value:"28rpx"
    },
    // 功能块文字颜色
    BlockFontColor:{
      type:String,
      value:"rgb(150,150,150)"
    },
    //  功能块文字外边距
    BlockFontMargin:{
      type:String,
      value:"10rpx"
    },
    // 功能块文字粗细
    BlockFontWeight: {
      type: String,
      value: 'bold'
    },
    // 功能块文字字间距
    BolckLetterSpacing: {
      type: Number,
      value: 5
    },
    // 图片圆角
    BlockRadius: {
      type: Number,
      value: 30
    },
    // 内层盒子布局方式
    InnerBoxFlexType: {
      type: String,
      value: 'space-around'
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
    // 点击功能块
    clickTap(e) {
      // 获取点击索引
      let index = e.currentTarget.dataset.index;
      this.triggerEvent('clickevent',{index});
    }
  }
})
