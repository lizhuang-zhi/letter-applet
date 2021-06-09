"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var component_1=require("../common/component"),color_1=require("../common/color"),page_scroll_1=require("../mixins/page-scroll"),indexList=function(){for(var t=[],e="A".charCodeAt(0),n=0;n<26;n++)t.push(String.fromCharCode(e+n));return t};component_1.VantComponent({relation:{name:"index-anchor",type:"descendant",current:"index-bar",linked:function(){this.updateData()},unlinked:function(){this.updateData()}},props:{sticky:{type:Boolean,value:!0},zIndex:{type:Number,value:1},highlightColor:{type:String,value:color_1.GREEN},stickyOffsetTop:{type:Number,value:0},indexList:{type:Array,value:indexList()}},mixins:[page_scroll_1.pageScrollMixin(function(t){this.scrollTop=t.scrollTop||0,this.onScroll()})],data:{activeAnchorIndex:null,showSidebar:!1},created:function(){this.scrollTop=0},methods:{updateData:function(){var t=this;wx.nextTick(function(){null!=t.timer&&clearTimeout(t.timer),t.timer=setTimeout(function(){t.setData({showSidebar:!!t.children.length}),t.setRect().then(function(){t.onScroll()})},0)})},setRect:function(){return Promise.all([this.setAnchorsRect(),this.setListRect(),this.setSiderbarRect()])},setAnchorsRect:function(){var n=this;return Promise.all(this.children.map(function(e){return e.getRect(".van-index-anchor-wrapper").then(function(t){Object.assign(e,{height:t.height,top:t.top+n.scrollTop})})}))},setListRect:function(){var e=this;return this.getRect(".van-index-bar").then(function(t){Object.assign(e,{height:t.height,top:t.top+e.scrollTop})})},setSiderbarRect:function(){var e=this;return this.getRect(".van-index-bar__sidebar").then(function(t){e.sidebar={height:t.height,top:t.top}})},setDiffData:function(t){var e=t.target,n=t.data,i={};Object.keys(n).forEach(function(t){e.data[t]!==n[t]&&(i[t]=n[t])}),Object.keys(i).length&&e.setData(i)},getAnchorRect:function(t){return t.getRect(".van-index-anchor-wrapper").then(function(t){return{height:t.height,top:t.top}})},getActiveAnchorIndex:function(){for(var t=this.children,e=this.scrollTop,n=this.data,i=n.sticky,o=n.stickyOffsetTop,r=this.children.length-1;0<=r;r--){var c=0<r?t[r-1].height:0;if((i?c+o:0)+e>=t[r].top)return r}return-1},onScroll:function(){var t,r,c,a,s,h,l=this,e=this.children,d=void 0===e?[]:e,n=this.scrollTop;d.length&&(e=(t=this.data).sticky,r=t.stickyOffsetTop,c=t.zIndex,a=t.highlightColor,s=this.getActiveAnchorIndex(),this.setDiffData({target:this,data:{activeAnchorIndex:s}}),e&&(h=!1,-1!==s&&(h=d[s].top<=r+n),d.forEach(function(t,e){var n,i,o;e===s?(n="",o="\n              color: "+a+";\n            ",h&&(n="\n                height: "+d[e].height+"px;\n              ",o="\n                position: fixed;\n                top: "+r+"px;\n                z-index: "+c+";\n                color: "+a+";\n              "),l.setDiffData({target:t,data:{active:!0,anchorStyle:o,wrapperStyle:n}})):e===s-1?(n=(i=d[e]).top,i=(e===d.length-1?l:d[e+1]).top-n-i.height,l.setDiffData({target:t,data:{active:!0,anchorStyle:o="\n              position: relative;\n              transform: translate3d(0, "+i+"px, 0);\n              z-index: "+c+";\n              color: "+a+";\n            "}})):l.setDiffData({target:t,data:{active:!1,anchorStyle:"",wrapperStyle:""}})})))},onClick:function(t){this.scrollToAnchor(t.target.dataset.index)},onTouchMove:function(t){var e=this.children.length,n=t.touches[0],t=this.sidebar.height/e,t=Math.floor((n.clientY-this.sidebar.top)/t);t<0?t=0:e-1<t&&(t=e-1),this.scrollToAnchor(t)},onTouchStop:function(){this.scrollToAnchorIndex=null},scrollToAnchor:function(e){var t,n=this;"number"==typeof e&&this.scrollToAnchorIndex!==e&&(this.scrollToAnchorIndex=e,(t=this.children.find(function(t){return t.data.index===n.data.indexList[e]}))&&(t.scrollIntoView(this.scrollTop),this.$emit("select",t.data.index)))}}});