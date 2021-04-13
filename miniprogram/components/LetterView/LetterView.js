// components/LetterView/LetterView.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    // 顶部小提示 是否存在
    TopTipDisplay:{
      type:String,
      value:'flex'
    },
    // 页面背景颜色
    BckColor:{
      type:String,
      value:"#E8EAEA"
    },

    // 作者名字
    writer:{
      type:String,
      value:"不吃鱼的猫"
    },
    // 写作日期
    date:{
      type:String,
      value:'2月12日'
    },
    // 收件人
    consignee:{
      type:String,
      value:"xxx"+" 收"
    },
    // 开头问候语
    regards:{
      type:String,
      value:"你好"
    },
    // 顶部提示语
    TopTip:{
      type:String,
      value:"这封信只发给你"
    },


    // 信件文字内容
    lettercontentArr:{
      type:Array,
      value:[]
    },
    // 信件内容字体大小
    contentFont:{
      type:String,
      value:"30rpx"
    },
    // 信件内容行高
    contentLineHeight:{
      type:String,
      value:"30rpx"
    },
    //信件内容文字颜色
    ContentLineColor:{
      type:String,
      value:'#444'
    },
    //信件内容字间距
    ContentSpacing:{
      type:String,
      value:'5rpx'
    },
    //信件头部收件人行高
    HeadLineHeight:{
      type:String,
      value:"100rpx"
    },
    //信件头部收件人字体大小
    HeadFont:{
      type:String,
      value:"35rpx"
    },
    //信件头部收件人字体颜色
    HeadColor:{
      type:String,
      value:"#000"
    }, 
    //信件头部问候语行高
    HeadLineregardsHeight:{
     type:String,
     value:"80rpx"
    },
    //信件头部问候语字体大小
     HeadregardsFont:{
      type:String,
      value:"34rpx"
    },
    //信件头部问候语字体颜色
    HeadRegardsColor:{
      type:String,
      value:'#111'
    },


    // 信件结尾作者名字偏移量 X轴 right
    FootWriterPsitionX:{
      type:String,
      value:"10rpx"
    },
    // 信件结尾作者名字偏移量 Y轴 bottom
    FootWriterPsitionY:{
      type:String,
      value:""
    },
    //信件结尾作者名字大小
    FootWriterFontSize:{
      type:String,
      value:"32rpx"
    },
    //信件结尾作者名字颜色
    WriterColor:{
      type:String,
      value:'#000'
    },


    // 信件结尾日期偏移量 X轴 right
    FootDaterPsitionX:{
      type:String,
      value:"10rpx"
    },
    // 信件结尾日期偏移量 Y轴 bottom (负的)
    FootDatePsitionY:{
      type:String,
      value:"-100rpx"
    },
    //信件结尾日期大小
    FootDateFontSize:{
      type:String,
      value:"32rpx"
    },
    //信件结尾日期颜色
    FootDateColor:{
      type:String,
      value:"black"
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
    
  },
})
