// 封装的一个请求
const baseURL = "http://localhost:3000";
export default function requestServer(options) {
  return new Promise((resolve, reject) => {
    wx.request({
      url: baseURL + options.url, //服务器地址+请求的接口路径
      data: options.data || {}, // 请求体不传为空
      method: options.method || 'GET', //请求方法
      success: res => { //成功的一个回调
        //statusCode //状态码
        resolve(res.data);
        // if(res.statusCode == 200){
       
        // }
       
      },
      // 失败的回调
      fail: err => {
        reject(new Error("falie")); 
      }
    });
  });
}