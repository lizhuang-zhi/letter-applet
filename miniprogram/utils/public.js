let publicTools = {

  // 更改对象的'键名'
  renameKey(obj, old_key, new_key) {
    // 检查如果 old key = new key   
    if (old_key !== new_key) {
      //修改对象的旧键提取描述
      Object.defineProperty(obj, new_key,
        Object.getOwnPropertyDescriptor(obj, old_key));
      delete obj[old_key]; // 删除旧键
    }
  },

  //截取信件内容 keo
  Interceptletterline(lettercontent, lettercontentArr, lineNum) {
    // 行字数
    let start = 0;
    let end = lineNum;
    // 截取每行，放入数组中
    for (var i = 0; i < lettercontent.length / lineNum; i++) {
      lettercontentArr[i] = lettercontent.substring(start, end);
      start += lineNum;
      end += lineNum;
    }
    return lettercontentArr;
  },

  // 首页美文集合（当后台加载异常时）
  indexBeautyArticleError() {
    // 存储背景图的数组
    let arrList = [{
        bgUrl: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2738668818,2590397852&fm=26&gp=0.jpg',
        index: '2-0',
        time: '19 Mar.2021',
        title: '别做假装很努力的人'
      },
      {
        bgUrl: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3569081884,3982453064&fm=26&gp=0.jpg',
        index: '2-1',
        time: '11 Apr.2021',
        title: '经典美文段落摘抄'
      },
      {
        bgUrl: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1284039363,2759537733&fm=26&gp=0.jpg',
        index: '2-2',
        time: '23 Apr.2021',
        title: '多给几秒镜头，给出不一样的人生'
      },
    ];
    // 显示标题处理
    arrList.forEach(item => {
      item.title = item.title.length > 8 ? item.title.substring(0, 8) + ' ..' : item.title;
    })
    return arrList;
  },
  // 点击进入美文内容（附和上一个方法）
  beautyArticleContent(index) {
    if (index == '2-0') {
      return {
        articleContent: '我们身边总是不乏这样的人，每天都能看到他们在朋友圈花式秀努力：昨天是加班到12点的公司外景，今天是7月长长的书单，明天是一本崭新的单词本，后天是健身房里挥汗如雨的身影。可是一个上进的朋友圈背后的情况往往是这样的：加班到半夜是因为白天一直刷手机，从不按时完成任务；列的每月书单，在书店促销时一次性买回来，却只是拍照发个微博；每次一晒完单词本，就扔开英语书去回复朋友圈里的点赞和评论；为了鞭策自己多读书买个kindle，用了3天就放着积灰；看到别人的马甲线心生羡慕，买个瑜伽垫过了一年还是崭新的。这可能是大部分年轻人最普遍的痛苦：“为什么我已经这么努力了，还是不行？”可能他们没有意识到，他们眼里的努力，只是在安慰自己罢了。',
        articleTag: '励志名言',
        articleTime: '2021-03-19',
        articleTitle: '别做假装很努力的人',
        days: '周五',
        img_url: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2738668818,2590397852&fm=26&gp=0.jpg'
      }
    } else if (index == '2-1') {
      return {
        articleContent: `路漫漫其修远兮，吾将上下而求索。前行的途中，要拂去急于求成的浮躁，不徐不疾，戒骄戒躁，盈一颗安然恬淡的心，一步一个脚印，铿锵前行。都说世相迷离，我们常常在如烟世海中丢失了自己，而凡尘缭绕的烟火又总是呛得你我不敢自由呼吸。千帆过尽，回首当年，那份纯净的梦想早已渐行渐远，如今岁月留下的，只是满目荒凉。每个人的一生都在演绎一幕又一幕的戏，或真或假、或长或短、或喜或悲。你在这场戏中扮演的那个我，我在那场戏里扮演这个你，各自微笑，各自流泪。一场戏的结束意味着另一场戏的开始，所以我们不必过于沉浸在昨天。你记住也好，你忘了也罢，生命本是场轮回，来来去去，何曾有过丝毫的停歇。行走于纷扰红尘，诱惑太多，负累太重，记着时时拂拭心灵，掸去尘埃，盈一颗澄澈通透的心，穿过岁月的长廊，安然前行。这个世界我曾经来过，我享受过阳光的温暖，轻嗅过花朵的芬芳;欣赏过江南塞北的风景，领略过一年四季的风光。无论生活塞给我多少的不如意，我依然感恩这个曾经给予我温暖和美丽的世界。`,
        articleTag: '美文摘抄',
        articleTime: '2021-04-11',
        articleTitle: '经典美文中的优美文段摘抄',
        days: '周日',
        img_url: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3569081884,3982453064&fm=26&gp=0.jpg'
      }
    } else if (index == '2-2') {
      return {
        articleContent: `多给几秒镜头，给出不一样的人生几秒钟在人的生命长河中微不足道，也许你打几个喷嚏的功夫，它就会远远地消失了。恐怕许多人都会起疑问：几秒钟的时间太短了，它能做什么呢？然而，它有时会改变人的一生。也许很多人都不相信。那么，就拿我在上个月遇到的一件小事来说吧。到今年为止,我在电视台里已做了十年的电视专辑编导。有一次我去北大采访一位安徽籍的教授。走在阳光充足的校园里，迎面突然走来一位挎着书包的女学生。她笑着问我：是不是从安徽来的？我说：是的。她又问：你还认识我吗？可是在脑海的记忆中我始终找不到这一张面孔。于是，她提醒道：在四年前的一次征文大赛中，她荣获了三等奖。经她这么一提醒，我才记得那一次征文活动，那天领奖大会我带着摄像机亲自到场，站在主席台上的获奖选手比较多。要是换上别的编导，恐怕只会把镜头对准第一、第二名拍拍就完事了。然而，我在摄制电视专题片中始终有这么一个习惯，那些有脸有面的人我给他们的镜头却很小气；相反，我总喜欢把镜头多给那些普通的人。在编辑那个专题片的过程中，我也考虑了多次，最后还是尽量地多给了每个获奖选手几秒钟的镜头。虽然节目做得有点拖，但是我还想：对于那些获奖的中学生来说，这是非常大的人生鼓励。那位北大的女学生感激地对我说：正是那次她在电视屏幕上出现了几秒钟之后，许多亲戚和四周邻居遇到她都纷纷夸奖她上了电视了。那一阵子，她深深品尝到被人夸奖的幸福感。然而，她的心里明白：自己英语和数学的成绩并不好，要考上一个名牌大学不是一件容易的事。于是她刻苦学习，去年终于考进了北大中文系。她这么一说，对我触动很大。别说多给几秒，就是多给几个电视特写，对于我们这些做电视编导的人来说，也是轻而易举的小事。然而我没想到的是：正是那短短的几秒，改变了她的一生。在我们电视的时间概念中：比一秒还要短的是帧，二十五帧等于一秒。清醒地用好我们手中的每一帧，激励更多的人，这也许是我们做人的一个准则。`,
        articleTag: '美文摘抄',
        articleTime: '2021-04-23',
        articleTitle: '多给几秒镜头，给出不一样的人生',
        days: '周五',
        img_url: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1284039363,2759537733&fm=26&gp=0.jpg'
      }
    }
  },

  // 数据分析返回情绪
  dataAnalysisBackString(dataObj) {
    // 获取日记数组
    let diaryArr = dataObj.diary.map((val, index) => {
      return val.value;
    });
    // 获取解忧数组
    let sorrowArr = dataObj.letter.map((val, index) => {
      return val.value;
    });
    // 获取吐槽数组
    let complainArr = dataObj.spit_groove.map((val, index) => {
      return val.value;
    });
    let angry = diaryArr[0] + sorrowArr[0] + complainArr[0];
    let down = diaryArr[1] + sorrowArr[1] + complainArr[1];
    let normal = diaryArr[2] + sorrowArr[2] + complainArr[2];
    let happy = diaryArr[3] + sorrowArr[3] + complainArr[3];
    
    // 获取最大值索引
    let bigestIndex = 0;
    let bigNum = angry;
    [normal, down, angry, happy].forEach((val,index) =>{
      if(val > bigNum) {
        bigestIndex = index;
        bigNum = val;
      }
    });
    return this.dataBaseString(bigestIndex);
  },
  // 情绪文字数据集
  dataBaseString(index) {
    // 返回语句
    let str = '';
    switch (index) {
      case 0:
        str = '正常，状态良好，希望小主继续保持这样的情绪，适当娱乐，活跃心情。';
        break;
      case 1:
        str = '消极，状态不佳，希望小主调整作息，适当锻炼，恢复良好状态。';
        break;
      case 2:
        str = '愤怒，状态过激，希望小主平和心态，调整状态，安抚情绪。';
        break;
      case 3:
        str = '积极，状态良好，希望小主继续保持这样的情绪。';
        break;
      default:
        break;
    }
    return str;
  }


}

module.exports = publicTools;