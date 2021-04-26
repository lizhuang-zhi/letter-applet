import echarts from '../../ec-canvas/echarts';
let requestData = require('../../../utils/request');

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
    emotionArr: [{
        tit: '解忧',
        cont: '在去年一年的时间里，您一共帮助19位朋友解答了忧愁，综合分析您的解答方向，评测您为积极性情感。'
      },
      {
        tit: '日记',
        cont: '在生活中，您总是喜欢记录着点滴，用鼓励带动自我积极，您做的很棒！'
      },
      {
        tit: '吐槽',
        cont: '吐槽虽然可以发泄出自己想说的话，但是需要自我斟酌后再吐槽，希望您能在今后的言语中多带积极性的词汇，这样可以正面的影响自己。'
      },
    ]
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
  },
  //初始化图表
  init_echarts: function () {
    // 总表
    this.echartsAllComponnet.init((canvas, width, height) => {
      // 初始化图表
      const Chart = echarts.init(canvas, null, {
        width: width,
        height: height
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
        height: height
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
        height: height
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
        height: height
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
  getChartData: function (openId) {
    requestData.monthReport(openId).then(res => {
      console.log(res);
      // 获取数据集合
      let dataList = res.data.data;
      // 赋值数据
      this.handleData(dataList);
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 获取dom元素
    this.echartsAllComponnet = this.selectComponent('#all_chart');
    this.echartsSorrowComponnet = this.selectComponent('#sorrow_chart');
    this.echartsDiaryComponnet = this.selectComponent('#diary_chart');
    this.echartsComplainComponnet = this.selectComponent('#complain_chart');
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