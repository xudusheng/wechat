
import {hex_md5} from "/md5.js"

function request(url, params, success, fail) {
  this.requestLoading(url, params, "", success, fail)
}

// 展示进度条的网络请求
// url:网络请求的url
// params:请求参数
// loadingMessage:进度条的提示信息
// success:成功的回调函数
// fail：失败的回调
function requestLoading(url, params, loadingMessage, success, fail) {
  console.log(params);
  var paramsNew = signPackageWithParam(params);
  wx.showLoading({
    title: loadingMessage,
  })

  wx.request({
    url: url,
    data: paramsNew,
    header: {
      'content-type': 'application/x-www-form-urlencoded'
    },
    method: 'get',
    dataType: 'json',
    responseType: 'text',
    success: function(res) {
      wx.hideLoading();
      if (res.statusCode == 200) {
        success(res.data);
      } else {
        fail(res.statusCode);
      }
    },
    fail: function(res) {
      wx.hideLoading();
      fail(res.statusCode);
    },
    complete: function(res) {},
  })
};

/**
   签名操作
  
   @param param 传入的数据
   @return 返回签好名的对象
   */
var signPackageWithParam = function(param) {
  var app = getApp();
  let api_key = app.globalData.api_key;
  let api_version = app.globalData.api_version;
  let app_version = app.globalData.app_version;
  let source = app.globalData.source;
  let timestamp = Date.parse(new Date()).toString;

  //设备基本信息
  var phone_model = "";
  var phone_version = "";
  wx.getSystemInfo({
    success: function(res) {
      phone_model = res.model;
      phone_version = res.system;
    },
  })

  var paramNew = param;
  paramNew.api_key = api_key; //接口KEY
  paramNew.api_version = api_version; //接口版本号
  paramNew.app_version = app_version; //APP版本号
  paramNew.phone_model = phone_model; //机型
  paramNew.phone_version = phone_version; //手机系统版本
  paramNew.source = source; //请求来源 h5/ios/android
  paramNew.timestamp = timestamp; //unix时间戳

  let sign = signParams(paramNew);
  paramNew.sign = sign;
  return paramNew;
}


/**
 自定义签名方法
 
 @param param 需要加入签名的值
 @return MD5 Str
 */
var signParams = function(params) {
  var signStr = "";
  var keys = [];

//获取所有的key
for(let key in params) {
  keys.push(key);
}

  keys = keys.sort();

  for (var i = 0; i < keys.length; i++) {
    let key = keys[i];
    let value = params[key];
    if (value.length > 0) {
      signStr += (key + "=" + value);
    }
    if (i < keys.length - 1) {
      signStr += "&";
    }
  }
  signStr += "&91GAUJRfZzkXdWtq";

  return hex_md5(signStr).toUpperCase;
}



module.exports = {
  request: request,
  requestLoading: requestLoading,
}