let tools = {
  // 时间戳转具体时间
  timestampToTime(timestamp) {
    let date = new Date(timestamp * 1000); //时间戳为10位需*1000，时间戳为13位的话不需乘1000
    let Y = date.getFullYear() + '-';
    let M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
    let D = date.getDate() + ' ';
    let h = date.getHours() + ':';
    let m = date.getMinutes() + ':';
    let s = date.getSeconds();
    return Y + M + D + h + m + s;
  },
  /* 
    首页“解忧信箱”时间转化显示

    参数：传入邮件的具体书写时间
  */
  indexPostBoxTime(time) {
    // 一周的时间戳
    let oneWeekStamp = 24 * 60 * 60 * 1000 * 7;

    // 获取当前时间
    let nowTime = new Date();

    // 获取当前时间为星期几（1-7）
    let nowTimeStamp = nowTime.getDay() == 0 ? 7 : nowTime.getDay();

    // 获取传入时间
    let argTime = new Date(time);
    // 获取传入时间月份和日期
    let argTimeMonth = (argTime.getMonth() + 1) < 10 ? '0' + (argTime.getMonth() + 1) : argTime.getMonth();
    let argTimeDate = argTime.getDate() < 10 ? '0' + argTime.getDate() : argTime.getDate();
    // 获取传入时间为星期几
    let timeWeekDays = argTime.getDay() == 0 ? 7 : argTime.getDay();
    // 获取传入时间的时间戳
    let timeStamp = argTime.getTime();
    // 获取当前时间的时间戳
    let timeStampNow = nowTime.getTime();
    // 当前时间与传入时间的时间戳差值
    let disVal = timeStampNow - timeStamp;

    // 保留传入时间的 时与分
    let hours = new Date(time).getHours() > 12 ? new Date(time).getHours() - 12 : new Date(time).getHours();
    let minutes = new Date(time).getMinutes() < 10 ? '0' + new Date(time).getMinutes() : new Date(time).getMinutes();

    // 判断一天里的具体时间（上午、下午、晚上）
    let judgeConcreteTime = this.judgeAmOrPm(new Date(time).getHours());

    if (disVal < oneWeekStamp && nowTimeStamp >= timeWeekDays) {
      return '星期' + this.changeWeekDaysToChinese(timeWeekDays) + judgeConcreteTime + ' ' + hours + ':' + minutes;
    } else if (disVal < oneWeekStamp && nowTimeStamp < timeWeekDays) {
      return '上周' + this.changeWeekDaysToChinese(timeWeekDays) + judgeConcreteTime + ' ' + hours + ':' + minutes;
    } else if (disVal >= oneWeekStamp && disVal < oneWeekStamp * 2) {
      return '一周前';
    } else if(argTime.getFullYear() == nowTime.getFullYear()){
      return argTimeMonth + "-" + argTimeDate;
    }else {
      return argTime.getFullYear() + "-" + argTimeMonth + "-" + argTimeDate;
    }


  },
  // 判断时间是上午还是下午
  judgeAmOrPm(hours) {
    if (hours >= 0 && hours < 6) {
      return '凌晨';
    } else if (hours >= 6 && hours < 11) {
      return '上午';
    } else if (hours >= 11 && hours < 13) {
      return '中午';
    } else if (hours >= 13 && hours < 16) {
      return '下午';
    } else if (hours >= 16 && hours < 18) {
      return '傍晚';
    } else if (hours >= 18 && hours <= 23) {
      return '晚上';
    }
  },
  // 将星期几（阿拉伯数字）改为星期几（中午汉字）
  changeWeekDaysToChinese(weekday) {
    if (weekday == 1) {
      return '一'
    } else if (weekday == 2) {
      return '二'
    } else if (weekday == 3) {
      return '三'
    } else if (weekday == 4) {
      return '四'
    } else if (weekday == 5) {
      return '五'
    } else if (weekday == 6) {
      return '六'
    } else {
      return '日'
    }
  },

  /* 
    首页“赏美文”时间显示
  */
  indexBeautyTime(time) {
    // 定义英文月份
    let enMonthArr = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Spt","Oct","Nov","Dec"];  
    // 获取传入时间并转化
    let showTime = new Date(time);
    let showYears = showTime.getFullYear();
    let showMonth = enMonthArr[showTime.getMonth()];
    let showDate = showTime.getDate();

    return showDate + ' ' + showMonth + '.' + showYears;
  },


  /* 
    公开日记的时间显示
  */
  squareDiaryTime(time) {
    // 新建时间对象
    let date = new Date(time);
    return (date.getMonth() + 1) + '月' + date.getDate() + '日';
  },


  /* 
    美文内容页时间显示 
  */
  beautyletterTime(time) {
    // 获取时间对象
    let days = new Date(time);
    return '周' + this.changeWeekDaysToChinese(days.getDay());
  },

  /* 
    信箱“消息通知”时间转化显示
  */
  mailboxShowMessageTime(time) {
    // 一周的时间戳
    let oneWeekStamp = 24 * 60 * 60 * 1000 * 7;

    // 获取当前时间
    let nowTime = new Date();

    // 获取传入时间的时间戳
    let timeStamp = new Date(time).getTime();
    // 获取当前时间的时间戳
    let timeStampNow = nowTime.getTime();
    // 当前时间与传入时间的时间戳差值
    let disVal = timeStampNow - timeStamp;

    // 获取传入时间为星期几
    let timeWeekDays = new Date(time).getDay() == 0 ? 7 : new Date(time).getDay();

    // 获取传入时间的年份
    let timeYears = new Date(time).getFullYear();
    // 获取当前时间的年份
    let timeYearsNow = nowTime.getFullYear();

    // 获取传入时间的月份
    let timeMonth = (new Date(time).getMonth() + 1) < 10 ? '0' + (new Date(time).getMonth() + 1) : (new Date(time).getMonth() + 1);
    // 获取传入时间的日期
    let timeDate = new Date(time).getDate() < 10 ? '0' + new Date(time).getDate() : new Date(time).getDate();

    if (disVal <= oneWeekStamp) {
      return '星期' + this.changeWeekDaysToChinese(timeWeekDays);
    }else if(disVal > oneWeekStamp && timeYears == timeYearsNow) {
      return timeMonth + '-' + timeDate;
    }else if(disVal > oneWeekStamp && timeYears != timeYearsNow) {
      return timeYears + '-' + timeMonth + '-' + timeDate;
    }else {
      return timeYears + '-' + timeMonth + '-' + timeDate;
    }


  },


  /* 
    评论列表显示时间
  */
  commentListShowTime(time) {
    // 获取参数时间
    let initTime = new Date(time);
    // 获取参数时间年份
    let initYears = initTime.getFullYear();
    // 获取参数月份
    let initMonths = (initTime.getMonth() + 1) < 10 ? ('0' + (initTime.getMonth() + 1)) : (initTime.getMonth() + 1);
    // 获取参数日期
    let initDate = initTime.getDate() < 10 ? ('0' + initTime.getDate()) : initTime.getDate();
    // 获取参数小时
    let initHours = initTime.getHours() < 10 ? ('0' + initTime.getHours()) : initTime.getHours(); 
    // 获取参数分钟
    let initMinutes = initTime.getMinutes() < 10 ? ('0' + initTime.getMinutes()) : initTime.getMinutes();

    // 获取当前时间
    let nowTime = new Date();
    // 获取当前时间年份
    let nowYears = nowTime.getFullYear();

    if(initYears == nowYears) {
      return initMonths + '/' + initDate + ' ' + initHours + ':' + initMinutes;
    }else{
      return initYears + '/' + initMonths + '/' + initDate + ' ' + initHours + ':' + initMinutes;
    }

  } 





};

module.exports = tools;