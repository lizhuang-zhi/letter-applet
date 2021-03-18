// Yeo/YeoSearch/YeoSearch.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    // 搜索图标
    searchImg: {
      type: String,
      value: 'https://s3.ax1x.com/2021/03/09/63FAje.png'
    },
    // 占位文字
    placeholder: {
      type: String,
      value: 'Input Something'
    },
    // 背景颜色
    background: {
      type: String,
      value: 'rgb(250,250,250)'
    },
    // 搜索框圆角
    searBordRadius: {
      type: Number,
      value: 60
    },
    // 上内边距
    topPadding: {
      type: Number,
      value: 12
    },
    // 下内边距
    bottomPadding: {
      type: Number,
      value: 12
    },
    // 左内边距
    leftPadding: {
      type: Number,
      value: 30
    },
    // 右内边距
    rightPadding: {
      type: Number,
      value: 30
    },
    // 输入框左外边距
    inputLeftMargin: {
      type: Number,
      value: 16
    },
    // 输入框右外边距
    inputRightMargin: {
      type: Number,
      value: 30
    },
    // 输入内容类型
    inputType: {
      type: String,
      value: 'text'
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
    // 键盘输入事件
    inputEvent(e) {
      this.triggerEvent('inputevent', {obj: e.detail});
    },
    // 输入框聚焦事件
    focusEvent(e) {
      this.triggerEvent('focusevent',{obj: e.detail});
    },
    // 输入框失去焦点事件
    blurEvent(e) {
      this.triggerEvent('blurevent',{obj: e.detail});
    },
    // 输入框点击完成按钮事件
    confirmEvent(e) {
      this.triggerEvent('confirmevent',{obj: e.detail});
    },
    // 键盘高度变化事件
    keyboardheightchangeEvent(e) {
      this.triggerEvent('keyboardheightchangeevent',{obj: e.detail});
    }

  }
})
