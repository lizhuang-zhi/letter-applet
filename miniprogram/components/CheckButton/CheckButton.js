// components/CheckButton/CheckButton.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    //按钮外边距
    BtnMargin:{
      type:String,
      value:'30rpx auto'
    },
    //按钮排版格式 space-around space-between center 
    BtnStyle:{
      type:String,
      value:'center'
    },
    //按钮文字内容
    BtnText:{
      type:String,
      value:'确定'
    },
    //按钮宽度
    BtnWidth:{
      type:String,
      value:'240rpx'
    },
    //按钮高度
    BtnHeight:{
      type:String,
      value:'100rpx'
    },
    //按钮圆角
    BtnRadius:{
      type:String,
      value:'45rpx'
    },
    //行高
    LineHeight:{
      type:String,
      value:'100rpx'
    },
    //背景颜色
    BtnBackColor:{
      type:String,
      value:'#01D25C'
    },
    //文字颜色
    BtnColor:{
      type:String,
      value:'white'
    },
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
