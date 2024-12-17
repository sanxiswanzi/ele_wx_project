
// pages/login/login.js
import {userLogin,userCodeLogin} from "../../api/login"
import {userBehavior} from "./behaviors"


Page({
  behaviors:[userBehavior],
  /**
   * 页面的初始数据
   */
  data: {
    checked:false
  },
  onChange(){
    this.setData({checked:!this.data.checked})
  },
  // 登录
  onsubitm(){
    wx.login({
      success: (res) => {
        // 请求成功后会返回一个code 申请成功后将code发送给开发者后台服务器
        // 开发者后台服务器会通过 code去换取我的微信信息
        console.log(res.code);
        // 请求成功后将code的回开发者服务器
        userCodeLogin({code:res.code}).then(res =>{
          // 成功之后将会返回一个token作为登录成功标识
          // 调用user仓库中的settoken方法存储token
          // 存储token之后表示已经登录成功了 返回首页
           wx.setStorage({
             key:"token",
             data:res.token
           })
           this.setToken(res.token)
          console.log(res,"后端数据");
          // 返回首页 不过一般来说是在首页的时候进行检查是否登录的
          wx.reLaunch({
            url: '/pages/index/index',
          })
        })

      },
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    // 页面加载发送请求
    // userLogin().then(res =>{
    //   console.log("登录页面的请求发送成功了",res);
    // }).catch(err =>{
    //   console.log("失败了");
    // })



  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {
    // wx.login({
    //   success: (res) => {
    //     // 请求成功后会返回一个code 申请成功后将code发送给开发者后台服务器
    //     // 开发者后台服务器会通过 code去换取我的微信信息
    //     console.log(res.code);
    //     // 请求成功后将code的回开发者服务器
    //     userCodeLogin({code:res.code}).then(res =>{
    //       // 成功之后将会返回一个token作为登录成功标识
    //       // 调用user仓库中的settoken方法存储token
    //       // 存储token之后表示已经登录成功了 返回首页
    //        wx.setStorage({
    //          key:"token",
    //          data:res.token
    //        })
    //        this.setToken(res.token)
    //       console.log(res,"后端数据");
    //       // 返回首页 不过一般来说是在首页的时候进行检查是否登录的
    //       wx.reLaunch({
    //         url: '/pages/index/index',
    //       })
    //     })

    //   },
    // })
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})