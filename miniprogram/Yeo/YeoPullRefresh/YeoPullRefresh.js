// Yeo/YeoPullRefresh/YeoPullRefresh.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    // loading显示 (开始 => yeo-start-loading   结束 => yeo-end-loading)
    isLoading: {
      type: String,
      value: 'yeo-start-loading'
    },
    // loading图片
    loadingPic: {
      type: String,
      value: 'https://z3.ax1x.com/2021/04/29/gk5PEQ.gif'
    },
    // loading图片宽度
    loadingPicWidth: {
      type: Number,
      value: 130
    },
    // loading图片高度
    loadingPicHeight: {
      type: Number,
      value: 100
    },
    // loading图标圆角
    loadingPicRadius: {
      type: Number,
      value: 30
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