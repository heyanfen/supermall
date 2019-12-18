/*
 * @Author: heyanfen
 * @Date: 2019-12-08 14:39:36
 * @LastEditTime: 2019-12-08 14:49:20
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue-router\supermall\vue.config.js
 */
module.exports = {
    configureWebpack: {
        resolve: {
            extensions: ['.js', '.vue', '.json'],
            alias: {
                //'@': resolve('src'), 已经配置过了
                'assets': '@/assets',
                'common': '@/common',
                'components': '@/components',
                'network': '@/network',
                'views': '@/views',
            }
        }
    }
}