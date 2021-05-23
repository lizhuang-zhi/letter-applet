
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    // 提示语句 数组
    PromptData:{
      type:Array,
      value:[
        "请文明使用语言",
        "违规或不适内容会受限制",
        "您的内容会被他人解答"
      ]
    },
    //外层背景颜色
    OuterBackColor:{
      type:String,
      value:"white"
    },
    // 外层宽度
    OuterWidth:{
      type:String,
      value:"95vw"
    },
    // 外层圆角
    OuterRadius:{
      type:String,
      value:"30rpx"
    },
    // 外层外边距 上下 左右
    OuterMargin:{
      type:String,
      value:"40rpx auto"
    },
    // 提示主题内边距 上 右 下 左
    TitlePadding:{
      type:String,
      value:"40rpx 40rpx 20rpx 40rpx"
    },
    //提示主题浮动版式 space-between/space-around
    FlexType:{
      type:String,
      value:"space-between"
    },
    // 提示文字
    PromptText:{
      type:String,
      value:"基本规则"
    },
    // 提示文字大小
    TextSize:{
      type:String,
      value:"42rpx"
    },
    // 箭头图片
    ArrowheadSrc:{
      type:String,
      value:"https://yundingxikj.oss-cn-beijing.aliyuncs.com/LetterStation/jiantou-up.png?versionId=CAEQFhiBgMDNuc7QzBciIGU5MzcwNGU2ZmM1NjQ4ZjZiYWY4YTA3Y2Q1NTA5OTE3"
    },
    // 箭头图片 宽度
    ImgWidth:{
      type:String,
      value:"35rpx"
    },
    //箭头图片 高度
    ImgHeight:{
      type:String,
      value:"35rpx"
    },
    //提示列表行高
    ListLineHeight:{
      type:Number,
      value:38
    },
    //提示列表字体大小
   ListFontSize:{
      type:Number,
      value:32
    },
    // 行高 = 字体大小+ 增值
    //增值
    AddSLength:{
      type:Number,
      value:6
    },
    //提示列表内边距 上 右 下 左
    LitsPadding:{
      type:String,
      value:"0 40rpx 20rpx 40rpx"
    },
    // 内容列表字体颜色
    ListFontColor: {
      type: String,
      value: '#999999'
    },
    // 内容列表字体大小
    ListFontSize: {
      type: Number,
      value: 27
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
    // 点击箭头展开列表
    showList(){
      // 行高
      let lineH=this.properties.ListLineHeight;
      if(lineH==0){
        this.setData({
          ListLineHeight:this.properties.ListFontSize+this.properties.AddSLength,
          opacityNum: 1,
          ArrowheadSrc: 'https://yundingxikj.oss-cn-beijing.aliyuncs.com/LetterStation/jiantou-up.png?versionId=CAEQFhiBgMDNuc7QzBciIGU5MzcwNGU2ZmM1NjQ4ZjZiYWY4YTA3Y2Q1NTA5OTE3'
        })
      }else{
        this.setData({
          ListLineHeight:0,
          opacityNum: 0,
          ArrowheadSrc: 'https://yundingxikj.oss-cn-beijing.aliyuncs.com/LetterStation/jiantou-down.png?versionId=CAEQFhiBgICj9trQzBciIDU4NzI3NWY1ZGRkOTQ2ZDc4ODY0Mjk1MzIwYTVlOGY2'
        })
      }
    }
  }
})
