<template>
  <div>
    <a-layout class="layout">
      <a-layout-sider v-model="collapsed" :trigger="null" collapsible>
        <div class="logo">{{ collapsed ? "元家" : "元家军小程序后台" }}</div>
        <a-menu
          :default-selected-keys="selectedKeys"
          :default-open-keys="openKeys"
          mode="inline"
          theme="dark"
          :inline-collapsed="collapsed"
        >
          <a-sub-menu key="数据类目">
            <span slot="title">
              <a-icon type="mail" /><span>数据类目</span>
            </span>
            <a-menu-item key="/">
              <router-link to="/"><span>用户数据</span></router-link>
            </a-menu-item>
            <a-menu-item key="1.2">
              <router-link to=""><span>积分总览</span></router-link>
            </a-menu-item>
            <a-menu-item key="1.3">
              <router-link to=""><span>发券总览</span></router-link>
            </a-menu-item>
          </a-sub-menu>
          <a-sub-menu key="闯关类目">
            <span slot="title">
              <a-icon type="video-camera" /><span>闯关类目</span>
            </span>
            <a-menu-item key="/user">
              <router-link to="/user"><span>闯关明细</span></router-link>
            </a-menu-item>
            <a-menu-item key="2.2">
              <router-link to="/"><span>待开拓</span></router-link>
            </a-menu-item>
          </a-sub-menu>
          <a-sub-menu key="礼品设置">
            <span slot="title">
              <a-icon type="upload" /><span>礼品设置</span>
            </span>
            <a-menu-item key="礼品类目"> 礼品类目</a-menu-item>
            <a-menu-item key="线上礼品"> 线上礼品 </a-menu-item>
            <a-menu-item key="线下礼品"> 线下礼品 </a-menu-item>
          </a-sub-menu>
          <a-sub-menu key="福利设置">
            <span slot="title">
              <a-icon type="crown" theme="filled" />
              <span>福利设置</span>
            </span>
            <a-menu-item key="积分增加"> 积分增加</a-menu-item>
            <a-menu-item key="兑换券"> 兑换券 </a-menu-item>
            <a-menu-item key="上传管理"> 上传管理 </a-menu-item>
            <a-menu-item key="活动管理"> 活动管理 </a-menu-item>
          </a-sub-menu>
          <a-menu-item key="/platform">
            <router-link to="/platform" tag="div">
              <a-icon type="pie-chart" theme="filled" />
              <span>任务平台</span>
            </router-link>
          </a-menu-item>
        </a-menu>
      </a-layout-sider>
      <a-layout>
        <a-layout-header class="flex" style="background: #fff; padding: 0">
          <a-icon
            class="trigger"
            :type="collapsed ? 'menu-unfold' : 'menu-fold'"
            @click="() => (collapsed = !collapsed)"
          />
          <a-dropdown style="margin-right: 20px">
            <a class="ant-dropdown-link" @click="(e) => e.preventDefault()">
              你好,Simba <a-icon type="down" />
            </a>
            <a-menu slot="overlay">
              <a-menu-item>
                <a href="javascript:;"><a-icon type="lock" />修改密码</a>
              </a-menu-item>
              <a-menu-item>
                <a href="javascript:;" @click="logout"
                  ><a-icon type="logout" />退出登录</a
                >
              </a-menu-item>
            </a-menu>
          </a-dropdown>
        </a-layout-header>
        <a-layout-content
          :style="{
            margin: '24px 16px',
            padding: '24px',
            background: '#fff',
            minHeight: '280px',
          }"
        >
          <a-breadcrumb>
            <a-breadcrumb-item>首页</a-breadcrumb-item>
            <a-breadcrumb-item v-if="$route.meta.module">
              <a href="">{{ $route.meta.module }}</a>
            </a-breadcrumb-item>
            <a-breadcrumb-item>{{ $route.meta.title }}</a-breadcrumb-item>
          </a-breadcrumb>
          <router-view></router-view>
        </a-layout-content>
      </a-layout>
    </a-layout>
  </div>
</template>
<script>
export default {
  data() {
    return {
      collapsed: false,
      selectedKeys: [],
      openKeys: [],
    }
  },

  created() {
    var module = this.$route.meta.module
    if (this.$route.meta && module) {
      this.openKeys = [module]
    }
    this.selectedKeys = [this.$route.path]
  },
  methods: {
    logout() {
      //清楚缓存
      console.log("00000")
      this.$router.push("/login")
    },
  },
}
</script>

<style lang="less" scoped>
.layout {
  height: 100vh;
  .logo {
    height: 32px;
    line-height: 32px;
    color: #fff;
    text-align: center;
    letter-spacing: 2px;
    font-weight: bold;
    font-family: 楷体;
    font-size: 16px;
    background: rgba(255, 255, 255, 0.2);
    margin: 16px;
  }

  .trigger {
    font-size: 18px;
    line-height: 64px;
    padding: 0 24px;
    cursor: pointer;
    transition: color 0.3s;
  }
  &:hover {
    color: #1890ff;
  }
  .ant-layout-header {
    display: flex;
    justify-content: space-between;
  }
}
</style>

