/* eslint-disable no-undef */
const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: '/vue3-operation/dist/',
  chainWebpack: config => {
    // =============== svg-sprite-loader ===============
    // 先刪除預設的svg配置
    // config.module.rules.delete('svg')
    // 新增 svg-sprite-loader 設定
    // config.module
    //   .rule('svg-sprite-loader')
    //   .test(/\.svg$/)
    //   .include
    //   .add(resolve('src/assets/images/icon'))
    //   .end()
    //   .use('svg-sprite-loader')
    //   .loader('svg-sprite-loader')
    //   .options({ symbolId: '[name]' })
    // 修改 images-loader 配置
    // config.module
    //   .rule('images')
    //   .exclude.add(resolve('src/assets/images/icon'))
  }
})
