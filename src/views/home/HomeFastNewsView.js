import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Dimensions,
    ActivityIndicator,
    TouchableHighlight,
} from 'react-native';

import Image from 'react-native-image-progress';
import Swiper from '../../widget/Swiper';


export default class HomeFastNewsView extends Component{
    constructor(props){
        super(props);
    }

    render(){
        let KscreenWidth = Dimensions.get('window').width;
        return (
            <View style={styles.bg}>
                <View style={styles.container}>
                    <Text style={styles.leftTitle}>{'京东快报'}</Text>
                    <Swiper style={styles.swiper} width={KscreenWidth*0.6} height={30} showsPagination={false} horizontal={false}  autoplay={true} loop={true} >
                        {
                            this.props.fastNewsList.map((item, index) => <TouchableHighlight key={index} style={{ flex: 1 }}>
                                <View style={{ flex: 1, flexDirection: 'row',alignItems: 'center'}}>
                                   <Text style={styles.hot}>{item.status}</Text>
                                   <Text style={styles.midTitle} numberOfLines={1}>{item.title}</Text>
                                </View>
                            </TouchableHighlight>)
                        }
                    </Swiper>
                    <Text style={styles.rightTitle}>{'|  更多'}</Text>
                </View>
            </View>
        );
    }

}
 
const styles = StyleSheet.create({
    bg: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.05)',
        paddingTop:5,
        paddingBottom:8
    },
    container:{
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        marginLeft:10,
        marginRight:10,
        paddingLeft:10,
        paddingRight:10,
        borderRadius:15,
        height:30,
        backgroundColor: 'white'
    },
    leftTitle:{
        fontSize: 13,
        color: '#444',
        fontFamily:'Georgia',
        fontWeight:'500',
        fontStyle: 'italic',
        paddingRight:4
    },
    midTitle:{
        fontSize: 12,
        paddingLeft:5,
        color: '#444',
    },
    rightTitle :{
        fontSize: 12,
        color: '#444',
    },
    hot:{
        fontSize: 12,
        color: 'red',
        fontWeight: 'bold'
    }
});