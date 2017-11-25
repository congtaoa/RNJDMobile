import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Dimensions,
    ScrollView,
    ActivityIndicator,
    TouchableHighlight,
} from 'react-native';

import Image from 'react-native-image-progress';
import Swiper from '../../widget/Swiper';

import CountDownView from './CountDownView';
import timerIcon from '../../assets/images/sectimer.png';
import arrowIcon from '../../assets/images/right_arrow.png';
import arrowbackIcon from '../../assets/images/arrowback.png';


export default class HomeSeckillView extends Component{
   
    KscreenWidth = Dimensions.get('window').width;
    secImageWidth =  Dimensions.get('window').width/5;
    constructor(props){
        super(props);
        
    }

    render(){
       
        return (
            <View>
                <View style={styles.container}>
                    <View style={styles.leftView}>
                        <Image source={timerIcon} />
                        <Image source={{ uri: 'https://m.360buyimg.com/mobilecms/jfs/t3451/307/73678054/7807/dd9134d/57fdff2eNb7cd186f.png' }} style={styles.leftItemImage} />
                        <Text style={{ fontSize: 13, color: '#444', fontWeight: '500', paddingLeft: 7, paddingRight: 7, }}>{this.props.currentTime +'点场'}</Text>
                        <CountDownView
                            //date={new Date(parseInt(seckill.endTime))}
                           // date="2017-09-05T20:00:00+08:00"  * 一个小时减去当前时间的分钟数
                           date={this.props.endTime}
                            days={{ plural: 'Days ', singular: 'day ' }}
                            hours=':'
                            mins=':'
                            segs=''
                            containerStyle={styles.cont}
                            daysStyle={styles.time}
                            hoursStyle={styles.time}
                            minsStyle={styles.time}
                            secsStyle={styles.time}
                            firstColonStyle={styles.colon}
                            secondColonStyle={styles.colon}
                        />
                    </View>
                    <View style={styles.leftView}>
                        <Text style={{ fontSize: 11, color: 'red', paddingRight: 5 }}>{'京东尖货轮番选'}</Text>
                        <Image source={arrowIcon} />
                    </View>
                </View>
                <ScrollView style={styles.secScrollView}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    onScroll={(event)=>{this.moreSecTapped(event.nativeEvent.contentOffset.x)}}>
                    {
                        this.props.secKillList.map((secItem, index) =>
                            <TouchableOpacity key={index} style={{ width: (this.secImageWidth + 10) }} onPress={() => { this.selectTapped(secItem) }}>
                                <View style={styles.secItems}>
                                    <Image source={{ uri: secItem.image }} style={{ width: this.secImageWidth, height: this.secImageWidth }} />
                                    <Text style={{ fontSize: 10, color:'red'}}>
                                        {'¥'}<Text style={styles.saleValue}>{secItem.price}</Text>
                                    </Text>
                                    <Text style={{ fontSize: 9,color:'#999', textDecorationLine:'line-through' }}>
                                        {'¥'}<Text style={styles.originValue}>{secItem.saleprice}</Text>
                                    </Text>
                                </View>
                            </TouchableOpacity>)
                    }
                    <View style={styles.moreView}>
                        <Image source={arrowbackIcon} />
                        <Text style={styles.moretitle} numberOfLines={4}>{'查看更多'}</Text>
                    </View>
                </ScrollView>
            </View> 
        );
    }

    selectTapped(secItem){
        // console.log(secItem);
    }
    moreSecTapped(X){
        if(this.props.moreSecTapped)
        {
            this.props.moreSecTapped(X);
        }
    }

}
 
const styles = StyleSheet.create({
    container:{
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        paddingLeft:7,
        paddingRight:7,
        marginBottom:5,
        height:30,
    },
    leftView:{
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
    },
    leftItemImage:{
        width:62,
        height:25
    },
    secScrollView: {
        width: null,
        marginBottom: 12,
        paddingRight: 15,
    },
    secItems:{
        alignItems: 'center',
        flexDirection: 'column',
    },
    saleValue:{
        marginTop:5,
        fontSize:15,
    },
    originValue:{
        fontSize:12
    },
    moreView:{
        alignItems: 'center',
        flexDirection: 'row',
        width:24, //宽度
    },
    moretitle:{
        fontSize:9,
        color:'#888',
        width:10,
        lineHeight:12
    },
    time:{
        paddingHorizontal: 3,
        backgroundColor: 'rgba(85, 85, 85, 1)',
        fontSize: 10,
        color: 'white',
        marginHorizontal: 3,
        borderRadius: 2,

    },
    colon:{
        fontSize: 10, 
        color: 'rgba(85, 85, 85, 1)'
    },
    cont:{
        flexDirection:'row'
    }

});