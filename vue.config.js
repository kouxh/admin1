const path = require('path')

const resolve = dir => {
  return path.join(__dirname, dir)
}
module.exports = {
  // 部署应用时的根路径(默认'/'),也可用相对路径(存在使用限制)
  // baseUrl: '/admin',
  publicPath: './',
  outputDir: 'dist',// 运行时生成的生产环境构建文件的目录(默认''dist''，构建之前会被清除)
  indexPath: 'index.html',//指定生成的 index.html 的输出路径(相对于 outputDir)也可以是一个绝对路径。
  pages: {
    index: {
      // page 的入口
      entry: './src/main.js',
      // 模板来源
      template: 'public/index.html',
      // 在 dist/index.html 的输出
      filename: 'index.html',
      // 当使用 title 选项时，
      // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
      title: 'Index Page',
      // 在这个页面中包含的块，默认情况下会包含
      // 提取出来的通用 chunk 和 vendor chunk。
      chunks: ['chunk-vendors', 'chunk-common', 'index']
    },
    // 当使用只有入口的字符串格式时，
    // 模板会被推导为 `public/subpage.html`
    // 并且如果找不到的话，就回退到 `public/index.html`。
    // 输出文件名会被推导为 `subpage.html`。
    subpage: './src/main.js'
  },
  lintOnSave: false,// 是否在保存的时候检查
  chainWebpack: config => {
    config.resolve.alias
      .set('@', resolve('src')) // key,value自行定义，比如.set('@@', resolve('src/components'))
      .set('_c', resolve('src/components'))
  },
  productionSourceMap: false,// 生产环境是否生成 sourceMap 文件,可以将其设置为 false 以加速生产环境构建


  css: {
    // extract: true,// 是否使用css分离插件 ExtractTextPlugin
    sourceMap: false,// 开启 CSS source maps
    modules: false,// 启用 CSS modules for all css / pre-processor files.
    loaderOptions: {
      less: {
        lessOptions: {
          // If you are using less-loader@5 please spread the lessOptions to options directly
          modifyVars: {
            'primary-color': '#1DA57A',
            'link-color': '#1DA57A',
            'border-radius-base': '2px',
          },
          javascriptEnabled: true,
        },
      },
    },
  },
  devServer: {// 环境配置
    host: '0.0.0.0',
    port: 8080,
    https: false,
    hotOnly: false,
    open: true, //配置自动启动浏览器
    proxy: {// 配置多个代理(配置一个 proxy: 'http://localhost:4000' )
      '/api': {
        target: 'https:march.yuanian.com',
        ws: true,
        changeOrigin: true
      },
      '/foo': {
        target: 'https:march.yuanian.com'
      }
    }
  },

  pluginOptions: {// 第三方插件配置
    // ...
  }
}
