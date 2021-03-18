let tools = {
  // 创建动画对象
  creatAnima(delay = 0, timFunc = 'ease', duration = 1000, transOrg = '50% 50% 0') {
    return wx.createAnimation({
      delay: delay,
      timingFunction: timFunc,
      duration: duration,
      transformOrigin: transOrg
    });
  },
  // 更改日期格式
  changeTimeFormat(time) {
    return this.format(time, 'yyyy-MM-dd');
  },
  // 封装时间格式
  format(time, format) {
    var t = new Date(time);
    var tf = function (i) {
      return (i < 10 ? '0' : '') + i
    };
    return format.replace(/yyyy|MM|dd|HH|mm|ss/g, function (a) {
      switch (a) {
        case 'yyyy':
          return tf(t.getFullYear());
          break;
        case 'MM':
          return tf(t.getMonth() + 1);
          break;
        case 'mm':
          return tf(t.getMinutes());
          break;
        case 'dd':
          return tf(t.getDate());
          break;
        case 'HH':
          return tf(t.getHours());
          break;
        case 'ss':
          return tf(t.getSeconds());
          break;
      }
    })
  },
  // 获取指定选择器的高度(选择器)
  selectHeight(select) {
    let query = wx.createSelectorQuery();
    query.select(select).boundingClientRect();
    return new Promise((resolve, reject) => {
      query.exec(res => {
        resolve(res[0].height);
      });
    });
  }





}


module.exports = tools;