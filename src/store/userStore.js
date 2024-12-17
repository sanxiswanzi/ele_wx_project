// 引入仓库实例
import {observable,action} from "mobx-miniprogram"
import {getLike} from "../api/index"

// 使用observale创建一个仓库
export const useUserStore = observable({

  //直接声明的数据就是响应式的
  token:"",
  statusCode:"",
  //猜你喜欢 
  likeList:[],

  // action修改状态
  setToken : action(function(token){
    this.token = token
  }),
  // 获取猜你喜欢
  getLikeList:action( async function (){
    let result = await getLike()
    if(result.code == 200) {
      this.likeList = result.data
    }
  })
  // 

})
