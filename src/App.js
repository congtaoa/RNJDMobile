import React, { Component } from 'react'
import { StatusBar,Animated, Easing} from 'react-native'
import { StackNavigator, TabNavigator, TabBarBottom } from 'react-navigation';
import CardStackStyleInterpolator from 'react-navigation/src/views/CardStack/CardStackStyleInterpolator';

import { screen, system } from './common'
import TabBarItem from './widget/TabBarItem'
import HomeScreen from "./screens/HomeScreen";
import ClassifyScreen from "./screens/classify/ClassifyScreen";
import LiveMeScreen from "./screens/live/LiveMeScreen";
import ShopCarScreen from "./screens/shop/ShopCarScreen";
import MineScreen from "./screens/mine/MineScreen";
import TransfTestScreen from "./screens/home/TransfTestScreen";

import iconHome from './assets/images/toolbar_home.png';
import iconHomeSelected from './assets/images/toolbar_home_active.png';
import iconClass from './assets/images/toolbar_class.png';
import iconClassSelected from './assets/images/toolbar_class_active.png';
import iconLive from './assets/images/toolbar_timer.png';
import iconLiveSelected from './assets/images/toolbar_timer_active.png';
import iconCart from './assets/images/toolbar_cart.png';
import iconCartSelected from './assets/images/toolbar_cart_active.png';
import iconMe from './assets/images/toolbar_me.png';
import iconMeSelected from './assets/images/toolbar_me_active.png';

import * as IConstants from './widget/IConstants';
import EventBus from './widget/EventBus';

const lightContentScenes = ['Home', 'Mine']

function getCurrentRouteName(navigationState) {
    if (!navigationState) {
        return null;
    }
    const route = navigationState.routes[navigationState.index];
    // dive into nested navigators
    if (route.routes) {
        return getCurrentRouteName(route);
    }
    return route.routeName;
}
// 从中间伸缩
const ScaleYTransition = (index, position) => {
    const inputRange = [index - 1, index, index + 1];
    const opacity = position.interpolate({
        inputRange,
        outputRange: [.5, 1, 1],
    });

    const scaleY = position.interpolate({
        inputRange,
        outputRange: ([0.5, 1, 1]),
    });

    return {
        opacity,
        transform: [
            {scaleY}
        ]
    };
};

// 3D翻转
const Flip3D = (index, position) => {
    
    const inputRange = [index - 1, index, index + 1];
    const opacity = position.interpolate({
        inputRange,
        outputRange: [0, 1, 1],
    });
   
    const translateY = position.interpolate({
        inputRange:[0,1],
        outputRange:['0deg','90deg']
    })
    
    return {
        opacity,
        transform: [{translateY}],
    };
}

//中心放大、缩小
let CrossScaleTransition = (index, position) => {
    const inputRange = [index - 1, index, index + 1]
    const opacity = position.interpolate({
      inputRange,
      outputRange: [0, 1, 1],
    });

    const scaleY = position.interpolate({
        inputRange,
        outputRange: ([0, 1, 1]),
    });

    const scaleX = position.interpolate({
        inputRange,
        outputRange: ([0, 1, 1]),
    });

    return {
      opacity,
      transform: [{ scaleX }, { scaleY }],
    }
};


//fade
let CrossFadeTransition = (index, position) => {
    const inputRange = [index - 1, index, index + 1]
    const opacity = position.interpolate({
      inputRange,
      outputRange: [0, 1, 1],
    });

    return {
      opacity,
    }
};

const TransitionSpec = ({
    duration: 300,
    easing: Easing.bezier(0.2833, 0.99, 0.31833, 0.99),//Easing.out(Easing.poly(4)),
    timing: Animated.timing,
  });



let TransitionConfiguration = () => {
    return {
        transitionSpec: TransitionSpec,  //控制动画时间  默认300
        // Define scene interpolation, eq. custom transition
        screenInterpolator: (sceneProps) => {

            const {position, scene} = sceneProps;
            const {index, route} = scene
            const params = route.params || {}; 
            const transition = params.transition || 'forHorizontal' ; 

            return {
                forHorizontal: CardStackStyleInterpolator.forHorizontal(sceneProps),//ForHorizontal(index, position),
                forVertical: CardStackStyleInterpolator.forVertical(sceneProps),//ForVertical(index , position),
                forFadeFromBottomAndroid: CardStackStyleInterpolator.forFadeFromBottomAndroid(sceneProps),//forFadeFromBottomAndroid(index, position),
                scaleY: ScaleYTransition(index, position),
                flip3D:Flip3D(index, position),
                croseScale:CrossScaleTransition(index,position),
                fade:CrossFadeTransition(index,position),
            }[transition];
        }
    }
};

