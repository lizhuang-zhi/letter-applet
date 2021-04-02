let tools = require('../utils/tools');
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    // 底部外边距
    cardBotMargin: {
      type: Number,
      value: 30
    },
    // 用户头像
    userImg: {
      type: String,
      value: 'https://s3.ax1x.com/2021/03/09/63FUNq.jpg'
    },
    /* 
      头像挂件: 
        从1-7级，级数越高，挂件越靓;
        小于1，默认不佩戴挂件
        大于7，默认第7级
    */
    headPendant: {
      type: Number,
      value: 1
    },
    // 用户名
    userName: {
      type: String,
      value: '仙秩'
    },
    // 用户名颜色
    userNameColor: {
      type: String,
      value: '#555555'
    },
    // 用户名字体大小
    userNameSize: {
      type: Number,
      value: 28
    },
    // 时间
    time: {
      type: String,
      value: '2021-2-20'
    },
    // 时间颜色
    timeColor: {
      type: String,
      value: '#555555'
    },
    // 时间字体大小
    timeSize: {
      type: Number,
      value: 22
    },
    // 评论内容
    content: {
      type: String,
      value: '我说的话叫评论，我做的事叫论评，你看我评论还是论评都是非常的坦荡'
    },
    // 评论内容颜色
    contentColor: {
      type: String,
      value: '#222222'
    },
    // 评论内容字体大小
    contentSize: {
      type: Number,
      value: 30
    },
    // 评论内容字间距
    contentLetSpacing: {
      type: Number,
      value: 2
    },
    // 下划线颜色
    lineColor: {
      type: String,
      value: '#bbbbbb'
    },
    // 下划线与内容距离
    contentPaddingBot: {
      type: Number,
      value: 45
    },
    /* 
      设置模式（dark暗黑模式与white白天模式）
        设置模式的同时也设置了模式内的值，此时我们对于开发者设置的部分予以保留
      暗黑最适背景色：#272727
      白天最适背景色：#EBEBEB
    */
    model: {
      type: String,
      value: 'white'
    }

  },

  lifetimes: {
    attached() {
      /* 
        设置头像挂件
      */
      // 头像挂件等级
      let getLevelOfPendant = this.data.headPendant;
      if (getLevelOfPendant < 1) {
        this.setData({
          headPendantUrl: null
        })
      } else if (getLevelOfPendant >= 7) {
        this.setData({
          headPendantUrl: `https://s3.ax1x.com/2021/03/09/63F9tx.png`
        })
      }else if(getLevelOfPendant  == 1){
        this.setData({
          headPendantUrl: `https://s3.ax1x.com/2021/03/09/63iL1U.png`
        })
      }else if(getLevelOfPendant  == 2){
        this.setData({
          headPendantUrl: `https://s3.ax1x.com/2021/03/09/63iOcF.png`
        })
      }else if(getLevelOfPendant  == 3){
        this.setData({
          headPendantUrl: `https://s3.ax1x.com/2021/03/09/63ivnJ.png`
        })
      }else if(getLevelOfPendant  == 4){
        this.setData({
          headPendantUrl: `https://s3.ax1x.com/2021/03/09/63iz7R.png`
        })
      }else if(getLevelOfPendant  == 5){
        this.setData({
          headPendantUrl: `https://s3.ax1x.com/2021/03/09/63ixB9.png`
        })
      }else if(getLevelOfPendant  == 6){
        this.setData({
          headPendantUrl: `https://s3.ax1x.com/2021/03/09/63FpA1.png`
        })
      }
      /* 
        设置时间显示
      */
      // 当前时间戳
      let dateNow = new Date();
      // 当前时间
      let dataNowTime = dateNow.getFullYear() + '-' + (dateNow.getMonth() + 1) + '-' + dateNow.getDate();
      // 当前时间（格式化）
      let dateNowAll = tools.changeTimeFormat(dataNowTime);  
      // 发布时间
      let timeDate = tools.changeTimeFormat(this.data.time);
      // 发布时间戳
      let commentDate = new Date(timeDate).getTime();
      // 历经时长
      let days = (dateNow - commentDate) / (1000* 24 * 3600);
      // 取整时长(天数)
      let parseIntDays = parseInt(days);
      if(parseIntDays > 0 && parseIntDays <= 10) {
        this.setData({
          commentDay: `${parseIntDays}天前`
        })
      }else if(parseIntDays === 0) {
        this.setData({
          commentDay: '刚刚'
        })
      }else {
        this.setData({
          commentDay: dateNowAll 
        })
      }
      /* 
        设置模式
      */
      // 模式类型
      let model = this.data.model;
      // 暗黑模式 - 用户名颜色
      let dark_userNameColor = this.data.userNameColor === '#555555' ? '#A8A8A8' : this.data.userNameColor;
      // 暗黑模式 - 时间颜色
      let dark_timeColor = this.data.timeColor === '#555555' ? '#A8A8A8' : this.data.timeColor;
      // 暗黑模式 - 内容颜色
      let dark_contentColor = this.data.contentColor === '#222222' ? '#FFFFFF' : this.data.contentColor;
      // 暗黑模式 - 线条颜色
      let dark_lineColor = this.data.lineColor === '#bbbbbb' ? '#3C3C3C' : this.data.lineColor;
      // 白天模式 - 用户名颜色
      let white_userNameColor = this.data.userNameColor;
      // 白天模式 - 时间颜色
      let white_timeColor = this.data.timeColor;
      // 白天模式 - 内容颜色
      let white_contentColor = this.data.contentColor;
      // 白天模式 - 线条颜色
      let white_lineColor = this.data.lineColor;
      // 暗黑模式
      if(model === 'dark') {
        this.setData({
          userNameColor: dark_userNameColor,
          timeColor: dark_timeColor,
          contentColor: dark_contentColor,
          lineColor: dark_lineColor
        })
      }else if(model === 'white'){  // 白天模式
        this.setData({
          userNameColor: white_userNameColor,
          timeColor: white_timeColor,
          contentColor: white_contentColor,
          lineColor: white_lineColor
        })
      }


    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    

  },

  /**
   * 组件的方法列表
   */
  methods: {
    // 点击头像事件
    userImgTap(e) {
      // 用户名
      let userName = e.currentTarget.dataset.username;
      // 用户头像url
      let userImg = e.currentTarget.dataset.userimg;
      let obj = {
        userName,
        userImg
      };
      this.triggerEvent('userimgclick',{obj});
    },
    // 点击内容事件
    contentTap(e) {
      // 用户名
      let userName = e.currentTarget.dataset.username;
      // 用户发布时间
      let commentDay = e.currentTarget.dataset.time;
      // 用户评论内容
      let content = e.currentTarget.dataset.content;
      let obj = {
        userName,
        commentDay,
        content
      };
      this.triggerEvent('contentclick',{obj});
    }

  }
})