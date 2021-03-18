// Yeo/YeoLabelBar/YeoLabelBar.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    /* **********LabelTab属性********** */
    // tab外框外边距
    tabOutMargin: {
      type: String,
      value: '40rpx 0 0 0'
    },
    // tab内容框高度
    tabContHeight: {
      type: Number,
      value: 70
    },
    // tab内容框背景颜色
    tabContColor: {
      type: String,
      value: '#F6F6F6'
    },
    // tab内容框外边距
    tabMargin: {
      type: String,
      value: '20rpx 10rpx 0'
    },
    // tab内容框圆角
    tabBordRadius: {
      type: Number,
      value: 10
    },
    /* **********TabChange属性********** */
    // TabChange数组
    tabArr: {
      type: Array,
      value: ["Yeo", "听听", "推荐"]
    },
    // TabChange框宽度
    tabChangeWidth: {
      type: String,
      value: '100%'
    },
    // TabChange布局方式
    tabChangeJustiContent: {
      type: String,
      value: 'space-around'
    },
    // 初始化显示tab页面的索引
    currentTab: {
      type: Number,
      value: 0
    },
    // TabChange字体大小
    fontSize: {
      type: Number,
      value: 32
    },
    // TabChange字体颜色(未选中时)
    fontColor: {
      type: String,
      value: '#888888'
    },
    // TabChange字体tab选中时颜色
    fontSelectColor: {
      type: String,
      value: '#444444'
    },
    // TabChange字体粗细
    fontWeight: {
      type: String,
      value: 'bold'
    },
    // TabChange词组字间距
    fontLetterSpacing: {
      type: Number,
      value: 5
    },
    // 下划线宽度
    lineWidth: {
      type: Number,
      value: 80
    },
    // 下划线高度
    lineHeight: {
      type: Number,
      value: 20
    },
    // 下划线颜色
    lineColor: {
      type: String,
      value: '#EC625C'
    },
    // 下滑线距离tab框底部距离
    lineBottom: {
      type: Number,
      value: -5
    },
    // 下划线左距离
    lineLeft: {
      type: Number,
      value: -2
    }


  },

  // 打开插槽模式
  options: {
    multipleSlots: true
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
    // 点击tab切换事件
    bindChangeTab(e) {
      // 获取tab索引
      let tabIndex = e.detail.tabIndex;
      this.setData({
        currentTab: tabIndex
      })
    },
    // 切换swiper事件
    ChangeCurrent(e) {
      // 获取切换索引
      let current = e.detail.current;
      this.setData({
        currentTab: current
      });
    }


  }
})