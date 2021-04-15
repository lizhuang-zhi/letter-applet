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


// 邮票初始化边框
const stampInitBorder = '8rpx solid #F7F7F7';
// 邮票选择边框
const stampChooseBorder = '8rpx solid #F0934F'
// 选中邮票
let stampPic = '';

// 声明解忧标签数组(存储选择的标签，最多三个)
let selectSorrowArr = [];
// 声明日记天气数组(存储选择的标签，最多一个)
let selectDiaryWeatherArr = [];
// 声明吐槽天气数组(存储选择的标签，最多一个)
let selectComplainWeatherArr = [];

// 引入工具类
let tools = require('../../utils/tools');
// 引入数据接口
let requestData = require('../../../utils/request');
// 单选框显示内容
let swithArr = [{
    isShow: true,
    tit: '允许收录到解忧信箱',
    cont: '保存历史足迹'
  },
  {
    isShow: true,
    tit: '允许公开日记',
    cont: '开放自我心路'
  },
  {
    isShow: false
  }
];
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 解忧标签数组
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
    // 日记天气数组
    weatherDiaryArr: [{
        tagName: '晴天',
        btnBgColor: initTagBgColor,
        BtnColor: initFontColor,
        btnBorder: initTagBorder
      },
      {
        tagName: '多云',
        btnBgColor: initTagBgColor,
        BtnColor: initFontColor,
        btnBorder: initTagBorder
      },
      {
        tagName: '下雨',
        btnBgColor: initTagBgColor,
        BtnColor: initFontColor,
        btnBorder: initTagBorder
      },
      {
        tagName: '阴天',
        btnBgColor: initTagBgColor,
        BtnColor: initFontColor,
        btnBorder: initTagBorder
      }
    ],
    // 吐槽天气数组
    weatherComplainArr: [{
        tagName: '晴天',
        btnBgColor: initTagBgColor,
        BtnColor: initFontColor,
        btnBorder: initTagBorder
      },
      {
        tagName: '多云',
        btnBgColor: initTagBgColor,
        BtnColor: initFontColor,
        btnBorder: initTagBorder
      },
      {
        tagName: '下雨',
        btnBgColor: initTagBgColor,
        BtnColor: initFontColor,
        btnBorder: initTagBorder
      },
      {
        tagName: '阴天',
        btnBgColor: initTagBgColor,
        BtnColor: initFontColor,
        btnBorder: initTagBorder
      }
    ],
    // 邮票数组
    stampArr: [{
        picUrl: '../../images/mouse.png',
        title: '松鼠邮票',
        description: '第一版',
        picBorder: stampInitBorder
      },
      {
        picUrl: '../../images/rabbit.png',
        title: '兔子邮票',
        description: '第一版',
        picBorder: stampInitBorder
      },
      {
        picUrl: '../../images/cat.png',
        title: '猫咪邮票',
        description: '第一版',
        picBorder: stampInitBorder
      },
      {
        picUrl: '../../images/dog.png',
        title: '小狗邮票',
        description: '第一版',
        picBorder: stampInitBorder
      },
    ],

    // 随机笔名
    initValue: '',
    // 上一页面用户输入内容
    inputValue: '',
    // 选择类型
    type: '',
    // 获取开关当前类型
    switchVal: null

  },

  // 解忧标签选择点击按钮
  bindTapSorrowTag(e) {
    // 获取点击按钮索引
    let btnIndex = e.currentTarget.dataset.index;
    // 获取按钮标签数组
    let tagArr = this.data.tagArr;
    if (tagArr[btnIndex].btnBorder == initTagBorder && selectSorrowArr.length < 3) {
      // 选中时边框颜色
      tagArr[btnIndex].btnBgColor = chooseTagBgColor;
      tagArr[btnIndex].BtnColor = chooseTagColor;
      tagArr[btnIndex].btnBorder = chooseTagBorder;
      // 存入数组
      selectSorrowArr.push(tagArr[btnIndex].tagName);
    } else if (selectSorrowArr.indexOf(tagArr[btnIndex].tagName) != -1) {
      // 边框为未选中时颜色
      tagArr[btnIndex].btnBgColor = initTagBgColor;
      tagArr[btnIndex].BtnColor = initFontColor;
      tagArr[btnIndex].btnBorder = initTagBorder;
      // 删除元素
      selectSorrowArr.splice(selectSorrowArr.indexOf(tagArr[btnIndex].tagName), 1);
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

  // 日记天气选择点击按钮
  bindTapDiaryWeather(e) {
    // 获取点击按钮索引
    let btnIndex = e.currentTarget.dataset.index;
    // 获取按钮标签数组
    let weatherDiaryArr = this.data.weatherDiaryArr;
    if (weatherDiaryArr[btnIndex].btnBorder == initTagBorder && selectDiaryWeatherArr.length < 1) {
      // 选中时边框颜色
      weatherDiaryArr[btnIndex].btnBgColor = chooseTagBgColor;
      weatherDiaryArr[btnIndex].BtnColor = chooseTagColor;
      weatherDiaryArr[btnIndex].btnBorder = chooseTagBorder;
      // 存入数组
      selectDiaryWeatherArr.push(weatherDiaryArr[btnIndex].tagName);
    } else if (selectDiaryWeatherArr.indexOf(weatherDiaryArr[btnIndex].tagName) != -1) {
      // 边框为未选中时颜色
      weatherDiaryArr[btnIndex].btnBgColor = initTagBgColor;
      weatherDiaryArr[btnIndex].BtnColor = initFontColor;
      weatherDiaryArr[btnIndex].btnBorder = initTagBorder;
      // 删除元素
      selectDiaryWeatherArr.splice(selectDiaryWeatherArr.indexOf(weatherDiaryArr[btnIndex].tagName), 1);
    } else {
      wx.showToast({
        title: '最多只能选择一种天气',
        icon: 'none'
      })
    }

    this.setData({
      weatherDiaryArr: this.data.weatherDiaryArr
    })


  },

  // 解忧天气选择点击按钮
  bindTapComplainWeather(e) {
    // 获取点击按钮索引
    let btnIndex = e.currentTarget.dataset.index;
    // 获取按钮标签数组
    let weatherComplainArr = this.data.weatherComplainArr;
    if (weatherComplainArr[btnIndex].btnBorder == initTagBorder && selectComplainWeatherArr.length < 1) {
      // 选中时边框颜色
      weatherComplainArr[btnIndex].btnBgColor = chooseTagBgColor;
      weatherComplainArr[btnIndex].BtnColor = chooseTagColor;
      weatherComplainArr[btnIndex].btnBorder = chooseTagBorder;
      // 存入数组
      selectComplainWeatherArr.push(weatherComplainArr[btnIndex].tagName);
    } else if (selectComplainWeatherArr.indexOf(weatherComplainArr[btnIndex].tagName) != -1) {
      // 边框为未选中时颜色
      weatherComplainArr[btnIndex].btnBgColor = initTagBgColor;
      weatherComplainArr[btnIndex].BtnColor = initFontColor;
      weatherComplainArr[btnIndex].btnBorder = initTagBorder;
      // 删除元素
      selectComplainWeatherArr.splice(selectComplainWeatherArr.indexOf(weatherComplainArr[btnIndex].tagName), 1);
    } else {
      wx.showToast({
        title: '最多只能选择一种天气',
        icon: 'none'
      })
    }

    this.setData({
      weatherComplainArr: this.data.weatherComplainArr
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

  // 邮票选择
  stampClickObj(e) {
    console.log(e.detail.clickObj);
    // 获取点击邮票索引
    let index = e.detail.clickObj.index;
    // 获取邮票数组
    let stampArr = this.data.stampArr;
    // 当没有选择时
    if (stampPic == '' && stampArr[index].picBorder == stampInitBorder) {
      // 给点击对象加边框
      stampArr[index].picBorder = stampChooseBorder;
      // 存储点击对象图片地址
      stampPic = stampArr[index].picUrl;
    } else if (stampPic != '' && stampArr[index].picBorder == stampInitBorder) {
      wx.showToast({
        title: '最多只能选择一张邮票',
        icon: 'none'
      })
    } else if (stampPic != '' && stampArr[index].picBorder == stampChooseBorder) {
      // 取消选中邮票
      stampArr[index].picBorder = stampInitBorder;
      // 消去点击对象图片地址
      stampPic = '';
    }
    // 重新渲染stampArr
    this.setData({
      stampArr: stampArr
    })
  },

  // 获取开关选择值
  switchEvent(e) {
    this.setData({
      switchVal: e.detail.switchValue
    })
  },

  // 确认提交
  ConfirmSend() {
    // 获取类型
    let type = this.data.type;
    if (type == '解忧') {
      // 提交解忧信件
      this.ConfirmSendSorrow();
    } else if (type == '日记') {
      // 提交日记信件
      this.ConfirmSendDiary();
    } else if (type == '吐槽') {
      // 提交吐槽
      this.ConfirmSendComplain();
    }else if(type == '解答') {
      this
    }else {
      console.log('位置类型，未作处理！！！');
    }


  },

  // 提交解忧信件
  ConfirmSendSorrow() {
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
    let stampUrl = stampPic;
    // 状态
    let state = 1;
    // 	标签id集合
    let tapIds = selectSorrowArr.toString();
    // 声明对象保存上面的值
    let letterObj = {
      penName,
      content,
      releaseTime,
      stampUrl,
      state,
      tapIds
    };

    // 标签选择不能为空
    if (selectSorrowArr.length == 0) {
      wx.showToast({
        title: '请选择标签',
        icon: 'none'
      })
    } else if (stampUrl == '') {
      wx.showToast({
        title: '请选择邮票',
        icon: 'none'
      })
    } else {
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
    }

  },

  // 提交日记
  ConfirmSendDiary() {
    /* 
     ************ 提交日记 *************
     */
    // 笔名
    let penName = this.data.initValue;
    // 内容
    let content = this.data.inputValue;
    // 用户openId
    // 状态
    let state = this.data.switchVal == true ? 1 : 0;
    // 天气 
    let weather = selectDiaryWeatherArr.toString();
    // 日记对象
    let diaryObj = {
      penName,
      content,
      state,
      weather,
    }
    if (selectDiaryWeatherArr.length == 0) {
      wx.showToast({
        title: '请选择标签',
        icon: 'none'
      })
    } else {
      requestData.lettertypeDiarySend(diaryObj).then(res => {
        console.log(res);
        return new Promise((resolve, reject) => {
          // 获取提交返回信息
          let msgCode = res.data.resultCode;
          if (msgCode == 200) {
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
    }

  },

  // 提交吐槽 
  ConfirmSendComplain() {
    /* 
     ************ 提交吐槽 *************
     */
    // 吐槽人头像
    let avatarUrl = 'https://dss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1950846641,3729028697&fm=26&gp=0.jpg';
    // 内容
    let content = this.data.inputValue;
    // 发布时间
    let date = new Date();
    // 吐槽评论数量 ？？？？？？？？？？？？？
    let number = 666;
    // 用户openId
    // 笔名
    let penName = this.data.initValue;
    // 状态
    let state = 0;
    /* 
      天气 (这里需要第二版本更新时添加)
    */
    // let weather = selectComplainWeatherArr.toString();
    // 吐槽描述
    let title = content.substring(0, '。'.indexOf(content) == -1 ? 30 : '。'.indexOf(content));
    // 日记对象
    let complainObj = {
      avatarUrl,
      date,
      penName,
      content,
      state,
      title
    };
    requestData.lettertypeComplainSend(complainObj).then(res => {
      console.log(res);
      return new Promise((resolve, reject) => {
        // 获取提交返回信息
        let msgCode = res.data.resultCode;
        if (msgCode == 200) {
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


  },

  // 提交解答
  ConfirmSendAnswer() {
    requestData.indexStampReply().then(res => {
      console.log(res);
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
    // 获取上一个页面的输入内容
    this.setData({
      inputValue: options.subvalue
    })

    // 获取用户选择类型
    let type = options.type;
    console.log(type);
    this.setData({
      type: type
    })
    if (type == '解忧') {
      this.setData({
        swithObj: swithArr[0],
      })
    } else if (type == '日记') {
      this.setData({
        swithObj: swithArr[1],
      })
    } else if (type == '吐槽') {
      this.setData({
        swithObj: swithArr[2],
      })
    }

    console.log(selectSorrowArr);
    console.log(selectDiaryWeatherArr);
    console.log(selectComplainWeatherArr);
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
  onHide: function () {},

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    // 置空选择数组
    selectSorrowArr = [];
    selectDiaryWeatherArr = [];
    selectComplainWeatherArr = [];
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