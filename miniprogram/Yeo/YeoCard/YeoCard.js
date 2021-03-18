// Yeo/YeoCard/YeoCard.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    // 昵称
    name: {
      type: String,
      value: 'Mr.KLeo'
    },
    // 职务或爱好
    position: {
      type: String,
      value: '前端工程师/Dancer'
    },
    // 介绍内容
    description: {
      type: String,
      value: '大家好，我是Mr.KLeo，一名正在学习前端的Person。热爱技术，热爱交流，热爱生活。擅长使用Vue、JavaScript、HTML、CSS、Yeo-components开发可复用的视图组件，希望与你共同进步！'
    },
    // 右侧配图
    cardPic: {
      type: String,
      value: 'https://s3.ax1x.com/2021/03/09/63FF1O.jpg'
    },
    // （关注）按钮背景色
    btnBgColor: {
      type: String,
      value: '#7AB2DC'
    },
    // 点击（关注）按钮后，按钮背景色
    clickBtnBgColor: {
      type: String,
      value: '#5E6675'
    }
  },

  lifetimes: {
    // 初始化按钮颜色
    attached() {
      this.setData({
        BgColor: this.data.btnBgColor
      })
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    isAttention: false,

  },

  /**
   * 组件的方法列表
   */
  methods: {
    // 点击（关注）按钮事件
    clickBtn() {
      // 获取按钮点击后背景色
      let clickBtnColor = this.data.clickBtnBgColor;
      // 获取按钮背景色
      let cancelBtnColor = this.data.btnBgColor;
      if (!this.data.isAttention) {
        wx.showToast({
          icon: 'none',
          title: '感谢关注',
        }).then(res => {
          this.setData({
            BgColor: clickBtnColor,
            isAttention: true
          })
        });
        this.triggerEvent('attentevent', {isAttent: true});
      } else {
        wx.showToast({
          icon: 'none',
          title: '取消关注',
        }).then(res => {
          this.setData({
            BgColor: cancelBtnColor,
            isAttention: false
          })
        });
        this.triggerEvent('attentevent', {isAttent: false});
      }
    }





  }
})