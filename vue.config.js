const path = require('path')

const resolve = dir => {
    return path.join(__dirname, dir)
}
module.exports = {
    publicPath: '',
    outputDir: './dist',
    assetsDir: 'assets',
    // 关闭生产环境源文件展示 加速
    productionSourceMap: false,
    // 根目录配置
    chainWebpack: config => {
        config.resolve.alias
            .set('@', resolve('src'))
    },
    devServer: {
        proxy: {
            '/api': {
                target: 'http://dev.open-ed88.com.cn',
                pathRewrite: { '/api': '' }
            }
        }
    },
    // 引入主题
    css: {

        loaderOptions: {
            sass: {
                prependData: `@import "@/assets/css/_variable.scss";` //引入全局变量   
            }
        }
    }
}