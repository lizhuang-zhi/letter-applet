// Yeo/YeoTabChange/YeoTabChange.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    // 是否固定位置
    isFixed: {
      type: Boolean,
      value: false
    },
    // 固定位置top值
    fixedTop: {
      type: Number,
      value: 0
    },
    // 组件框顶部内边距
    boxPaddingTop: {
      type: Number,
      value: 60
    },
    // 背景色
    bgColor: {
      type: String,
      value: '#eeeeee'
    },
    // 组件框层级
    zIndex: {
      type: Number,
      value: 199
    },
    // 传入标题数组
    titleArr: {
      type: Array,
      value: ["首页", "商城", "动态", "我的"],
    },
    // 当前tab索引
    currentIndex: {
      type: Number,
      value: 0
    },
    // tab框宽度
    tabWidth: {
      type: String,
      value: '100%'
    },
    // tab布局方式
    tabJustiContent: {
      type: String,
      value: 'space-around'
    },
    // tab外边距
    tabMargin: {
      type: String,
      value: '0 0 20rpx 0'
    },
    /* **********设置字体********** */
    // 字体大小
    fontSize: {
      type: Number,
      value: 32
    },
    // 字体颜色(未选中时)
    fontColor: {
      type: String,
      value: '#CBCBCB'
    },
    // 字体tab选中时颜色
    fontSelectColor: {
      type: String,
      value: '#FCFCFC'
    },
    // 字体粗细
    fontWeight: {
      type: String,
      value: 'bold'
    },
    // 词组字间距
    fontLetterSpacing: {
      type: Number,
      value: 5
    },
    // 字体层级
    fontZIndex: {
      type: Number,
      value: 10
    },
    /* **********下划线设置********** */
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
    // 下滑线圆角
    lineBordRadius: {
      type: Number,
      value: 20
    },
    // 下滑线距离tab框底部距离
    lineBottom: {
      type: Number,
      value: -5
    },
    // 下划线层级
    lineZIndex: {
      type: Number,
      value: 1
    },
    // 下划线左距离
    lineLeft: {
      type: Number,
      value: -2
    }


  },

  // 组件生命周期函数
  lifetimes: {
    attached() {
      // 设置初始化下划线位置
      this.changeline();
    }
  },

  // 数据监听
  observers: {
    // 监听currentIndex的变化
    'currentIndex': function (currentIndex) {
      this.changeline();
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    left: ""
  },

  /**
   * 组件的方法列表
   */
  methods: {
    // 切换tab事件
    changeTab(e) {
      // 获取点击tab的index
      let tabIndex = e.currentTarget.dataset.index;
      this.setData({
        currentIndex: tabIndex
      });
      this.changeline();
      this.triggerEvent('changetabevent', {
        tabIndex
      })
    },
    // 改变下划线事件
    changeline() {
      var _this = this;
      const query = _this.createSelectorQuery();
      query.select('.tabTitle').boundingClientRect();
      query.exec(function (res) {
        _this.setData({
          left: (res[0].left + _this.data.lineLeft) * 2
        })
      });
    },

  }
})