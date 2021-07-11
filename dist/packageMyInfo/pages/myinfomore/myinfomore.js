import echarts from"../../ec-canvas/echarts";let requestData=require("../../../utils/request"),pubTools=require("../../../utils/public"),app=getApp();Page({data:{ec:{lazyLoad:!0},ec_sorrow:{lazyLoad:!0},ec_diary:{lazyLoad:!0},ec_complain:{lazyLoad:!0},emotionArr:[]},handleData(t){console.log(t),this.setData({all_chart_data:t.firstValue,sorrow_chart_data:t.lastValue.letter,diary_chart_data:t.lastValue.diary,complain_chart_data:t.lastValue.spit_groove}),this.init_echarts(),wx.hideLoading({})},setStringData(t){var e=t.letter,a=t.diary,o=t.spit_groove,i=t.letter.reduce((t,e)=>t+e.value,0),r=t.diary.reduce((t,e)=>t+e.value,0),n=t.spit_groove.reduce((t,e)=>t+e.value,0),t=pubTools.dataAnalysisBackString(t);this.setData({emotionArr:[{tit:"解忧",cont:"小主，上个月一共发布了"+i+"篇解忧，其中"+e[0].value+"篇的情感倾向为愤怒状态，"+e[1].value+"篇为低落状态，"+e[2].value+"篇为温和状态，"+e[3].value+"篇为喜悦状态。"},{tit:"日记",cont:"小主，上个月一共发布了"+r+"篇日记，其中"+a[0].value+"篇的情感倾向为愤怒状态，"+a[1].value+"篇为低落状态，"+a[2].value+"篇为温和状态，"+a[3].value+"篇为喜悦状态。"},{tit:"吐槽",cont:"小主，上个月一共发布了"+n+"篇吐槽，其中"+o[0].value+"篇的情感倾向为愤怒状态，"+o[1].value+"篇为低落状态，"+o[2].value+"篇为温和状态，"+o[3].value+"篇为喜悦状态。"},{tit:"小结",cont:"亲爱的小主，通过数据分析，上月您的情绪倾向为"+t.str}],isShowAdvise:t.index})},init_echarts:function(){this.echartsAllComponnet.init((t,e,a)=>{const o=echarts.init(t,null,{width:e,height:a,devicePixelRatio:app.globalData.pixelRatio});return o.setOption(this.getAllChartOption()),o}),this.echartsSorrowComponnet.init((t,e,a)=>{const o=echarts.init(t,null,{width:e,height:a,devicePixelRatio:app.globalData.pixelRatio});return o.setOption(this.getSorrowChartOption()),o}),this.echartsDiaryComponnet.init((t,e,a)=>{const o=echarts.init(t,null,{width:e,height:a,devicePixelRatio:app.globalData.pixelRatio});return o.setOption(this.getDiaryChartOption()),o}),this.echartsComplainComponnet.init((t,e,a)=>{const o=echarts.init(t,null,{width:e,height:a,devicePixelRatio:app.globalData.pixelRatio});return o.setOption(this.getComplainChartOption()),o})},getAllChartOption:function(){return{legend:{},tooltip:{},color:["#ED6B63","#4C84F7","#F0934F"],dataset:{source:this.data.all_chart_data},xAxis:{type:"category"},yAxis:{},series:[{type:"bar"},{type:"bar"},{type:"bar"}]}},getSorrowChartOption:function(){return{legend:{top:"bottom"},tooltip:{trigger:"item"},color:["#F0934F","#6CD69C","#4C84F7","#ED6B63"],series:[{name:"发布数量",type:"pie",top:"-10%",radius:[20,80],center:["50%","50%"],roseType:"area",itemStyle:{borderRadius:0},data:this.data.sorrow_chart_data,emphasis:{itemStyle:{shadowBlur:10,shadowOffsetX:0,shadowColor:"rgba(0, 0, 0, 0.5)"}}}]}},getDiaryChartOption:function(){return{legend:{top:"bottom"},tooltip:{trigger:"item"},color:["#F0934F","#6CD69C","#4C84F7","#ED6B63"],series:[{name:"发布数量",type:"pie",top:"-10%",radius:[20,80],center:["50%","50%"],roseType:"area",itemStyle:{borderRadius:0},data:this.data.diary_chart_data,emphasis:{itemStyle:{shadowBlur:10,shadowOffsetX:0,shadowColor:"rgba(0, 0, 0, 0.5)"}}}]}},getComplainChartOption:function(){return{legend:{top:"bottom"},tooltip:{trigger:"item"},color:["#F0934F","#6CD69C","#4C84F7","#ED6B63"],series:[{name:"发布数量",type:"pie",top:"-10%",radius:[20,80],center:["50%","50%"],roseType:"area",itemStyle:{borderRadius:0},data:this.data.complain_chart_data,emphasis:{itemStyle:{shadowBlur:10,shadowOffsetX:0,shadowColor:"rgba(0, 0, 0, 0.5)"}}}]}},getChartData:function(e){wx.getStorage({key:"officialNewsReportList",success:t=>{t=t.data.reportList[e].data;this.handleData(t),this.setStringData(t.lastValue)},fail:t=>{console.log(t)}})},submitTap(){wx.navigateToMiniProgram({appId:"wx8afd72b51ec0f092"})},onLoad:function(t){wx.showLoading({title:"数据加载中~"}),this.echartsAllComponnet=this.selectComponent("#all_chart"),this.echartsSorrowComponnet=this.selectComponent("#sorrow_chart"),this.echartsDiaryComponnet=this.selectComponent("#diary_chart"),this.echartsComplainComponnet=this.selectComponent("#complain_chart"),this.getChartData(t.reportIndex)},onReady:function(){},onShow:function(){},onHide:function(){},onUnload:function(){},onPullDownRefresh:function(){},onReachBottom:function(){},onShareAppMessage:function(){}});