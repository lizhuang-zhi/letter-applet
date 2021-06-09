"use strict";var __spreadArrays=this&&this.__spreadArrays||function(){for(var t=0,e=0,n=arguments.length;e<n;e++)t+=arguments[e].length;for(var a=Array(t),i=0,e=0;e<n;e++)for(var o=arguments[e],s=0,r=o.length;s<r;s++,i++)a[i]=o[s];return a},__importDefault=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(exports,"__esModule",{value:!0});var component_1=require("../common/component"),utils_1=require("./utils"),toast_1=__importDefault(require("../toast/toast"));component_1.VantComponent({props:{title:{type:String,value:"日期选择"},color:String,show:{type:Boolean,observer:function(t){t&&(this.initRect(),this.scrollIntoView())}},formatter:null,confirmText:{type:String,value:"确定"},rangePrompt:String,defaultDate:{type:[Number,Array],observer:function(t){this.setData({currentDate:t}),this.scrollIntoView()}},allowSameDay:Boolean,confirmDisabledText:String,type:{type:String,value:"single",observer:"reset"},minDate:{type:null,value:Date.now()},maxDate:{type:null,value:new Date((new Date).getFullYear(),(new Date).getMonth()+6,(new Date).getDate()).getTime()},position:{type:String,value:"bottom"},rowHeight:{type:[Number,String],value:utils_1.ROW_HEIGHT},round:{type:Boolean,value:!0},poppable:{type:Boolean,value:!0},showMark:{type:Boolean,value:!0},showTitle:{type:Boolean,value:!0},showConfirm:{type:Boolean,value:!0},showSubtitle:{type:Boolean,value:!0},safeAreaInsetBottom:{type:Boolean,value:!0},closeOnClickOverlay:{type:Boolean,value:!0},maxRange:{type:[Number,String],value:null}},data:{subtitle:"",currentDate:null,scrollIntoView:""},created:function(){this.setData({currentDate:this.getInitialDate()})},mounted:function(){!this.data.show&&this.data.poppable||(this.initRect(),this.scrollIntoView())},methods:{reset:function(){this.setData({currentDate:this.getInitialDate()}),this.scrollIntoView()},initRect:function(){var e=this;null!=this.contentObserver&&this.contentObserver.disconnect();var t=this.createIntersectionObserver({thresholds:[0,.1,.9,1],observeAll:!0});(this.contentObserver=t).relativeTo(".van-calendar__body"),t.observe(".month",function(t){t.boundingClientRect.top<=t.relativeRect.top&&e.setData({subtitle:utils_1.formatMonthTitle(t.dataset.date)})})},getInitialDate:function(){var t=this.data,e=t.type,n=t.defaultDate,t=t.minDate;if("range"!==e)return"multiple"===e?n||[t]:n||t;n=n||[];return[n[0]||t,n[1]||utils_1.getNextDay(new Date(t)).getTime()]},scrollIntoView:function(){var r=this;setTimeout(function(){var t=r.data,e=t.currentDate,n=t.type,a=t.show,i=t.poppable,o=t.minDate,t=t.maxDate,s="single"===n?e:e[0];!s||!a&&i||utils_1.getMonths(o,t).some(function(t,e){return 0===utils_1.compareMonth(t,s)&&(r.setData({scrollIntoView:"month"+e}),!0)})},100)},onOpen:function(){this.$emit("open")},onOpened:function(){this.$emit("opened")},onClose:function(){this.$emit("close")},onClosed:function(){this.$emit("closed")},onClickDay:function(t){var n,a=t.detail.date,e=this.data,i=e.type,o=e.currentDate,s=e.allowSameDay;"range"===i?(t=o[0],e=o[1],t&&!e?1===(e=utils_1.compareDay(a,t))?this.select([t,a],!0):-1===e?this.select([a,null]):s&&this.select([a,a]):this.select([a,null])):"multiple"===i?o.some(function(t,e){t=0===utils_1.compareDay(t,a);return t&&(n=e),t})?(i=o.splice(n,1),this.setData({currentDate:o}),this.unselect(i)):this.select(__spreadArrays(o,[a])):this.select(a,!0)},unselect:function(t){t=t[0];t&&this.$emit("unselect",utils_1.copyDates(t))},select:function(t,e){if(e&&"range"===this.data.type&&!this.checkRange(t))return void(this.data.showConfirm?this.emit([t[0],utils_1.getDayByOffset(t[0],this.data.maxRange-1)]):this.emit(t));this.emit(t),e&&!this.data.showConfirm&&this.onConfirm()},emit:function(t){function e(t){return t instanceof Date?t.getTime():t}this.setData({currentDate:Array.isArray(t)?t.map(e):e(t)}),this.$emit("select",utils_1.copyDates(t))},checkRange:function(t){var e=this.data,n=e.maxRange,e=e.rangePrompt;return!(n&&utils_1.calcDateNum(t)>n)||(toast_1.default({context:this,message:e||"选择天数不能超过 "+n+" 天"}),!1)},onConfirm:function(){var t=this;"range"===this.data.type&&!this.checkRange(this.data.currentDate)||wx.nextTick(function(){t.$emit("confirm",utils_1.copyDates(t.data.currentDate))})}}});