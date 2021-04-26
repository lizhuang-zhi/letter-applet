import * as echarts from '../../ec-canvas/echarts';

Page({

  /**
   * 页面的初始数据
   */
  data: {
    //data中配置
    ec: {
      lazyLoad: true
    }
  },

  //初始化图表
  init_echarts: function () {
    this.echartsComponnet.init((canvas, width, height) => {
      // 初始化图表
      const Chart = echarts.init(canvas, null, {
        width: width,
        height: height
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
        data: this.data.api_data,
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
  getChartData: function () {
    // 模拟异步请求后台数据
    setTimeout(() => {
      this.setData({
        api_data: [{
            name: '葫芦娃',
            value: 3
          },
          {
            name: '狐狸精',
            value: 6
          },
          {
            name: '腾格尔',
            value: 23
          },
        ],
      })
      this.init_echarts();
    }, 1000)    // 此时这里如何变化返回时间都可以！！
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {
    // 获取dom元素
    this.echartsComponnet = this.selectComponent('#chart_all');
    /* 
      执行渲染顺序：getChartData() => init_echarts() => getOption()
    */
    // 异步请求数据
    this.getChartData();
  },

})