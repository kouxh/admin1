import Vue from 'vue'
import Vuex from 'vuex'
// import {
//   login,
//   logout
// } from '@/api/api'
import { setToken, getToken } from '@/libs/utils'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: getToken(),
    manageState: false
  },
  mutations: {
    setToken(state, token) {
      state.token = token
      setToken(token)
    },
    /**
 * 更改店铺管理状态
 * @param  {[type]} state [description]
 * @param  {[type]} data  [description]
 * @return {[type]}       [description]
 */
    changeManageState(state, data) {
      // console.log(data);
      state.manageState = data;
      cookie.set('manageState', state.manageState, {
        expires: 7
      });
    }
  },
  actions: {
    // 登录
    // handleLogin({ commit }, { userName, password }) {
    //   userName = userName.trim()
    //   return new Promise((resolve, reject) => {
    //     login({
    //       userName,
    //       password
    //     }).then(res => {
    //       const data = res.data
    //       commit('setToken', data.token)
    //       resolve()
    //     }).catch(err => {
    //       reject(err)
    //     })
    //   })
    // },
    // // 退出登录
    // handleLogOut({ state, commit }) {
    //   return new Promise((resolve, reject) => {
    //     logout(state.token).then(() => {
    //       commit('setToken', '')
    //       resolve()
    //     }).catch(err => {
    //       reject(err)
    //     })
    //   })
    // }
  }
})
