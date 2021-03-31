// 请求路径前缀
const prefix = 'https://rayss.host/';


// 首页美文
const IndexBeautyUrl = prefix + '/beauty_article/getBeautyArticleVo';
// 首页三封信件
const IndexLetters = prefix + '/letter/getLetter';

// 获取美文内容
const Beautyletter = prefix + '/beauty_article/get_beauty_article';




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
  }






}



module.exports = url;