let requestData=require("../../../utils/request"),app=getApp();Page({data:{items_1:[{value:1,name:"从未出现"},{value:2,name:"偶尔出现"},{value:3,name:"经常出现"}],items_2:[{value:1,name:"非常有帮助"},{value:2,name:"有一定帮助"},{value:3,name:"没有帮助"}],firstQuesVal:0,SecQuesVal:0,playValue:0,uiValue:0,adviseValue:"",isBtnLoading:!1},radioChange_1(t){console.log("选择第一个问题，携带value值为：",parseInt(t.detail.value));const l=this.data.items_1;for(let a=0,e=l.length;a<e;++a)l[a].checked=l[a].value===parseInt(t.detail.value);this.setData({items_1:l,firstQuesVal:t.detail.value})},radioChange_2(t){console.log("选择第二个问题，携带value值为：",parseInt(t.detail.value));const l=this.data.items_2;for(let a=0,e=l.length;a<e;++a)l[a].checked=l[a].value===parseInt(t.detail.value);this.setData({items_2:l,SecQuesVal:t.detail.value})},onPlayValueChange(a){console.log(a.detail),this.setData({playValue:a.detail})},onUiValueChange(a){console.log(a.detail),this.setData({uiValue:a.detail})},bindTextAreaInput:function(a){console.log(a.detail.value),this.setData({adviseValue:a.detail.value})},submitTap(){this.setData({isBtnLoading:!0});var a=this,e=a.data.firstQuesVal,t=a.data.SecQuesVal,l=a.data.playValue,i=a.data.uiValue,s=a.data.adviseValue,n=app.globalData.openid;0==e||0==t||0==l||0==i||""==s?(wx.showToast({title:"小主，信息还没填完呢~",icon:"none"}),this.setData({isBtnLoading:!1})):(a.storeInfo(),requestData.investigate({interestScore:l,isHelp:t,isIllegal:e,openId:n,otherSpeech:s,pageScore:i}).then(a=>{console.log(a.data),this.setData({isBtnLoading:!1}),wx.showToast({title:"提交成功",duration:1300});let e=setTimeout(()=>{wx.navigateBack({url:"/packageMyInfo/pages/latestevents/latestevents"}),clearTimeout(e)},1300)}))},storeInfo(){let a=this.data.items_1,e=this.data.items_2;var t=this.data.playValue,l=this.data.uiValue,i=this.data.adviseValue;a.forEach(a=>{a.disabled=!0}),e.forEach(a=>{a.disabled=!0});try{wx.setStorageSync("investigation",{firArr:a,secArr:e,play:{value:t,playValueReadOnly:!0},ui:{value:l,uiValueReadOnly:!0},advise:{value:i,adviseDisabled:!0},btn:{btnDisabled:!0}})}catch(a){console.log("存储调查问卷异常")}},Start(){wx.showLoading({title:"加载中.."}),wx.getStorage({key:"investigation",success:a=>{console.log(a.data);a=a.data;a&&(this.setData({items_1:a.firArr,items_2:a.secArr,playValueReadOnly:a.play.playValueReadOnly,playValue:a.play.value,uiValueReadOnly:a.ui.uiValueReadOnly,uiValue:a.ui.value,adviseDisabled:a.advise.adviseDisabled,adviseValue:a.advise.value,btnDisabled:a.btn.btnDisabled}),wx.hideLoading({}))},fail:a=>{console.log(a),wx.hideLoading({})}})},onLoad:function(a){this.Start()},onReady:function(){},onShow:function(){},onHide:function(){},onUnload:function(){},onPullDownRefresh:function(){},onReachBottom:function(){},onShareAppMessage:function(){}});