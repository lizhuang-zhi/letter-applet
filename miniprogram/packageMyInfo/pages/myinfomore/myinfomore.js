import echarts from '../../ec-canvas/echarts';
let requestData = require('../../../utils/request');
let pubTools = require('../../../utils/public');
let app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    /* 图表对象 */
    ec: {
      lazyLoad: true
    },
    ec_sorrow: {
      lazyLoad: true
    },
    ec_diary: {
      lazyLoad: true
    },
    ec_complain: {
      lazyLoad: true
    },

    /* 情感分析数组 */
    emotionArr: []
  },

  // 赋值后台数据集
  handleData(data) {
    console.log(data);
    this.setData({
      // 总表数据
      all_chart_data: data.firstValue,
      // 解忧数据
      sorrow_chart_data: data.lastValue.letter,
      // 日记数据
      diary_chart_data: data.lastValue.diary,
      // 吐槽数据
      complain_chart_data: data.lastValue.spit_groove,
    })
    // 初始化图表
    this.init_echarts();
    wx.hideLoading({});
  },
  // 渲染文字数据
  setStringData(dataObj) {
    this.setData({
      emotionArr: [{
          tit: '解忧',
          cont: '小主，上个月一共发布了12篇解忧，其中7篇的情感倾向为温和状态，3篇为喜悦状态，2篇为低落状态。'
        },
        {
          tit: '日记',
          cont: '小主，上个月一共发布了12篇日记，其中7篇的情感倾向为温和状态，3篇为喜悦状态，2篇为低落状态。'
        },
        {
          tit: '吐槽',
          cont: '小主，上个月一共发布了12篇吐槽，其中7篇的情感倾向为温和状态，3篇为喜悦状态，2篇为低落状态。'
        },
        {
          tit: '小结',
          cont: '亲爱的小主，通过数据分析，上月您的情绪倾向为' + '积极，状态良好，希望小主继续保持这样的情绪'
        }
      ]
    })
  },
  //初始化图表
  init_echarts: function () {
    // 总表
    this.echartsAllComponnet.init((canvas, width, height) => {
      // 初始化图表
      const Chart = echarts.init(canvas, null, {
        width: width,
        height: height,
        devicePixelRatio: app.globalData.pixelRatio
      });
      // 获取图表数据
      Chart.setOption(this.getAllChartOption());
      // 注意这里一定要返回 chart 实例，否则会影响事件处理等
      return Chart;
    });
    // 解忧评测表
    this.echartsSorrowComponnet.init((canvas, width, height) => {
      // 初始化图表
      const Chart = echarts.init(canvas, null, {
        width: width,
        height: height,
        devicePixelRatio: app.globalData.pixelRatio
      });
      // 获取图表数据
      Chart.setOption(this.getSorrowChartOption());
      // 注意这里一定要返回 chart 实例，否则会影响事件处理等
      return Chart;
    });
    // 日记评测表
    this.echartsDiaryComponnet.init((canvas, width, height) => {
      // 初始化图表
      const Chart = echarts.init(canvas, null, {
        width: width,
        height: height,
        devicePixelRatio: app.globalData.pixelRatio
      });
      // 获取图表数据
      Chart.setOption(this.getDiaryChartOption());
      // 注意这里一定要返回 chart 实例，否则会影响事件处理等
      return Chart;
    });
    // 吐槽评测表
    this.echartsComplainComponnet.init((canvas, width, height) => {
      // 初始化图表
      const Chart = echarts.init(canvas, null, {
        width: width,
        height: height,
        devicePixelRatio: app.globalData.pixelRatio
      });
      // 获取图表数据
      Chart.setOption(this.getComplainChartOption());
      // 注意这里一定要返回 chart 实例，否则会影响事件处理等
      return Chart;
    });
  },
  // 获取总表数据
  getAllChartOption: function () {
    let option_all = {
      /* 图表类型说明 */
      legend: {
        // left: '0'
      },
      tooltip: {},
      /* 模块元素颜色 */
      color: [
        '#ED6B63',
        '#4C84F7',
        '#F0934F'
      ],
      dataset: {
        source: this.data.all_chart_data
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
    return option_all;
  },
  // 获取解忧表数据
  getSorrowChartOption: function () {
    let option_sorrow = {
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
        data: this.data.sorrow_chart_data,
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
    return option_sorrow;
  },
  // 获取日记表数据
  getDiaryChartOption: function () {
    let option_diary = {
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
        data: this.data.diary_chart_data,
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
    return option_diary;
  },
  // 获取吐槽表数据
  getComplainChartOption: function () {
    let option_complain = {
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
        data: this.data.complain_chart_data,
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
    return option_complain;
  },
  // 点击查询按钮调用接口获取折线图数据
  getChartData: function (reportIndex) {
    wx.getStorage({
      key: 'officialNewsReportList',
      success: res => {
        // 获取对应月报对象
        let dataObj = res.data.reportList[reportIndex].data;
        // 赋值数据
        this.handleData(dataObj);
        // 渲染描述文字
        this.setStringData(dataObj.lastValue);
      },
      fail: res => {
        console.log(res);
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.showLoading({
      title: '数据加载中~',
    })
    // 获取dom元素
    this.echartsAllComponnet = this.selectComponent('#all_chart');
    this.echartsSorrowComponnet = this.selectComponent('#sorrow_chart');
    this.echartsDiaryComponnet = this.selectComponent('#diary_chart');
    this.echartsComplainComponnet = this.selectComponent('#complain_chart');
    // 异步请求数据
    this.getChartData(options.reportIndex);

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