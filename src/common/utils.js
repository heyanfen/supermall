/*
 * @Author: heyanfen
 * @Date: 2019-12-16 00:11:17
 * @LastEditTime: 2019-12-16 01:07:42
 * @LastEditors: Please set LastEditors
 * @Description: 正则学习
 * @FilePath: \vue-router\supermall\src\common\utils.js
 */
export function formatDate(date, fmt) {
  //正则表达式：字符串匹配利器（难：规则太多）
  //1.获取年份
  //y+ -> 1个或者多个
  //y* -> 0个或者多个
  //y? -> 0个或者1个
  // RegExp.$1:yyyy, substr:截取多少位，从前面截取
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));
  }
  //2.获取
  let o = {
    'M+': date.getMonth() + 1,
    'd+': date.getDate(),
    'h+': date.getHours(),
    'm+': date.getMinutes(),
    's+': date.getSeconds()
  };
  //padLeftZero:小算法，不足两位补足两位 在前面加0
  for (let k in o) {
    if (new RegExp(`(${k})`).test(fmt)) {
      let str = o[k] + '';
      fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? str : padLeftZero(str));
    }
  }
  return fmt;
};
function padLeftZero (str) {
  return ('00' + str).substr(str.length);
};

