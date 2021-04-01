// 请求路径前缀
const prefix = 'https://rayss.host/';


// 首页美文
const IndexBeautyUrl = prefix + '/beauty_article/getBeautyArticleVo';
// 首页三封信件
const IndexLetters = prefix + '/letter/getLetter';

// 获取美文内容
const Beautyletter = prefix + '/beauty_article/get_beauty_article';

// 广场吐槽大会
const SquareComplain = prefix + '/spitting-grooves/selectAllVo';

// 吐槽大会的内容详情页
const Complainletter = prefix  + '/spitting-grooves/selectDetailsById';
// 吐槽大会的内容详情页评论集合 
const ComplainletterComment = prefix + '/comments/selectAll';



// 返回对象
let url = {
  // 首页美文
  getIndexBeautyUrl() {
    return IndexBeautyUrl;
  },
  // 首页三封信件
  getIndexLetters() {
    return IndexLetters;
  },
  // 获取美文内容
  getBeautyletter() {
    return Beautyletter;
  },
  // 广场吐槽大会
  getSquareComplain() {
    return SquareComplain;
  },
  // 吐槽大会的内容详情页
  getComplainletter() {
    return Complainletter;
  },
  // 吐槽大会的内容详情页评论集合
  getComplainletterComment() {
    return ComplainletterComment;
  }






}



module.exports = url;