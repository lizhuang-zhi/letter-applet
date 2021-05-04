let tools = {
  // 获取随机笔名
  RandomPenName() {
    // 生成随机数(0 - 11)
    let randomNum = Math.floor(Math.random() * 12);
    // 存储命名
    let name = '';
    switch (randomNum) {
      case 0:
        name = "消失的胡辣汤";
        break;
      case 1:
        name = "周一的蚂蚁";
        break;
      case 2:
        name = "惆怅的兰花";
        break;
      case 3:
        name = "忐忑的乌龟";
        break;
      case 4:
        name = "飞翔的土拨鼠";
        break;
      case 5:
        name = "盛夏的垂柳";
        break;
      case 6:
        name = "难过的豆腐";
        break;
      case 7:
        name = "迷人的代码";
        break;
      case 8:
        name = "漫步的巴比龙";
        break;
      case 9:
        name = "伤心的蝴蝶";
        break;
      case 10:
        name = "快乐的小飞侠";
        break;
      case 11:
        name = "坚韧的犀牛";
        break;
    }

    return name;
  }


}

module.exports = tools;