// Yeo/DyFunBar/DyFunBar.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    // 分散方式
    distractWay: {
      type: String,
      value: 'around'
    },
    // 左右两边边距
    sideDistance: {
      type: Number,
      value: 0
    }

  },

  options: {
      multipleSlots: true
  },

  lifetimes: {
    // 组件初始化
    attached() {
      if(this.data.distractWay === 'start') {
        this.setData({
          distractWay: 'flex-start'
        })
      }else if(this.data.distractWay === 'end') {
        this.setData({
          distractWay: 'flex-end'
        })
      }else if(this.data.distractWay === 'center') {
        this.setData({
          distractWay: 'center'
        })
      }else if(this.data.distractWay === 'between') {
        this.setData({
          distractWay: 'space-between'
        })
      }else if(this.data.distractWay === 'around') {
        this.setData({
          distractWay: 'space-around'
        })
      }else {
        this.setData({
          distractWay: 'space-around'
        })
      }
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
    // 中间部分点击事件
    centerTap() {
      this.triggerEvent('centerevent',{});
    },
    // 左边部分点击事件
    leftTap() {
      this.triggerEvent('leftevent',{});
    },
    // 右边部分点击事件
    rightTap() {
      this.triggerEvent('rightevent',{});
    }
  }
})
