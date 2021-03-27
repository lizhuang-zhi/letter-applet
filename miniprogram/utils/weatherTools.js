let weather = {
  /* 
    天气图标转换
    参数：天气名称
  */
  weatherWordsToPic(weather) {
    if(weather.includes('多云') || weather.includes('云')) {
      return 'https://z3.ax1x.com/2021/03/25/6XgOhj.png';
    }else if(weather.includes('晴天') || weather.includes('白天') || weather.includes('大晴天') || weather.includes('好天气') || weather.includes('太阳') || weather.includes('晴')) {
      return 'https://z3.ax1x.com/2021/03/25/6XlBQ0.png';
    }else if(weather.includes('阴天') || weather.includes('灰暗') || weather.includes('阴')) {
      return 'https://z3.ax1x.com/2021/03/25/6XlDyV.png';
    }else if(weather.includes('雨天') || weather.includes('下雨') || weather.includes('阵雨') || weather.includes('雨')) {
      return 'https://z3.ax1x.com/2021/03/25/6XlyeU.png';
    }else {
      return 'https://z3.ax1x.com/2021/03/25/6XlBQ0.png';
    }


  }


}

module.exports = weather;