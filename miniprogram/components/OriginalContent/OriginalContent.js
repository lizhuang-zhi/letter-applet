// components/OriginalContent/OriginalContent.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    //盒子内容
    OriginalText:{
      type:String,
      value:'"'+'我是一个高三的学生，还有不到八十天就要高考了。'
    },
    //盒子宽度
    BoxWidth:{
      type:String,
      value:'80vw'
    },
    //盒子内边距
    BoxPadding:{
      type:String,
      value:'30rpx'
    },
    //盒子外边距
    BoxMargin:{
      type:String,
      value:'30rpx auto'
    },
    //盒子圆角
    BoxRadius:{
      type:String,
      value:'20rpx'
    },
    //盒子背景颜色
    BoxBackColor:{
      type:String,
      value:'rgb(220,220,220)'
    },
    //文字大小
    TextSize:{
      type:String,
      value:'32rpx'
    },
    //文字颜色
    TextColor:{
      type:String,
      value:'rgb(80,80,80)'
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
