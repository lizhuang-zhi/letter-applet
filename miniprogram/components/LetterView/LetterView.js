// components/LetterView/LetterView.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    // 页面背景颜色
    BckColor:{
      type:String,
      value:"rgb(241, 236, 241)"
    },

    // 作者名字
    writer:{
      type:String,
      value:"某某"
    },
    // 写作日期
    date:{
      type:String,
      value:'XX月XX日'
    },
    // 收件人
    consignee:{
      type:String,
      value:"Tell 收"
    },
    // 开头问候语
    regards:{
      type:String,
      value:"你好"
    },
    // 顶部提示语
    TopTip:{
      type:String,
      value:"这封信只发给你"
    },


    // 信件文字内容
    lettercontent:{
      type:String,
      value:`请开始撒旦法地方泼我手动我爱上了你们公司东方丽景是大佛`
    },
    // 信件内容字体大小
    contentFont:{
      type:String,
      value:"38rpx"
    },
    // 信件内容行高
    contentLineHeight:{
      type:String,
      value:"50rpx"
    },
    //信件内容文字颜色
    ContentLineColor:{
      type:String,
      value:'green'
    },



    //信件头部收件人行高
    HeadLineHeight:{
      type:String,
      value:"100rpx"
    },
    //信件头部收件人字体大小
    HeadFont:{
      type:String,
      value:"38rpx"
    },
    //信件头部收件人字体颜色
    HeadColor:{
      type:String,
      value:"red"
    }, 
    //信件头部问候语行高
    HeadLineregardsHeight:{
     type:String,
     value:"80rpx"
    },
    //信件头部问候语字体大小
     HeadregardsFont:{
      type:String,
      value:"38rpx"
    },
    //信件头部问候语字体颜色
    HeadRegardsColor:{
      type:String,
      value:'skyblue'
    },


    // 信件结尾作者名字偏移量 X轴 right
    FootWriterPsitionX:{
      type:String,
      value:"10rpx"
    },
    // 信件结尾作者名字偏移量 Y轴 bottom
    FootWriterPsitionY:{
      type:String,
      value:""
    },
    //信件结尾作者名字大小
    FootWriterFontSize:{
      type:String,
      value:"36rpx"
    },
    //信件结尾作者名字颜色
    WriterColor:{
      type:String,
      value:'grey'
    },


    // 信件结尾日期偏移量 X轴 right
    FootDaterPsitionX:{
      type:String,
      value:"10rpx"
    },
    // 信件结尾日期偏移量 Y轴 bottom (负的)
    FootDatePsitionY:{
      type:String,
      value:"-100rpx"
    },
    //信件结尾日期大小
    FootDateFontSize:{
      type:String,
      value:"36rpx"
    },
    //信件结尾日期颜色
    FootDateColor:{
      type:String,
      value:"black"
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    // 行数组
    lettercontentArr:[],
    // 行字数
    lineNum: 14
  },

  /**
   * 组件的方法列表
   */
  methods: {
    
  },
  lifetimes: {
    attached: function() {
      // 在组件实例进入页面节点树时执行
      let content=this.properties.lettercontent;
      // 行字数
      let lineNum = this.data.lineNum;
      let start=0;
      let end=lineNum;
      // 截取每行，放入数组中
      for(var i=0;i<content.length/lineNum;i++){
        this.data.lettercontentArr[i]=content.substring(start,end);
        start+=lineNum;
        end+=lineNum;
      }
      this.setData({
        lettercontentArr: this.data.lettercontentArr
      })
 
    },
    detached: function() {
      // 在组件实例被从页面节点树移除时执行
    },
  },
})
