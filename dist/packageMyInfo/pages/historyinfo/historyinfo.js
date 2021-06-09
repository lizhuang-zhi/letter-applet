import Dialog from"../../../miniprogram_npm/@vant/weapp/dialog/dialog";let weather=require("../../../utils/weatherTools"),timeTools=require("../../../utils/timeTools"),requestData=require("../../../utils/request"),app=getApp();Page({data:{activeTabIndex:0,isShow:!0,letterArr:[],diaryArr:[],complainArr:[],d_1_ani:{},beforeScrollTop:0},animationDownFunc(){let t=wx.createAnimation({delay:0,timingFunction:"ease-out",duration:700,transformOrigin:"55% 55% 0"}),e=wx.createAnimation({delay:0,timingFunction:"ease-out",duration:700,transformOrigin:"90% 0 0"}),a=wx.createAnimation({delay:0,timingFunction:"ease-out",duration:700}),i=wx.createAnimation({delay:0,timingFunction:"ease-out",duration:300});t.rotate(5).step(),e.rotate(5).step(),a.translate(3,-3).step(),i.opacity(1).step(),this.setData({d_1_ani:t.export(),u_5_ani:e.export(),d_6_ani:a.export(),flower:i.export()})},animationUpFunc(){let t=wx.createAnimation({delay:0,timingFunction:"ease-out",duration:700,transformOrigin:"55% 55% 0"}),e=wx.createAnimation({delay:0,timingFunction:"ease-out",duration:700,transformOrigin:"90% 0 0"}),a=wx.createAnimation({delay:0,timingFunction:"ease-out",duration:700}),i=wx.createAnimation({delay:0,timingFunction:"ease-out",duration:300});t.rotate(-15).step(),e.rotate(-15).step(),a.translate(-3,3).step(),i.opacity(.5).step(),this.setData({d_1_ani:t.export(),u_5_ani:e.export(),d_6_ani:a.export(),flower:i.export()})},scrollTap(t){var e=this.data.beforeScrollTop,t=t.detail.scrollTop;0<t-e?(this.setData({beforeScrollTop:t}),this.animationDownFunc()):t-e<0&&(this.setData({beforeScrollTop:t}),this.animationUpFunc())},ToSorrowTap(t){var e=t.currentTarget.dataset.openId,t=t.currentTarget.dataset.id;requestData.sorrowletter(t,e).then(i=>(console.log(i.data.data),new Promise((t,e)=>{let a=i.data.data;a.releaseTime=timeTools.indexPostBoxTime(a.releaseTime),this.setData({letterObj:a}),t("success")}))).then(t=>{this.setData({showContent:!0})})},deleteSorrowTap(t){let e=t.currentTarget.dataset.id;Dialog.confirm({title:"确认删除",message:"小主，你确定要删除吗？"}).then(()=>{wx.showLoading({title:"加载中.."}).then(t=>{this.deleteSorrow(e).then(t=>{this.Start(app.globalData.openid),wx.hideLoading({})})})}).catch(()=>{})},deleteSorrow(t){return requestData.deleteSorrowLetter(t)},onCloseContent(){this.setData({showContent:!1})},ToDiaryContent(t){t=t.currentTarget.dataset.id;wx.navigateTo({url:"/packageWriteLetter/pages/diaryletter/diaryletter?id="+t})},deleteDiaryTap(t){let e=t.currentTarget.dataset.id;Dialog.confirm({title:"确认删除",message:"小主，你确定要删除吗？"}).then(()=>{wx.showLoading({title:"加载中.."}).then(t=>{this.deleteDiary(e).then(t=>{console.log(t),this.Start(app.globalData.openid),wx.hideLoading({})})})}).catch(()=>{})},deleteDiary(t){return requestData.deleteDiary(t)},ToComplainTap(t){let e=t.currentTarget.dataset.id;console.log(e),app.globalData.userInfo?wx.navigateTo({url:"/packageWriteLetter/pages/complaintletter/complaintletter?id="+e}):app.getUserProfile().then(t=>{wx.navigateTo({url:"/packageWriteLetter/pages/complaintletter/complaintletter?id="+e})})},deleteComplainTap(t){console.log(t);let e=t.currentTarget.dataset.id;Dialog.confirm({title:"确认删除",message:"小主，你确定要删除吗？"}).then(()=>{wx.showLoading({title:"加载中.."}).then(t=>{this.deleteComplain(e).then(t=>{this.Start(app.globalData.openid),wx.hideLoading({})})})}).catch(()=>{})},deleteComplain(t){return requestData.deleteComplain(t)},Start(t){requestData.historyRelease(t).then(t=>{console.log(t.data.data);let e=t.data.data;e.diaryList.forEach(t=>{t.weather=weather.weatherWordsToPic(t.weather),t.date=timeTools.squareDiaryTime(t.date)}),e.letterList.forEach(t=>{t.releaseTime=timeTools.indexPostBoxTime(t.releaseTime)}),this.setData({letterArr:e.letterList,diaryArr:e.diaryList,complainArr:e.spittingGroovesList})})},onLoad:function(t){this.setData({activeTabIndex:parseInt(t.activeTabIndex)}),this.Start(app.globalData.openid)},onReady:function(){},onShow:function(){},onHide:function(){},onUnload:function(){},onPullDownRefresh:function(){},onReachBottom:function(){},onShareAppMessage:function(){}});