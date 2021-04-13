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
  },
  // 时间显示（“刚刚”、“几天前”）
  showTimeFormat(time) {
    /* 
        设置时间显示
      */
    // 当前时间戳
    let dateNow = new Date();
    // 当前时间
    let dataNowTime = dateNow.getFullYear() + '-' + (dateNow.getMonth() + 1) + '-' + dateNow.getDate();
    // 当前时间（格式化）
    let dateNowAll = this.changeTimeFormat(dataNowTime);
    // 发布时间
    let timeDate = tools.changeTimeFormat(time);
    // 发布时间戳
    let commentDate = new Date(timeDate).getTime();
    // 历经时长
    let days = (dateNow - commentDate) / (1000 * 24 * 3600);
    // 取整时长(天数)
    let parseIntDays = parseInt(days);
    if (parseIntDays > 0 && parseIntDays <= 10) {
      return `${parseIntDays}天前`;
    } else if (parseIntDays === 0) {
      return "刚刚";
    } else {
      return dateNowAll;
    }

  }



}


module.exports = tools;