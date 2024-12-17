// index.js
import {UserStore} from "./behaviors"
Page({
  behaviors:[UserStore],
  // 跳转商品详情页
  pushFoodDate(){
    wx.redirectTo({
      url: '/pages/foodDetail/foodDetail',
      success(res){

      },
      fail(){
        console.log("失败了");
      }
    })
  },
  // 跳转美食列表
  pushFoodList(){
    wx.redirectTo({
      url: '/pages/foodList/foodList',
    })
  },
  // 测试支付成功页面
  pushPaySucess(){
    wx.navigateTo({
      url: '/pages/paySucess/paySucess',
    })
  },
  // 测试搜索页面
  pushSearch(){
    wx.navigateTo({
      url: '/pages/search/search',
    })
  },
  // 测试登录页面
  pushLogin(){
    wx.navigateTo({
      url:"/pages/login/login"
    })
  },
  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {
    console.log("触底了");
  },
  // 页面渲染完毕时
  onReady(){
    // 获取猜你喜欢列表
    this.getLikeList()
  }

  
})
