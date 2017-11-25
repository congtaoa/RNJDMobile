/**
 * 观察者模式
 */
"use strict";
let instance = null; // 单例引用
let eventSubscribers = {}; // 使用一个对象保存订阅者（可以视作一个JAVA中的Map，每个key对应一个事件，每个value对应所有订阅该事件的订阅者组成的数组）

export default class EventBus {


    constructor() {
        if (!instance) {
            instance = this;
        }
        return instance;
    }


    getEventsSub() {
        L(eventSubscribers);
    }


    /**
     * 发送事件的方法，这个方法执行后会通知所有订阅了对应事件的订阅者
     * @param event 事件内容
     * @param type 事件名称，作为区分每个事件的标记
     */
    sendEvent = (event, type) => {
        let subscribers = eventSubscribers[type];
        if (subscribers && subscribers.length > 0) {
            subscribers.forEach((subscriber) => {
                if (subscriber && subscriber !== null && typeof subscriber.handleEvent == 'function') {
                    // 这里调用了订阅者的handleEvent方法，每一个订阅者都要通过实现这个方法来处理接收到的事件
                    subscriber.handleEvent(event, type);
                } else {

                }
            });
        }
    }

    /**
     * 订阅事件的方法
     * @param subscriber 订阅者，即订阅事件的对象
     * @param type 订阅的事件名称
     */
    registerEvent = (subscriber, type) => {
        //先判断是否已经订阅了
        let subscribers = eventSubscribers[type];
        if (subscribers) {
            subscribers.push(subscriber);
        } else {
            eventSubscribers[type] = [subscriber];
        }
    }

    /**
     * 解除订阅事件的方法
     * @param subscriber 订阅者，即订阅事件的对象
     * @param type 要解除订阅的事件名称
     */
    unregisterEvent = (subscriber, type) => {
        let subscribers = eventSubscribers[type];
        if (subscribers) {
            // 从当前订阅了对应事件的订阅者数组中过滤掉解除订阅的订阅者
            eventSubscribers[type] = subscribers.filter((sub) => sub !== subscriber)
        }

    }
}