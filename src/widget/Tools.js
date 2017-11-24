"use strict";
import {
    Platform,
    Alert,
    ToastAndroid,
    Keyboard,
    PixelRatio
} from "react-native";
import * as IConstants from './IConstants';
import Toast from 'react-native-root-toast';
let basePx = Platform.OS === 'ios' ? 750 : 720;

let instance = null;
/**
 * 工具类
 */
export default class Tools {

    constructor() {
        if (!instance) {
            instance = this;
        }
        return instance;
    }

    /**
     * 隐藏键盘
     */
    static  HidKeyBorad() {
        Keyboard.dismiss();
    }

    /**
     * 文字大小转换
     * @param size
     * @constructor
     */
    static SP(size) {
        if (PixelRatio === 2) {
            // iphone 5s and older Androids
            if (Screen_Width < 360) {
                return size * 0.95;
            }
            // iphone 5
            if (Screen_Height < 667) {
                return size;
            } else if (Screen_Height >= 667 && Screen_Height <= 735) {
                return size * 1.15;
            }
            // older phablets
            return size * 1.25;
        }
        if (PixelRatio === 3) {
            if (Screen_Width < 360) {
                return size;
            }
            if (Screen_Height < 667) {
                return size * 1.15;
            }
            if (Screen_Height >= 667 && Screen_Height <= 735) {
                return size * 1.2;
            }
            return size * 1.27;
        }
        if (PixelRatio === 3.5) {
            if (Screen_Width < 360) {
                return size;
            }
            if (Screen_Height < 667) {
                return size * 1.20;
            }
            if (Screen_Height >= 667 && Screen_Height <= 735) {
                return size * 1.25;
            }
            return size * 1.40;
        }
        return parseInt(size);
    }

    /**
     * 像素转换
     * @param px
     * @constructor
     */
    static PX(size) {
        var size = size / basePx * IConstants.width;
        if (size < 1) {
            size += 0.5;
        }
        return parseInt(size);
    }


    /**
     * 判断null
     * @param obj
     * @returns {boolean}
     */
    static  isNull(obj) {
        if (!obj) {
            return true;
        }
        if (typeof(obj) == "undefined") {
            return true;
        }
        if (obj == null) {
            return true;
        }
        if (obj.length == 0) {
            return true;
        }
        return false;
    }


// 对Date的扩展，将 Date 转化为指定格式的String
// 月(M)、日(d)、小时(h)、分(m)、秒(s)、季度(q) 可以用 1-2 个占位符，
// 年(y)可以用 1-4 个占位符，毫秒(S)只能用 1 个占位符(是 1-3 位的数字)
// 例子：
// (new Date()).Format("yyyy-MM-dd hh:mm:ss.S") ==> 2006-07-02 08:09:04.423
// (new Date()).Format("yyyy-M-d h:m:s.S")      ==> 2006-7-2 8:9:4.18
    static timeFormat(data, fmt) { //author: meizz
        var o = {
            "M+": data.getMonth() + 1, //月份
            "d+": data.getDate(), //日
            "h+": data.getHours(), //小时
            "m+": data.getMinutes(), //分
            "s+": data.getSeconds(), //秒
            "q+": Math.floor((data.getMonth() + 3) / 3), //季度
            "S": data.getMilliseconds() //毫秒
        };
        if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1,
            (data.getFullYear() + "").substr(4 - RegExp.$1.length));
        for (var k in o) {
            if (new RegExp("(" + k + ")").test(fmt)) {
                fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) :
                    (("00" + o[k]).substr(("" + o[k]).length)));
            }
        }
        return fmt;
    }


    /**
     * 吐司
     * @param message
     * @constructor
     */
    static Toast(message) {
        if (this.isNull(message)) {
            return;
        }
        Toast.show(message,{position: Toast.positions.CENTER});

    }


    /**
     * 对象是否是 json
     * @param obj
     * @returns {boolean}
     */
    static is_json(obj) {
        if (!obj)return false;
        var isjson = typeof(obj) == "object" && Object.prototype.toString.call(obj).toLowerCase() == "[object object]" && !obj.length;
        return isjson;
    }

    /**
     * 是否是字符串
     * @param str
     * @returns {boolean}
     */
    static is_string(str) {
        return (typeof str == 'string') && str.constructor == String;
    }


    /**
     * 是否是文件
     * @param value
     * @constructor
     */
    static IsFile(value) {
        // 判断是否是字符串
        if (this.is_string(value) && value.startsWith('file:///'))
            return true;
        else
            return false;
    }


    
    /**
     * 只允许输入数字
     * @param number
     * @returns {XML|void|*|string}
     */
    static  checkInput(number) {
        number = number.replace(/[^\d]/g, '');
        return number;
    }

    /**
     * 校验手机号码合法性
     * @param num
     * @returns {boolean}
     */
    static isPhone(num) {
        var re = /^1(3|4|5|7|8)\d{9}$/;
        if (re.test(num)) {
            return true;
        } else {
            return false;
        }
    }

    /**
     * 校验密码 6到16位 字母开头
     * @param pwd
     * @returns {boolean}  true  正确  false 错误
     */
    static checkPWD(pwd) {
        return true;
        var re = /^[a-zA-z]\w{5,15}$/;
        if (re.test(pwd)) {
            return true;
        } else {
            return false;
        }
    }

    /**
     * 合并 json  返回结果
     * @param jsonOne
     * @param jsonTow
     * @returns {{}}
     */
    static mergeJson(jsonOne = {}, jsonTow = {}) {
        for (var key in jsonTow) {
            var value = jsonTow[key];
            jsonOne[key] = value;
        }
        return jsonOne;
    }

    /**
     * base64 加密
     * @param str
     */
    static baseEncode(str) {
        var base = new Base64();
        return base.encode(str)
    }

    /**
     * base64 解密
     * @param str
     */
    static baseDecode(str) {
        var base = new Base64();
        return base.decode(str)
    }

}

