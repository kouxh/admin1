import Vue from 'vue'
import Router from 'vue-router'
import { getToken } from './libs/utils'

// 全局钩子函数
// to: Route: 即将要进入的目标 路由对象
// from: Route: 当前导航正要离开的路由
// next: Function: 一定要调用该方法来 resolve 这个钩子。执行效果依赖 next 方法的调用参数。
// next(): 进行管道中的下一个钩子。如果全部钩子执行完了，则导航的状态就是 confirmed （确认的）。
// next(false): 中断当前的导航。如果浏览器的 URL 改变了（可能是用户手动或者浏览器后退按钮），那么 URL 地址会重置到 from 路由对应的地址。
// next('/') 或者 next({ path: '/' }): 跳转到一个不同的地址。当前的导航被中断，然后进行一个新的导航。
// 确保要调用 next 方法，否则钩子就不会被 resolved。

// // 如何localStorage的token不存在或是空跳转到路由
// router.beforeEach((to, from, next) => {
//   if (to.path === '/') {
//     next();
//   } else {
//     let token = window.localStorage.token;
//     if (token === 'null' || token === '' || token === undefined) {
//       next('/');
//     } else {
//       next();
//     }
//   }

// })
const LOGIN_PAGE_NAME = 'login'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('./layout/admin.vue'),
      children: [
        {
          path: '',
          name: 'home',
          component: () => import('./views/Home.vue'),
          meta: {
            auth: true,
            icon: '',
            hidden: false,
            module: '数据类目',
            title: '用户数据',
            isSingle: true
          },
        },
        {
          path: 'user',
          name: 'user',
          component: () => import('./views/users/index.vue'),
          meta: {
            auth: true,
            icon: '',
            hidden: false,
            module: '闯关类目',
            title: '闯关明细',
            isSingle: true
          },
        },
        {
          path: 'platform',
          name: 'platform',
          component: () => import('./views/platform.vue'),
          meta: {
            title: '任务平台',
          },
        },
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('./views/users/login.vue'),
      meta: {
        title: '登录',

      },
    },
    {
      path: '*',
      name: 'erroe',
      component: () => import('./views/error.vue'),
      meta: {
        title: '错误',
      },
    },

  ]
})


router.beforeEach((to, from, next) => {
  let loadingBar = document.getElementById('global-loading')
  if (!loadingBar) {
    loadingBar = document.createElement('div')
    loadingBar.id = "global-loading"
    document.body.append(loadingBar)
  } else {
    loadingBar.style.display = 'block'
  }


  document.title = '元家军小程序后台-' + to.meta.title

  setTimeout(()=>{
    next()
  },1000)

  // const token = getToken()
  // if (!token && to.name !== LOGIN_PAGE_NAME) {
  //   // 未登录且要跳转的页面不是登录页
  //   next({
  //     name: LOGIN_PAGE_NAME // 跳转到登录页
  //   })
  // } else if (!token && to.name === LOGIN_PAGE_NAME) {
  //   // 未登陆且要跳转的页面是登录页
  //   next() // 跳转
  // } else if (token && to.name === LOGIN_PAGE_NAME) {
  //   // 已登录且要跳转的页面是登录页
  //   next({
  //     name: home // 跳转到home页
  //   })
  // } else {
  //   next({
  //     name: 'login'
  //   })
  // }
});
router.afterEach((to, from) => {
  //跳转后你要做的事情
  // window.scrollTo(0, 0)
  let loadingBar = document.getElementById('global-loading')
  if (loadingBar) loadingBar.style.display = 'none'

})
export default router
