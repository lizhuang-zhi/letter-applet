// Yeo/YeoMessageNotification/YeoMessageNotification.js
// 最大显示字数
let MaxNum = 16;
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    // 左侧配图
    leftPic: {
      type: String,
      value: 'https://z3.ax1x.com/2021/03/25/6O0FI0.png'
    },
    // 消息通知提示数量
    notifiNum: {
      type: Number,
      value: 2
    },
    // 消息标题
    infoTit: {
      type: String,
      value: '官方消息'
    },
    // 消息时间
    infoTime: {
      type: String,
      value: '星期三'
    },
    // 消息描述
    infoDesc: {
      type: String,
      value: '官方信息，点击查看最新通知我是我搜是'
    },
    // 外层框外边距
    boxMargin: {
      type: String,
      value: '0 0 40rpx'
    },
    // 背景颜色
    boxBgColor: {
      type: String,
      value: '#E9F0FE'
    }


  },

  lifetimes: {
    attached() {
      /* ***********消息描述*********** */
      // 获取消息描述
      let infoDesc = this.properties.infoDesc;
      // 获取前MaxNum个字符
      let subInfoDesc = infoDesc.substring(0,MaxNum) + '...';
      if(infoDesc.length > MaxNum) {
        this.setData({
          infoDesc: subInfoDesc 
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

  }
})
