// 标签选择初始化背景色
const initTagBgColor = '#F8F8F8';
// 标签初始化文字颜色
const initFontColor = '#BBBEC2';
// 标签初始化的边框
const initTagBorder = '1rpx solid #ddd';

// 标签选中背景色
const chooseTagBgColor = '#F9FDFB';
// 标签选中时边框与文字颜色
const chooseTagColor = '#F0934F';
// 标签选中时的边框
const chooseTagBorder = '1rpx solid ' + chooseTagColor;

// 声明数组(存储选择的标签，最多三个)
let selectArr = [];

// 引入工具类
let tools = require('../../utils/tools');
// 引入数据接口
let requestData = require('../../../utils/request');
// 单选框显示内容
let swithArr = [
  {isShow: true, tit: '允许收录到解忧信箱', cont: '保存历史足迹'},
  {isShow: true, tit: '允许公开日记', cont: '开放自我心路'},
  {isShow: false}
]
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 标签数组
    tagArr: [{
        tagName: '校园',
        btnBgColor: initTagBgColor,
        BtnColor: initFontColor,
        btnBorder: initTagBorder
      },
      {
        tagName: '社交',
        btnBgColor: initTagBgColor,
        BtnColor: initFontColor,
        btnBorder: initTagBorder
      },
      {
        tagName: '莫名',
        btnBgColor: initTagBgColor,
        BtnColor: initFontColor,
        btnBorder: initTagBorder
      },
      {
        tagName: '职场',
        btnBgColor: initTagBgColor,
        BtnColor: initFontColor,
        btnBorder: initTagBorder
      },
      {
        tagName: '情感',
        btnBgColor: initTagBgColor,
        BtnColor: initFontColor,
        btnBorder: initTagBorder
      },
      {
        tagName: '疾病',
        btnBgColor: initTagBgColor,
        BtnColor: initFontColor,
        btnBorder: initTagBorder
      },
      {
        tagName: '家庭',
        btnBgColor: initTagBgColor,
        BtnColor: initFontColor,
        btnBorder: initTagBorder
      },
    ],

    // 随机笔名
    initValue: '',
    // 上一页面用户输入内容
    inputValue: ''
  },

  // 点击按钮
  bindTapTag(e) {
    // 获取点击按钮索引
    let btnIndex = e.currentTarget.dataset.index;
    // 获取按钮标签数组
    let tagArr = this.data.tagArr;
    if (tagArr[btnIndex].btnBorder == initTagBorder && selectArr.length < 3) {
      // 选中时边框颜色
      tagArr[btnIndex].btnBgColor = chooseTagBgColor;
      tagArr[btnIndex].BtnColor = chooseTagColor;
      tagArr[btnIndex].btnBorder = chooseTagBorder;
      // 存入数组
      selectArr.push(tagArr[btnIndex].tagName);
    } else if (selectArr.indexOf(tagArr[btnIndex].tagName) != -1) {
      // 边框为未选中时颜色
      tagArr[btnIndex].btnBgColor = initTagBgColor;
      tagArr[btnIndex].BtnColor = initFontColor;
      tagArr[btnIndex].btnBorder = initTagBorder;
      // 删除元素
      selectArr.splice(selectArr.indexOf(tagArr[btnIndex].tagName), 1);
    } else {
      wx.showToast({
        title: '最多只能选择三个标签',
        icon: 'none'
      })
    }

    this.setData({
      tagArr: this.data.tagArr
    })


  },

  // 获取随机笔名
  RandomNameTap() {
    // 获取随机笔名
    let randomName = tools.RandomPenName();
    console.log(randomName);
    this.setData({
      initValue: randomName
    })
  },

  // 确认提交
  ConfirmSend() {
    /* 
     ************ 保存信件 *************
    */
    // 笔名
    let penName = this.data.initValue;
    // 内容
    let content = this.data.inputValue;
    // 用户openId
    // 发布时间
    let releaseTime = new Date();
    // 邮票图片地址
    let stampUrl = 'https://tse1-mm.cn.bing.net/th?id=OIP.OgOpMxiUe8_DNQxqXdOfzgHaEK&w=254&h=160&c=8&rs=1&qlt=90&dpr=1.25&pid=3.1&rm=2';
    // 状态
    let state = 1;
    // 	标签id集合
    let tapIds = selectArr.toString();
    // 声明对象保存上面的值
    let letterObj = {
      penName,
      content,
      releaseTime,
      stampUrl,
      state,
      tapIds
    }
    requestData.lettertypeLetterSend(letterObj).then(res => {
      console.log(res.data);

      return new Promise((resolve, reject) => {
        // 发布返回信息
        let resCode = res.data.resultCode;
        if (resCode == 200) {
          wx.showToast({
            title: '发布成功',
            icon: 'none',
            duration: 1000,
            image: '../../images/confirm.png'
          });
          resolve('success');
        } else {
          wx.showToast({
            title: '服务器开了个小差',
            icon: 'none'
          })
          reject('error');
        }
      })

    }).then(res => {
      if (res == 'success') {
        setTimeout(() => {
          wx.switchTab({
            url: '/pages/index/index',
          })
        }, 1000)
      }
    })


    /* 
     ************ 提交日记 *************
    */
   requestData.lettertypeDiarySend().then(res => {
     
   })

    /* 
     ************ 提交吐槽 *************
    */


  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 随机笔名
    this.setData({
      initValue: '酒醉的蝴蝶'
    })
    // 获取上一个页面的输入内容
    this.setData({
      inputValue: options.subvalue
    })

    // 获取用户选择类型
    let type = options.type;
    if(type == '解忧') {
      this.setData({
        swithObj: swithArr[0] 
      })
    }else if(type == '日记') {
      this.setData({
        swithObj: swithArr[1] 
      })
    }else if(type == '吐槽') {
      this.setData({
        swithObj: swithArr[2] 
      })
    }

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})