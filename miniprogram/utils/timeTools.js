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
    // 获取传入时间为星期几
    let timeWeekDays = new Date(time).getDay() == 0 ? 7 : new Date(time).getDay();

    // 获取传入时间的时间戳
    let timeStamp = new Date(time).getTime();
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
    } else {
      return time;
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


  }





};

module.exports = tools;