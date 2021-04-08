// components/SelectMode/SelectMode.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    ImageSrc: {
      type: String,
      value: 'https://z3.ax1x.com/2021/04/01/cEeKMD.png',
    },
    //选择的模式
    ChooseType: {
      type: String,
      value: '日记'
    },
    //选择模式的意译
    ChooseText: {
      type: String,
      value: '记录每一天'
    },
    //选择盒子内边距
    ChoosePadding: {
      type: String,
      value: '20rpx'
    },
    //选择盒子外边距
    ChooseMargin: {
      type: String,
      value: '60rpx'
    },
    //选择盒子圆角
    ChooseRadius: {
      type: String,
      value: '20rpx'
    },


    //图片大小 宽度
    ImgWidth: {
      type: String,
      value: '140rpx'
    },
    //图片大小 高度
    ImgHeight: {
      type: String,
      value: '140rpx'
    },
    //文字左padding
    ContentPadding: {
      type: String,
      value: '20rpx'
    },
    //文字颜色
    TextColor: {
      type: String,
      value: 'black'
    },
    //文字2颜色
    Text2Color: {
      type: String,
      value: 'grey'
    },
    //文字大小
    TextSize: {
      type: String,
      value: '32rpx'
    },
    //文字2大小
    Text2Size: {
      type: String,
      value: '28rpx'
    },
    //文字2内边距
    Text2Padding: {
      type: String,
      value: '10rpx'
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
    //跳转到书写页面
    NavTo() {
      wx.navigateTo({
        url: '/packageReleaseModule/pages/write/write?type=' + this.properties.ChooseType,
      })
    }
  },
  lifetimes: {
    attached: function () {
      //获取手机高度
      let info = wx.getSystemInfoSync();
      this.setData({
        BoxHeight: info.windowHeight / 2,
        BoxMargin: info.windowWidth / 2
      })
    },
    detached: function () {
      // 在组件实例被从页面节点树移除时执行
    },
  },
})