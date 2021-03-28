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
    ]
  },

  // 点击按钮
  bindTap(e) {
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

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 随机笔名
    this.setData({
      initValue: '酒醉的蝴蝶'
    })
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