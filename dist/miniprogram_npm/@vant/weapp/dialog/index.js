"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var component_1=require("../common/component"),button_1=require("../mixins/button"),open_type_1=require("../mixins/open-type"),color_1=require("../common/color");component_1.VantComponent({mixins:[button_1.button,open_type_1.openType],props:{show:{type:Boolean,observer:function(o){o||this.stopLoading()}},title:String,message:String,useSlot:Boolean,className:String,customStyle:String,asyncClose:Boolean,messageAlign:String,overlayStyle:String,useTitleSlot:Boolean,showCancelButton:Boolean,closeOnClickOverlay:Boolean,confirmButtonOpenType:String,width:null,zIndex:{type:Number,value:2e3},confirmButtonText:{type:String,value:"确认"},cancelButtonText:{type:String,value:"取消"},confirmButtonColor:{type:String,value:color_1.BLUE},cancelButtonColor:{type:String,value:color_1.GRAY},showConfirmButton:{type:Boolean,value:!0},overlay:{type:Boolean,value:!0},transition:{type:String,value:"scale"}},data:{loading:{confirm:!1,cancel:!1}},methods:{onConfirm:function(){this.handleAction("confirm")},onCancel:function(){this.handleAction("cancel")},onClickOverlay:function(){this.onClose("overlay")},handleAction:function(o){var n;this.data.asyncClose&&this.setData(((n={})["loading."+o]=!0,n)),this.onClose(o)},close:function(){this.setData({show:!1})},stopLoading:function(){this.setData({loading:{confirm:!1,cancel:!1}})},onClose:function(o){this.data.asyncClose||this.close(),this.$emit("close",o),this.$emit(o,{dialog:this});o=this.data["confirm"===o?"onConfirm":"onCancel"];o&&o(this)}}});