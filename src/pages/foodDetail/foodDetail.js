// pages/foodDetail/foodDetail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    show:false,
    stepper:1,//购物车数量
    checked:false,//分量
    result: ['a', 'b'],//复选框的数组
  },
  // 购物车弹出层打开
  showPopup(){
    this.setData({show:true})
  },
  // 关闭弹出层
  onClose(){
    this.setData({show:false})
  },
  // 获取复选框的值
  onChange(event) {
    this.setData({
      result: event.detail,
    })
  },
  // 计数器的值
  onChangestepper(event) {
    console.log(event.detail);
  },
  // 加入购物车的提交回调
  onSubimt(){
    //提交逻辑
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

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