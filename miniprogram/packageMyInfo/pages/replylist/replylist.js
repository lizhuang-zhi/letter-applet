// 引入加载数据
let requestData = require('../../../utils/request');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    replyList: []
  },

  // 点击跳转信件内容
  clickEvent(e) {
    // 获取信件letterId
    let letterId = e.currentTarget.dataset.letterid;
    // 获取信件索引
    // let index = e.currentTarget.dataset.index;
    /* 将点击的信件在缓存中设置为已读 */
    wx.getStorage({
      key: 'unReadLetterList',
      success: res => {
        // 获取未读信件数组
        let unReadList = res.data;
        /* 
          1. 找到对应信件
          2. 将其isRead属性设置为true
          3. 存入缓存
        */
        unReadList.forEach(item => {
          if(item.letterId == letterId) {
            item.isRead = true;
          }
        });
        wx.setStorage({
          key: 'unReadLetterList',
          data: unReadList,
        })
      },
      fail: res => {
        console.log(res);
      }
    })
    wx.navigateTo({
      url: '/packageMyInfo/pages/replyletter/replyletter?letterId=' + letterId,
    })


  },

  // 全部已读事件
  tapAllRead() {
    /* 
      将所有信息，在此页清除掉，提示用户可在历史信息中查看
    */
    wx.clearStorage({
      success: (res) => {
        wx.showToast({
          title: '全部已读，可在历史信息中再次查看',
          icon: 'none'
        });
        this.setData({
          replyList: [] 
        })
      },
    })
  },

  //初始化数据 
  Start() {
    // 获取未读信件
    requestData.replylist().then(res => {
      console.log(res.data.data);
      // 获取未读消息数组
      let unReadLetterArr = res.data.data;
      //存储最开始缓存中的数据
      let unReadList = null;
      new Promise((resolve, reject) => {
        wx.getStorage({
          key: 'unReadLetterList',
          success: res => {
            // 获取缓存数组
            unReadList = res.data;
            console.log(unReadList);
            resolve('success')
          },
          fail: res => {
            unReadList = null;
            console.log(unReadList);
            resolve('error')
          }
        })
      }).then(res => {
        //unReadLetterArr
        //unReadList
        console.log(res);
        let newUnread = null;
        if (unReadLetterArr != null) { // 从后台拉取到未读消息
          /* 
            1. 为数据添加标记（判断是否已读）
            2. 将数据存入缓存 
          */
          /* 为数据添加标记 */
          unReadLetterArr.forEach(item => {
            item.isRead = false;
          });
          newUnread = unReadList == null ? unReadLetterArr : unReadLetterArr.concat(unReadList);
          /* 将未读消息存入缓存 */
          wx.setStorage({
            key: 'unReadLetterList',
            data: newUnread,
          })
        }
        
        this.setData({
          replyList: newUnread
        })

      })
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.Start();

  },

  /**1
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    console.log('replylist页面 -- 监听页面显示');
    /* 重新从缓存中取出isRead为true的 */
    wx.getStorage({
      key: 'unReadLetterList',
      success: res => {
        // 获取全部缓存数组
        let allInfoArr = res.data;
        // 存取所有isRead属性为true的数据
        let newInfoArr = allInfoArr.filter((val,index) => {
          return val.isRead == false;
        });
        // 渲染到页面 
        this.setData({
          replyList: newInfoArr
        })
        console.log(newInfoArr);
      },
      fail: res => {
        console.log(res);
      }
    })

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    console.log('----- 监听页面隐藏 ------');


  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    console.log('replylist页面 ----- 监听页面卸载 ------');
    /* 
      当页面卸载时，判断信件是否已读，存储未读信件到缓存
    */


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