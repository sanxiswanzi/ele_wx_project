// pages/placeMeun/placeMeun.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentIndex:"21", //当前遍历的id
    isActive:1, //是否选中点餐导航
    isShow:false, //控制加入购物车
    scrollTop_y:"",//右边的滑动至
    scrollTop:"0",
    active:"", //添加的类名
    eleId:"", //选中的元素id
    selId:"",
    obj:[{id:21,name:"123"},{id:22,name:"123"},{id:23,name:"123"},{id:24,name:"123"},{id:25,name:"123"},{id:26,name:"123"}]
  },
  onActive(event){
    // 第一个导航栏的高度是20
    // 第二个是60
    // 第一个加上第二个 等于第三个?
    // console.log(event); 
    // 第一个导航栏的高度
    let offtop = event.target.offsetTop
    // 跳转到的id
    let eleId = event.currentTarget.id

    console.log(offtop,eleId,event);

    this.setData({
      scrollTop:offtop,
      selId:"order"+eleId,
      currentIndex:eleId

    })

    // 点击时添加背景颜色
    // 并且控制滑动蓝高度
    // this.setData({
    //   scrollTop:offtop, //滑动到某个为止
    //   eleId:eleId, //跳转到的那个组件
    //   currentIndex:eleId, //当前遍历的id和点击的id一样时 更改背景色
    //   // scrollTop_y:(offtop+=offtop)  //先这样吧
    //   selId:"26"
    // })


    // 点击导航栏时 希望右边的数据也会跟着移动
    // 通过数据的id使用


  },
  onActive2(event){
    console.log(event);
  },

  // 打开加入购物车的回调函数
  showPopup(){
    this.setData({isShow:true})
  },
  // 关闭加入购物车时的回调函数
  onClose(){
    this.setData({isShow:false})
  },
  // 左边滑动框
  onAgstarts(event){
    console.log("左边滑动l",event.target.offsetTop);
    console.log(event);
 
  },
  // 左边滑动框事件结束
  onAgestartEnd(event){
   // console.log("右边的 滑动结束",event);
    // console.log(event.detail.scrollTop);
    // this.setData({scrollTop:100})
    // 通过滑动结束的事件 对左边的导航栏进行一个跟随移动
    this.setData({scrollTop:event.detail.scrollTop})

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