// create a component
 class App extends Component {
    constructor() {
        super()
        StatusBar.setBarStyle('light-content')
    }

    render() {
        return (
            <Navigator
                onNavigationStateChange={
                    (prevState, currentState) => {
                        const currentScene = getCurrentRouteName(currentState);
                        const previousScene = getCurrentRouteName(prevState);
                        if (previousScene !== currentScene) {
                            if (lightContentScenes.indexOf(currentScene) >= 0) {
                                StatusBar.setBarStyle('light-content')
                            } else {
                                StatusBar.setBarStyle('dark-content')
                            }
                        }
                    }
                }
            />
        );
    }
}

const Tab = TabNavigator(
    {
        Home: {
            screen: HomeScreen,
            navigationOptions: ({ navigation }) => ({
                tabBarLabel: '首页',
                tabBarIcon: ({ focused, tintColor }) => (
                    <TabBarItem
                        tintColor={tintColor}
                        focused={focused}
                        normalImage={iconHome}
                        selectedImage={iconHomeSelected}
                    />
                )
            }),
        },
        Classify: {
            screen: ClassifyScreen,
            navigationOptions: ({ navigation }) => ({
                tabBarLabel: '分类',
                tabBarIcon: ({ focused, tintColor }) => (
                    <TabBarItem
                        tintColor={tintColor}
                        focused={focused}
                        normalImage={iconClass}
                        selectedImage={iconClassSelected}
                    />
                )
            }),
        },

        Live: {
            screen: LiveMeScreen,
            navigationOptions: ({ navigation }) => ({
                tabBarLabel: '觅Me',
                tabBarIcon: ({ focused, tintColor }) => (
                    <TabBarItem
                        tintColor={tintColor}
                        focused={focused}
                        normalImage={iconLive}
                        selectedImage={iconLiveSelected}
                    />
                )
            }),
        },
        Shop: {
            screen: ShopCarScreen,
            navigationOptions: ({ navigation }) => ({
                tabBarLabel: '购物车',
                tabBarIcon: ({ focused, tintColor }) => (
                    <TabBarItem
                        tintColor={tintColor}
                        focused={focused}
                        normalImage={iconCart}
                        selectedImage={iconCartSelected}
                    />
                )
            }),
        },

        Mine: {
            screen: MineScreen,
            navigationOptions: ({ navigation }) => ({
                tabBarLabel: '我的',
                tabBarIcon: ({ focused, tintColor }) => (
                    <TabBarItem
                        tintColor={tintColor}
                        focused={focused}
                        normalImage={iconMe}
                        selectedImage={iconMeSelected}
                    />
                )
            }),
        },
    },
    {
        // tabBarComponent: TabBarBottom, //默认组件
        tabBarComponent: ({ jumpToIndex, ...props, navigation }) => (
            <TabBarBottom
                {...props}
                jumpToIndex={tabIndex => {
                    /**
                      * tabBar点击事件
                    */
                    const { state } = navigation
                    const { routes } = state
                    if (state.index === tabIndex && routes[tabIndex].index !== 0){
                        // ex:再次点击选中Tab 刷新当前tab
                        if(tabIndex === 0){
                            new EventBus().sendEvent({},IConstants.EventType.HOME_REFRESH);
                        }else{
                        //   Toast.show('再次点击选中Tab 刷新当前页面',{position: Toast.positions.CENTER});
                        }
                    }
                    else {
                        jumpToIndex(tabIndex)
                    }
                }}
            />
        ),
        tabBarPosition: 'bottom',
        swipeEnabled: false,
        animationEnabled: false,
        lazy: true,
        tabBarOptions: {
            activeTintColor: '#d81e06',
            inactiveTintColor: '#979797',
            style: { backgroundColor: '#ffffff' },
        },
    }

);

const Navigator = StackNavigator(
    {
        Tab: { screen: Tab },
        TransfTestScreen:{screen:TransfTestScreen},
    },
    {
        navigationOptions: {
            headerBackTitle: null,
            headerTintColor: '#333333',
            showIcon: true,
        },
        headerMode: 'none', //去掉自带的NavigationBar
        cardStyle: {
            // 解决导航时阴影问题
            // https://github.com/react-community/react-navigation/issues/619
            opacity: 1,
        },
        transitionConfig: TransitionConfiguration,// 导航器页面切换动画
    }
);

export default App;