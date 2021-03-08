/**
 *
 * http配置
 */
import axios from 'axios';
import qs from 'qs';
import config from '@/config';
import router from '../router';
import store from '../store';
import { getToken } from '../libs/utils';
axios.defaults.timeout = 500000;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
// axios.defaults.headers.post['Authorization'] = getToken();
axios.defaults.baseURL = process.env.NODE_ENV === 'development' ? config.baseUrl.dev : config.baseUrl.pro;
// axios.defaults.baseURL='https://march.yuanian.com/'
// 判断访问路径是否为 https协议
let ishttps = 'https:' == document.location.protocol ? true : false
if (ishttps) {
  // 更改请求为 https
  axios.defaults.baseURL = axios.defaults.baseURL.split(':')[0] + 's:' + axios.defaults.baseURL.split(':')[1]
} else {
  axios.defaults.baseURL = axios.defaults.baseURL
}
// 添加请求拦截器
axios.interceptors.request.use((config) => {
  // 在发送请求之前做些什么
  if (store.state.token) {
    // const token = getToken();
    // config.headers['token'] = token;
    config.headers.Authorization = `${store.state.token}`
  }
  config.data=qs.stringify(config.data)
  return config
}, (error) => {
  // 对请求错误做些什么
  return Promise.reject(error)
});

// 添加响应拦截器
axios.interceptors.response.use((response) => {
  // 对响应数据做点什么
  if (typeof response.data === 'string') {
    this.$Message.error(response.data);
    return false
  }
  return response;
}, (error) => {
  // 对响应错误做点什么
  if (error.response) {
    // switch (error.response.status) {
    //   case 401:
    //     //401 清除token信息并跳转到登录页面
    //     router.replace({
    //       name: '/login',
    //       query: {
    //         redirect: router.currentRoute.fullPath
    //       }
    //     });
    //     break;
    // }
  }
  return Promise.reject(error.response);
});
export default {
  // fetchPost  请求方式
  fetchPost: function (url, params, query) {
    let urls = url;
    if (query) {
      urls = url + '?' + query;
    } else {
      urls = url;
    }
    return new Promise((resolve, reject) => {
      axios.post(urls, params)
        .then(response => {
          resolve(response.data);
        }, err => {
          reject(err);
        })
        .catch((error) => {
          reject(error);
        });
    });
  },

  // GET 请求方式
  fetchGet: function (url, params, header) {
    return new Promise((resolve, reject) => {
      axios.get(url, {
        params: params,
        responseType: header ? header.responseType : 'json'
      })
        .then(response => {
          resolve(response.data);
        }, err => {
          reject(err);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }
  // fetchGet: function (url, params, header) {
  //   console.log(store.state.intercept);
  //   return new Promise((resolve, reject) => {
  //     axios.get(url, {
  //         params: params,
  //         responseType: header ? header.responseType : 'json',
  //         headers: {
  //           Intercept: store.state.intercept,
  //           Environment: this.getEnvironment()
  //         }
  //       })
  //       .then(response => {
  //         resolve(response.data);
  //       }, err => {
  //         reject(err);
  //       })
  //       .catch((error) => {
  //         reject(error);
  //       });
  //   });
  // },
  // getEnvironment(){
  //   //拼合token并加密编码
  //   let channeltokenObj = {key : 1, value : {user_agent : navigator.userAgent, version : navigator.userAgent}};
  //   channeltokenObj = crypto.Encrypt(JSON.stringify(channeltokenObj));
  //   channeltokenObj = encodeURIComponent(channeltokenObj);
  //   return channeltokenObj;
  // }
};
