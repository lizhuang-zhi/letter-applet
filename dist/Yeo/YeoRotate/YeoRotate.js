let tools=require("../utils/tools");Component({properties:{roundBgColor:{type:String,value:"rgb(157, 157, 202)"},roundSize:{type:Number,value:0},vegtArr:{type:Array,value:["https://s3.ax1x.com/2021/03/09/63F1gS.png","https://s3.ax1x.com/2021/03/09/63F3jg.png","https://s3.ax1x.com/2021/03/09/63FYHs.png","https://s3.ax1x.com/2021/03/09/63FJBj.png"]}},lifetimes:{attached(){var t,e=this.data.vegtArr.length;4<e&&(t=this.data.vegtArr.filter((t,e)=>e<4),this.setData({vegtArr:t})),e<4&&this.setData({vegtArr:["../imgs/vegt-1.png","../imgs/vegt-2.png","../imgs/vegt-3.png","../imgs/vegt-4.png"]})}},data:{rotateAni:{},startX:0,angleRound:0},methods:{touchStart(t){this.setData({startX:t.changedTouches[0].clientX})},touchEnd(e){var a=this.data.startX,t=e.changedTouches[0].clientX;if(30<a-t){e=this.data.angleRound+90;let t=tools.creatAnima();t.rotateZ(e).step(),this.setData({rotateAni:t.export(),angleRound:e})}if(30<t-a){a=this.data.angleRound-90;let t=tools.creatAnima();t.rotateZ(a).step(),this.setData({rotateAni:t.export(),angleRound:a})}},getObj(t){t=t.currentTarget.dataset;this.triggerEvent("itemevent",{obj:t})}}});