Component({properties:{distractWay:{type:String,value:"around"},sideDistance:{type:Number,value:0}},options:{multipleSlots:!0},lifetimes:{attached(){"start"===this.data.distractWay?this.setData({distractWay:"flex-start"}):"end"===this.data.distractWay?this.setData({distractWay:"flex-end"}):"center"===this.data.distractWay?this.setData({distractWay:"center"}):"between"===this.data.distractWay?this.setData({distractWay:"space-between"}):(this.data.distractWay,this.setData({distractWay:"space-around"}))}},data:{},methods:{centerTap(){this.triggerEvent("centerevent",{})},leftTap(){this.triggerEvent("leftevent",{})},rightTap(){this.triggerEvent("rightevent",{})}}});