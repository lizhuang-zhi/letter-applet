let tools = require('../../utils/timeTools');
let publicTools = require('../../utils/public');
// 引入加载数据
let requestData = require('../../utils/request');
let app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 赏美文数组
    dataBeautyArr: [],
    // 信件数组
    letterArr: [],
    // 是否显示提示框
    isShowToastBox: 'block',
    // 是否已经打开信箱
    isOpenStampBox: false,
    // loading组件（覆盖层）
    isShowLoading: true,
    // 信栈小贴士显示
    showTipPop: false,

    // 弹出层
    imgUrls: [{
        title: '文明书写，不伤害他人',
        picUrl: 'https://yundingxikj.oss-cn-beijing.aliyuncs.com/LetterStation/tips-send.png'
      },
      {
        title: '正视他人言论，吸取有益之处',
        picUrl: 'https://yundingxikj.oss-cn-beijing.aliyuncs.com/LetterStation/tips-mailbox.png'
      },
      {
        title: '善于思考，学会日记',
        picUrl: 'https://yundingxikj.oss-cn-beijing.aliyuncs.com/LetterStation/tips-diary.png'
      },
      {
        title: '集邮票，解成就，完成你的历练之路',
        picUrl: 'https://yundingxikj.oss-cn-beijing.aliyuncs.com/LetterStation/tips-achievement.png'
      }
    ],
    swiperIdx: 0,

    // 上一次页面距顶距离
    beforeScrollTop: 0,
    d_1_ani: {},
    flower: {},

    // 陈旧信箱中纸飞机加动画
    planeFly: {},

    // 陈旧信箱的信件数组
    oldletterArr: [
      {content: '我大概是个傻瓜吧，专门做吃力不讨好的事。做了这么多，结果人家一句话就推翻了。这种傻事，我以后不要在做了，做好自己该做的，不要想着帮人家，人家未必感激你。这么多次的教训怎么学不会？'},
      {content: '我今年都39岁了，我从几年前突然产生了一种无法实现就非常痛苦的心里，这个想法就是我非常渴望用自己的财产来寻求一位真正的人来管教我，我不知道该如何是好，该如何面对'}
    ],
    // 陈旧信箱顶部背景图
    oldletterBgArr: [
      'https://yundingxikj.oss-cn-beijing.aliyuncs.com/LetterStation/oldletterBg1.webp?versionId=CAEQGRiBgIDpy7io1RciIGQ5ZGNkZjA4OTJjNDQyN2JiN2E4MTIwZGZjMzEzMGI1', 
      'https://yundingxikj.oss-cn-beijing.aliyuncs.com/LetterStation/oldletterBg2.webp?versionId=CAEQGRiBgMDkzbio1RciIDFmODk0OWZmOTYwYzRhZTE4Nzc4NzQ1YTIyMzczMDky', 
      'https://yundingxikj.oss-cn-beijing.aliyuncs.com/LetterStation/oldletterBg3.webp?versionId=CAEQGRiBgMD.y7io1RciIDk0Y2FjZmQ4Zjg1NzRiZWZiZTM1YTQwZjc1MjBhNWY2', 
      'https://yundingxikj.oss-cn-beijing.aliyuncs.com/LetterStation/oldletterBg4.jpg?versionId=CAEQGRiBgMDatrmo1RciIDFmYTQzOGE5MzFlNjQ1YjA5YzY5MjRiNDcxM2RiMjNi'
    ],
    oldletterBg: 'https://yundingxikj.oss-cn-beijing.aliyuncs.com/LetterStation/oldletterBg4.jpg?versionId=CAEQGRiBgMDatrmo1RciIDFmYTQzOGE5MzFlNjQ1YjA5YzY5MjRiNDcxM2RiMjNi',

  },

  // 跳转陈旧信箱
  toOldLetterPost() {
    console.log('各个大根深蒂固第三个');
    let planeFly = wx.createAnimation({
      delay: 0,
      timingFunction: 'ease'
    });
    planeFly.translateX(-250).step();
    this.setData({
      planeFly: planeFly.export()
    });

    // 跳转页面
    wx.navigateTo({
      url: '/packageWriteLetter/pages/oldletter/oldletter',
      success: res => {
        let backtimeout = setTimeout(() => {
          planeFly.translateX(0).step();
          this.setData({
            planeFly: planeFly.export()
          });
          clearTimeout(backtimeout);
        }, 500);
      }
    })
  },

  // 跳转发布页面
  toRelease() {
    wx.navigateTo({
      url: '/packageReleaseModule/pages/choosemodule/choosemodule',
    })
  },

  // 下滚动时动画效果
  animationDownFunc() {
    let d_1 = wx.createAnimation({
      delay: 0,
      // 先快后慢
      timingFunction: 'ease-out',
      duration: 700,
      transformOrigin: '10% 90% 0'
    });
    let any = wx.createAnimation({
      delay: 0,
      // 先快后慢
      timingFunction: 'ease-out',
      duration: 300,
    });
    d_1.rotate(5).step();
    any.opacity(0.5).step();
    this.setData({
      d_1_ani: d_1.export(),
      flower: any.export()
    })
  },
  // 上滚动时动画效果
  animationUpFunc() {
    let d_1 = wx.createAnimation({
      delay: 0,
      // 先快后慢
      timingFunction: 'ease-out',
      duration: 700,
      transformOrigin: '10% 90% 0'
    });
    let any = wx.createAnimation({
      delay: 0,
      // 先快后慢
      timingFunction: 'ease-out',
      duration: 300,
    });
    d_1.rotate(-5).step();
    any.opacity(1).step();
    this.setData({
      d_1_ani: d_1.export(),
      flower: any.export()
    })
  },

  // 滚动事件
  onPageScroll(e) {
    // 获取上一次高度
    let beforeScrollTop = this.data.beforeScrollTop;
    let scrollTop = e.scrollTop;

    /* 下滚动 */
    if (scrollTop - beforeScrollTop > 0) {
      this.setData({
        beforeScrollTop: scrollTop
      });
      // 下滚动动画事件
      this.animationDownFunc();
    } else if (scrollTop - beforeScrollTop < 0) { // 上滚动
      this.setData({
        beforeScrollTop: scrollTop
      });
      // 上滚动动画事件
      this.animationUpFunc();
    }
  },

  // 去到美文内容页
  ToBeautyTap(e) {
    // 获取点击对象的文章index
    let articleIndex = e.detail.index;
    // 获取点击背景图
    wx.navigateTo({
      url: '/packageWriteLetter/pages/beautyletter/beautyletter?articleIndex=' + articleIndex,
    })
  },
  // 跳转解忧页
  ToSorrowTap(e) {
    console.log(e);
    // 信件id
    let id = e.currentTarget.dataset.id;
    // 信件发送者id
    let senderOpenId = e.currentTarget.dataset.senderopenid;
    wx.navigateTo({
      url: '/packageWriteLetter/pages/sorrowletter/sorrowletter?id=' + id + '&senderOpenId=' + senderOpenId,
    })

  },
  // 获取解忧信件点击事件
  obtainLetter() {
    /* 
      先授权登录，然后获取信件
    */
    if (app.globalData.userInfo == null && this.data.isOpenStampBox == false) {
      app.getUserProfile().then(res => {
        // 获取用户openId
        let openId = app.globalData.openid;
        // 获取三封信件
        requestData.indexLetters(openId).then(res => {
          console.log(res);
          return new Promise((resolve, reject) => {
            // 获取返回信件数组
            let letterArr = res.data.data;
            letterArr.forEach(item => {
              // 时间格式化
              item.releaseTime = tools.indexPostBoxTime(item.releaseTime);
              // 内容格式化
              item.content = item.content.length > 25 ? item.content.substring(0, 25) + '..' : item.content;
              // 笔名格式化
              item.senderPenName = item.senderPenName.substring(0, 8);
            });

            this.setData({
              letterArr: letterArr,
              isShowToastBox: 'none',
              isOpenStampBox: true
            })
            resolve('success');
          })
        }).then(res => {
          if (res == 'success') {
            wx.showToast({
              title: '小主，您的信件已送达~',
              image: '../../images/send-car.png'
            })
          }
        })
      })
    } else if (app.globalData.userInfo && this.data.isOpenStampBox == false) {
      // 获取用户openId
      let openId = app.globalData.openid;
      // 获取三封信件
      requestData.indexLetters(openId).then(res => {
        console.log(res.data.data);
        return new Promise((resolve, reject) => {

          // 获取返回信件数组
          let letterArr = res.data.data;
          letterArr.forEach(item => {
            // 时间格式化
            item.releaseTime = tools.indexPostBoxTime(item.releaseTime);
            // 内容格式化
            item.content = item.content.length > 25 ? item.content.substring(0, 25) + '..' : item.content;
            // 笔名格式化
            item.penName = item.senderPenName.substring(0, 8);
          });

          this.setData({
            letterArr: letterArr,
            isShowToastBox: 'none',
            isOpenStampBox: true
          })
          resolve('success');
        })
      }).then(res => {
        if (res == 'success') {
          wx.showToast({
            title: '小主，您的信件已送达~',
            image: '../../images/send-car.png'
          })
        }
      })
    } else if (app.globalData.userInfo != null && this.data.isOpenStampBox == true) {
      wx.showToast({
        title: '暂时没有更多信件',
        image: '../../images/empty-letter.png',
        icon: 'none'
      })
    }
  },
  // 信栈小贴士
  tipTap() {
    this.setData({
      showTipPop: true
    })
  },
  // 关闭弹出层
  onTipClose() {
    this.setData({
      showTipPop: false
    })
  },
  // 我已了解事件
  understandTap() {
    this.setData({
      showTipPop: false
    })
  },
  // 初始化数据
  Start() {
    wx.showLoading({
      title: '奋力加载中..',
    })
    // 获取美文集合
    requestData.indexBeauty().then(res => {
      console.log(res.data.data);

      return new Promise((resolve, reject) => {
        // 404与500
        if (res.statusCode == 404 || res.statusCode == 500) {
          resolve('error');
        } else {
          // 获取数组
          let artArr = res.data.data;
          try {
            // 处理数据
            artArr.forEach(item => {
              // 修改对象键名
              publicTools.renameKey(item, 'articleTime', 'time');
              publicTools.renameKey(item, 'img_url', 'bgUrl');
              publicTools.renameKey(item, 'articleTitle', 'title');
              // 格式化时间
              item.time = tools.indexBeautyTime(item.time);
              // 修改标题
              item.title = item.title.length > 8 ? item.title.substring(0, 8) + ' ..' : item.title;
            });
          } catch (error) {
            /* 
              从前端拉取默认假数据
            */
            console.log('---------------------------> 美文异常');
            artArr = publicTools.indexBeautyArticleError();
            console.log(artArr);
          };
          this.setData({
            dataBeautyArr: artArr
          });
          resolve('success');
        }
      })

    }).then(res => {
      console.log(res);
      if (res == 'error') {
        console.log('404 or 500，请检查请求');
      } else {
        // 关闭loading覆盖层 
        // this.setData({
        //   isShowLoading: false
        // })
        wx.hideLoading({ })
      }
    })

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log('index页面 ======> 监听页面加载');
    // 初始化美文集合
    this.Start();
    this.setData({
      oldletterBg: this.data.oldletterBgArr[Math.floor(Math.random() * 4)]
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    // if (typeof this.getTabBar === 'function' &&
    //   this.getTabBar()) {
    //   this.getTabBar().setData({
    //     selected: 0
    //   })
    // }
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    console.log('index页面 ======> 监听页面隐藏');

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    console.log('index页面 ======> 监听页面卸载');

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})