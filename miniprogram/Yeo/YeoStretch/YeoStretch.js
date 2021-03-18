// Yeo/YeoStretch/YeoStretch.js
let tools = require('../utils/tools');
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    // 闪动图标
    flickPic: {
      type: String,
      value: 'https://s3.ax1x.com/2021/03/09/63FgER.png'
    },
    // 展示框宽度(百分数或者具体数值)
    boxWidth: {
      type: String,
      value: '90%'
    },
    // 展示框高度
    boxHeight: {
      type: Number,
      value: 1000
    },
    // 展示框圆角(0-50最佳)
    boxRadius: {
      type: Number,
      value: 30
    },
    // 展示框&&闪动图标伸展收缩持续时长(0-3s，超过3s统一设置为3s)
    TransTime: {
      type: Number,
      value: 1
    },
    // 闪动图标向右移动距离(百分数或者具体数值)
    flickPicMovRightDistance: {
      type: String,
      value: '86%'
    },


  },

  options: {
    multipleSlots: true
  },

  /**
   * 组件的初始数据
   */
  data: {
    isShow: false
  },

  /**
   * 组件的方法列表
   */
  methods: {
    // 点击拉伸事件
    stretchClick(e){
      let getTransTime = this.data.TransTime > 3 ? 3 : this.data.TransTime;
      if(this.data.isShow == false){
        let getBoxHeight = this.data.boxHeight + 'rpx';
        let getBoxRadius = this.data.boxRadius + 'rpx';
        let getflickPicMovRightDistance = this.data.flickPicMovRightDistance;
        this.setData({
          boxChange: {
            width: this.data.boxWidth,
            height: getBoxHeight,
            bora: getBoxRadius,
            transi: getTransTime + 's'
          },
          pic: {
            left: getflickPicMovRightDistance,
            transi: getTransTime + 's',
          },
          isShow: true
        });
        setTimeout(() => {
          this.setData({
            content: {
              show: 'block'
            }
          })
        }, (getTransTime * 0.85 * 1000))
      }else {
        this.setData({
          boxChange: {
            width: '120rpx',
            height: '120rpx',
            bora: '50%',
            transi: getTransTime + 's'
          },
          pic: {
            left: '20rpx',
            transi: getTransTime + 's'
          },
          content: {
            show: 'none',
          },
          isShow: false
        })

      }
      
    }

  }
})
