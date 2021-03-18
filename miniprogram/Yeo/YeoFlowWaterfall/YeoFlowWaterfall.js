// Yeo/YeoFlowWaterfall/YeoFlowWaterfall.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    // 数组数据内容
    dataArr: {
      type: Array,
      value: [{
          id: 1,
          src: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1160360589,2429665544&fm=26&gp=0.jpg',
          title: '昨日风光无限好',
          userImg: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2853553659,1775735885&fm=26&gp=0.jpg',
          userName: 'Yeo',
          lovesNum: 468,
          isLove: true
        }, {
          id: 2,
          src: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1730713693,2130926401&fm=26&gp=0.jpg',
          title: '高二学姐的菜肴',
          userImg: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1870521716,857441283&fm=26&gp=0.jpg',
          userName: 'Jeo',
          lovesNum: 666,
          isLove: false
        }, {
          id: 3,
          src: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1870521716,857441283&fm=26&gp=0.jpg',
          title: '嘻哈说唱',
          userImg: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1160360589,2429665544&fm=26&gp=0.jpg',
          userName: 'Peo',
          lovesNum: 366,
          isLove: false
        }, {
          id: 4,
          src: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2853553659,1775735885&fm=26&gp=0.jpg',
          title: '开心一天 麻花糖',
          userImg: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1929504862,3503507339&fm=26&gp=0.jpg',
          userName: 'Leo',
          lovesNum: 1266,
          isLove: false
        }, {
          id: 5,
          src: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1929504862,3503507339&fm=26&gp=0.jpg',
          title: '众享丝滑 vlog',
          userImg: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1929504862,3503507339&fm=26&gp=0.jpg',
          userName: '德尔东升',
          lovesNum: 966,
          isLove: false
        }, {
          id: 6,
          src: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1730713693,2130926401&fm=26&gp=0.jpg',
          title: '众享丝滑 vlog',
          userImg: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1929504862,3503507339&fm=26&gp=0.jpg',
          userName: '黑色深渊',
          lovesNum: 1966,
          isLove: false
        }, {
          id: 5,
          src: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1929504862,3503507339&fm=26&gp=0.jpg',
          title: '众享丝滑 vlog',
          userImg: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1929504862,3503507339&fm=26&gp=0.jpg',
          userName: '最后一舞',
          lovesNum: 966,
          isLove: false
        }

      ]
    },
    // 外层框外边距
    boxMargin: {
      type: String,
      value: '0 20rpx'
    },
    // item框左上方圆角
    itemTopLeftRadius: {
      type: Number,
      value: 10
    },
    // item框右上方圆角
    itemTopRightRadius: {
      type: Number,
      value: 10
    },
    // item框内容内边距
    itemContPadding: {
      type: String,
      value: '12rpx 23rpx 30rpx'
    },
    // item框内容背景颜色
    itemContBgColor: {
      type: String,
      value: 'rgb(240,240,240)'
    },
    // 内容框标题字体大小
    itemContTitleSize: {
      type: Number,
      value: 32
    },
    // 内容框标题字体粗细
    itemContTitleWeight: {
      type: String,
      value: 'bold'
    },
    // 内容框标题字体颜色
    itemContTitleColor: {
      type: String,
      value: '#3F3F4F'
    },
    // 内容框标题字体下外边距
    itemContTitleBotMargin: {
      type: Number,
      value: 22
    },
    // 内容框用户头像大小
    itemUserPicSize: {
      type: Number,
      value: 40
    },
    // 内容框用户头像圆角
    itemUserPicBordRadius: {
      type: String,
      value: '50%'
    },
    // 内容框用户名字体大小
    itemUserNameSize: {
      type: Number,
      value: 26
    },
    // 内容框用户名字间距
    itemUserNameLetterSpacing: {
      type: Number,
      value: 1
    },
    // 内容框用户名字体颜色
    itemUserNameColor: {
      type: String,
      value: '#767676'
    },
    // 内容框用户名字体左外边距
    itemUserNameMarginLeft: {
      type: Number,
      value: 12
    },
    // 内容框点赞图标大小
    itemContLovesPicSize: {
      type: Number,
      value: 35
    },
    // 内容框点赞数量字体大小
    itemContLovesNumSize: {
      type: Number,
      value: 30
    },
    // 内容框点赞数量字体颜色
    itemContLovesNumColor: {
      type: String,
      value: '#6E6E6E'
    },
    // 内容框点赞数量左外边距
    itemContLovesNumMarginLeft:{
      type: Number,
      value: 6
    }



  },


  lifetimes: {
    detached() {
      // 向页面发送dataArr数组
      this.sendDataArr();      
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
    // 点击爱心事件
    lovesEvent(e) {
      // item是否收藏
      let itemIsLove = e.currentTarget.dataset.item.isLove;
      // item索引
      let index = e.currentTarget.dataset.index;
      // 数组数据
      let dataArr = this.data.dataArr;
      if(itemIsLove == false) {
        dataArr[index].isLove = true;
        dataArr[index].lovesNum ++;
        this.setData({
          dataArr: this.data.dataArr
        })
      }else {
        dataArr[index].isLove = false;
        dataArr[index].lovesNum --;
        this.setData({
          dataArr: this.data.dataArr
        })

      }
    },

    // 组件毁灭事件
    sendDataArr() {
      // 获取dataArr
      let dataArr = this.data.dataArr;
      this.triggerEvent('senddataevent',{dataArr});
    }


  }
})