
Page({

  /**
   * 页面的初始数据
   */
  data: {
    title: "首页",
    homeData: {},
    searchDate: null,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.fetchHomeData();
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


  fetchHomeData: function() {
    var url = "/home";
    var params = {};
    var network = getApp().globalData.network;
    network.requestLoading(url, {}, "正在加载数据", function(responseObj) {
      console.log("请求成功\n" + JSON.stringify(responseObj.data));
      console.log("==============");
      this.setData({
        homeData : responseObj.data
      });
      console.log("==============");
    }, function(statusCode) {
      wx.showToast({
        title: '数据加载失败',
      })
    });
  }
})