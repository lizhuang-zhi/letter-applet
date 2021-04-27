let requestData = require('../../../utils/request');
let timeTools = require('../../../utils/timeTools.js');
let yeoTools = require('../../../Yeo/utils/tools');

// 发送评论的评论状态
let state = 0;
// 全局变量（判断用户登录）
let app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // loading组件
    isShowLoading: true,
    // 评论数组
    commentArr: [],
    // 具体某一个吐槽的id
    id: '',
    // 输入框输入内容
    inputContent: '',
    // 函数节流前一个判断时间
    preViousTime: 0,
    // 插入评论返回信息
    commentBackInfo: "",
    // 第一次点击发送图片的时间
    sendMsgBeforeTime: 0,

    // 分页请求评论页码
    commentPageNum: 1,
    // 赋值判断是否为最后一页评论
    isLastPageNum: false
  },

  // 回车事件
  enterEvent(e) {
    // 获取输入内容
    let comment_cont = e.detail.comment_cont;
    if (comment_cont == '') {
      wx.showToast({
        title: '请输入评论内容',
        icon: 'none'
      })
    } else {
      this.sendMsg(comment_cont);
    }
  },
  // 键盘输入事件
  inputEvent(e) {
    // 获取输入内容
    let input_cont = e.detail.realtime_comment;
    this.setData({
      inputContent: input_cont
    })
  },
  // 点击发送图片事件
  sendmessageEvent(e) {
    // 获取第一次点击的时间戳
    let sendMsgBeforeTime = this.data.sendMsgBeforeTime;
    // 记录当前时间
    let nowTime = new Date().getTime();
    if (nowTime - sendMsgBeforeTime >= 1000) {
      // 获取输入内容
      let input_cont = this.data.inputContent;
      if (input_cont == '') {
        wx.showToast({
          title: '请输入评论内容',
          icon: 'none'
        })
      } else {
        this.setData({
          sendMsgBeforeTime: new Date()
        })
        this.sendMsg(input_cont);
      }
    } else {
      wx.showToast({
        title: '点击过于频繁',
        icon: 'none'
      })
    }
  },
  // 发送评论
  sendMsg(content) {
    // 获取以前的时间
    let preViousTime = this.data.preViousTime;
    // 获取当前时间
    let nowTime = new Date();
    // 限制用户评论间隔时长 5000ms
    if (nowTime - preViousTime >= 3000) {
      // 新建评论对象
      let newCont = {
        content,
        date: timeTools.indexPostBoxTime(nowTime),
        userVo: {
          penName: app.globalData.userInfo.nickName,
          avatarUrl: app.globalData.userInfo.avatarUrl,
        },
      };
      // 插入数据库的评论对象数据
      let sendCommentObj = {
        openId: app.globalData.openid,
        sgId: this.data.id,
        state: state
      };
      // 合并对象
      let finalSendObj = Object.assign(newCont, sendCommentObj);
      // 插入评论数据到后台
      requestData.complainletterSendComment(finalSendObj).then(res => {
        console.log(res);
        // 记录返回信息
        let backInfoCode = res.data.resultCode;
        // 获取评论数组
        let commentArr = this.data.commentArr;
        if (backInfoCode == 200) {
          commentArr.unshift(newCont);
          this.setData({
            commentArr: commentArr,
            preViousTime: new Date(),
            initValue: '',
            inputContent: ''
          })
          wx.showToast({
            title: '发布成功',
            icon: 'none'
          })
        } else {
          wx.showToast({
            title: '服务器开了个小差',
            icon: 'none'
          })
        }

      });

    } else {
      wx.showToast({
        title: '发送过于频繁',
        icon: 'none'
      })
    }

  },
  // 初始化数据
  Start(id) {
    // 评论内容数据接口
    requestData.complainDetail(id).then(res => {
      // 处理吐槽对象数据
      if (res.statusCode == 200) {
        // 存储对象
        let complianObj = res.data.data;
        // 处理对象时间
        complianObj.date = timeTools.indexBeautyTime(complianObj.date);
        // 处理数据
        this.setData({
          complianObj: complianObj
        })
        // 请求评论数据接口
        return requestData.complainDetailComment(id, this.data.commentPageNum);
      } else {
        return new Promise((resolve, reject) => {
          resolve('error');
        })
      }

    }).then(res => {
      return new Promise((resolve, reject) => {
        if (res == 'error') {
          console.log(res);
          reject('error');
        } else {
          /* 处理评论数据 */
          // 评论对象
          let commentObj = res.data.data;
          // 评论集合
          let commentList = commentObj.list;
          console.log(commentList);
          commentList.forEach(item => {
            item.date = timeTools.indexPostBoxTime(item.date);
          });
          this.setData({
            commentArr: commentList,
            // 赋值判断是否为最后一页评论
            isLastPageNum: commentObj.isLastPage
          })
          resolve('success');
        }

      })

    }).then(res => {
      if (res == 'success') {
        // loading加载完毕
        this.setData({
          isShowLoading: false
        })
      } else {
        console.log('服务器请求错误！！');
      }

    })

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.Start(options.id);
    this.setData({
      id: options.id
    })
    console.log('complaintletter页面  --->  监听页面加载');
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
    console.log('complaintletter页面  --->  监听页面显示');

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    console.log('complaintletter页面  --->  监听页面卸载');
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
    console.log('触底了！！！');

    // 非最后一页数据
    if (!this.data.isLastPageNum) {
      // 具体某一个吐槽评论的id
      let id = this.data.id;

      wx.showLoading({
        title: '加载数据...',
      }).then(res => {
        // 再次请求评论数据接口
        return requestData.complainDetailComment(id, ++this.data.commentPageNum);
      }).then(res => {
        return new Promise((resolve, reject) => {
          // 评论对象
          let commentObj = res.data.data;
          // 评论集合
          let commentList = commentObj.list;
          commentList.forEach(item => {
            item.date = timeTools.indexPostBoxTime(item.date);
          });
          console.log(commentList);
          // 将请求数据添加至原数组后
          this.setData({
            // 赋值判断是否为最后一页评论
            isLastPageNum: commentObj.isLastPage,
            commentArr: this.data.commentArr.concat(commentList)
          })
          resolve('success');
        })
      }).then(res => {
        if (res == 'success') {
          wx.hideLoading({});
        }
      })

    } else {
      wx.showToast({
        title: '我是有底线的',
        icon: 'none'
      })
    }

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})