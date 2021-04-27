import * as echarts from '../../ec-canvas/echarts';
let requestData = require('../../../utils/request');

let app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    ec: {
      lazyLoad: true
    },
    // 用户
    nickName: '',
    avatarUrl: ''
  },

  // 查看更多（时间线）
  lookMore() {
    wx.navigateTo({
      url: '/packageMyInfo/pages/timeline/timeline',
    })
  },

  //初始化图表
  init_echarts: function () {
    this.echartsComponnet.init((canvas, width, height) => {
      // 初始化图表
      const Chart = echarts.init(canvas, null, {
        width: width,
        height: height,
        devicePixelRatio: app.globalData.pixelRatio
      });
      // 获取图表数据
      Chart.setOption(this.getOption());
      // 注意这里一定要返回 chart 实例，否则会影响事件处理等
      return Chart;
    });
  },
  // 获取数据
  getOption: function () {
    let option = {
      /* 图表类型说明 */
      legend: {
        top: 'bottom',
      },
      /* 点击模块提示 */
      tooltip: {
        trigger: 'item'
      },
      /* 模块元素颜色 */
      color: [
        '#EE6666',
        '#73C0DE',
        '#FAC858'
      ],
      series: [{
        name: '发布数量',
        type: 'pie',
        top: '-10%',
        radius: [35, 105],
        center: ['50%', '50%'],
        roseType: 'area',
        itemStyle: {
          /* 微信小程序设置此圆角属性无效 */
          borderRadius: 0,
        },
        data: this.data.releaseArr,
        /* 点击强调阴影颜色 */
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
        }
      }]
    };
    return option;
  },
  // 点击查询按钮调用接口获取折线图数据
  getChartData: function (openId) {
    requestData.packageMyInfoIndexInfo(openId).then(res => {
      console.log(res.data.data);
      // 后台对象
      let releaseObj = res.data.data;
      // 获取图表数组
      let releaseArr = releaseObj.models;

      // 渲染显示
      this.setData({
        releaseArr: releaseArr,
        nickName: releaseObj.nickName,
        avatarUrl: releaseObj.avatarUrl
      })
      /* 初始化图表 */
      this.init_echarts();
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 获取dom元素
    this.echartsComponnet = this.selectComponent('#chart_all');
    // 异步请求数据
    this.getChartData(options.openId);
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
    console.log('我的页面  ---- > 监听页面卸载');
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