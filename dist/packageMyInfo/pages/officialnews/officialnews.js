let timeTools=require("../../../utils/timeTools"),app=getApp();Page({data:{monthReportList:[]},ToCheckOutReport(o){o=o.currentTarget.dataset.index;console.log(o),wx.navigateTo({url:"/packageMyInfo/pages/myinfomore/myinfomore?reportIndex="+o})},Start(){wx.getStorage({key:"officialNewsReportList",success:o=>{console.log(o);let t=o.data.reportList;t.forEach(o=>{o.time=timeTools.mailboxShowMessageTime(o.time)}),this.setData({monthReportList:t})},fail:o=>{console.log(o)}})},onLoad:function(o){this.Start()},onReady:function(){},onShow:function(){},onHide:function(){},onUnload:function(){},onPullDownRefresh:function(){},onReachBottom:function(){},onShareAppMessage:function(){}});