/* 
  1. 在api.js定义请求路径
    const 页面+具体部分 = prefix + '复制接口'；
    再在url对象中定义一个 get + 页面 + 具体部分 () { return 页面 + 具体部分 ;}
  2. 在request.js中定义方法，请求数据
    在requestData对象中，添加请求方法（ 页面 + 请求部分 ）（小驼峰）
    * 改变url
    * 有请求参数的需要在data中写出来
  3. 在对应的页面中引入request.js，并调用其方法获取数据
    requestData.它的方法().then(res => {
      console.log(res);

      // 处理数据
      ...

      
    }) 


  // 接口配置注意事项
  1. 每个接口的id不用传
  2. sgid是针对于此条评论的id
  

*/

// 请求路径前缀
const prefix = 'https://rayss.host';

// 用户注册
const userAccount = prefix + '/user/registeredUser';
// 用户退出，更新登陆时间
const UserSignOut = prefix + '/user/updateOutDate';

// 首页美文
const IndexBeautyUrl = prefix + '/beauty_article/getBeautyArticleVo';
// 首页三封信件
const IndexLetters = prefix + '/letter/getLetter';
// 首页点击信件（获取信件信息）
const Sorrowletter = prefix + '/letter/getDetailOfLetterById';

// 获取美文内容
const Beautyletter = prefix + '/beauty_article/get_beauty_article';

// 广场吐槽大会
const SquareComplain = prefix + '/spitting-grooves/selectAllVo';

// 吐槽大会的内容详情页
const Complainletter = prefix  + '/spitting-grooves/selectDetailsById';
// 吐槽大会的内容详情页评论集合 
const ComplainletterComment = prefix + '/comments/selectAll';
// 吐槽大会的内容详情页中发送评论
const ComplainletterSendComment = prefix + '/comments/insert';

// 广场页面公开日记
const SquareDiary = prefix + '/diary/getAllDiary';
// 广场日记具体内容
const SquareDiaryDetail = prefix + '/diary/getDetailForDiary'; 
// 广场日记浏览量
const SquareDiaryLooksNum = prefix + '/diary/setViews';


// 保存信件 
const LettertypeLetterSend = prefix + '/letter/send';

// 保存日记
const LettertypeDiarySend = prefix + '/diary/saveDiary';

// 保存吐槽 
const LettertypeComplainSend = prefix + '/spitting-grooves/insert';

//信箱页面回复信件
const IndexStampReply = prefix + '/letter/reply';

// 获取未读信件数量
const MailboxNumberOfLetter = prefix + '/letter/getNumberOfLetter';

// 获取未读信件
const Replylist = prefix + '/letter/getAllUnreadLetter';

// 获取具体信件信息（回信列表点进去的）
const Replyletter  = prefix + '/letter/getDetailOfLetter';

//获取评论信息列表
const MailboxMessageList = prefix + '/user/getAllUserCommentVo';

// 获取历史发布数量
const PackageMyInfoIndexInfo = prefix + '/user/getNumOfHistory';

// 返回对象
let url = {
  // 用户注册
  userAccountApi() {
    return userAccount;
  },
  // 用户退出，更新登陆时间
  getUserSignOut() {
    return UserSignOut;
  },
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
  },
  //广场页面公开日记
  getSquareDiary() {
    return SquareDiary;
  },
  // 吐槽大会的内容详情页中发送评论
  getComplainletterSendComment() {
    return ComplainletterSendComment;
  },
  // 广场日记具体内容
  getSquareDiaryDetail() {
    return SquareDiaryDetail;
  },
  // 保存信件
  getLettertypeLetterSend() {
    return LettertypeLetterSend;
  },
  // 保存日记
  getLettertypeDiarySend() {
    return LettertypeDiarySend;
  },
  // 保存吐槽 
  getLettertypeComplainSend() {
    return LettertypeComplainSend;
  },
  //回复信件
  getIndexStampReply(){
    return IndexStampReply;
  },
  // 获取未读信件数量
  getMailboxNumberOfLetter() {
    return MailboxNumberOfLetter;
  },
  // 获取未读信件
  getReplylist() {
    return Replylist;
  },
  // 获取具体信件信息
  getReplyletter() {
    return Replyletter;
  },
  // 广场日记浏览量
  getSquareDiaryLooksNum() {
    return SquareDiaryLooksNum;
  },
  //获取评论信息
  getMailboxMessageList(){
    return MailboxMessageList;
  },
  // 首页点击信件（获取信件信息）
  getSorrowletter() {
    return Sorrowletter;
  },
  // 获取历史发布数量
  getPackageMyInfoIndexInfo() {
    return PackageMyInfoIndexInfo;
  }
}



module.exports = url;