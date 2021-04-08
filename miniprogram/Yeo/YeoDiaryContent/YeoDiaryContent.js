// Yeo/YeoDiaryContent/YeoDiaryContent.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    // 月份的具体日
    dateNum: {
      type: Number,
      value: 22
    },
    // 星期几
    weekDay: {
      type: String,
      value: '星期四'
    },
    // 日记内容
    content: {
      type: String,
      value: '切换组件，为开发者提供在单页面的切换功能，开发者可根据自身需求对组件进行样式调整其中演示的方法非常重要，开发者只需要修改其中的选择器其中演示的方法非常重要，开发者只需要修改其中的选择器其中演示的方法非常重要，开发者只需要修改其中的选择器'
    },
    // 日记作者
    authorName: {
      type: String,
      value: '消失的胡辣汤'
    },
    // 是否添加点赞事件
    isAddStarTap: {
      type: Boolean,
      value: true
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    starUrl: 'https://z3.ax1x.com/2021/03/21/65gEdK.png',
    isStar: false
  },

  /**
   * 组件的方法列表
   */
  methods: {
    // 点赞事件
    starTap() {
      // 是否点赞
      let isStar = this.data.isStar;
      if(!isStar) {
        this.setData({
          starUrl: 'https://z3.ax1x.com/2021/03/21/65gmJe.png',
          isStar: true
        });
        // 感谢点赞
        wx.showToast({
          title: '感谢你的点赞',
          icon: 'none'
        })
      }else {
        this.setData({
          starUrl: 'https://z3.ax1x.com/2021/03/21/65gEdK.png',
          isStar: false
        })
      }
    }
  }
})
