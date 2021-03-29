// Yeo/YeoSwiper/YeoSwiper.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    // 背景图数组数据
    dataArr: {
      type: Array,
      value: [{
          bgUrl: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2738668818,2590397852&fm=26&gp=0.jpg',
          title: 'Tomorr',
          time: '2021-1-5',
          isStar: true
        },
        {
          bgUrl: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3569081884,3982453064&fm=26&gp=0.jpg',
          title: 'Blue Guy',
          time: '2021-2-13',
          isStar: false
        },
        {
          bgUrl: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1105979147,3553146784&fm=26&gp=0.jpg',
          title: 'Red Coal 我是一个手动阀手动阀手动阀零零零零',
          time: '2021-2-3',
          isStar: false
        }
      ]
    },
    // 轮播框高度
    swiperHeight: {
      type: Number,
      value: 630
    },
    // 轮播框内部上边距
    swiperPaddingTop: {
      type: Number,
      value: 0
    },
    // 轮播框内部下边距
    swiperPaddingBot: {
      type: Number,
      value: 0
    },
    // 轮播框外部上边距
    swiperMarginTop: {
      type: Number,
      value: 60
    },
    // 轮播框外部下边距
    swiperMarginBot: {
      type: Number,
      value: 30
    },
    // Item宽度
    itemWidth: {
      type: Number,
      value: 420
    },
    // Item高度
    itemHeight: {
      type: Number,
      value: 410
    },
    // Item的顶部外边距
    itemMarginTop: {
      type: Number,
      value: 100
    },
    // Item圆角大小
    bordRadius: {
      type: Number,
      value: 30
    },
    // Item背景图横纵比（contain、cover)
    bgSize: {
      type: String,
      value: 'cover'
    },
    // 是否自动轮播
    autoPlay: {
      type: Boolean,
      value: true
    },
    // 轮播间隔时长
    intervalTime: {
      type: Number,
      value: 5000
    },
    /* **************修改内部样式************** */
    // 收藏框宽度
    starBoxWidth: {
      type: Number,
      value: 80
    },
    // 收藏框高度
    starBoxHeight: {
      type: Number,
      value: 80
    },
    // 收藏框圆角
    starBoxBordRadius: {
      type: Number,
      value: 35
    },
    // 收藏框背景色
    starBoxBgColor: {
      type: String,
      value: '#4C5F79'
    },
    // 收藏框距离外部框顶距离
    starTopWithOutBox: {
      type: Number,
      value: -10
    },
    // 收藏框距离外部框右侧边缘距离
    starRightWithOutBox: {
      type: Number,
      value: 30
    },
    // 收藏框内图标大小(屏幕占比or具体数值<rpx>)
    starPicSize: {
      type: String,
      value: '50%'
    },
    // 底部栏距离外部框底距离
    bottomInfoBotWithOutBox: {
      type: Number,
      value: 10
    },
    // 底部栏距离外部框左侧距离
    bottomInfoLeftWithOutBox: {
      type: Number,
      value: 38
    },
    // 时间字体大小
    timeFontSize: {
      type: Number,
      value: 24
    },
    // 时间字母间距
    timeLetterSpacing: {
      type: Number,
      value: 1
    },
    // 时间颜色
    timeColor: {
      type: String,
      value: '#A8A4AE'
    },
    // 时间字体粗度
    timeFontWeight: {
      type: String,
      value: 'normal'
    },
    // 标题字体大小
    titleFontSize: {
      type: Number,
      value: 42
    },
    // 标题颜色
    titleColor: {
      type: String,
      value: '#F5F9FC'
    },
    // 标题字体粗度
    titleFontWeight: {
      type: String,
      value: 'bold'
    },
    // 显示标题文字数量
    titleFontNum: {
      type: Number,
      value: 8
    },
    // 是否显示收藏图标
    isShowStarPic: {
      type: Boolean,
      value: true
    }

  },

  options: {
    multipleSlots: true
  },

  lifetimes: {
    attached() {
      console.log('我来了');
      // dataArr数组
      let dataArr = this.data.dataArr;
      // 获取显示标题文字数量
      let titNum = this.properties.titleFontNum;
      dataArr.forEach(item => {
        // time 
        let time = new Date(item.time);
        // year
        let year = time.getFullYear();
        // month
        let month = time.toDateString().split(' ')[1];
        // date
        let date = time.getDate();
        // 美化后的时间
        let beautyTime = date + ' ' + month + '.' + year;
        item.time = beautyTime;

        // 砍掉多余title文字
        item.title = item.title.length > titNum ? item.title.substring(0, titNum) : item.title;
        console.log(item.title);
      });
      this.setData({
        dataArr: this.data.dataArr
      })

    },
    detached() {
      this.sendDataArr();
    },
    created() {

    },
    ready() {

    }

  },



  /**
   * 组件的初始数据
   */
  data: {
    // 当前页数
    swiperIndex: 0,
    picUrlSelect: 'https://s3.ax1x.com/2021/03/09/63FnAI.png',
    picUrl: 'https://s3.ax1x.com/2021/03/09/63FeHA.png',
  },


  /**
   * 组件的方法列表
   */
  methods: {
    // 改变页数
    changeCurrent(e) {
      this.setData({
        swiperIndex: e.detail.current
      })
    },
    // 点击收藏事件
    starTap(e) {
      // 点击对象索引
      let objIndex = e.currentTarget.dataset.index;
      let dataArr = this.data.dataArr;
      dataArr[objIndex].isStar = !dataArr[objIndex].isStar;
      this.setData({
        dataArr: this.data.dataArr
      })

    },
    // 点击（Item）事件
    tapItem(e) {
      let index = e.currentTarget.dataset.index;
      this.triggerEvent('clickevent', {
        index
      })
    },
    // 发送dataArr数据事件
    sendDataArr() {
      // dataArr
      let dataArr = this.data.dataArr;
      this.triggerEvent('sendarrevent', {
        dataArr
      });
    }

  }
})