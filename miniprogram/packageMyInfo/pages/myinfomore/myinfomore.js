import echarts from '../../ec-canvas/echarts';
let requestData = require('../../../utils/request');

/* 
  总数据显示
*/
let chart_all = null;
let option_all = null;
/* 
  解忧
*/
let chart_sorrow = null;
let option_sorrow = null;
/* 
  日记
*/
let chart_diary = null;
let option_diary = null;
/* 
  吐槽
*/
let chart_complain = null;
let option_complain = null;
/* 总表的折线图 */
function initChart(canvas, width, height) {
  chart_all = echarts.init(canvas, null, {
    width: width,
    height: height
  });
  canvas.setChart(chart_all);

  option_all = {
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
        ['第一周', '10', '0', '0'],
        ['第二周', '10', '0', '0'],
        ['第三周', '10', '0', '0'],
        ['第四周', '10', '0', '0'],
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

  chart_all.setOption(option_all);
  return chart_all;
}
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
      data: [{
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
/* 日记数据图 */
function initDiaryChart(canvas, width, height) {
  chart_diary = echarts.init(canvas, null, {
    width: width,
    height: height
  });
  canvas.setChart(chart_diary);

  option_diary = {
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
      data: [{
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

  chart_diary.setOption(option_diary);
  return chart_diary;
}
/* 吐槽数据图 */
function initComplainChart(canvas, width, height) {
  chart_complain = echarts.init(canvas, null, {
    width: width,
    height: height
  });
  canvas.setChart(chart_complain);

  option_complain = {
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
      data: [{
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

  chart_complain.setOption(option_complain);
  return chart_complain;
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
    ec_diary: {
      onInit: initDiaryChart
    },
    ec_complain: {
      onInit: initComplainChart
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

  // 初始化数据
  Start(openId) {
    requestData.monthReport(openId).then(res => {
      console.log(res);
      // 获取数据集合
      let dataList = res.data.data;
      // 赋值数据
      this.handleData(dataList);
    })
  },
  // 赋值后台数据集
  handleData(data) {
    console.log(data);
    /* 总表 */
    // let option_all = ;
    option_all.dataset.source = data.firstValue;
    chart_all.setOption(option_all);



    // /* 解忧 */
    // let option_sorrow = chart_sorrow.getOption();
    // option_sorrow.series[0].data = data.lastValue.letter;
    // chart_sorrow.setOption(option_sorrow);
    // /* 日记 */
    // let option_diary = chart_diary.getOption();
    // option_diary.series[0].data = data.lastValue.diary;
    // chart_diary.setOption(option_diary);
    // /* 吐槽 */
    // let option_complain = chart_complain.getOption();
    // option_complain.series[0].data = data.lastValue.spit_groove;
    // chart_complain.setOption(option_complain);

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.Start(options.openId);
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