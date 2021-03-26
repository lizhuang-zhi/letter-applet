// components/SwitchRow/SwitchRow.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    //文字标题
    TitleText:{
      type:String,
      value:'允许收录到答案之书'
    },
    //文字标题大小
    TitleSize:{
      type:String,
      value:'32rpx'
    },
    //文字标题颜色
    TitleColor:{
      type:String,
      value:'black'
    },


    //小提示
    TipContent:{
      type:String,
      value:'帮助更多的人'
    },
    //小提示大小
    TipSize:{
      type:String,
      value:'28rpx'
    },
    //小提示颜色
    TipColor:{
      type:String,
      value:'rgb(154, 158, 150)'
    },


    //盒子宽度
    BoxWidth:{
      type:String,
      value:'90vw'
    },
    //盒子外边距
    BoxMargin:{
      type:String,
      value:'10rpx auto'
    },
    //盒子背景颜色
    BoxBackColor:{
      type:String,
      value:'white'
    },
    //盒子圆角
    BoxRadius:{
      type:String,
      value:'30rpx'
    },
    //盒子内边距
    BoxPadding:{
      type:String,
      value:'20rpx'
    },

    //switch的颜色
    SwitchColor:{
      type:String,
      value:'#F0934F'
    }

  },

  /**
   * 组件的初始数据
   */
  data: {
    switchdata:true
  },

  /**
   * 组件的方法列表
   */
  methods: {
    // switch发生改变
    changeSwitch(e){
      // 获取switch改变后的类型
      let switchValue = e.detail.value;
      if(switchValue == false){
        this.setData({
          switchdata:switchValue
        })
      }else{
        this.setData({
          switchdata:switchValue
        })
      }
    },

  }
})
