"use strict";var __assign=this&&this.__assign||function(){return(__assign=Object.assign||function(e){for(var t,i=1,n=arguments.length;i<n;i++)for(var o in t=arguments[i])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)};Object.defineProperty(exports,"__esModule",{value:!0});var component_1=require("../common/component"),props_1=require("./props");component_1.VantComponent({field:!0,classes:["input-class","right-icon-class","label-class"],props:__assign(__assign(__assign(__assign({},props_1.commonProps),props_1.inputProps),props_1.textareaProps),{size:String,icon:String,label:String,error:Boolean,center:Boolean,isLink:Boolean,leftIcon:String,rightIcon:String,autosize:[Boolean,Object],required:Boolean,iconClass:String,clickable:Boolean,inputAlign:String,customStyle:String,errorMessage:String,arrowDirection:String,showWordLimit:Boolean,errorMessageAlign:String,readonly:{type:Boolean,observer:"setShowClear"},clearable:{type:Boolean,observer:"setShowClear"},border:{type:Boolean,value:!0},titleWidth:{type:String,value:"6.2em"}}),data:{focused:!1,innerValue:"",showClear:!1},created:function(){this.value=this.data.value,this.setData({innerValue:this.value})},methods:{onInput:function(e){e=(e.detail||{}).value;this.value=void 0===e?"":e,this.setShowClear(),this.emitChange()},onFocus:function(e){this.focused=!0,this.setShowClear(),this.$emit("focus",e.detail)},onBlur:function(e){this.focused=!1,this.setShowClear(),this.$emit("blur",e.detail)},onClickIcon:function(){this.$emit("click-icon")},onClear:function(){var e=this;this.setData({innerValue:""}),this.value="",this.setShowClear(),wx.nextTick(function(){e.emitChange(),e.$emit("clear","")})},onConfirm:function(e){e=(e.detail||{}).value,e=void 0===e?"":e;this.value=e,this.setShowClear(),this.$emit("confirm",e)},setValue:function(e){this.value=e,this.setShowClear(),""===e&&this.setData({innerValue:""}),this.emitChange()},onLineChange:function(e){this.$emit("linechange",e.detail)},onKeyboardHeightChange:function(e){this.$emit("keyboardheightchange",e.detail)},emitChange:function(){var e=this;this.setData({value:this.value}),wx.nextTick(function(){e.$emit("input",e.value),e.$emit("change",e.value)})},setShowClear:function(){var e=this.data,t=e.clearable,i=e.readonly,n=this.focused,e=this.value;this.setData({showClear:!(!t||!n||!e||i)})},noop:function(){}}});