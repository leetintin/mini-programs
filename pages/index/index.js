Page({
   data: {
      msg: '深圳市甘露珠宝首饰有限公司',
      view: "　购物-珠宝-饰品",
      address: "　广东省深圳市罗湖区水贝一路4号20栋爱得康大厦",
      tiem: "　09:00-18:00",
      call: "　0755-25624888",
      markers: [{
         id: 0,
         latitude: 22.5701788621,
         longitude: 114.1285997629,
         width: 50,
         height: 50
      }],
      // text:"这是一个页面"
   },
   calling: function () {
      wx.makePhoneCall({
         phoneNumber: '0755-25624888',
         success: function () {
            console.log("拨打电话成功！")
         },
         fail: function () {
            console.log("拨打电话失败！")
         }
      })
   },
   onLoad: function (options) {
      // 页面初始化 options为页面跳转所带来的参数
   },
   onReady: function () {
      // 页面渲染完成
   },
   onShow: function () {
      // 页面显示
   },
   onHide: function () {

      // 页面隐藏
   },
   onUnload: function () {
      // 页面关闭
   }

})
