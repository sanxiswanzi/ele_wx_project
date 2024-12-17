import requestServer from "../util/requestServe"

// 用户登录
export function userLogin(data){
  return requestServer({
    url:"/users/login",
    method:"POST",
    data,
    // 需要携带头的话
    header: {
      'content-type': 'application/json'
      }
  })
}
// 通过code登录
export function userCodeLogin(data){
  return requestServer({
    url:"/users/usercode",
    method:"POST",
    data
  })
}