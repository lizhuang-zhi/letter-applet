let tools = {
  // 获取随机笔名
  RandomPenName() {
    // 生成随机数
    let randomNum = Math.floor(Math.random() * 6);
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
    }

    return name;
  }


}

module.exports = tools;