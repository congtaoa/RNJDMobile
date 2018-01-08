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


    

}

