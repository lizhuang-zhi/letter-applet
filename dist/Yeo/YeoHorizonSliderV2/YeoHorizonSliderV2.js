Component({properties:{sliderArr:{type:Array,value:null},isShowMov:{type:Boolean,value:!0},titFont:{type:Number,value:20},numFont:{type:Number,value:50}},data:{},lifetimes:{attached:function(){this.data.isShowMov&&this.isShowMov()}},methods:{isShowMov(){setTimeout(()=>{this.setData({leftdistance:70})},1200)},clickObject(t){t=t.currentTarget.dataset.item;this.triggerEvent("clickevent",{itemObj:t})}}});