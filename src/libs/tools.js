export const IsDefine = value => {
  if (
    value == null ||
    value === '' ||
    value === 'undefined' ||
    value === undefined ||
    value === 'null' ||
    value === '(null)' ||
    value === 'NULL' ||
    typeof value === 'undefined'
  ) {
    return false;
  } else {
    value = value + '';
    value = value.replace(/\s/g, '');
    if (value === '') {
      return false;
    }
    return true;
  }
};
//判断手机号码
export const isMobile = phone => {
  return (/^0?1[3|4|5|6|7|8|9][0-9]\d{8}$/).test(phone);
};

//随机数
export const randomString =  (len) => {
  len = len || 32;
  var $chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678'; /****默认去掉了容易混淆的字符oOLl,9gq,Vv,Uu,I1****/
  var maxPos = $chars.length;
  var pwd = '';
  for (var i = 0; i < len; i++) {　　　　
      pwd += $chars.charAt(Math.floor(Math.random() * maxPos));　　
  }　　
  return pwd;
};

/**
 * 获取本周开始时间
 */
export const getFirstDayOfWeek = (date = new Date()) => {
  var weekday = date.getDay() || 7; //获取星期几,getDay()返回值是 0（周日） 到 6（周六） 之间的一个整数。0||7为7，即weekday的值为1-7
  date.setDate(date.getDate() - weekday + 1);//往前算（weekday-1）天，年份、月份会自动变化
  return getDate(date.getTime() / 1000, 'date') + ' 00:00:00';
};
/***
 * 获取前几个月第一天 0代表本月
 * @param {number} addMonth 默认0显示本月1号时间
 */
export const getFirstDayOfMonth = (addMonth = 0, date = new Date()) => {
  date.setMonth(date.getMonth() - addMonth);
  date.setDate(1);
  return getDate(date.getTime() / 1000, 'date') + ' 00:00:00';
};

//获取当季第一天
export const getFirstDayOfSeason = (date = new Date()) => {
  var month = date.getMonth();
  if (month < 3) {
    date.setMonth(0);
  } else if (month > 2 && month < 6) {
    date.setMonth(3);
  } else if (month > 5 && month < 9) {
    date.setMonth(6);
  } else if (month > 8 && month < 11) {
    date.setMonth(9);
  }
  date.setDate(1);
  return getDate(date.getTime() / 1000, 'date') + ' 00:00:00';
};

//获取当年第一天
export const getFirstDayOfYear = (date = new Date()) => {
  date.setDate(1);
  date.setMonth(0);
  return getDate(date.getTime() / 1000, 'date') + ' 00:00:00';
};
//封装筛选天数
export const dayNum = (n) => {
  var now = new Date();
  var year = now.getFullYear();
  var mon = now.getMonth() + 1;
  var day = now.getDate();
  if (day <= n) {
    if (mon > 1) {
      mon = mon - 1;
    } else {
      year = year - 1;
      mon = 12;
    }
  }
  now.setDate(now.getDate() - n);
  year = now.getFullYear();
  mon = now.getMonth() + 1;
  day = now.getDate();
  var s =
    year +
    '-' +
    (mon < 10 ? '0' + mon : mon) +
    '-' +
    (day < 10 ? '0' + day : day) +
    ' ' +
    '00' +
    ':' +
    '00' +
    ':' +
    '00';
  return s;
};
/**
 * 获取字符长度 英文两个算一个字符
 * @param {Sting} val input value
 * @returns {number} output value
 */
export function getByteLen(val) {
  let len = 0;
  for (let i = 0; i < val.length; i++) {
    if (val[i].match(/[^\x00-\xff]/gi) != null) {
      len += 1;
    } else {
      len += 0.5;
    }
  }
  return Math.floor(len);
}
/**
 * 获取指定的URL参数值
 * URL:http://www.quwan.com/index?name=tyler
 * 参数：paramName URL参数
 * 调用方法:getParam("name")
 * 返回值:tyler
 */
export const getParam = url => {
  let theRequest = new Object();
  let strs;
  if (url.indexOf('?') != -1) {
    var str = url.substr(1);
    strs = str.split('&');
    for (var i = 0; i < strs.length; i++) {
      theRequest[strs[i].split('=')[0]] = unescape(strs[i].split('=')[1]);
    }
  }
  return theRequest;
};
//json转url参数 setUrlK({name:"a"},true编码)
export const setUrlK = ojson => {
  alert(ojson);
  var s = '',
    name,
    key;
  for (var p in ojson) {
    if (!ojson[p]) {
      return null;
    }
    if (ojson.hasOwnProperty(p)) {
      name = p;
    }
    key = ojson[p];
    s += '&' + name + '=' + encodeURIComponent(key);
  }
  s = s.substring(1, s.length);
  return s.length > 0 ? '?' + s : s;
};
/***
 * 获取苹果域
 * @returns {string}
 * @constructor
 */
