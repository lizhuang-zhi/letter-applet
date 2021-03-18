// Yeo/YeoLoading/YeoLoading.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    // 是否显示Loading
    isShowLoading: {
      type: Boolean,
      value: true
    },
    // Loading背景颜色(传入rgba才可以实现透视遮盖层效果)
    loadingBgColor: {
      type: String,
      value: 'rgba(230, 230, 230, 0.7)'
    },
    // Loading在页面位置（百分比or具体数值<带rpx>高度）
    loadingTop: {
      type: String,
      value: '40%'
    },
    // 加载点颜色
    dotColor: {
      type: String,
      value: '#1B76FF'
    },
    // 加载点个数
    dotNum: {
      type: Number,
      value: 3
    },
    // 加载点大小
    dotSize: {
      type: Number,
      value: 26
    },
    // 加载点圆角(数值越大，dot越圆)
    dotBordRadius: {
      type: Number,
      value: 8
    },
    // 加载点之间左右间距
    dotMarginSize: {
      type: Number,
      value: 10
    },
    // 加载点之间出现间隔时长(ms)
    dotShowDuration: {
      type: Number,
      value: 500
    }


  },

  lifetimes: {
    attached() {
      var self = this;
      var _index = 0;
      var _alpha = self.data.alpha;
      let _dotNum = self.data.dotNum - 1;
      var _speed = self.data.dotShowDuration;
      var timer = setInterval(function () {
        var an_show = wx.createAnimation({});
        var an_hide = wx.createAnimation({});
        an_show.opacity(1).step({ duration: _speed });
        an_hide.opacity(0).step({ duration: _speed });
        _alpha[_index] = an_show;
        _alpha[_index == 0 ? _dotNum : _index - 1] = an_hide;
        self.setData({
          alpha: _alpha
        })
        _index = _index == _dotNum ? 0 : _index + 1;
      }, _speed);
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    alpha: []

  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
