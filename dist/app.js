let requestData=require("./utils/request");App({globalData:{openid:null,token:"",userInfo:null,pixelRatio:0},onLaunch:function(){console.log("App  --\x3e onLaunch执行了");let o=this;wx.getStorage({key:"userInfo",success:e=>{console.log(e.data),o.globalData.userInfo=e.data,o.globalData.openid=e.data.openId},fail:e=>{console.log("---- 缓存中无用户信息 ----")}}),wx.getStorage({key:"mailboxMessageList",success:e=>{console.log(e)},fail:e=>{console.log(e);e=new Date;wx.setStorage({key:"mailboxMessageList",data:{messageList:[3,3,4,0],nowTime:e}})}}),wx.getStorage({key:"userBackLetterNum",success:e=>{console.log(e)},fail:e=>{console.log(e),wx.setStorage({key:"userBackLetterNum",data:{letterBackNum:1,judgeTime:new Date}})}}),wx.getSystemInfo({success:e=>{console.log(e);e=e.pixelRatio;o.globalData.pixelRatio=e}}),wx.loadFontFace({global:!0,family:"custom",source:'url("https://yundingxikj.oss-cn-beijing.aliyuncs.com/LetterStation/simkai.ttf?versionId=CAEQFhiBgICGk.K9yxciIDRmM2ZmNzI2MjRkMDRkMWI5MTkyYTdjZjg0ZDMyN2Ri")',success:e=>{console.log("!!!!!!! 字体设置成功 !!!!!!!")},fail:e=>{console.log("------- 字体设置失败 --------")}})},onHide(){console.log("App  --\x3e onHide执行了"),this.updateDiaryLooksNum();var e=this.globalData.openid;console.log(e),null!=e&&requestData.userSignOut(e).then(e=>{console.log(e)})},onShow(){console.log("App  --\x3e onShow执行了")},getUserOpenId(){var t=this;return new Promise(function(o,s){wx.login({success:function(e){e=e.code;wx.request({url:"https://rayss.host/user/getKey",data:{jsCode:e},method:"GET",success:function(e){console.log(e);e=JSON.parse(e.data.data);t.globalData.openid=e.openid,t.accountUserInfo().then(e=>{o("success")})},fail:e=>{console.log(e),s("error")}})}})})},accountUserInfo(){var e=this.globalData.userInfo;let s=Object.assign(e,{openId:this.globalData.openid,state:0});return wx.setStorageSync("userInfo",s),console.log(s),wx.setStorageSync("officialNewsReportList",{reportList:[],time:(new Date).getTime(),unReadNum:0}),new Promise((o,e)=>{requestData.userAccount(s).then(e=>{o("success")})})},getUserProfile(){let s=this;return new Promise((o,e)=>{wx.getSetting({withSubscriptions:!0,success(e){console.log(e.subscriptionsSetting),e.authSetting["scope.userInfo"]?wx.getUserProfile({desc:"获取用户信息",success:e=>{console.log(e),s.globalData.userInfo=e.userInfo,s.getUserOpenId().then(e=>{o("获取用户信息成功")})},fail:e=>{console.log(e)}}):wx.authorize({scope:"scope.userInfo",success:e=>{console.log(e)},fail:e=>{console.log(e)}})}})})},updateDiaryLooksNum(){return new Promise((o,e)=>{wx.getStorage({key:"changeDiaryArr",success:e=>{console.log(e);e=e.data;requestData.squareDiaryLooksNum(e).then(e=>{console.log(e),wx.removeStorage({key:"changeDiaryArr",success:e=>{console.log("清理公开日记浏览量本地缓存")}}),o("success")})},fail:e=>{console.log(e),o("success")}})})}});