export const GetDomain = () => {
  let domain = document.domain;
  var regexExp = /.+\.([a-zA-Z0-9]+)(\.(com|com\.cn|org\.cn|net\.cn|gov\.cn|cn|edu|net|org|shop|top|xyz|club|pub|link|gov|cc|online))$/;
  if (regexExp.test(domain)) {
    if (
      domain.endsWith('.com.cn') ||
      domain.endsWith('.org.cn') ||
      domain.endsWith('.net.cn') ||
      domain.endsWith('.gov.cn')
    ) {
      // .com.cn比较特殊，正则匹配仅以cn匹配
      regexExp = /.+\.([a-zA-Z0-9]+)(\.(com\.cn|org\.cn|net\.cn|gov\.cn))$/;
    }
    domain = domain.replace(regexExp, '$1$2');
  } else {
    domain = 'march.yuanian.com';
  }
  return domain;
};
export const forEach = (arr, fn) => {
  if (!arr.length || !fn) return;
  let i = -1;
  let len = arr.length;
  while (++i < len) {
    let item = arr[i];
    fn(item, i, arr);
  }
};

/**
 * @param {Array} arr1
 * @param {Array} arr2
 * @description 得到两个数组的交集, 两个数组的元素为数值或字符串
 */
export const getIntersection = (arr1, arr2) => {
  let len = Math.min(arr1.length, arr2.length);
  let i = -1;
  let res = [];
  while (++i < len) {
    const item = arr2[i];
    if (arr1.indexOf(item) > -1) res.push(item);
  }
  return res;
};

/**
 * @param {Array} arr1
 * @param {Array} arr2
 * @description 得到两个数组的并集, 两个数组的元素为数值或字符串
 */
export const getUnion = (arr1, arr2) => {
  return Array.from(new Set([...arr1, ...arr2]));
};

/**
 * @param {Array} target 目标数组
 * @param {Array} arr 需要查询的数组
 * @description 判断要查询的数组是否至少有一个元素包含在目标数组中
 */
export const hasOneOf = (targetarr, arr) => {
  return targetarr.some(_ => arr.indexOf(_) > -1);
};

/**
 * @param {String|Number} value 要验证的字符串或数值
 * @param {*} validList 用来验证的列表
 */
export function oneOf(value, validList) {
  for (let i = 0; i < validList.length; i++) {
    if (value === validList[i]) {
      return true;
    }
  }
  return false;
}

/**
 * @param {Number} timeStamp 判断时间戳格式是否是毫秒
 * @returns {Boolean}
 */
const isMillisecond = timeStamp => {
  const timeStr = String(timeStamp);
  return timeStr.length > 10;
};

/**
 * @param {Number} timeStamp 传入的时间戳
 * @param {Number} currentTime 当前时间时间戳
 * @returns {Boolean} 传入的时间戳是否早于当前时间戳
 */
const isEarly = (timeStamp, currentTime) => {
  return timeStamp < currentTime;
};

/**
 * @param {Number} num 数值
 * @returns {String} 处理后的字符串
 * @description 如果传入的数值小于10，即位数只有1位，则在前面补充0
 */
const getHandledValue = num => {
  return num < 10 ? '0' + num : num;
};

/**
 * @param {Number} timeStamp 传入的时间戳
 * @param {Number} startType 要返回的时间字符串的格式类型，传入'year'则返回年开头的完整时间
 */
export const getDate = (timeStamp, startType) => {
  const d = new Date(timeStamp * 1000);
  const year = d.getFullYear();
  const month = getHandledValue(d.getMonth() + 1);
  const date = getHandledValue(d.getDate());
  const hours = getHandledValue(d.getHours());
  const minutes = getHandledValue(d.getMinutes());
  const second = getHandledValue(d.getSeconds());
  let resStr = '';
  if (startType === 'year') resStr = year + '-' + month + '-' + date + ' ' + hours + ':' + minutes + ':' + second;
  else if (startType === 'date') resStr = year + '-' + month + '-' + date;
  else resStr = month + '-' + date + ' ' + hours + ':' + minutes;
  return resStr;
};

/**
 * @param {String|Number} timeStamp 时间戳
 * @returns {String} 相对时间字符串
 */
