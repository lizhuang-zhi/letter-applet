/* 
  1. 用户审核：不良内容（暴力、传销..）
  2. 消息提示
  3. 解决如何推送解忧信（服务器发件的负载均衡，每个人都可以收到）
  4. 信件量 > 用户量

  莫忧 借忧 寻觅
 */
let tools = require('../../utils/timeTools');
let publicTools = require('../../utils/public');
// 引入加载数据
let requestData = require('../../utils/request');
// 存储背景图的数组
// let bgArr = [
//   "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2738668818,2590397852&fm=26&gp=0.jpg",
//   "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3569081884,3982453064&fm=26&gp=0.jpg",
//   "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1284039363,2759537733&fm=26&gp=0.jpg"
// ];
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 赏美文数组
    dataBeautyArr: [],

    // loading组件（覆盖层）
    isShowLoading: true
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
  ToSorrowTap() {
    wx.navigateTo({
      url: '/packageWriteLetter/pages/sorrowletter/sorrowletter',
    })

  },

  // 初始化数据
  Start() {
    // 获取美文集合
    requestData.indexBeauty().then(res => {
      console.log(res.data.data);

      // 404与500
      if (res.statusCode == 404 || res.statusCode == 500) {
        return new Promise((resolve, reject) => {
          resolve('error');
        });
      } else {
        // 获取数组
        let artArr = res.data.data;
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
        this.setData({
          dataBeautyArr: artArr
        })
        // 首页三封信件 
        return requestData.indexLetters();
      }


    }).then(res => {
      console.log(res.data.data);
      if (res == 'error') {
        console.log('404 or 500，请检查请求');
      } else {
        // 获取返回信件数组
        let letterArr = res.data.data;
        letterArr.forEach(item => {
          // 时间格式化
          item.releaseTime = tools.indexPostBoxTime(item.releaseTime);
          // 内容格式化
          item.content = item.content.length > 25 ? item.content.substring(0, 25) + '..' : item.content;
          // 笔名格式化
          item.penName = item.penName.substring(0,8);
        });

        // 关闭loading覆盖层
        this.setData({
          letterArr: letterArr,
          isShowLoading: false
        })
      }
    })

    /**
     * 接口应该写在具体的回信页面 -- 李壮志
     */
    //获取回信数据
    // requestData.getIndexStampReply(this.data.replyData).then(res => {
    //   console.log(res);
    //   // 404与500
    //   if (res.statusCode == 404 || res.statusCode == 500) {
    //     return new Promise((resolve, reject) => {
    //       resolve('error');
    //     });
    //   } else {
    //     let replyArr = res.data.data;
    //     console.log(replyArr);
    //   }
    // })


  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
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
    if (typeof this.getTabBar === 'function' &&
      this.getTabBar()) {
      this.getTabBar().setData({
        selected: 0
      })
    }
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