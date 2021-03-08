import fetch from './http';
//方式-
export const checkMobileExists = (params) => {
  return fetch.fetchGet('/applets/forum/classRoomList', params);
};
//方式二
export default {
    /**
   * [用户注册]
   * @param  {[type]} params [description]
   * @return {[type]}        [description]
   */
  usersRegister(params) {
    return fetch.fetchPost('/api/user/seller/v1/user/usersregister', params);
  },
}
