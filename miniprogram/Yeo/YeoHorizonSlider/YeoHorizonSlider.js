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
      this.triggerEvent('clickevent',{clickObj});
    }
  }
})
