// Yeo/YeoRotate/YeoRotate.js
let tools = require('../utils/tools');
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    // 圆桌背景
    roundBgColor: {
      type: String,
      value: 'rgb(157, 157, 202)'
    },
    // 圆桌大小(0~50最佳)
    roundSize: {
      type: Number,
      value: 0
    },
    /* 
      传入旋转数据（暂时固定取四个元素）
      少于四个：传入默认数组
      多于四个：获取传入数据前四个元素
    */
    vegtArr: {
      type: Array,
      value: [
        'https://s3.ax1x.com/2021/03/09/63F1gS.png',
        'https://s3.ax1x.com/2021/03/09/63F3jg.png',
        'https://s3.ax1x.com/2021/03/09/63FYHs.png',
        'https://s3.ax1x.com/2021/03/09/63FJBj.png'
      ]
    }

  },

  lifetimes: {
    attached() {
      // 获取传入数组长度
      let veg_arr = this.data.vegtArr.length;
      if(veg_arr > 4) {
        let newArr = this.data.vegtArr.filter((value,index) => {
          return index < 4;
        });
        this.setData({
          vegtArr: newArr
        })
      }
      if(veg_arr < 4) {
        let default_arr = [
          '../imgs/vegt-1.png',
          '../imgs/vegt-2.png',
          '../imgs/vegt-3.png',
          '../imgs/vegt-4.png'
        ];
        this.setData({
          vegtArr: default_arr
        })
      }
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    rotateAni: {},

    // 屏幕滑动开始X位置
    startX: 0,
    // 记录旋转角度
    angleRound: 0

  },

  /**
   * 组件的方法列表
   */
  methods: {
    // 开始触摸事件
    touchStart(e) {
      this.setData({
        startX: e.changedTouches[0].clientX
      })
    },
    // 结束触摸事件
    touchEnd(e) {
      let startX = this.data.startX;
      let endX = e.changedTouches[0].clientX;
      // 左滑距离大于30
      if(startX - endX > 30) {
        // 记录旋转角度
        let round_angle = this.data.angleRound + 90;

        let rot = tools.creatAnima();
        rot.rotateZ(round_angle).step();
        this.setData({
          rotateAni: rot.export(),
          angleRound: round_angle
        })
      }
      // 右滑动距离大于30
      if(endX - startX > 30) {
        // 记录旋转角度
        let round_angle = this.data.angleRound - 90;

        let rot = tools.creatAnima();
        rot.rotateZ(round_angle).step();
        this.setData({
          rotateAni: rot.export(),
          angleRound: round_angle
        })
      }
    },
    // 获取点击对象
    getObj(e) {
      let obj = e.currentTarget.dataset;
      this.triggerEvent('itemevent',{obj});
    }

  }
})
