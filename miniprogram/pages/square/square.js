let weather = require('../../utils/weatherTools');
let requestData = require('../../utils/request');
let timeTools = require('../../utils/timeTools');

let app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    //日记数组
    diaryArr: [],
    // 吐槽大会数组
    complianArr: [],
    // 记录当前tab所在标题的索引
    tabCurIndex: 0,
    // 页面距离顶部高度
    pageScrollTop: 0,
    // complianPageNum
    complianPageNum: 1,
    // 记录当前请求页是否为最后一页（公开日记）
    isLastDiaryPage: false,
    // 记录当前请求页是否为最后一页（吐槽大会）
    isLastComplianPageNum: false,

    /* 
      loading-part组件
    */
    isLoading: '',
    slideStart: [],
    // 记录上一次的touchMove时间戳
    beforeTime: 0,

    // isLoading: '',
    slideStart_Complain: [],
    // 记录上一次的touchMove时间戳
    beforeTime_Complain: 0,

    // 跳转日记内容id
    backId: null,
    // 是否跳转进入日记内容
    isGoDiaryCont: false

  },

  // 公开日记loading的touchMove
  touchDiaryStartTap(e) {
    this.setData({
      slideStart: e.touches[0],
    })
  },
  // 公开日记loading开始触摸事件
  touchDiaryMoveTap(e) {
    // 获取当前滑动时间
    let nowTime = new Date().getTime();
    if (nowTime - this.data.beforeTime <= 2000) {
      return;
    } else {
      this.setData({
        beforeTime: nowTime
      })
    }
    let slideStart = this.data.slideStart;
    let slideMove = e.touches[0];
    let startX = slideStart.pageX;
    let startY = slideStart.pageY;
    let moveEndX = slideMove.pageX;
    let moveEndY = slideMove.pageY;
    let X = moveEndX - startX;
    let Y = moveEndY - startY;
    if (Math.abs(Y) > Math.abs(X) && Y > 0 && this.data.pageScrollTop <= 30) {
      // 下拉刷新
      this.setData({
        isLoading: 'yeo-start-loading'
      })
      // 刷新日记前十条内容
      this.onPullDownDiary();
      console.log('------------------ 下拉刷新 公开日记 ------------------');
    }

  },
  // 吐槽大会loading的touchMove
  touchComplainStartTap(e) {
    this.setData({
      slideStart_Complain: e.touches[0],
    })
  },
  // 吐槽大会loading开始触摸事件
  touchComplainMoveTap(e) {
    // 获取当前滑动时间
    let nowTime = new Date().getTime();
    if (nowTime - this.data.beforeTime_Complain <= 2000) {
      return;
    } else {
      this.setData({
        beforeTime_Complain: nowTime
      })
    }
    let slideStart = this.data.slideStart_Complain;
    let slideMove = e.touches[0];
    let startX = slideStart.pageX;
    let startY = slideStart.pageY;
    let moveEndX = slideMove.pageX;
    let moveEndY = slideMove.pageY;
    let X = moveEndX - startX;
    let Y = moveEndY - startY;
    if (Math.abs(Y) > Math.abs(X) && Y > 0 && this.data.pageScrollTop <= 30) {
      // 下拉刷新
      this.setData({
        isLoading: 'yeo-start-loading'
      })
      this.onPullDownComplain();
      console.log('------------------ 下拉刷新 吐槽大会 ------------------');
    }

  },

  // 跳转日记内容
  ToDiaryContent(e) {
    // 获取点击的日记对象的id
    let id = e.currentTarget.dataset.id;
    // 获取点击的日记对象的浏览量
    let viewNum = e.currentTarget.dataset.viewnum;
    // 将改动存入改动缓存
    wx.getStorage({
      key: 'changeDiaryArr',
      success: res => {
        console.log(res);
        // 获取数组
        let changeArr = res.data;
        let isHavDiaryId = changeArr.some((val, index) => {
          return val.diaryId == id;
        });
        if (isHavDiaryId) { // 如果此id存在
          // 改变其浏览量
          changeArr.forEach(item => {
            if (item.diaryId == id) {
              item.viewNum++;
            }
          })
        } else {
          // 新建对象存入数组
          let obj = {
            diaryId: id,
            viewNum: parseInt(viewNum) + 1
          };
          changeArr.push(obj);
        }
        wx.setStorage({
          key: 'changeDiaryArr',
          data: changeArr,
        })
      },
      fail: res => {
        // 建立数组
        let arr = [{
          diaryId: id,
          viewNum: parseInt(viewNum) + 1
        }];
        wx.setStorage({
          key: 'changeDiaryArr',
          data: arr,
        })
      }
    })

    wx.navigateTo({
      url: '/packageWriteLetter/pages/diaryletter/diaryletter?id=' + id,
      success: res => {
        this.setData({
          backId: id,
          isGoDiaryCont: true
        })
        console.log('0000000000000 :' + this.data.backId, this.data.isGoDiaryCont);
      }
    })
  },
  // 跳转吐槽内容
  ToComplainTap(e) {
    // 获取吐槽对象id
    let id = e.currentTarget.dataset.id;
    // 未获取授权
    if (!app.globalData.userInfo) {
      // 弹窗用户授权
      app.getUserProfile().then(res => {
        wx.navigateTo({
          url: '/packageWriteLetter/pages/complaintletter/complaintletter?id=' + id,
        })
      })
    } else { // 已授权
      wx.navigateTo({
        url: '/packageWriteLetter/pages/complaintletter/complaintletter?id=' + id,
      })
    }
  },
  // 标签tab切换事件
  changeTap(e) {
    // 获得改变后的tab索引
    let curIndex = e.detail.index;
    this.setData({
      tabCurIndex: curIndex,
      // 取消当前正在loading的图标
      isLoading: 'yeo-end-loading'
    })
  },
  // 监听页面滚动
  onPageScroll(e) {
    // 设置页面的scrollTop（实时）
    this.setData({
      pageScrollTop: e.scrollTop
    });
    if (e.scrollTop > 400) { // 页面上卷高度 大于页面固定按钮位置
      this.setData({
        fixedInputPhone: true // 显示指定区域
      })
    } else {
      this.setData({
        fixedInputPhone: false // 隐藏指定区域
      })
    }
  },
  // 回到顶部事件
  backToTop() {
    wx.pageScrollTo({
      duration: 600,
      scrollTop: 0
    })
  },

  // 初始化数据
  Start() {
    //公开日记数据
    requestData.squareDiary(1).then(res => {
      // 日记对象
      let diaryObj = res.data.data;
      // 日记数组
      let diaryList = diaryObj.list;
      // 记录公开日记是否为最后一页
      this.setData({
        isLastDiaryPage: diaryObj.isLastPage
      })
      console.log(diaryObj);
      diaryList.forEach(item => {
        // 修改天气显示格式
        item.weather = weather.weatherWordsToPic(item.weather);
        // 修改日期显示格式
        item.date = timeTools.squareDiaryTime(item.date);
      });
      this.setData({
        diaryArr: diaryList
      })

    })

    // 吐槽大会请求数据
    requestData.squareComplain(1).then(res => {
      // 获取吐槽大会对象
      let complianObj = res.data.data;
      // 获取吐槽数组
      let complianList = complianObj.list;
      console.log(complianObj);
      // 获取吐槽大会当前页
      this.setData({
        complianPageNum: complianObj.pageNum,
        // 记录当前请求页是否为最后一页
        isLastComplianPageNum: complianObj.isLastPage,
        complianArr: complianList
      });

    });

  },

  // 上拉触底事件（吐槽大会）
  onReachBottomComplain() {
    this.setData({
      isComplainLoading: true
    })
    // 判断是否为最后一页数据并请求
    if (!this.data.isLastComplianPageNum) {
      // 再次请求下一页数据
      requestData.squareComplain(++this.data.complianPageNum).then(res => {
        // 获取吐槽大会对象
        let complianObj = res.data.data;
        // 获取吐槽数组
        let complianList = complianObj.list;
        // 原吐槽大会数组
        let complianArr = this.data.complianArr;

        console.log(complianList);
        // 合并二次请求对象与原对象
        this.setData({
          // 记录当前请求页是否为最后一页
          isLastComplianPageNum: complianObj.isLastPage,
          complianArr: complianArr.concat(complianList)
        })
        this.setData({
          isComplainLoading: false
        })
      })

    } else {
      wx.showToast({
        title: '没有更多吐槽了',
        icon: 'none'
      })
      this.setData({
        isComplainLoading: false
      })
    }

  },
  // 上拉触底事件（公开日记）
  onReachBottomDiary() {
    this.setData({
      isDiaryLoading: true
    })
    // 判断是否为最后一页数据并请求
    if (!this.data.isLastDiaryPage) {
      // 再次请求下一页数据
      requestData.squareDiary(++this.data.complianPageNum).then(res => {
        // 日记对象
        let diaryObj = res.data.data;
        // 日记数组
        let diaryList = diaryObj.list;
        console.log(diaryObj);
        diaryList.forEach(item => {
          item.weather = weather.weatherWordsToPic(item.weather);
          item.date = timeTools.squareDiaryTime(item.date);
        })
        this.setData({
          // 记录公开日记是否为最后一页
          isLastDiaryPage: diaryObj.isLastPage,
          diaryArr: this.data.diaryArr.concat(diaryList)
        });
        setTimeout(() => {
          this.setData({
            isDiaryLoading: false
          })
        }, 2000)

      })

    } else {
      wx.showToast({
        title: '没有更多日记了',
        icon: 'none'
      })
      this.setData({
        isDiaryLoading: false
      })
    }

  },
  // 下拉刷新（公开日记）
  onPullDownDiary() {
    // 将请求页数重置为1
    this.setData({
      complianPageNum: 1
    })
    // 更新日记浏览量
    app.updateDiaryLooksNum().then(res => {
      console.log(res);
      if (res == 'success') {
        //公开日记数据
        return requestData.squareDiary(1).then(res => {
          return new Promise((resolve, reject) => {
            // 日记对象
            let diaryObj = res.data.data;
            // 日记数组
            let diaryList = diaryObj.list;
            console.log(diaryObj);
            diaryList.forEach(item => {
              // 修改天气显示格式
              item.weather = weather.weatherWordsToPic(item.weather);
              // 修改日期显示格式
              item.date = timeTools.squareDiaryTime(item.date);
            });
            this.setData({
              // 记录公开日记是否为最后一页
              isLastDiaryPage: diaryObj.isLastPage,
              diaryArr: diaryList
            })
            resolve('success');
          })
        })
      } else if (res == 'refreshed') {
        // 数据已经是最新
        // return new Promise((resolve, reject) => {
        //   resolve('refreshed');
        // })
      } else {
        console.log('---- 更新日记浏览量出错 ----');
      }
    }).then(res => {
      console.log(res);
      if (res == 'success') {
        // 结束刷新
        this.setData({
          isLoading: 'yeo-end-loading'
        });
        wx.showToast({
          title: '刷新成功'
        })
      } else if (res == 'refreshed') {
        // 结束刷新
        // this.setData({
        //   isLoading: 'yeo-end-loading'
        // });
        // wx.showToast({
        //   title: '已是最新内容~',
        //   icon: 'none'
        // })
      } else {
        // 结束刷新
        this.setData({
          isLoading: 'yeo-end-loading'
        });
        wx.showToast({
          title: '刷新出错，请稍后再试',
          icon: 'none'
        })
      }
    })

  },
  // 下拉刷新（吐槽大会）
  onPullDownComplain() {
    // 将请求页数重置为1
    this.setData({
      complianPageNum: 1
    })
    // 吐槽大会请求数据
    requestData.squareComplain(1).then(res => {
      return new Promise((resolve, reject) => {
        // 获取吐槽大会对象
        let complianObj = res.data.data;
        // 获取吐槽数组
        let complianList = complianObj.list;
        console.log(complianObj);
        this.setData({
          // 获取吐槽大会当前页
          complianPageNum: complianObj.pageNum,
          // 记录当前请求页是否为最后一页
          isLastComplianPageNum: complianObj.isLastPage,
          complianArr: complianList
        });
        resolve('success');
      })
    }).then(res => {
      if (res == 'success') {
        this.setData({
          isLoading: 'yeo-end-loading'
        });
        wx.showToast({
          title: '刷新成功'
        })
      }
    })
  },
  // 从日记内容页返回时浏览量+1
  addOneFromDiaryContent() {
    // 进入日记内容后，重置判断条件
    this.setData({
      isGoDiaryCont: false
    })
    // 获取日记数组
    let diaryArr = this.data.diaryArr;
    // 获取之前点击的日记对象id
    let id = this.data.backId;
    console.log('------------》' + id);
    if(id == null) {
      return;
    }
    // 获取对应的日记，增加显示的浏览量
    diaryArr.forEach(item => {
      if (item.id == id) {
        item.number++;
      }
    });
    // 重新渲染
    this.setData({
      diaryArr: diaryArr
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log('广场页面  ---- >   监听页面加载');
    this.Start();

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
    //     selected: 1
    //   })
    // }

    // 给日记浏览量+1
    this.addOneFromDiaryContent();
    /* 
      发布日记成功后,再次进入,拉取一次
    */
    console.log(this.data.diaryArr);
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    console.log('广场 -- 监听页面隐藏');

    // 如果不是进入日记内容，置空存储的跳转日记内容的id
    if(!this.data.isGoDiaryCont) {
      this.setData({
        backId: null,
      })
    }
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    console.log('广场 -- 监听页面卸载');
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
    if (this.data.tabCurIndex == 0) {
      console.log('---- 公开日记触底了 -----');
      // 再次请求数据
      this.onReachBottomDiary();
    } else if (this.data.tabCurIndex == 1) {
      console.log('---- 吐槽大会触底了 ----');
      // 再次请求数据
      this.onReachBottomComplain();
    }

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})