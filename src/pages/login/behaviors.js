import {BehaviorWithStore} from "mobx-miniprogram-bindings"
import {useUserStore} from "../../store/userStore"
export const userBehavior = BehaviorWithStore({
  // 绑定的仓库数据
  storeBindings:{
    store:useUserStore,
    fields:["token","statusCode"],
    actions:["setToken"]
  }

})