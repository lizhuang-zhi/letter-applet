"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var component_1=require("../common/component");component_1.VantComponent({relation:{name:"row",type:"ancestor",current:"col"},props:{span:Number,offset:Number},data:{viewStyle:""},methods:{setGutter:function(e){var t=e/2+"px",t=e?"padding-left: "+t+"; padding-right: "+t+";":"";t!==this.data.viewStyle&&this.setData({viewStyle:t})}}});