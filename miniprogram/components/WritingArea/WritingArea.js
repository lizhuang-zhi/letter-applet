// components/WritingArea/WritingArea.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    //书写区外层盒子宽度
    WriteWidth:{
      type:String,
      value:'95vw'
    },
    //书写区外层外边距
    WriteMargin:{
      type:String,
      value:'10rpx auto'
    },
    //书写区背景颜色
    TextBgColor:{
      type:String,
      value:'white'
    },
    //书写区文字颜色
    TextFontColor:{
      type:String,
      value:'gray'
    },
    //书写区字体大小
    TextSize:{
      type:String,
      value:'34rpx'
    },
    //书写区行高
    LineHeight:{
      type:Number,
      value:1.2
    },
    //书写区内边框
    TextPadding:{
      type:String,
      value:'40rpx 30rpx'
    },
    //书写区圆角
    TextRadius:{
      type:String,
      value:'30rpx'
    },
    //书写区最小高度
    TextMinHeight:{
      type:String,
      value:'1000rpx'
    },
    //内容最多字数
    TextNumber:{
      type:Number,
      value:800
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
