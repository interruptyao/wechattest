//index.js
//获取应用实例
var drawTool = require("../../utils/util.js")

var app = getApp()
Page({
  data: {

  },

  onLoad: function() {
    var that = this
    drawTool.drawWithArr(that.data.arr)
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo) {
      //更新数据
      that.setData({
        userInfo: userInfo
      })
    })



    // wx.request({
    //   url: 'http://192.168.1.116/phpinfo.php',
    //   data: {},
    //   method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
    //   // header: {}, // 设置请求的 header
    //   success: function (res) {
    //     // success
    //     console.log(res.data.fundManagers)
    //   },
    //   fail: function () {
    //     // fail
    //   },
    //   complete: function () {
    //     // complete
    //   }
    // })
  },
  toMapFun: function() {
    wx.navigateTo({
      url: '../../pages/map/map'　　 // 页面 A
    })
  },
  getBluetoothDevice: function() {
    var that = this;
    var show;
    wx.scanCode({
      success: (res) => {
        this.show = "结果:" + res.result + "二维码类型:" + res.scanType + "字符集:" + res.charSet + "路径:" + res.path;
        that.setData({
          show: this.show
        }) 
        wx.showToast({
          title: '成功',
          icon: 'success',
          duration: 2000
        })
      },
      fail: (res) => {
        wx.showToast({
          title: '失败',
          icon: 'success',
          duration: 2000
        })
      },
      complete: (res) => {}
    })
  }
})