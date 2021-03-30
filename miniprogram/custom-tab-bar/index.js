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
    floatAnimation: {}
  },
  attached() {
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
    // 跳转发布页面
    toRelease() {
      wx.navigateTo({
        url: '/packageReleaseModule/pages/attention/attention',
      })
      console.log('跳转->注意事项页面');
    },


  }
})