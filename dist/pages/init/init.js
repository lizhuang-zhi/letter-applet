Page({
  data: {},
  goIndex() {
    wx.switchTab({
      url: "/pages/index/index"
    })
  },
  onLoad: function (n) {
    let o = setTimeout(() => {
      this.goIndex(), clearTimeout(o)
    }, 5e3)
  },
  onReady: function () {},
  onShow: function () {},
  onHide: function () {},
  onUnload: function () {},
  onPullDownRefresh: function () {},
  onReachBottom: function () {},
  onShareAppMessage: function () {}
});