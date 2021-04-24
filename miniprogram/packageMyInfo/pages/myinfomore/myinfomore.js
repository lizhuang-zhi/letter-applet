import echarts from '../../ec-canvas/echarts';
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
    /* 图表类型说明 */
    legend: {
      // left: '0'
    },
    tooltip: {},
    /* 模块元素颜色 */
    color: [
      // '#EE6666',
      // '#73C0DE',
      // '#FAC858'
      '#ED6B63',
      '#4C84F7',
      '#F0934F'
    ],
    dataset: {
      source: [
        ['发布数量', '解忧', '日记', '吐槽'],
        ['第一周', 20, 2, 23],
        ['第二周', 43, 0, 30],
        ['第三周', 83, 10, 55],
        ['第四周', 14, 65, 32],
        // ['五月', 12, 0, 39],
        // ['六月', 72, 10, 31],
        // ['七月', 0, 20, 39],
        // ['八月', 72.4, 53.9, 39.1],
        // ['九月', 72.4, 53.9, 39.1],
        // ['十月', 72.4, 53.9, 39.1],
        // ['十一月', 72.4, 53.9, 39.1],
        // ['十二月', 72.4, 53.9, 39.1],
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

/* 
  解忧
*/
let chart_sorrow = null;
let option_sorrow = null;

/* 解忧数据图 */
function initSorrowChart(canvas, width, height) {
  chart_sorrow = echarts.init(canvas, null, {
    width: width,
    height: height
  });
  canvas.setChart(chart_sorrow);

  option_sorrow = {
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
      // '#EE6666',
      // '#73C0DE',
      // '#FAC858',
      // '#5470C6'
      '#F0934F',
      '#6CD69C',
      '#4C84F7',
      '#ED6B63'
    ],
    series: [{
      name: '发布数量',
      type: 'pie',
      top: '-10%',
      radius: [20, 80],
      center: ['50%', '50%'],
      roseType: 'area',
      itemStyle: {
        /* 微信小程序设置此圆角属性无效 */
        borderRadius: 0,
      },
      data: [
        {
          value: 4,
          name: '温和'
        },
        {
          value: 2,
          name: '喜悦'
        },
        {
          value: 3,
          name: '低落'
        },
        {
          value: 3,
          name: '愤怒'
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

  chart_sorrow.setOption(option_sorrow);
  return chart_sorrow;
}

Page({

  /**
   * 页面的初始数据
   */
  data: {
    /* 图表对象 */
    ec: {
      onInit: initChart
    },
    ec_sorrow: {
      onInit: initSorrowChart
    },



    /* 情感分析数组 */
    emotionArr: [
      {tit: '解忧', cont: '在去年一年的时间里，您一共帮助19位朋友解答了忧愁，综合分析您的解答方向，评测您为积极性情感。'},
      {tit: '日记', cont: '在生活中，您总是喜欢记录着点滴，用鼓励带动自我积极，您做的很棒！'},
      {tit: '吐槽', cont: '吐槽虽然可以发泄出自己想说的话，但是需要自我斟酌后再吐槽，希望您能在今后的言语中多带积极性的词汇，这样可以正面的影响自己。'},
    ]
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