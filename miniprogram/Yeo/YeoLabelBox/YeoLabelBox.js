// Yeo/YeoLabelBox/YeoLabelBox.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    // 标题内容
    titleWords: {
      type: String,
      value: 'Vue双向绑定'
    },
    // 浏览数
    looks: {
      type: String,
      value: '66666'
    },
    // 浏览数的颜色（大于10万自动改变）
    looksCol: {
      type: String,
      value: ''
    },
    // 背景框圆角大小
    bordRadius: {
      type: Number,
      value: 13
    },
    // 背景颜色
    bgColor: {
      type: String,
      value: '#FFFFFF'
    }
  },


  options: {
    multipleSlots: true
  },

  lifetimes: {
    // 在组件实例进入页面节点树时执行
    attached: function() {
      if(this.data.looks > 99999){
        this.setData({
          looks: "10W+",
          looksCol: "#5AB0AE"
        })
      }
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
    // 整体组件点击事件
    ClickBox() {
      let detail = {};
      this.triggerEvent('clickevent',detail);
    }
  }
})
