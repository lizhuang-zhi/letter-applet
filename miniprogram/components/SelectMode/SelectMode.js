// components/SelectMode/SelectMode.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    //图片集合
    ImageList:{
      type:Array,
      value:[
        'https://z3.ax1x.com/2021/04/01/cEeKMD.png',
        'https://z3.ax1x.com/2021/04/01/cEenxO.png',
        'https://z3.ax1x.com/2021/04/01/cEemRK.png'
      ]
    },
    //盒子宽度
    BoxWidth:{
      type:String,
      value:'100vw'
    },
    //盒子高度
    BoxHeight:{
      type:Number,
      value:400
    },
    //盒子外边距
    BoxMargin:{
      type:Number,
      value:100
    },
    //图片大小 宽度
    ImgWidth:{
      type:String,
      value:'100rpx'
    },
    //图片大小 高度
    ImgHeight:{
      type:String,
      value:'100rpx'
    },
    //文字颜色
    TextColor:{
      type:String,
      value:'black'
    },
    //文字大小
    TextSize:{
      type:String,
      value:'32rpx'
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
    NavTo(e){
      let index=e.currentTarget.dataset.index;
      if(index==1){
        wx.navigateTo({
          url: '/packageReleaseModule/pages/write/write?type="日记"',
        })
      }else if(index==2){
        wx.navigateTo({
          url: '/packageReleaseModule/pages/attention/attention?type="解忧"',
        })
      }else if(index==3){
        wx.navigateTo({
          url: '/packageReleaseModule/pages/attention/attention?type="吐槽"',
        })
      }
    }
  },
  lifetimes: {
    attached: function() {
      //获取手机高度
     let info = wx.getSystemInfoSync();
      this.setData({
        BoxHeight:info.windowHeight/2,
        BoxMargin:info.windowWidth/2
      })
    },
    detached: function() {
      // 在组件实例被从页面节点树移除时执行
    },
  },
})
