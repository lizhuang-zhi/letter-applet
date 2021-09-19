let tools = require("../../utils/timeTools"),
  publicTools = require("../../utils/public"),
  requestData = require("../../utils/request"),
  app = getApp();
Page({
  data: {
    dataBeautyArr: [],
    letterArr: [],
    isShowToastBox: "block",
    isOpenStampBox: !1,
    isShowLoading: !0,
    showTipPop: !1,
    imgUrls: [{
      title: "文明书写，不伤害他人",
      picUrl: "https://yundingxikj.oss-cn-beijing.aliyuncs.com/LetterStation/tips-send.png"
    }, {
      title: "正视他人言论，吸取有益之处",
      picUrl: "https://yundingxikj.oss-cn-beijing.aliyuncs.com/LetterStation/tips-mailbox.png"
    }, {
      title: "善于思考，学会日记",
      picUrl: "https://yundingxikj.oss-cn-beijing.aliyuncs.com/LetterStation/tips-diary.png"
    }, {
      title: "集邮票，解成就，完成你的历练之路",
      picUrl: "https://yundingxikj.oss-cn-beijing.aliyuncs.com/LetterStation/tips-achievement.png"
    }],
    swiperIdx: 0,
    beforeScrollTop: 0,
    d_1_ani: {},
    flower: {},
    planeFly: {},
    oldletterArr: [{
      content: "我大概是个傻瓜吧，专门做吃力不讨好的事。做了这么多，结果人家一句话就推翻了。这种傻事，我以后不要在做了，做好自己该做的，不要想着帮人家，人家未必感激你。这么多次的教训怎么学不会？"
    }, {
      content: "我今年都39岁了，我从几年前突然产生了一种无法实现就非常痛苦的心里，这个想法就是我非常渴望用自己的财产来寻求一位真正的人来管教我，我不知道该如何是好，该如何面对"
    }],
    oldletterBgArr: ["https://yundingxikj.oss-cn-beijing.aliyuncs.com/LetterStation/oldletterBg1.webp?versionId=CAEQGRiBgIDpy7io1RciIGQ5ZGNkZjA4OTJjNDQyN2JiN2E4MTIwZGZjMzEzMGI1", "https://yundingxikj.oss-cn-beijing.aliyuncs.com/LetterStation/oldletterBg2.webp?versionId=CAEQGRiBgMDkzbio1RciIDFmODk0OWZmOTYwYzRhZTE4Nzc4NzQ1YTIyMzczMDky", "https://yundingxikj.oss-cn-beijing.aliyuncs.com/LetterStation/oldletterBg3.webp?versionId=CAEQGRiBgMD.y7io1RciIDk0Y2FjZmQ4Zjg1NzRiZWZiZTM1YTQwZjc1MjBhNWY2", "https://yundingxikj.oss-cn-beijing.aliyuncs.com/LetterStation/oldletterBg4.jpg?versionId=CAEQGRiBgMDatrmo1RciIDFmYTQzOGE5MzFlNjQ1YjA5YzY5MjRiNDcxM2RiMjNi"],
    oldletterBg: "https://yundingxikj.oss-cn-beijing.aliyuncs.com/LetterStation/oldletterBg4.jpg?versionId=CAEQGRiBgMDatrmo1RciIDFmYTQzOGE5MzFlNjQ1YjA5YzY5MjRiNDcxM2RiMjNi"
  },
  toOldLetterPost() {
    console.log("各个大根深蒂固第三个");
    let o = wx.createAnimation({
      delay: 0,
      timingFunction: "ease"
    });
    o.translateX(-250).step(), this.setData({
      planeFly: o.export()
    }), wx.navigateTo({
      url: "/packageWriteLetter/pages/oldletter/oldletter",
      success: t => {
        let e = setTimeout(() => {
          o.translateX(0).step(), this.setData({
            planeFly: o.export()
          }), clearTimeout(e)
        }, 500)
      }
    })
  },
  toRelease() {
    wx.navigateTo({
      url: "/packageReleaseModule/pages/choosemodule/choosemodule"
    })
  },
  animationDownFunc() {
    let t = wx.createAnimation({
        delay: 0,
        timingFunction: "ease-out",
        duration: 700,
        transformOrigin: "10% 90% 0"
      }),
      e = wx.createAnimation({
        delay: 0,
        timingFunction: "ease-out",
        duration: 300
      });
    t.rotate(5).step(), e.opacity(.5).step(), this.setData({
      d_1_ani: t.export(),
      flower: e.export()
    })
  },
  animationUpFunc() {
    let t = wx.createAnimation({
        delay: 0,
        timingFunction: "ease-out",
        duration: 700,
        transformOrigin: "10% 90% 0"
      }),
      e = wx.createAnimation({
        delay: 0,
        timingFunction: "ease-out",
        duration: 300
      });
    t.rotate(-5).step(), e.opacity(1).step(), this.setData({
      d_1_ani: t.export(),
      flower: e.export()
    })
  },
  onPageScroll(t) {
    var e = this.data.beforeScrollTop,
      t = t.scrollTop;
    0 < t - e ? (this.setData({
      beforeScrollTop: t
    }), this.animationDownFunc()) : t - e < 0 && (this.setData({
      beforeScrollTop: t
    }), this.animationUpFunc())
  },
  ToBeautyTap(t) {
    t = t.detail.index;
    wx.navigateTo({
      url: "/packageWriteLetter/pages/beautyletter/beautyletter?articleIndex=" + t
    })
  },
  ToSorrowTap(t) {
    console.log(t);
    var e = t.currentTarget.dataset.id,
      t = t.currentTarget.dataset.senderopenid;
    wx.navigateTo({
      url: "/packageWriteLetter/pages/sorrowletter/sorrowletter?id=" + e + "&senderOpenId=" + t
    })
  },
  obtainLetter() {
    var t;
    null == app.globalData.userInfo && 0 == this.data.isOpenStampBox ? app.getUserProfile().then(t => {
      var e = app.globalData.openid;
      requestData.indexLetters(e).then(i => (console.log(i), new Promise((t, e) => {
        let o = i.data.data;
        o.forEach(t => {
          t.releaseTime = tools.indexPostBoxTime(t.releaseTime), t.content = 25 < t.content.length ? t.content.substring(0, 25) + ".." : t.content, t.senderPenName = t.senderPenName.substring(0, 8)
        }), this.setData({
          letterArr: o,
          isShowToastBox: "none",
          isOpenStampBox: !0
        }), t("success")
      }))).then(t => {
        "success" == t && wx.showToast({
          title: "小主，您的信件已送达~",
          image: "../../images/send-car.png"
        })
      })
    }) : app.globalData.userInfo && 0 == this.data.isOpenStampBox ? (t = app.globalData.openid, requestData.indexLetters(t).then(i => (console.log(i.data.data), new Promise((t, e) => {
      let o = i.data.data;
      o.forEach(t => {
        t.releaseTime = tools.indexPostBoxTime(t.releaseTime), t.content = 25 < t.content.length ? t.content.substring(0, 25) + ".." : t.content, t.penName = t.senderPenName.substring(0, 8)
      }), this.setData({
        letterArr: o,
        isShowToastBox: "none",
        isOpenStampBox: !0
      }), t("success")
    }))).then(t => {
      "success" == t && wx.showToast({
        title: "小主，您的信件已送达~",
        image: "../../images/send-car.png"
      })
    })) : null != app.globalData.userInfo && 1 == this.data.isOpenStampBox && wx.showToast({
      title: "暂时没有更多信件",
      image: "../../images/empty-letter.png",
      icon: "none"
    })
  },
  tipTap() {
    this.setData({
      showTipPop: !0
    })
  },
  onTipClose() {
    this.setData({
      showTipPop: !1
    })
  },
  understandTap() {
    this.setData({
      showTipPop: !1
    })
  },
  Start() {
    wx.showLoading({
      title: "奋力加载中.."
    }), requestData.indexBeauty().then(o => (console.log(o.data.data), new Promise((t, e) => {
      if (404 == o.statusCode || 500 == o.statusCode) t("error");
      else {
        let e = o.data.data;
        try {
          e.forEach(t => {
            publicTools.renameKey(t, "articleTime", "time"), publicTools.renameKey(t, "img_url", "bgUrl"), publicTools.renameKey(t, "articleTitle", "title"), t.time = tools.indexBeautyTime(t.time), t.title = 8 < t.title.length ? t.title.substring(0, 8) + " .." : t.title
          })
        } catch (t) {
          console.log("---------------------------\x3e 美文异常"), e = publicTools.indexBeautyArticleError(), console.log(e)
        }
        this.setData({
          dataBeautyArr: e
        }), t("success")
      }
    }))).then(t => {
      console.log(t), "error" == t ? console.log("404 or 500，请检查请求") : wx.hideLoading({})
    })
  },
  onLoad: function (t) {
    console.log("index页面 ======> 监听页面加载"), this.Start(), this.setData({
      oldletterBg: this.data.oldletterBgArr[Math.floor(4 * Math.random())]
    })
  },
  onReady: function () {},
  onShow: function () {},
  onHide: function () {
    console.log("index页面 ======> 监听页面隐藏")
  },
  onUnload: function () {
    console.log("index页面 ======> 监听页面卸载")
  },
  onPullDownRefresh: function () {},
  onReachBottom: function () {},
  onShareAppMessage: function () {}
});