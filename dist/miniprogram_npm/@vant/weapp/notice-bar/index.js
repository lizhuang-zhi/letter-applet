"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var component_1=require("../common/component");component_1.VantComponent({props:{text:{type:String,value:"",observer:function(){var t=this;wx.nextTick(function(){t.init()})}},mode:{type:String,value:""},url:{type:String,value:""},openType:{type:String,value:"navigate"},delay:{type:Number,value:1},speed:{type:Number,value:50,observer:function(){var t=this;wx.nextTick(function(){t.init()})}},scrollable:{type:Boolean,value:!0},leftIcon:{type:String,value:""},color:String,backgroundColor:String,background:String,wrapable:Boolean},data:{show:!0},created:function(){this.resetAnimation=wx.createAnimation({duration:0,timingFunction:"linear"})},destroyed:function(){this.timer&&clearTimeout(this.timer)},methods:{init:function(){var a=this;Promise.all([this.getRect(".van-notice-bar__content"),this.getRect(".van-notice-bar__wrap")]).then(function(t){var e,i,n=t[0],o=t[1];null!=n&&null!=o&&n.width&&o.width&&(i=(e=a.data).speed,t=e.scrollable,e=e.delay,t&&o.width<n.width&&(i=n.width/i*1e3,a.wrapWidth=o.width,a.contentWidth=n.width,a.duration=i,a.animation=wx.createAnimation({duration:i,timingFunction:"linear",delay:e}),a.scroll()))})},scroll:function(){var t=this;this.timer&&clearTimeout(this.timer),this.timer=null,this.setData({animationData:this.resetAnimation.translateX(this.wrapWidth).step().export()}),setTimeout(function(){t.setData({animationData:t.animation.translateX(-t.contentWidth).step().export()})},20),this.timer=setTimeout(function(){t.scroll()},this.duration)},onClickIcon:function(t){"closeable"===this.data.mode&&(this.timer&&clearTimeout(this.timer),this.timer=null,this.setData({show:!1}),this.$emit("close",t.detail))},onClick:function(t){this.$emit("click",t)}}});