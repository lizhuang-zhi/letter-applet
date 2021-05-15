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
const PackageMyInfoIndexInfo = prefix + '/user/getProfile';

// 获取个人数据分析内容
const MonthReport = prefix + '/user/getDataAnalysis';

// 获取历史信件
const HistoryLetter = prefix + '/letter/getLetterOfHistory';
// 文字违规判断
const TextLegal = prefix + '/user/isTextLegal';
// 获取历史发布内容
const HistoryRelease = prefix + '/user/getDataOfHistory';
// 根据吐槽id删除吐槽
const DeleteComplain = prefix + '/spitting-grooves/delete';
// 删除信件
const DeleteSorrowLetter = prefix + '/letter/changeLetterStateToDeleteById';
// 删除日记
const DeleteDiary = prefix + '/diary/changeDiaryStateToDeleteById';
// 获取官方审核推送
const OfficialCheck = prefix + '/user/getOfficialMsg';
// 获取所有邮票
const StampCollection = prefix + '/getAllStampForAlbum';
// 获取个人成就
const UserAchieve = prefix + '/getAllAchieve';
// 获取个人邮票
const UserStamp = prefix + '/getAllStamp';
// 获取时间线数据
const UserTimeLine = prefix + '/user/getTimelineData';

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
  },
  // 获取个人数据分析内容
  getMonthReport() {
    return MonthReport;
  },
  // 获取历史信件
  getHistoryLetter() {
    return HistoryLetter;
  },
  // 文字违规判断
  getTextLegal() {
    return TextLegal;
  },
  // 获取历史发布内容
  getHistoryRelease() {
    return HistoryRelease;
  },
  // 根据吐槽id删除吐槽
  getDeleteComplain() {
    return DeleteComplain;
  },
  // 删除信件
  getDeleteSorrowLetter() {
    return DeleteSorrowLetter;
  },
  // 删除日记
  getDeleteDiary() {
    return DeleteDiary;
  },
  // 获取官方审核推送
  getOfficialCheck() {
    return OfficialCheck;
  },
  // 获取所有邮票
  getStampCollection() {
    return StampCollection;
  },
  // 获取个人成就
  getUserAchieve() {
    return UserAchieve;
  },
  // 获取个人邮票
  getUserStamp() {
    return UserStamp;
  },
  // 获取时间线数据
  getUserTimeLine() {
    return UserTimeLine;
  }



}



module.exports = url;