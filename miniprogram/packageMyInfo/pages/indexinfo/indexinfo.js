import * as echarts from '../../ec-canvas/echarts';

/* 
  总数据显示
*/
let chart_all = null;
let option_all = null;

/* 总数据图 */
function initChart(canvas, width, height) {
  chart_all = echarts.init(canvas, null, {
    width: width,
    height: height
  });
  canvas.setChart(chart_all);

  option_all = {
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
      data: [
        {
          value: 4,
          name: '解忧'
        },
        {
          value: 2,
          name: '日记'
        },
        {
          value: 3,
          name: '吐槽'
        },
      ],
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

  chart_all.setOption(option_all);
  return chart_all;
}

Page({

  /**
   * 页面的初始数据
   */
  data: {
    ec: {
      onInit: initChart
    }
  },

  // 查看更多
  lookMore() {
    wx.navigateTo({
      url: '/packageMyInfo/pages/myinfomore/myinfomore',
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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