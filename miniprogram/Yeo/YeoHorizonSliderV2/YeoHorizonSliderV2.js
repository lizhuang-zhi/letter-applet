// Yeo/YeoHorizonSliderV2/YeoHorizonSliderV2.js
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
    // 是否开启动画滑动提示
    isShowMov: {
      type: Boolean,
      value: true
    },
    // 标题大小
    titFont: {
      type: Number,
      value: 20
    },
    // 数字大小
    numFont: {
      type: Number,
      value: 50
    }

  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  lifetimes: {
    attached: function() {
      // 滑动提示判断
      if(this.data.isShowMov) {
        this.isShowMov();
      }
    },
  },

  /**
   * 组件的方法列表
   */
  methods: {
    // 执行滑动函数
    isShowMov() {
      setTimeout(()=>{
        this.setData({
          leftdistance: 70
        })
      },1200);
    },
    // 触发点击对象
    clickObject(e) {
      let itemObj = e.currentTarget.dataset.item;
      this.triggerEvent('clickevent',{itemObj});
    }

  }
})
