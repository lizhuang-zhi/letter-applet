Component({
  data: {
    selected: 0,
    color: "#7A7E83",
    selectedColor: "#450003",
    /* 补全list数组 */
    list: [{
      pagePath: "/pages/index/index",
      iconPath: "/images/index.png",
      selectedIconPath: "/images/index-select.png",
      text: "首页"
    }, {
      pagePath: "/pages/square/square",
      iconPath: "/images/star.png",
      selectedIconPath: "/images/star-select.png",
      text: "广场"
    }, {
      pagePath: "/pages/mailbox/mailbox",
      iconPath: "/images/letter.png",
      selectedIconPath: "/images/letter-select.png",
      text: "信箱"
    }],
    
    // 定义动画
    showPop:{},
  },
  methods: {
    // tabbar装换
    switchTab(e) {
      const data = e.currentTarget.dataset
      const url = data.path
      wx.switchTab({url})
      this.setData({
        selected: data.index
      })
    },

    // 创建动画
    // creatAnimat() {
    //   this.data.showPop=wx.createAnimation({
    //     delay: 0,
    //     duration:1000,
    //     timingFunction:'linear'
    //   })
    //   console.log("创建了动画");
    // },
    //点击开始动画
    toShow(){
      // 创建动画
      let pop = wx.createAnimation({
        delay: 0,
        duration: 1000,
        timingFunction: 'linear'
      })
      pop.translateY(100).step();
      this.setData({
        showPop: pop.export()
      })
      console.log('点击了');
    }
      
  },

  options: {
    multipleSlots: true
  },

  lifetimes: {
    attached: function() {
      // this.creatAnimat();
    },
    detached: function() {
      // 在组件实例被从页面节点树移除时执行
    },
  },
})