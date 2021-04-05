// components/Notify/Notify.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    //盒子宽度
    BoxWidth: {
      type: String,
      value: '90vw'
    },
    //图片圆角
    ImgRadius: {
      type: String,
      value:'30rpx 30rpx 0 0'
    },
    //盒子外边距
    BoxMargin: {
      type: String,
      value: '30rpx auto'
    },
    
    //盒子背景颜色
    BoxBackColor: {
      type: String,
      value: "white"
    },

    //时间文字大小
    TimeSize: {
      type: String,
      value: '28rpx'
    },
    //时间文字颜色
    TimeColor: {
      type: String,
      value: 'rgb(120,120,120)'
    },
    //时间文字内容
    SendTime: {
      type: String,
      value: '2021-3-30'
    },
    //时间下边距
    TimeMargin:{
      type:String,
      value:'26rpx'
    },

    //图片宽度
    ImgWidth: {
      type: String,
      value: '100%'
    },
    //图片连接
    Img: {
      type: String,
      value: 'https://s1.ax1x.com/2020/11/01/Bwp6Z4.png'
    },

    //通知内容
    ContentText: {
      type: String,
      value: '欢迎来到信栈，发送你的第一封信吧,它会由风飘向远方，寻找你的摆渡人'
    },
    //通知内容文字大小
    ContentSize: {
      type: String,
      value: '32rpx'
    },
    //通知内容文字颜色
    ContentColor: {
      type: String,
      value: 'black'
    },
    //通知内容内边距
    ContentPadding: {
      type: String,
      value: '20rpx'
    },
    //文字圆角
    CentRadius:{
      type:String,
      value:'0 0 30rpx 30rpx'
    },
    //发布者图片
    ProImgSrc:{
      type:String,
      value:'https://z3.ax1x.com/2021/04/03/cunM2d.png'
    },
    //发布者图片大小 宽度
    ProImgSrcWidth:{
      type:String,
      value:'40rpx'
    },
    //发布者图片大小 高度
    ProImgSrcHeight:{
      type:String,
      value:'40rpx'
    },
    //发布者 文字内容
    promulgatorText:{
      type:String,
      value:'官方推荐'
    },
    //发布者文字大小
    ProorSize:{
      type:String,
      value:'28rpx'
    },
    //发布者文字颜色
    ProorColor:{
      type:String,
      value:'grey'
    },
    //发布者上边距
    ProTopMargin:{
      type:String,
      value:'10rpx'
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