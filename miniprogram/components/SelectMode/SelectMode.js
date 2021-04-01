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
    //图片大小 宽度
    ImgWidth:{
      type:String,
      value:'100rpx'
    },
    //图片大小 高度
    ImgHeight:{
      type:String,
      value:'100rpx'
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
  lifetimes: {
    attached: function() {
      //获取手机高度
    //  let info = wx.getSystemInfoSync();
    //   this.setData({
    //     BoxHeight:info.windowHeight/2
    //   })      
    },
    detached: function() {
      // 在组件实例被从页面节点树移除时执行
    },
  },
})
