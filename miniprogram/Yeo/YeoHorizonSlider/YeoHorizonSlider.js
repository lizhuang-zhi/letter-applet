// Yeo/YeoHorizonSlider/YeoHorizonSlider.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    // 遍历数组数据
    sliderArr: {
      type: Array,
      value: null
    },
    // 是否显示文字内容
    isShowContent: {
      type: Boolean,
      value: true
    },
    // 外框外边距
    boxMargin: {
      type: String,
      value: '0 0 0 34rpx'
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
    clickObject(e) {
      // 存储点击对象至clickObj
      let clickObj = e.currentTarget.dataset.item;
      // 点击对象索引
      let clickIndex = e.currentTarget.dataset.index;
      // 添加点击索引
      clickObj.index = clickIndex;
      this.triggerEvent('clickevent',{clickObj});
    }
  }
})
