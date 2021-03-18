// Yeo/YeoAnimaSearch/YeoAnimaSearch.js
let anima = require('../utils/tools');
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    // 搜索输入值
    bindvalue: {
      type: String,
      value: null
    },
    // 返回搜索结果数组
    searBackArr: {
      type: Array,
      value: null
    },
    // line长度
    lineWidth: {
      type: Number,
      value: 330
    },
    // 搜索内容标题大小
    titFont: {
      type: Number,
      value: 28
    },
    // 搜索内容描述大小
    descFont: {
      type: Number,
      value: 23
    },
    // 横向展开宽度（px）
    horizonWidth: {
      type: Number,
      value: 200
    },
    // 垂直展开高度（px）
    perpendHeight: {
      type: Number,
      value: 260
    },
    // 取消叉图右移距离（px）
    cancelMovRight: {
      type: Number,
      value: 160
    },
    // 输入框右移距离（px）
    inputMovRight: {
      type: Number,
      value: 40
    },
    // 输入框宽度（px）
    inputWidth: {
      type: Number,
      value: 90
    },
    // 搜索框背景颜色
    boxBgColor: {
      type: String,
      value: '#FFFFFF'
    }
    
    
  },

  /**
   * 组件的初始数据
   */
  data: {
    spreadAndCancel: {},
    showInput: {},
    showCancel: {},
    showSearCon: {}
    
  },


  // 数据监听器
  observers: {
    'bindvalue': function() {
      this.EmitSearCont();
    }
  },

  lifetimes: {


  },

  /**
   * 组件的方法列表
   */
  methods: {
    // 展开搜索动画
    spreadSearch() {
      // 横向展开宽度
      let horizonWidth = this.data.horizonWidth;
      // 取消叉图右移距离
      let cancelMovRight = this.data.cancelMovRight;
      // 输入框右移距离
      let inputMovRight = this.data.inputMovRight;
      // 输入框宽度
      let inputWidth = this.data.inputWidth;

      let speard = anima.creatAnima(0,'ease',700);
      let show_input = anima.creatAnima(300,'ease',700);
      let show_cancel = anima.creatAnima(0,'ease',700);
      let show_input_con = anima.creatAnima();

      speard.width(horizonWidth).step();
      show_input.left(inputMovRight).opacity(1).step();
      show_cancel.left(cancelMovRight).opacity(1).step();
      show_input_con.width(inputWidth).height(23).step();

      this.setData({
        spreadAndCancel: speard.export(),
        showCancel: show_cancel.export(),
        showInput: show_input.export(),
        showInputCon: show_input_con.export()
      })
    },

    // 取消搜索动画
    cancelSearch() {
      let cancel = anima.creatAnima();
      let hidden_cancel = anima.creatAnima();
      let hidden_input = anima.creatAnima();
      let hidden_sear_con = anima.creatAnima(0,'ease',50);
      let hidden_input_con = anima.creatAnima();
      
      hidden_input.width(0).height(0).opacity(0).left(20).step();
      hidden_cancel.opacity(0).left(30).step();
      cancel.width(60).height(60).step();
      hidden_sear_con.opacity(0).step({
        delay: 50,
        timingFunction: 'ease',
        duration: 300
      }).width(0).height(0).step();
      hidden_input_con.width(0).height(0).step();
      this.setData({
        spreadAndCancel: cancel.export(),
        showCancel: hidden_cancel.export(),
        showInput: hidden_input.export(),
        showSearCon: hidden_sear_con.export(),
        showInputCon: hidden_input_con.export()
      })
    },

    // 传递实时搜索内容
    EmitSearCont() {
      this.triggerEvent('searcontevent',{
        searCont: this.data.bindvalue
      })
    },

    // 输入聚焦时触发
    focusInput() {
      // 横向展开宽度
      let horizonWidth = this.data.horizonWidth;
      // 垂直展开高度
      let perpendHeight = this.data.perpendHeight;

      let sprHegit = anima.creatAnima();
      let show_sear_con = anima.creatAnima();
      let show_line_con = anima.creatAnima();
    
      sprHegit.height(perpendHeight).step();
      show_sear_con.width(horizonWidth).height(perpendHeight - 70).step({
        duration: 500,
        timingFunction: 'ease',
        delay: 300
      }).opacity(1).step();
      show_line_con.opacity(1).step();
      
      this.setData({
        spreadAndCancel: sprHegit.export(),
        showSearCon: show_sear_con.export(),
        showConLine: show_line_con.export(),
        
      });
    },

    // 获取点击对象事件
    getSearObject(e) {
      // 获取当前点击对象
      let clickObj = e.currentTarget.dataset.item;
      this.triggerEvent('getsearobjevent',{clickObj})
    }

  }
})
