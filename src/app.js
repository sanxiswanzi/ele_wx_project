// app.js
App({

  //在全局中检查用户是否登录 如果没登录的话，跳转登录页进行授权登录 登录完成再返回首页 
  // 全局只执行一次
onLaunch(){
  // 检查用户是否登录
  // wx.checkSession({
  //   success:function(data){
  //     console.log(data);
  //     console.log("成功了");
  //   },
  //   fail:function(){
  //     // 失败了证明令牌过期了
  //     // 需要用户重新登录
  //     wx.reLaunch({
  //       url: '/pages/login/login',
  //     })
  //     console.log("失败了");
  //   }
  // })
},
// onload
onload(){
  console.log("app。js执行了");
}


})
