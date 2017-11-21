import React, { Component } from 'react';
import {
    View,
    Text,
    Image,
    ScrollView,
    StyleSheet,
    TouchableOpacity,
    Dimensions,
    Platform,
    Animated,
    NativeModules,
    InteractionManager
} from 'react-native';

import * as IConstants from '../../widget/IConstants';


export default class VoiceSearchView extends Component
{
    animationDuration = 300;
    timeoutID = undefined;
    constructor(props)
    {
        super(props);
        
        this.hideAnimationView = this.hideAnimationView.bind(this);
        this.startTouristSpeechTapClicking = this.startTouristSpeechTapClicking.bind(this);
        this.startRobotSpeechTapClicking = this.startRobotSpeechTapClicking.bind(this);
        
        let speechList = ["试试这么说！酒店 美食 娱乐"];
        let itemType = -1;
        this.state = {
            isAnimationViewShowing: false,
            animationViewFadeAnim: new Animated.Value(0),
            speechList:speechList,
            itemType:itemType,
        };
    }

    componentDidMount()
    {
        
    }

    componentWillUnmount()
    {
        clearTimeout(this.timeoutID);
    }

    render()
    {
        var interpolatedColorAnimation = this.state.animationViewFadeAnim.interpolate({
            inputRange: [0, 1],
            outputRange: ['rgba(0,0,0,0.1)', 'rgba(0,0,0,0)']
        });
         var interpolatedColorAnimation2 = this.state.animationViewFadeAnim.interpolate({
            inputRange: [0, 1],
            outputRange: ['rgba(255,255,255,0)', 'rgba(255,255,255,1)']
        });
        return (
            
            <Animated.View style={[styles.bgView, this.state.isAnimationViewShowing ? {top: 0, zIndex: 1000} : null]}>
                <TouchableOpacity style={styles.buttonBg} onPress={this.hideAnimationView}>
                </TouchableOpacity>
                
                <Animated.View style={[styles.content, {backgroundColor: interpolatedColorAnimation2}, {
                    transform: [{
                        translateY: this.state.animationViewFadeAnim.interpolate({
                            inputRange: [0, 1],
                            outputRange: [IConstants.height, 0]
                        })
                    }]
                    }]}>
                    {
                        this.state.itemType == -1
                        ?
                        this.renderBoxView()
                        :
                        null
                    }
                    {
                        this.state.itemType == IConstants.ItemType.Chi
                        ?
                        this.renderFoodListView()
                        :
                        null
                    }
                    {
                        this.state.itemType == IConstants.ItemType.Zhu
                        ?
                        this.renderHotelListView()
                        :
                        null
                    }
                    <TouchableOpacity style={styles.backButton} onPress={this.hideAnimationView}>
                        <Image source={require("../../assets/images/map_close.png")}/>
                    </TouchableOpacity>
                    
                </Animated.View>
            </Animated.View>
        );
    }

    renderBoxView()
    {
        return (
            <Image style={styles.createImage} source={require("../../assets/images/map_conversation_bg.png")}>
                {
                    this.state.speechList.map((words, index)=> this.renderWordsBox(words,index))
                }
                <TouchableOpacity style={styles.touristBeginSpeech} onPress={this.startTouristSpeechTapClicking}>
                    <Image style={{width:50,height:50}} source={require("../../assets/images/map_video.png")}/>
                </TouchableOpacity>
            </Image>  
        );
    }

    renderWordsBox(words, index)
    {
        let isRobotWords = (index % 2 == 0 );
        return (
            <View style={styles.wordsBox} key={index}>
                {
                    isRobotWords
                    ?
                    <View style={styles.robotWordsBox}>
                        <Image style={styles.avatarImg} source={require("../../assets/images/robot_avatar.png")}/>
                        <View style={styles.wordsBg}>
                            <Text style={styles.WordsName}>智能者</Text>
                            <Text style={styles.WordsInfo}>{words}</Text>
                        </View>
                    </View>
                    :
                    <View style={styles.touristWordsBox}>
                        <View style={styles.wordsBg}>
                            <Text style={styles.WordsName}>旅行者weisheji</Text>
                            <Text style={styles.WordsInfo}>{words}</Text>
                        </View>
                        <Image style={styles.avatarImg} source={require("../../assets/images/tourist_avatar.png")}/>
                    </View>
                }
            </View>
        );
    }

    renderFoodListView()
    {
        return (
            <Image style={{width:'100%',height:'100%'}} source={require("../../assets/images/map_result_bg.png")}>
                <Image style={styles.imageBox} source={require("../../assets/images/map_food_list.png")}/>
            </Image>
            
        );
    }

    renderHotelListView()
    {
        return (
            <Image style={{width:'100%',height:'100%'}} source={require("../../assets/images/map_result_bg.png")}>
                <Image style={styles.imageBox} source={require("../../assets/images/map_hotel_list.png")}/>
            </Image>
        );
    }
 
    show()
    {
        this.setState({isAnimationViewShowing: true});
        Animated.timing(
            this.state.animationViewFadeAnim,
            {
                toValue: 1,
                duration: this.animationDuration,
            }
        ).start();

        if(!this.state.speechList || this.state.speechList.length > 1)
        {
            this.setState({speechList:["试试这么说！酒店 美食 娱乐"],itemType:-1});
            }
        this.startRobotSpeechTapClicking()
    }

