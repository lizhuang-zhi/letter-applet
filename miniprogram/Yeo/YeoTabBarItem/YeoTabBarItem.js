// Yeo/YeoTabBarItem/YeoTabBarItem.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    // 是否为选中图标(1-选中，0-未选中)
    isSelect: {
      type: Number,
      value: null
    },
    // 选中时文字颜色
    selectWordsCol: {
      type: String,
      value: null
    },
    // 跳转页面地址
    jumpUrl: {
      type: String,
      value: ''
    }
  },

  options: {
    multipleSlots: true
  },

  lifetimes: {
    // 在组件实例进入页面节点树时执行
    attached: function() {
    },
    // 在组件实例被从页面节点树移除时执行
    detached: function() {
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
