let tools=require("../utils/tools");Component({properties:{cardBotMargin:{type:Number,value:30},userImg:{type:String,value:"https://s3.ax1x.com/2021/03/09/63FUNq.jpg"},headPendant:{type:Number,value:1},userName:{type:String,value:"仙秩"},userNameColor:{type:String,value:"#555555"},userNameSize:{type:Number,value:28},time:{type:String,value:"2021-2-20"},timeColor:{type:String,value:"#555555"},timeSize:{type:Number,value:22},content:{type:String,value:"我说的话叫评论，我做的事叫论评，你看我评论还是论评都是非常的坦荡"},contentColor:{type:String,value:"#222222"},contentSize:{type:Number,value:30},contentLetSpacing:{type:Number,value:2},lineColor:{type:String,value:"#bbbbbb"},contentPaddingBot:{type:Number,value:45},model:{type:String,value:"white"},isShowStatus:{type:Boolean,value:!0},statusWords:{type:String,value:"待审核"},statusWordsTextAlign:{type:String,value:"left"},statusWordsColor:{type:String,value:"#188AFC"},statusWordsFontSize:{type:Number,value:25},statusWordsMarginTop:{type:Number,value:20}},lifetimes:{attached(){var t=this.data.headPendant;t<1?this.setData({headPendantUrl:null}):7<=t?this.setData({headPendantUrl:"https://s3.ax1x.com/2021/03/09/63F9tx.png"}):1==t?this.setData({headPendantUrl:"https://s3.ax1x.com/2021/03/09/63iL1U.png"}):2==t?this.setData({headPendantUrl:"https://s3.ax1x.com/2021/03/09/63iOcF.png"}):3==t?this.setData({headPendantUrl:"https://s3.ax1x.com/2021/03/09/63ivnJ.png"}):4==t?this.setData({headPendantUrl:"https://s3.ax1x.com/2021/03/09/63iz7R.png"}):5==t?this.setData({headPendantUrl:"https://s3.ax1x.com/2021/03/09/63ixB9.png"}):6==t&&this.setData({headPendantUrl:"https://s3.ax1x.com/2021/03/09/63FpA1.png"});var e=this.data.model,a="#555555"===this.data.userNameColor?"#A8A8A8":this.data.userNameColor,r="#555555"===this.data.timeColor?"#A8A8A8":this.data.timeColor,o="#222222"===this.data.contentColor?"#FFFFFF":this.data.contentColor,s="#bbbbbb"===this.data.lineColor?"#3C3C3C":this.data.lineColor,n=this.data.userNameColor,i=this.data.timeColor,l=this.data.contentColor,t=this.data.lineColor;"dark"===e?this.setData({userNameColor:a,timeColor:r,contentColor:o,lineColor:s}):"white"===e&&this.setData({userNameColor:n,timeColor:i,contentColor:l,lineColor:t})}},data:{},methods:{userImgTap(t){var e=t.currentTarget.dataset.username,t=t.currentTarget.dataset.userimg;this.triggerEvent("userimgclick",{obj:{userName:e,userImg:t}})},contentTap(t){var e=t.currentTarget.dataset.username,a=t.currentTarget.dataset.time,t=t.currentTarget.dataset.content;this.triggerEvent("contentclick",{obj:{userName:e,commentDay:a,content:t}})}}});