    hideAnimationView()
    {
        if(Platform.OS == "ios")
        {
            if(NativeModules.RNTravelModel)
            {
                NativeModules.RNTravelModel.stopSpeechSynthesis((error, resultItem) => {
                });
                NativeModules.RNTravelModel.stopSyntaxRecognition((error, resultItem) => {
                });
            }
        }else if(Platform.OS == "android"){
            if(NativeModules.RNTravelModel)
            {
                NativeModules.RNTravelModel.stopSpeechSynthesis((resultItem) => {
                });
                NativeModules.RNTravelModel.stopSyntaxRecognition((resultItem) => {
                });
            }
        }
        
        Animated.timing(
            this.state.animationViewFadeAnim,
            {
                toValue: 0,
                duration: this.animationDuration,
            }
        ).start();
        InteractionManager.runAfterInteractions(() => {
            this.setState({isAnimationViewShowing: false});
        });
    }

    //开始 用户 语音识别
    startTouristSpeechTapClicking()
    {
        if(Platform.OS == "ios")
        {
            if(NativeModules.RNTravelModel)
            {
                NativeModules.RNTravelModel.startSyntaxRecognition((error, resultItem) => {
                    let result = resultItem.result;
                    
                    let speechList = ["试试这么说！酒店 美食 娱乐"];
                    speechList.push(result);
                    this.setState({speechList:speechList});

                    // 3秒延时
                    this.timeoutID = setTimeout(()=>{
                        let itemType = -1;
                        if(result == "美食")
                        {
                            itemType = IConstants.ItemType.Chi;
                        }else if(result == "酒店")
                        {
                            itemType = IConstants.ItemType.Zhu;
                        }
                        if(itemType != -1)
                        {
                            this.setState({itemType:itemType});
                        }
                    }, 3000);
                    
                });
            }
            else
            {
                console.warn("未添加定位的native代码");
            }
        }else{
            if(NativeModules.RNTravelModel)
            {
                NativeModules.RNTravelModel.startSyntaxRecognition((resultItem) => {
                    let result = resultItem;
                    
                    let speechList = ["试试这么说！酒店 美食 娱乐"];
                    speechList.push(result);
                    this.setState({speechList:speechList});

                    let itemType = -1;
                    if(result == "美食")
                    {
                        itemType = IConstants.ItemType.Chi;
                    }else if(result == "酒店")
                    {
                        itemType = IConstants.ItemType.Zhu;
                    }
                    if(itemType != -1)
                    {
                        this.setState({itemType:itemType});
                    }
                });
            }
            else
            {
                console.warn("未添加定位的native代码");
            }
        }
    }

    //开始 机器人 语音合成
    startRobotSpeechTapClicking()
    {
        let robotWords = "";
        if(this.state.speechList && this.state.speechList.length > 0 )
        {
            for(let i = (this.state.speechList.length - 1) ; i >= 0 ; i--)
            {
                if( i % 2 == 0)
                {
                    robotWords = this.state.speechList[i];
                    break;
                }
            }
        }
        if(robotWords.length == 0)
        {
            return;
        }
        
        if(Platform.OS == "ios")
        {
            if(NativeModules.RNTravelModel)
            {
                NativeModules.RNTravelModel.startSpeechSynthesisWithWords(robotWords, (error, resultItem) => {
                    
                });
            }
            else
            {
                console.warn("未添加定位的native代码");
            }
        }else if(Platform.OS == "android"){
            if(NativeModules.RNTravelModel)
            {
                NativeModules.RNTravelModel.startSpeechSynthesisWithWords(robotWords);
            }
            else
            {
                console.warn("未添加定位的native代码");
            }
        }
    }
}

const styles = StyleSheet.create({
    bgView: {
        position: 'absolute', 
        top:Dimensions.get('window').height,
        left: 0,  right: 0, bottom: 0, 
        backgroundColor: 'rgba(0,0,0,0)',
        flexDirection: 'row',
    },

    buttonBg: {
        position: 'absolute', 
        left: 0, top: 0, right: 0, bottom: 0, 
    },
    backButton:{
        position: 'absolute', 
        top: -15, 
        right:20 ,
        width: 40,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
    },
    content: {
        marginTop: IConstants.HEIGHT_TOP_BAR + (IConstants.height - IConstants.HEIGHT_TOP_BAR - IConstants.HEIGHT_TAB_BAR)/2.,
        height: null,
        width: IConstants.width,
        marginBottom: 0,
        marginLeft: 0,
        marginRight: 0,
        borderRadius: 3,
    },
    BoxView:{
        flex:1,
        height:'100%',
        backgroundColor:'#fff',
    },
    createImage:{
        padding:10,
        paddingTop:10,
        // flex:1,
        height:'100%',
        width:'100%',
    },
    wordsBox:{
        marginTop:10,
        marginBottom:10,
    },
    wordsBg:{
        backgroundColor:'rgba(235,237,241,0.8)',
        borderRadius: 5,
        paddingLeft:10,
        paddingRight:10,
        paddingTop:5,
        paddingBottom:5,
        marginLeft:10,
        marginRight:10,
    },
    robotWordsBox:{
        display:"flex",
        flexDirection:'row',
        justifyContent: 'flex-start',
        alignItems:'center',
  
    },
    touristWordsBox:{
        display:"flex",
        flexDirection:'row',
        justifyContent: 'flex-end',
        alignItems:'center',

    },
    avatarImg:{
        width:35,
        height:35,
    },
    WordsName:{
        fontSize:12,
        color: 'rgb(0,174,175)',
        marginBottom:5,
    },
    WordsInfo:{
        fontSize:12,
        color: '#fff',
    },
    touristBeginSpeech:{
        position: 'absolute', 
        bottom:20,
        right: (IConstants.width - 60)/2. ,
        width: 60,
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
    },
    imageBox:{
        position: 'absolute', 
        top:20,
        left:20,
        right:20,
        bottom:150,
    }
});