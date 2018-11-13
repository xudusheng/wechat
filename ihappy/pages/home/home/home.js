Page({

  /**
   * 页面的初始数据
   */
  data: {
    title: "首页",
    goodsList: [{
        goods_id: "123456",
        goods_title: "iPhone XS",
        goods_price: "8688",
        goods_icon: "https://img.bisinuolan.cn/8d0a69c7-0a8d-48bd-a9ef-66f1e7abec48-1541731149960.png",
        status: 1
      },
      {
        goods_id: "123456",
        goods_title: "Android XS",
        goods_price: "8688",
        goods_icon: "https://img.bisinuolan.cn/8d0a69c7-0a8d-48bd-a9ef-66f1e7abec48-1541731149960.png",
        status: 2
      },
      {
        goods_id: "123456",
        goods_title: "iPhone XS",
        goods_price: "8688",
        goods_icon: "https://img.bisinuolan.cn/8d0a69c7-0a8d-48bd-a9ef-66f1e7abec48-1541731149960.png",
        status: 3
      },
      {
        goods_id: "123456",
        goods_title: "Google XS",
        goods_price: "8688",
        goods_icon: "https://img.bisinuolan.cn/8d0a69c7-0a8d-48bd-a9ef-66f1e7abec48-1541731149960.png",
        status: 1
      },
    ],

// swiper
    imgUrls: [
      'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
    ],
    indicatorDots: false,
    autoplay: false,
    interval: 5000,
    duration: 1000

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  },



  clickMeA: function(e) {
    console.log("clickMeA");
  },
  clickMeB: function(e) {
    console.log("clickMeB");
  },
  clickMeC: function(e) {
    console.log("clickMeC");
  },
  upper: function (e) {
    console.log(e)
  },
  lower: function (e) {
    console.log(e)
  },
  scroll: function (e) {
    console.log(e)
  },
})