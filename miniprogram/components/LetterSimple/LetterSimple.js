// components/LetterSimple/LetterSimple.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    // 信件内容
    content:{
      type:String,
      value:`我觉得我在他身上做的够好了，或许看起来很幼稚可是也是我的整个青春，同居的一年洗的我没有少洗,我知道不值得可是真的放不下太难了，也许是付出的太多了吧,我天天刷快手抖音看着关于他的一切拼命的告诉我在他身上做的够好了，我觉得我在他身上做的够好了,或许看起来很幼稚可是也是我的整个青春，同居的一年洗的我没有少洗,我知道不值得可是真的放不下太难了，也许是付出的太多了吧,我天天刷快手抖音看着关于他的一切拼命的告诉我在他身上做的够好了，我觉得我在他身上做的够好了，或许看起来很幼稚可是也是我的整个青春，同居的一年洗的我没有少洗,我知道不值得可是真的放不下太难了，也许是付出的太多了吧,我天天刷快手抖音看着关于他的一切拼命的告诉我在他身上做的够好了` 
    },
    // 作者名称
    writer:{
      type:String,
      value:"微小的橄榄"
    },
    // 卡片背景颜色
    backgroundColor:{
      type:String,
      value:"#F6F6F6"
    },
    // 内部高度
    InnerHeight:{
      type:String,
      value:"300rpx"
    },
    // 收信人内容
    consignee:{
      type:String,
      value:"Tell 收"
    },
    // 文字大小
    InnerSize:{
      type:String,
      value:"32rpx"
    },
    // logo大小
    IconSize:{
      type:String,
      value:"100rpx"
    },
    //logo位置,Y轴
    IconTop:{
      type:String,
      value:"40rpx"
    },
    // logo位置,X轴
    IconRight:{
      type:String,
      value:"40rpx"
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
