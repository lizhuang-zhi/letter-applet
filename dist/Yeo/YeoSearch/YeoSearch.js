Component({properties:{boxWidth:{type:String,value:"100%"},searchImg:{type:String,value:"https://s3.ax1x.com/2021/03/09/63FAje.png"},placeholder:{type:String,value:"Input Something"},background:{type:String,value:"rgb(250,250,250)"},searBordRadius:{type:Number,value:60},topPadding:{type:Number,value:12},bottomPadding:{type:Number,value:12},leftPadding:{type:Number,value:30},rightPadding:{type:Number,value:30},inputLeftMargin:{type:Number,value:16},inputRightMargin:{type:Number,value:30},inputType:{type:String,value:"text"},initValue:{type:String,value:"我是起始内容"},isShowIcon:{type:Boolean,value:!0}},data:{},methods:{inputEvent(e){this.triggerEvent("inputevent",{obj:e.detail})},focusEvent(e){this.triggerEvent("focusevent",{obj:e.detail})},blurEvent(e){this.triggerEvent("blurevent",{obj:e.detail})},confirmEvent(e){this.triggerEvent("confirmevent",{obj:e.detail})},keyboardheightchangeEvent(e){this.triggerEvent("keyboardheightchangeevent",{obj:e.detail})}}});