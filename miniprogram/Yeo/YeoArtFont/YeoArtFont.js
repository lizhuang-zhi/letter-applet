// Yeo/OverlapFon/OverlapFon.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    /* 
      字体类型(需要用户自行选择):
        udFon 上下字
        olFon 重叠字
        worLineFon  字线字
    */
    fonType: {
      type: String,
      value: 'olFon'
    },
    // 上层字体颜色
    abCol: {
      type: String,
      value: '#000000'
    },
    // 下层字体颜色
    blCol: {
      type: String,
      value: '#A5ADB5'
    },
    // 字体大小
    fonSize: {
      type: Number,
      value: 39 
    },

    /* ************** 公共参数 ************* */

    /* ************** 上下字体 **************** */
    // 上下结构字的位置 center<居中> unset<未设置,默认靠左>
    udPosp: {
      type: String,
      value: 'center'
    },
    // 上下结构字体内容
    udFonConUp: {
      type: String,
      value: '上下字体'
    },
    udFonConDown: {
      type: String,
      value: 'UpDown'
    },
    /* ************** 重叠字体 **************** */
    // 重叠字的字体内容
    olFonCon: {
      type: String,
      value: '重叠字体'
    },
    // 重叠字的位置(距离左侧百分比)
    olFromLeft: {
      type: Number,
      value: 40
    },
    /* ************** 字线字体 **************** */
    // 字线字的字体内容
    worLineFonCon: {
      type: String,
      value: '字线字体'
    },
    // 字线字的位置 center<居中> unset<未设置,默认靠左>
    worLinePosp: {
      type: String,
      value: 'center'
    },
    // 字体内容粗细 normal正常 bold加粗 bolder更粗 lighter变细
    wordWieight: {  
      type: String,
      value: 'normal'
    },
    /* 
      底部线条距离字体顶部的距离:
        字体大小 * lineDistanceOfTop
    */
    lineDistanceOfTop: {
      type: Number,
      value: 1.3
    },
    // 底部线条宽度（屏幕百分比 or 具体数值<附带rpx>)
    lineWidthOfScreen: {
      type: String,
      value: '35%'
    },
    // 底部线条厚度
    lineHeight: {
      type: Number,
      value: 10
    },
    // 底部线条颜色
    lineColor: {
      type: String,
      value: '#FFA82E'
    },
    // 底部线条左边圆角
    lineLeftRadius: {
      type: Number,
      value: 10
    },
    // 底部线条右边圆角
    lineRightRadius: {
      type: Number,
      value: 10
    }

  },

  /**
   * 组件的初始数据
   */
  data: {
    
  },

  lifetimes: {
    // 在组件实例进入页面节点树时执行
    attached: function() {
      this.setData({
        getudHeight: this.data.fonSize * 2
      })
      this.setData({
        getolHeight: this.data.fonSize + 12
      })
    },
    // 在组件实例被从页面节点树移除时执行
    detached: function() {
    },
  },

  /**
   * 组件的方法列表
   */
  methods: {
    
  }
})
