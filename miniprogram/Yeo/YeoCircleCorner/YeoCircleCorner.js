// components/CircleCorner/CircleCorner.js
let tools = require('../utils/tools');
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    ImgBot: {
      type: String,
      value: '../imgs/上传.png'
    },
    ImgItem1: {
      type: String,
      value: '../imgs/交易所.png'
    },
    ImgItem2: {
      type: String,
      value: '../imgs/钱.png'
    },
    // 展示方向(1->垂直，0->水平)
    direction: {
      type: Number,
      value: 1
    },
    // 图标大小
    ImgSize: {
      type: Number,
      value: 100
    }

  },

  // 启用插槽
  options: {
    multipleSlots: true
  },

  /**
   * 组件的初始数据
   */
  data: {
    isShow: false,
  },

  /**
   * 组件的方法列表
   */
  methods: {
    // 切换显示
    toggleShow() {
      let animate = tools.creatAnima(0, 'linear', 500);
      let animate_last = tools.creatAnima(0, 'linear', 700);
      let animate_back = tools.creatAnima(100, 'linear', 600);
      let animate_last_back = tools.creatAnima(0, 'linear', 700);

      if (this.data.isShow == false && this.data.direction == 1) {
        animate_last.opacity(1).translate(0, -20).step()
        animate.opacity(1).translate(0, -10).step()
        this.setData({
          ani: animate.export(),
          ani_last: animate_last.export(),
          isShow: true
        })
      } else if(this.data.isShow == true && this.data.direction == 1){
        animate_last_back.opacity(0).translate(0, 90).step()
        animate_back.opacity(0).translate(0, 45).step()
        this.setData({
          ani: animate_back.export(),
          ani_last: animate_last_back.export(),
          isShow: false
        })
      }else if(this.data.isShow == false && this.data.direction == 0){
        animate_last.opacity(1).translate(135, this.data.ImgSize*1.07).step()
        animate.opacity(1).translate(70, this.data.ImgSize/1.9).step()
        this.setData({
          ani: animate.export(),
          ani_last: animate_last.export(),
          isShow: true
        })
      }else if(this.data.isShow == true && this.data.direction == 0){
        animate_last_back.opacity(0).translate(40, this.data.ImgSize*1.07).step()
        animate_back.opacity(0).translate(35, this.data.ImgSize/1.9).step()
        this.setData({
          ani: animate_back.export(),
          ani_last: animate_last_back.export(),
          isShow: false
        })
      }
    },
    // 第一个图标点击事件
    clickItem_1() {
      console.log('我是第一个图标点击事件');
    },
    // 第二个图标点击事件
    clickItem_2() {
      console.log('我是第二个图标点击事件');
    },

  }
})