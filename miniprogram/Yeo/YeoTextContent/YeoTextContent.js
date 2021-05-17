// Yeo/YeoTextContent/YeoTextContent.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    // 头像图片
    userPic: {
      type: String,
      value: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3762143736,532416092&fm=11&gp=0.jpg'
    },
    // 用户名
    userName: {
      type: String,
      value: '胡辣汤的朋友'
    },
    // 云朵图片
    cloudPic: {
      type: String,
      value: 'https://z3.ax1x.com/2021/03/21/6IiR9f.png'
    },
    // 时间
    time: {
      type: String,
      value: 'July.21 2021'
    },
    // 内容
    content: {
      type: Array,
      value: null
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

  }
})
