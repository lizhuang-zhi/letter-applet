// components/StarCard/StarCard.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    //图标地址 为 ""时 不显示图片
    IconSrc:{
      type:String,
      value:'https://z3.ax1x.com/2021/03/25/6XwJm9.png'
    },
    //图片宽度
    IconWidth:{
      type:String,
      value:'55rpx'
    },
    //图片高度
    IconHeight:{
      type:String,
      value:'55rpx'
    },


    //点赞信件简略内容
    StarLetter:{
      type:String,
      value:`我好迷茫啊啊啊啊啊啊啊，真的好迷茫，现在高中`
    },
    //点赞信件简略内容背景颜色
    StarLetterBackColor:{
      type:String,
      value:'rgb(230, 230, 230)'
    },
    //点赞信件简略内容文字颜色
    StarLetterColor:{
      type:String,
      value:'rgb(100,100,100)'
    },
    //点赞信件简略内容内边距
    StarLetterPadding:{
      type:String,
      value:'10rpx'
    },
    //点赞信件简略内容圆角
    StarLetterRadius:{
      type:String,
      value:'6rpx'
    },

    //点赞时间
    StarTime:{
      type:String,
      value:'03/23 22:39'
    },
    //点赞时间颜色
    TimeColor:{
      type:String,
      value:'grey'
    },
    //点赞时间外边距
    TimeMargin:{
      type:String,
      value:'30rpx 0'
    },


    //卡片宽度
    CardWidth:{
      type:String,
      value:'90vw'
    },
    //卡片外边距
    CardMargin:{
      type:String,
      value:'30rpx auto'
    },

    //点赞卡片宽度
    StarCardWidth:{
      type:String,
      value:'100%'
    },
    //点赞卡片背景颜色
    StarBackColor:{
      type:String,
      value:'white'
    },
    //点赞卡片圆角
    StarCardRadius:{
      type:String,
      value:'30rpx'
    },
    //点赞卡片内边距
    StarCardPadding:{
      type:String,
      value:"30rpx"
    },

    //点赞信息内边距
    TipPadding:{
      type:String,
      value:'20rpx 0'
    },
    //点赞信息下外边距、
    TipMargin:{
      type:String,
      value:'15rpx'
    },

    //点赞的人
    TipOwnerName:{
      type:String,
      value:'北瓜'
    },

    //提示内容
    TipContent:{
      type:String,
      value:'赞同了你'
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
