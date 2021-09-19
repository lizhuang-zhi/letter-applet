import Notify from "../../miniprogram_npm/@vant/weapp/notify/notify";
let timeTools = require("../../utils/timeTools"),
  requestData = require("../../utils/request");
const getReportTime = 24192e5;
let app = getApp(),
  setTimeInterVal = null,
  timeInterVal = 15e3;
Page({
  data: {
    openId: "",
    dataList: [{
      imgsrc: "https://yundingxikj.oss-cn-beijing.aliyuncs.com/LetterStation/mailbox-mine.png?versionId=CAEQFhiBgICQ4fG3yxciIDlmNDMxODA4MWE0YjRmMmViZjM1ZmZlMTRhZGU3OGE1",
      text: "我的",
      picBgColor: "#FEF7E2",
      notifiNum: 0
    }, {
      imgsrc: "https://yundingxikj.oss-cn-beijing.aliyuncs.com/LetterStation/mailbox-backletter.png?versionId=CAEQFhiBgMCC4fG3yxciIDFjMGY0MGUyYTI2MjRjOWY4MjcyOWNlNjg0N2JhNzI5",
      text: "回信",
      picBgColor: "#E9F1FE",
      notifiNum: 0
    }, {
      imgsrc: "https://yundingxikj.oss-cn-beijing.aliyuncs.com/LetterStation/mailbox-comment.png?versionId=CAEQFhiCgMCC4fG3yxciIDBmOWY2ZDIwNGFmNjQwY2I4YThlOTVkMGU3MzIyYmY1",
      text: "评论",
      picBgColor: "#E6F8F0",
      notifiNum: 0
    }],
    messageList: [],
    officialNewsNum: 0,
    officialNewsTime: "03-21",
    pull: {
      isLoading: !1,
      loading: "https://yundingxikj.oss-cn-beijing.aliyuncs.com/LetterStation/loading-2.gif",
      pullText: "正在加载"
    },
    push: {
      isLoading: !1,
      loading: "https://yundingxikj.oss-cn-beijing.aliyuncs.com/LetterStation/loading-2.gif",
      pullText: "-上拉加载更多-"
    },
    slideStart: [],
    moveTime: 0
  },
  ToReplyListTap(t) {
    let a = t.detail.index;
    if (null == app.globalData.userInfo) app.getUserProfile().then(e => {
      var t = app.globalData.openid;
      if (console.log("《----》" + t), 0 == a) wx.navigateTo({
        url: "/packageMyInfo/pages/indexinfo/indexinfo?openId=" + t
      });
      else if (1 == a) {
        wx.navigateTo({
          url: "/packageMyInfo/pages/replylist/replylist?openId=" + t
        });
        let e = this.data.dataList;
        e[1].notifiNum = 0, this.setData({
          dataList: e
        })
      } else 2 == a && wx.navigateTo({
        url: "/packageMyInfo/pages/comment/comment?openid=" + t
      })
    });
    else {
      t = app.globalData.openid;
      if (0 == a) wx.navigateTo({
        url: "/packageMyInfo/pages/indexinfo/indexinfo"
      });
      else if (1 == a) {
        wx.navigateTo({
          url: "/packageMyInfo/pages/replylist/replylist?openId=" + t
        });
        let e = this.data.dataList;
        e[1].notifiNum = 0, this.setData({
          dataList: e
        })
      } else 2 == a && wx.navigateTo({
        url: "/packageMyInfo/pages/comment/comment?openid=" + t
      })
    }
  },
  ToHistoryLetter() {
    this.judgeUserInfoToJump("/packageMyInfo/pages/historyletter/historyletter")
  },
  ToLatestevents() {
    this.setMessageListNum(0), this.judgeUserInfoToJump("/packageMyInfo/pages/latestevents/latestevents")
  },
  ToOfficialnews() {
    this.setData({
      checkNum: 0
    }), this.setMessageListNum(1), wx.getStorage({
      key: "officialNewsReportList",
      success: e => {
        var t = e.data.reportList,
          e = e.data.time;
        wx.setStorage({
          key: "officialNewsReportList",
          data: {
            reportList: t,
            time: e,
            unReadNum: 0
          }
        })
      }
    }), this.judgeUserInfoToJump("/packageMyInfo/pages/officialnews/officialnews")
  },
  ToMyStamp() {
    this.setMessageListNum(2), this.setData({
      myStampNewNum: 0
    }), this.judgeUserInfoToJump("/packageMyInfo/pages/mystamp/mystamp")
  },
  ToMyAchievement() {
    this.setMessageListNum(3), this.setData({
      myAchieveNewNum: 0
    }), this.judgeUserInfoToJump("/packageMyInfo/pages/myachievements/myachievements")
  },
  ToStampCollection() {
    this.judgeUserInfoToJump("/packageMyInfo/pages/stampcollection/stampcollection")
  },
  refresh(e) {
    app.globalData.userInfo ? (this.setData({
      "pull.isLoading": !0,
      "pull.loading": "https://yundingxikj.oss-cn-beijing.aliyuncs.com/LetterStation/loading-2.gif",
      "pull.pullText": "正在加载"
    }), this.apiNumberData(app.globalData.openid)) : wx.showToast({
      title: "请先完成授权",
      image: "../../images/fail.png"
    })
  },
  toload(e) {
    console.log("加载", e), this.setData({
      "push.isLoading": !0,
      "push.pullText": "正在加载",
      "push.loading": "https://yundingxikj.oss-cn-beijing.aliyuncs.com/LetterStation/loading-2.gif"
    }), setTimeout(() => {
      this.setData({
        "push.isLoading": !1,
        "push.pullText": "- 上拉加载更多 -",
        "push.loading": "https://yundingxikj.oss-cn-beijing.aliyuncs.com/LetterStation/loading-2.gif"
      }), console.log("===== 加载完成 =====")
    }, 2300)
  },
  Start(e) {
    this.refresh(e), wx.getStorage({
      key: "mailboxMessageList",
      success: e => {
        this.setData({
          messageList: e.data.messageList
        }), console.log(this.data.messageList[1])
      }
    }), wx.getStorage({
      key: "officialNewsReportList",
      success: e => {
        var t = e.data.unReadNum;
        console.log(timeTools.mailboxShowMessageTime(e.data.time)), this.setData({
          officialNewsNum: t,
          officialNewsTime: timeTools.mailboxShowMessageTime(e.data.time),
          checkNum: 0
        })
      }
    })
  },
  isGetMonthReport(e) {
    if (getReportTime <= new Date - new Date(e)) {
      var t = app.globalData.openid,
        e = (new Date).getTime();
      let i = {};
      i.time = e, requestData.monthReport(t, e).then(a => new Promise((e, t) => {
        console.log(a.data.data), i.data = a.data.data, e("success")
      })).then(e => {
        "success" == e && wx.getStorage({
          key: "officialNewsReportList",
          success: e => {
            console.log(e);
            var t = (new Date).getTime(),
              a = e.data.unReadNum + 1;
            this.setData({
              officialNewsNum: a,
              officialNewsTime: timeTools.mailboxShowMessageTime(t)
            }), e.data.reportList.unshift(i), wx.setStorage({
              key: "officialNewsReportList",
              data: {
                time: t,
                unReadNum: a,
                reportList: e.data.reportList
              }
            }), Notify({
              message: "您有新的月报已送达~",
              color: "#E9F1FE",
              background: "#4C84F6",
              safeAreaInsetTop: !0,
              duration: 2e3
            })
          },
          fail: e => {
            console.log(e)
          }
        })
      })
    } else console.log("--- 时间未满，不拉取月报 ---")
  },
  apiNumberData(o) {
    requestData.mailboxNumberOfLetter(o).then(e => {
      console.log(e.data.data);
      var t = e.data.data[1],
        a = e.data.data[2],
        i = e.data.data[4],
        e = e.data.data[3];
      let s = this.data.dataList;
      return s[1].notifiNum = t, s[2].notifiNum = a, this.setData({
        dataList: s,
        myStampNewNum: i,
        myAchieveNewNum: e
      }), requestData.officialCheck(o)
    }).then(i => new Promise((e, t) => {
      console.log(i.data.data);
      var a = i.data.data;
      if (null == a) console.log("------- 暂无审核信息返回 --------");
      else {
        this.setData({
          checkNum: 1
        });
        let i = {
          time: (new Date).getTime(),
          data: a
        };
        wx.getStorage({
          key: "officialNewsReportList",
          success: e => {
            let t = e.data.reportList;
            var a = e.data.time,
              e = e.data.unReadNum;
            t.unshift(i), wx.setStorage({
              key: "officialNewsReportList",
              data: {
                reportList: t,
                time: a,
                unReadNum: e
              }
            })
          }
        })
      }
      e("success")
    })).then(e => {
      "success" == e && (this.setData({
        "pull.isLoading": !1
      }), console.log("-------- 刷新完成 ---------"))
    })
  },
  timeToGetData(e) {
    this.apiNumberData(e), wx.getStorage({
      key: "officialNewsReportList",
      success: e => {
        e = e.data.time;
        this.isGetMonthReport(e)
      }
    })
  },
  setMessageListNum(a) {
    wx.getStorage({
      key: "mailboxMessageList",
      success: e => {
        let t = e.data.messageList;
        t[a] = 0;
        e = e.data.nowTime, e = {
          messageList: t,
          nowTime: e
        };
        wx.setStorage({
          key: "mailboxMessageList",
          data: e
        })
      }
    })
  },
  judgeUserInfoToJump(t) {
    wx.getStorage({
      key: "userInfo",
      success: e => {
        console.log(e.data), null != e.data && wx.navigateTo({
          url: t
        })
      },
      fail: e => {
        console.log(e), app.getUserProfile().then(e => {
          wx.navigateTo({
            url: t
          })
        })
      }
    })
  },
  onLoad: function (e) {
    console.log("mailbox页面 ------ 监听页面加载")
  },
  onReady: function () {
    console.log("监听页面初次渲染完成")
  },
  onShow: function () {
    console.log("mailbox页面  ------- 监听页面显示"), app.globalData.userInfo && this.Start(app.globalData.openid), app.globalData.userInfo ? setTimeInterVal = setInterval(() => {
      this.timeToGetData(app.globalData.openid)
    }, timeInterVal) : console.log("--- 未授权！不进行轮询拉取 ---")
  },
  onHide: function () {
    console.log("mailbox页面 ----- 监听页面隐藏"), clearInterval(setTimeInterVal)
  },
  onUnload: function () {
    console.log("监听页面卸载")
  },
  onPullDownRefresh: function () {},
  onReachBottom: function () {},
  onShareAppMessage: function () {}
});