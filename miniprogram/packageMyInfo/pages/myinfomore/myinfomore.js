import echarts from '../../ec-canvas/echarts'
/* 
  总数据显示
*/
let chart = null;
let option = null;

/* 切换的折线图 */
function initChart(canvas, width, height) {
  chart = echarts.init(canvas, null, {
    width: width,
    height: height
  });
  canvas.setChart(chart);

  option = {
    legend: {},
    tooltip: {},
    /* 模块元素颜色 */
    color: [
      '#EE6666',
      '#73C0DE',
      '#FAC858'
    ],
    dataset: {
      source: [
        ['发布数量', '解忧', '日记', '吐槽'],
        ['一月', 43.3, 85.8, 93.7],
        ['二月', 43.3, 85.8, 93.7],
        ['三月', 83.1, 73.4, 55.1],
        ['四月', 86.4, 65.2, 82.5],
        ['五月', 72.4, 53.9, 39.1],
        ['六月', 72.4, 53.9, 39.1],
        ['七月', 72.4, 53.9, 39.1],
        ['八月', 72.4, 53.9, 39.1],
        ['九月', 72.4, 53.9, 39.1],
        ['十月', 72.4, 53.9, 39.1],
        ['十一月', 72.4, 53.9, 39.1],
        ['十二月', 72.4, 53.9, 39.1],
      ]
    },
    xAxis: {
      type: 'category'
    },
    yAxis: {},
    series: [{
        type: 'bar'
      },
      {
        type: 'bar'
      },
      {
        type: 'bar'
      }
    ]
  };

  chart.setOption(option);
  return chart;
}

Page({

  /**
   * 页面的初始数据
   */
  data: {
    ec: {
      onInit: initChart
    },
    // 屏幕宽度
    windowWidth: 0,
    // 屏幕高度
    windowHeight: 0,
  },

  // 监听屏幕旋转
  onResize(res) {
    /* 
      屏幕宽高
    */
    console.log(res.size.windowWidth);
    console.log(res.size.windowHeight);
    this.setData({
      windowWidth: (res.size.windowWidth * 2),
      windowHeight: (res.size.windowHeight * 2)
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