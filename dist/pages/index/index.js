let tools=require("../../utils/timeTools"),publicTools=require("../../utils/public"),requestData=require("../../utils/request"),app=getApp();Page({data:{dataBeautyArr:[],letterArr:[],isShowToastBox:"block",isOpenStampBox:!1,isShowLoading:!0,showTipPop:!1,imgUrls:[{title:"文明书写，不伤害他人",picUrl:"https://yundingxikj.oss-cn-beijing.aliyuncs.com/LetterStation/tips-send.png"},{title:"正视他人言论，吸取有益之处",picUrl:"https://yundingxikj.oss-cn-beijing.aliyuncs.com/LetterStation/tips-mailbox.png"},{title:"善于思考，学会日记",picUrl:"https://yundingxikj.oss-cn-beijing.aliyuncs.com/LetterStation/tips-diary.png"},{title:"集邮票，解成就，完成你的历练之路",picUrl:"https://yundingxikj.oss-cn-beijing.aliyuncs.com/LetterStation/tips-achievement.png"}],swiperIdx:0,beforeScrollTop:0,d_1_ani:{},flower:{}},toRelease(){wx.navigateTo({url:"/packageReleaseModule/pages/choosemodule/choosemodule"})},animationDownFunc(){let e=wx.createAnimation({delay:0,timingFunction:"ease-out",duration:700,transformOrigin:"10% 90% 0"}),t=wx.createAnimation({delay:0,timingFunction:"ease-out",duration:300});e.rotate(5).step(),t.opacity(.5).step(),this.setData({d_1_ani:e.export(),flower:t.export()})},animationUpFunc(){let e=wx.createAnimation({delay:0,timingFunction:"ease-out",duration:700,transformOrigin:"10% 90% 0"}),t=wx.createAnimation({delay:0,timingFunction:"ease-out",duration:300});e.rotate(-5).step(),t.opacity(1).step(),this.setData({d_1_ani:e.export(),flower:t.export()})},onPageScroll(e){var t=this.data.beforeScrollTop,e=e.scrollTop;0<e-t?(this.setData({beforeScrollTop:e}),this.animationDownFunc()):e-t<0&&(this.setData({beforeScrollTop:e}),this.animationUpFunc())},ToBeautyTap(e){e=e.detail.index;wx.navigateTo({url:"/packageWriteLetter/pages/beautyletter/beautyletter?articleIndex="+e})},ToSorrowTap(e){console.log(e);var t=e.currentTarget.dataset.id,e=e.currentTarget.dataset.senderopenid;wx.navigateTo({url:"/packageWriteLetter/pages/sorrowletter/sorrowletter?id="+t+"&senderOpenId="+e})},obtainLetter(){var e;null==app.globalData.userInfo&&0==this.data.isOpenStampBox?app.getUserProfile().then(e=>{var t=app.globalData.openid;requestData.indexLetters(t).then(a=>(console.log(a),new Promise((e,t)=>{let o=a.data.data;o.forEach(e=>{e.releaseTime=tools.indexPostBoxTime(e.releaseTime),e.content=25<e.content.length?e.content.substring(0,25)+"..":e.content,e.senderPenName=e.senderPenName.substring(0,8)}),this.setData({letterArr:o,isShowToastBox:"none",isOpenStampBox:!0}),e("success")}))).then(e=>{"success"==e&&wx.showToast({title:"小主，您的信件已送达~",image:"../../images/send-car.png"})})}):app.globalData.userInfo&&0==this.data.isOpenStampBox?(e=app.globalData.openid,requestData.indexLetters(e).then(a=>(console.log(a.data.data),new Promise((e,t)=>{let o=a.data.data;o.forEach(e=>{e.releaseTime=tools.indexPostBoxTime(e.releaseTime),e.content=25<e.content.length?e.content.substring(0,25)+"..":e.content,e.penName=e.senderPenName.substring(0,8)}),this.setData({letterArr:o,isShowToastBox:"none",isOpenStampBox:!0}),e("success")}))).then(e=>{"success"==e&&wx.showToast({title:"小主，您的信件已送达~",image:"../../images/send-car.png"})})):null!=app.globalData.userInfo&&1==this.data.isOpenStampBox&&wx.showToast({title:"暂时没有更多信件",image:"../../images/empty-letter.png",icon:"none"})},tipTap(){this.setData({showTipPop:!0})},onTipClose(){this.setData({showTipPop:!1})},understandTap(){this.setData({showTipPop:!1})},Start(){requestData.indexBeauty().then(o=>(console.log(o.data.data),new Promise((e,t)=>{if(404==o.statusCode||500==o.statusCode)e("error");else{let t=o.data.data;try{t.forEach(e=>{publicTools.renameKey(e,"articleTime","time"),publicTools.renameKey(e,"img_url","bgUrl"),publicTools.renameKey(e,"articleTitle","title"),e.time=tools.indexBeautyTime(e.time),e.title=8<e.title.length?e.title.substring(0,8)+" ..":e.title})}catch(e){console.log("---------------------------\x3e 美文异常"),t=publicTools.indexBeautyArticleError(),console.log(t)}this.setData({dataBeautyArr:t}),e("success")}}))).then(e=>{console.log(e),"error"==e?console.log("404 or 500，请检查请求"):this.setData({isShowLoading:!1})})},onLoad:function(e){console.log("index页面 ======> 监听页面加载"),this.Start()},onReady:function(){},onShow:function(){},onHide:function(){console.log("index页面 ======> 监听页面隐藏")},onUnload:function(){console.log("index页面 ======> 监听页面卸载")},onPullDownRefresh:function(){},onReachBottom:function(){},onShareAppMessage:function(){}});