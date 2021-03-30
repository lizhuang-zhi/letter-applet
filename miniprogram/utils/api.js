// 请求路径前缀
const prefix = 'https://rayss.host/';


// 首页美文
const IndexBeautyUrl = prefix + '/get_beauty_article';
// 首页三封信件
const IndexLetters = prefix + 'letter/getLetter'

// 返回对象
let url = {
  // 首页美文
  getIndexBeautyUrl() {
    return IndexBeautyUrl;
  },
  // 首页三封信件
  getIndexLetters() {
    return IndexLetters;
  }






}



module.exports = url;