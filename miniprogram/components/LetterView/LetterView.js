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
      value:"不吃鱼的猫"
    },
    // 写作日期
    date:{
      type:String,
      value:'2月12日'
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
      value:`我是一个高三的学生，还有不到八十天就要高考了。我知道自己应该怎么做，怎么努力，也有自己想学的专业(外语)但是我的成绩不理想，对待学习我也只是有心无力，有计划但是没有付出。但是其实我一直想学音乐，我周围的朋友都说我唱歌很好听，我自己也有强烈的爱好，从小我也在学一些乐器乐感也比较好。最近我迷上了韩团，也有想去韩国当练习生的想法，但是我又清楚这不是说当就能当的，而且我的父母都是公职人员，固有思想就是让我和他们一样找一个安定的工作，我没有和他们说过这个事情，我知道他们不会同意。而且无论如何我肯定要参加高考，现在我很迷茫，不知道应该向着哪个方向努力，是应该好好学习按父母的计划走还是去追梦。我应该怎么办呢？`
    },
    // 信件内容字体大小
    contentFont:{
      type:String,
      value:"38rpx"
    },
    // 信件内容行高
    contentLineHeight:{
      type:String,
      value:"55rpx"
    },
    //信件内容文字颜色
    ContentLineColor:{
      type:String,
      value:'#000'
    },
    //信件内容字间距
    ContentSpacing:{
      type:String,
      value:'5rpx'
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
      value:"#000"
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
      value:'#111'
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
      value:'#000'
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
