import requestServer from "../util/requestServe"

// 获取首页猜你喜欢列表
export const getLike = function(){
  return requestServer({
    url:"/dishes/like",
    method:"GET"
  })
}