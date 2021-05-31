"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var utils_1=require("../common/utils"),component_1=require("../common/component"),button_1=require("../mixins/button"),open_type_1=require("../mixins/open-type"),FIT_MODE_MAP={none:"center",fill:"scaleToFill",cover:"aspectFill",contain:"aspectFit",widthFix:"widthFix",heightFix:"heightFix"};component_1.VantComponent({mixins:[button_1.button,open_type_1.openType],classes:["custom-class","loading-class","error-class","image-class"],props:{src:{type:String,observer:function(){this.setData({error:!1,loading:!0})}},round:Boolean,width:{type:null,observer:"setStyle"},height:{type:null,observer:"setStyle"},radius:null,lazyLoad:Boolean,useErrorSlot:Boolean,useLoadingSlot:Boolean,showMenuByLongpress:Boolean,fit:{type:String,value:"fill",observer:"setMode"},showError:{type:Boolean,value:!0},showLoading:{type:Boolean,value:!0}},data:{error:!1,loading:!0,viewStyle:""},mounted:function(){this.setMode(),this.setStyle()},methods:{setMode:function(){this.setData({mode:FIT_MODE_MAP[this.data.fit]})},setStyle:function(){var e=this.data,t=e.width,i=e.height,o=e.radius,e="";utils_1.isDef(t)&&(e+="width: "+utils_1.addUnit(t)+";"),utils_1.isDef(i)&&(e+="height: "+utils_1.addUnit(i)+";"),utils_1.isDef(o)&&(e+="overflow: hidden;",e+="border-radius: "+utils_1.addUnit(o)+";"),this.setData({viewStyle:e})},onLoad:function(e){this.setData({loading:!1}),this.$emit("load",e.detail)},onError:function(e){this.setData({loading:!1,error:!0}),this.$emit("error",e.detail)},onClick:function(e){this.$emit("click",e.detail)}}});