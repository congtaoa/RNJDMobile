import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Dimensions,
    ActivityIndicator,
    TouchableHighlight
} from 'react-native';

import Image from 'react-native-image-progress';

import voiceIcon from '../../assets/images/voice.png';
import searchIcon from '../../assets/images/search.png';
import scannIcon from '../../assets/images/scann.png';
import chatIcon from '../../assets/images/chat_info.png';
import Tools from '../../widget/Tools';
import * as IConstants from '../../widget/IConstants';

export default class HomeHeaderView extends Component{
    constructor(props){
        super(props);
    }
    render(){
        let isChanged = (this.props.changedY > 44) ? true : false;
        return (
            <View style={styles.bg}>
                <TouchableOpacity activeOpacity={1} onPress={this.props.scanTapped}>
                    <View style={styles.leftView}>
                        <Image source={scannIcon} style={{tintColor: isChanged ?'#666':'#fff'}}/>
                        <Text style={[styles.leftTitle,[isChanged ? {color: '#666'} : {color:'#fff'}]]}>{'扫啊扫'}</Text>
                    </View>
                </TouchableOpacity>
                <View style={[styles.midView,[isChanged ? {backgroundColor: 'rgba(0,0,0,0.08)'} : {backgroundColor:'#fff'}]]}>
                    <View style={styles.midLeftView}>
                        <Image source={searchIcon} style={{tintColor: isChanged ?'#fff':'#999'}}/>
                        <Text style={[styles.midTitle,[isChanged ? {color: '#fff'} : {color:'#888'}]]}>{'818爆款日'}</Text>
                    </View>
                    <TouchableOpacity activeOpacity={1} onPress={this.props.intelligentVoice}>
                        <Image source={voiceIcon} style={{tintColor: isChanged ?'#fff':'#999'}}/>
                    </TouchableOpacity>
                </View>
                <View style={styles.leftView}>
                    <Image source={chatIcon} style={{tintColor: isChanged ?'#666':'#fff'}} />
                    <Text style={[styles.leftTitle,[isChanged ? {color: '#666'} : {color:'#fff'}]]}>{'消息'}</Text>
                </View>
            </View>
        );
    }

}
 
const styles = StyleSheet.create({
    bg:{
        flex:1,
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        paddingTop:Tools.isIphoneX() ? 30 : 0,
        height:Tools.isIphoneX() ? 30 + IConstants.HEIGHT_TOP_BAR :IConstants.HEIGHT_TOP_BAR,
    },
    leftView:{
        paddingLeft:5,
        paddingRight:5,
        alignItems: 'center',
        flexDirection: 'column', 
    },
    leftTitle:{
        paddingTop:3,
        fontSize: 10,
        // color: '#ffffff',
    },
    midView:{
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        width:'76%',
        height:30,
        // backgroundColor:'#ffffff',
        paddingLeft:10,
        paddingRight:10,
        borderRadius:15,
    },
    midLeftView :{
        flexDirection: 'row',
        alignItems: 'center',
    },
    midTitle :{
        marginLeft:7,
        fontSize: 13,
        // color: '#888',
    }
});