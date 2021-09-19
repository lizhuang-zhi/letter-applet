let weather = require("../../utils/weatherTools"),
  requestData = require("../../utils/request"),
  timeTools = require("../../utils/timeTools"),
  app = getApp();
Page({
  data: {
    diaryArr: [],
    complianArr: [],
    tabCurIndex: 0,
    pageScrollTop: 0,
    complianPageNum: 1,
    isLastDiaryPage: !1,
    isLastComplianPageNum: !1,
    isLoading: "",
    slideStart: [],
    beforeTime: 0,
    slideStart_Complain: [],
    beforeTime_Complain: 0,
    backId: null,
    isGoDiaryCont: !1
  },
  touchDiaryStartTap(a) {
    this.setData({
      slideStart: a.touches[0]
    })
  },
  touchDiaryMoveTap(a) {
    var t, e = (new Date).getTime();
    e - this.data.beforeTime <= 2e3 || (this.setData({
      beforeTime: e
    }), t = this.data.slideStart, e = a.touches[0], a = t.pageX, t = t.pageY, a = e.pageX - a, t = e.pageY - t, Math.abs(t) > Math.abs(a) && 0 < t && this.data.pageScrollTop <= 30 && (this.setData({
      isLoading: "yeo-start-loading"
    }), this.onPullDownDiary(), console.log("------------------ 下拉刷新 公开日记 ------------------")))
  },
  touchComplainStartTap(a) {
    this.setData({
      slideStart_Complain: a.touches[0]
    })
  },
  touchComplainMoveTap(a) {
    var t, e = (new Date).getTime();
    e - this.data.beforeTime_Complain <= 2e3 || (this.setData({
      beforeTime_Complain: e
    }), t = this.data.slideStart_Complain, e = a.touches[0], a = t.pageX, t = t.pageY, a = e.pageX - a, t = e.pageY - t, Math.abs(t) > Math.abs(a) && 0 < t && this.data.pageScrollTop <= 30 && (this.setData({
      isLoading: "yeo-start-loading"
    }), this.onPullDownComplain(), console.log("------------------ 下拉刷新 吐槽大会 ------------------")))
  },
  ToDiaryContent(a) {
    let e = a.currentTarget.dataset.id,
      o = a.currentTarget.dataset.viewnum;
    wx.getStorage({
      key: "changeDiaryArr",
      success: a => {
        console.log(a);
        let t = a.data;
        t.some((a, t) => a.diaryId == e) ? t.forEach(a => {
          a.diaryId == e && a.viewNum++
        }) : (a = {
          diaryId: e,
          viewNum: parseInt(o) + 1
        }, t.push(a)), wx.setStorage({
          key: "changeDiaryArr",
          data: t
        })
      },
      fail: a => {
        var t = [{
          diaryId: e,
          viewNum: parseInt(o) + 1
        }];
        wx.setStorage({
          key: "changeDiaryArr",
          data: t
        })
      }
    }), wx.navigateTo({
      url: "/packageWriteLetter/pages/diaryletter/diaryletter?id=" + e,
      success: a => {
        this.setData({
          backId: e,
          isGoDiaryCont: !0
        }), console.log("0000000000000 :" + this.data.backId, this.data.isGoDiaryCont)
      }
    })
  },
  ToComplainTap(a) {
    let t = a.currentTarget.dataset.id;
    app.globalData.userInfo ? wx.navigateTo({
      url: "/packageWriteLetter/pages/complaintletter/complaintletter?id=" + t
    }) : app.getUserProfile().then(a => {
      wx.navigateTo({
        url: "/packageWriteLetter/pages/complaintletter/complaintletter?id=" + t
      })
    })
  },
  changeTap(a) {
    a = a.detail.index;
    this.setData({
      tabCurIndex: a,
      isLoading: "yeo-end-loading"
    })
  },
  onPageScroll(a) {
    this.setData({
      pageScrollTop: a.scrollTop
    }), 400 < a.scrollTop ? this.setData({
      fixedInputPhone: !0
    }) : this.setData({
      fixedInputPhone: !1
    })
  },
  backToTop() {
    wx.pageScrollTo({
      duration: 600,
      scrollTop: 0
    })
  },
  Start() {
    requestData.squareDiary(1).then(a => {
      a = a.data.data;
      let t = a.list;
      this.setData({
        isLastDiaryPage: a.isLastPage
      }), console.log(a), t.forEach(a => {
        a.weather = weather.weatherWordsToPic(a.weather), a.date = timeTools.squareDiaryTime(a.date)
      }), this.setData({
        diaryArr: t
      })
    }), requestData.squareComplain(1).then(a => {
      var t = a.data.data,
        a = t.list;
      console.log(t), this.setData({
        complianPageNum: t.pageNum,
        isLastComplianPageNum: t.isLastPage,
        complianArr: a
      })
    })
  },
  onReachBottomComplain() {
    this.setData({
      isComplainLoading: !0
    }), this.data.isLastComplianPageNum ? (wx.showToast({
      title: "没有更多吐槽了",
      icon: "none"
    }), this.setData({
      isComplainLoading: !1
    })) : requestData.squareComplain(++this.data.complianPageNum).then(a => {
      var t = a.data.data,
        a = t.list;
      let e = this.data.complianArr;
      console.log(a), this.setData({
        isLastComplianPageNum: t.isLastPage,
        complianArr: e.concat(a)
      }), this.setData({
        isComplainLoading: !1
      })
    })
  },
  onReachBottomDiary() {
    this.setData({
      isDiaryLoading: !0
    }), this.data.isLastDiaryPage ? (wx.showToast({
      title: "没有更多日记了",
      icon: "none"
    }), this.setData({
      isDiaryLoading: !1
    })) : requestData.squareDiary(++this.data.complianPageNum).then(a => {
      a = a.data.data;
      let t = a.list;
      console.log(a), t.forEach(a => {
        a.weather = weather.weatherWordsToPic(a.weather), a.date = timeTools.squareDiaryTime(a.date)
      }), this.setData({
        isLastDiaryPage: a.isLastPage,
        diaryArr: this.data.diaryArr.concat(t)
      }), setTimeout(() => {
        this.setData({
          isDiaryLoading: !1
        })
      }, 2e3)
    })
  },
  onPullDownDiary() {
    this.setData({
      complianPageNum: 1
    }), app.updateDiaryLooksNum().then(a => (console.log(a), "success" == a ? requestData.squareDiary(1).then(i => new Promise((a, t) => {
      var e = i.data.data;
      let o = e.list;
      console.log(e), o.forEach(a => {
        a.weather = weather.weatherWordsToPic(a.weather), a.date = timeTools.squareDiaryTime(a.date)
      }), this.setData({
        isLastDiaryPage: e.isLastPage,
        diaryArr: o
      }), a("success")
    })) : void("refreshed" == a || console.log("---- 更新日记浏览量出错 ----")))).then(a => {
      console.log(a), "success" == a ? (this.setData({
        isLoading: "yeo-end-loading"
      }), wx.showToast({
        title: "刷新成功"
      })) : "refreshed" == a || (this.setData({
        isLoading: "yeo-end-loading"
      }), wx.showToast({
        title: "刷新出错，请稍后再试",
        icon: "none"
      }))
    })
  },
  onPullDownComplain() {
    this.setData({
      complianPageNum: 1
    }), requestData.squareComplain(1).then(i => new Promise((a, t) => {
      var e = i.data.data,
        o = e.list;
      console.log(e), this.setData({
        complianPageNum: e.pageNum,
        isLastComplianPageNum: e.isLastPage,
        complianArr: o
      }), a("success")
    })).then(a => {
      "success" == a && (this.setData({
        isLoading: "yeo-end-loading"
      }), wx.showToast({
        title: "刷新成功"
      }))
    })
  },
  addOneFromDiaryContent() {
    this.setData({
      isGoDiaryCont: !1
    });
    let a = this.data.diaryArr,
      t = this.data.backId;
    console.log("------------》" + t), null != t && (a.forEach(a => {
      a.id == t && a.number++
    }), this.setData({
      diaryArr: a
    }))
  },
  onLoad: function (a) {
    console.log("广场页面  ---- >   监听页面加载"), this.Start()
  },
  onReady: function () {},
  onShow: function () {
    this.addOneFromDiaryContent(), console.log(this.data.diaryArr)
  },
  onHide: function () {
    console.log("广场 -- 监听页面隐藏"), this.data.isGoDiaryCont || this.setData({
      backId: null
    })
  },
  onUnload: function () {
    console.log("广场 -- 监听页面卸载")
  },
  onPullDownRefresh: function () {},
  onReachBottom: function () {
    0 == this.data.tabCurIndex ? (console.log("---- 公开日记触底了 -----"), this.onReachBottomDiary()) : 1 == this.data.tabCurIndex && (console.log("---- 吐槽大会触底了 ----"), this.onReachBottomComplain())
  },
  onShareAppMessage: function () {}
});