export const getRelativeTime = timeStamp => {
  // 判断当前传入的时间戳是秒格式还是毫秒
  const IS_MILLISECOND = isMillisecond(timeStamp);
  // 如果是毫秒格式则转为秒格式
  if (IS_MILLISECOND) Math.floor((timeStamp /= 1000));
  // 传入的时间戳可以是数值或字符串类型，这里统一转为数值类型
  timeStamp = Number(timeStamp);
  // 获取当前时间时间戳
  const currentTime = Math.floor(Date.parse(new Date()) / 1000);
  // 判断传入时间戳是否早于当前时间戳
  const IS_EARLY = isEarly(timeStamp, currentTime);
  // 获取两个时间戳差值
  let diff = currentTime - timeStamp;
  // 如果IS_EARLY为false则差值取反
  if (!IS_EARLY) diff = -diff;
  let resStr = '';
  const dirStr = IS_EARLY ? '前' : '后';
  // 少于等于59秒
  if (diff <= 59) resStr = diff + '秒' + dirStr;
  // 多于59秒，少于等于59分钟59秒
  else if (diff > 59 && diff <= 3599) resStr = Math.floor(diff / 60) + '分钟' + dirStr;
  // 多于59分钟59秒，少于等于23小时59分钟59秒
  else if (diff > 3599 && diff <= 86399) resStr = Math.floor(diff / 3600) + '小时' + dirStr;
  // 多于23小时59分钟59秒，少于等于29天59分钟59秒
  else if (diff > 86399 && diff <= 2623859) resStr = Math.floor(diff / 86400) + '天' + dirStr;
  // 多于29天59分钟59秒，少于364天23小时59分钟59秒，且传入的时间戳早于当前
  else if (diff > 2623859 && diff <= 31567859 && IS_EARLY) resStr = getDate(timeStamp);
  else resStr = getDate(timeStamp, 'year');
  return resStr;
};

/**
 * @returns {String} 当前浏览器名称
 */
export const getExplorer = () => {
  const ua = window.navigator.userAgent;
  const isExplorer = exp => {
    return ua.indexOf(exp) > -1;
  };
  if (isExplorer('MSIE')) return 'IE';
  else if (isExplorer('Firefox')) return 'Firefox';
  else if (isExplorer('Chrome')) return 'Chrome';
  else if (isExplorer('Opera')) return 'Opera';
  else if (isExplorer('Safari')) return 'Safari';
};

/**
 * @description 绑定事件 on(element, event, handler)
 */
export const on = (function () {
  if (document.addEventListener) {
    return function (element, event, handler) {
      if (element && event && handler) {
        element.addEventListener(event, handler, false);
      }
    };
  } else {
    return function (element, event, handler) {
      if (element && event && handler) {
        element.attachEvent('on' + event, handler);
      }
    };
  }
})();

/**
 * @description 解绑事件 off(element, event, handler)
 */
export const off = (function () {
  if (document.removeEventListener) {
    return function (element, event, handler) {
      if (element && event) {
        element.removeEventListener(event, handler, false);
      }
    };
  } else {
    return function (element, event, handler) {
      if (element && event) {
        element.detachEvent('on' + event, handler);
      }
    };
  }
})();

/**
 * 判断一个对象是否存在key，如果传入第二个参数key，则是判断这个obj对象是否存在key这个属性
 * 如果没有传入key这个参数，则判断obj对象是否有键值对
 */
export const hasKey = (obj, key) => {
  if (key) return key in obj;
  else {
    let keysArr = Object.keys(obj);
    return keysArr.length;
  }
};

/**
 * @param {*} obj1 对象
 * @param {*} obj2 对象
 * @description 判断两个对象是否相等，这两个对象的值只能是数字或字符串
 */
export const objEqual = (obj1, obj2) => {
  const keysArr1 = Object.keys(obj1);
  const keysArr2 = Object.keys(obj2);
  if (keysArr1.length !== keysArr2.length) return false;
  else if (keysArr1.length === 0 && keysArr2.length === 0) return true;
  /* eslint-disable-next-line */
  else return !keysArr1.some(key => obj1[key] != obj2[key]);
};
/**
 * 判断此对象是否是Object类型
 * @param {Object} obj
 */
export const isObject = obj => {
  return Object.prototype.toString.call(obj) === '[object Object]';
};
/**
 * 判断此类型是否是Array类型
 * @param {Array} arr
 */
export const isArray = arr => {
  return Object.prototype.toString.call(arr) === '[object Array]';
};

/***
 * @param {*} oldData 对象
 * @param {*} newData 对象
 * @description 判断两个对象是否相等，深度判断
 */
export const isObjectValueEqual = (oldData, newData) => {
  // 类型为基本类型时,如果相同,则返回true
  if (oldData === newData) return true;
  if (isObject(oldData) && isObject(newData) && Object.keys(oldData).length === Object.keys(newData).length) {
    // 类型为对象并且元素个数相同
    // 遍历所有对象中所有属性,判断元素是否相同
    for (const key in oldData) {
      if (oldData.hasOwnProperty(key)) {
        if (!isObjectValueEqual(oldData[key], newData[key]))
        // 对象中具有不相同属性 返回false
        { return false; }
      }
    }
  } else if (isArray(oldData) && isArray(oldData) && oldData.length === newData.length) {
    // 类型为数组并且数组长度相同
    for (let i = 0, length = oldData.length; i < length; i++) {
      if (!isObjectValueEqual(oldData[i], newData[i]))
      // 如果数组元素中具有不相同元素,返回false
      { return false; }
    }
  } else {
    // 其它类型,均返回false
    return false;
  }
  // 走到这里,说明数组或者对象中所有元素都相同,返回true
  return true;
};
