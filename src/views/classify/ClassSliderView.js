import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    ActivityIndicator,
    TouchableHighlight,
} from 'react-native';

import Image from 'react-native-image-progress';
import Swiper from '../../widget/Swiper';


export default class ClassSliderView extends Component{
    constructor(props){
        super(props);
    }

    render(){
        let isShowPagination = (this.props.classHeaderImageList.length > 1) ? true: false;
        return (
            <View style={[styles.bg,{width:this.props.slideWidth,height:100}]}>
                <Swiper style={styles.swiper} width={this.props.slideWidth} height={80} paginationStyle={{ bottom: 1 }} showsPagination={isShowPagination}   autoplay={isShowPagination} loop={isShowPagination} activeDotColor={"#fff"} >
                    {
                        this.props.classHeaderImageList.map((item, index) => <TouchableHighlight key={index} style={{ flex: 1 }}>
                            <Image source={{ uri: item.image }} 
                                            style={{ width: (this.props.slideWidth - 20) , height: 80 }} 
                            />
                        </TouchableHighlight>)
                    }
                </Swiper>
            </View>
        );
    }

}
 
const styles = StyleSheet.create({
    bg: {
        padding:10
    },
    swiper:{

    }
});