"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var component_1=require("../common/component");component_1.VantComponent({classes:["main-item-class","content-item-class","main-active-class","content-active-class","main-disabled-class","content-disabled-class"],props:{items:{type:Array,observer:"updateSubItems"},activeId:null,mainActiveIndex:{type:Number,value:0,observer:"updateSubItems"},height:{type:[Number,String],value:300},max:{type:Number,value:1/0}},data:{subItems:[]},methods:{onSelectItem:function(e){var t=e.currentTarget.dataset.item,a=Array.isArray(this.data.activeId),e=a&&this.data.activeId.length>=this.data.max,a=a?-1<this.data.activeId.indexOf(t.id):this.data.activeId===t.id;t.disabled||e&&!a||this.$emit("click-item",t)},onClickNav:function(e){e=e.detail;this.data.items[e].disabled||this.$emit("click-nav",{index:e})},updateSubItems:function(){var e=this.data,e=(e.items[e.mainActiveIndex]||{}).children;return this.set({subItems:void 0===e?[]:e})}}});