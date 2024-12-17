// 引入状态管理

import { BehaviorWithStore } from "mobx-miniprogram-bindings"

import { useUserStore } from "../../store/userStore"
// behaviors.js文件
export const UserStore = BehaviorWithStore({
  // 绑定的仓库数据
  storeBindings:{
    store:useUserStore,
    fields:["likeList"],
     actions:["getLikeList"]
  }

})