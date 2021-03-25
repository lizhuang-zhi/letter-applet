// components/LetterSimple/LetterSimple.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    // 信件内容
    content: {
      type: String,
      value: `我觉得我在他身上做的够好了，或许看起来很幼稚可是也是我的整个青春，同居的一年洗的我没有少洗,我知道不值得可是真的放不下太难了，也许是付出的太多了吧,我天天刷快手抖音看着关于他的一切拼命的告诉我在他身上做的够好了，我觉得我在他身上做的够好了,或许看起来很幼稚可是也是我的整个青春，同居的一年洗的我没有少洗,我知道不值得可是真的放不下太难了，也许是付出的太多了吧,我天天刷快手抖音看着关于他的一切拼命的告诉我在他身上做的够好了，我觉得我在他身上做的够好了，或许看起来很幼稚可是也是我的整个青春，同居的一年洗的我没有少洗,我知道不值得可是真的放不下太难了，也许是付出的太多了吧,我天天刷快手抖音看着关于他的一切拼命的告诉我在他身上做的够好了`
    },
    //简略内容颜色
    ContentColor:{
      type:String,
      value:"#1D1C1A"
    },
    // 简略内容文字大小
    ContentSize: {
      type: String,
      value: "32rpx"
    },
    // 作者名称
    writer: {
      type: String,
      value: "微小的橄榄"
    },
    //作者文字颜色
    WriterColor:{
      type:String,
      value:'#606572'
    },
    //作者文字大小
    WriterSize:{
      type:String,
      value:'32rpx'
    },
    //作者位置 距离底部的距离 rpx
    WriterBottom:{
      type:String,
      value:"20rpx"
    },
    //作者位置  离右边的距离 rpx
    WriterRight:{
      type:String,
      value:'40rpx'
    },
    // 卡片背景颜色
    bgColor: {
      type: String,
      value: '#f6f6f6'
    },
    // 内部高度
    InnerHeight: {
      type: String,
      value: "300rpx"
    },
    //内部内边距 
    InnerPadding:{
      type:String,
      value:'22rpx'
    },
    //内部圆角
    InnerRadius:{
      type:String,
      value:'20rpx'
    },
    // 收信人内容
    consignee: {
      type: String,
      value: "陌生人 收"
    },
    // 收件人文字颜色
    ConsigneeColor:{
      type:String,
      value:'#626774'
    },
    //收件人字体大小
    ConsigneeSize:{
      type:String,
      value:'32rpx'
    },


    //logo链接地址
    IconImgSrc:{
      type:String,
      value:'https://z3.ax1x.com/2021/03/25/6LeCcQ.png'
    },
    // logo宽度大小
    IconWidthSize: {
      type: String,
      value: "100rpx"
    },
    // logo高度大小
    IconHeightSize: {
      type: String,
      value: "100rpx"
    },
    //logo位置,Y轴
    IconTop: {
      type: String,
      value: "40rpx"
    },
    // logo位置,X轴
    IconRight: {
      type: String,
      value: "40rpx"
    },
  },

  /**
   * 组件的初始数据
   */
  data: {},

  /**
   * 组件的方法列表
   */
  methods: {

  }
})