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

export default class HomeRightOneView extends Component{
   
    constructor(props){
        super(props);
    }

    render(){
        let item = this.props.imageOneItem;
        let commonWidth =  Dimensions.get('window').width/2;
        return (
            <View style={[{width:commonWidth,height:95},this.props.borderStyles,styles.container]}>
                <View style={styles.leftView}>
                    <Text style={[this.props.headColorStyles,styles.head]} >{item.head}</Text>
                    <Text style={[styles.subTitle,this.props.subTitleStyles]} numberOfLines={1}>{item.subTitle}</Text>
                    {/* {   
                        item.special != ''
                            ?
                            <Text style={[styles.special,this.props.specialStyle]}>{item.special}</Text>
                            :
                            null
                    } */}
                </View>
                <Image source={{ uri:item.image }} style={{ width: 80, height: 80 ,alignSelf:'center'}} />
            </View> 
        );
    }

}
 
const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft:5,
        paddingRight:5,
        paddingTop:5,
        paddingBottom:5,
    },
    leftView:{
        alignItems: 'center',
        flexDirection: 'column',
    },
    head:{
        width:'100%',
        fontSize:14,
        paddingBottom:3
    },
    subTitle:{
        width:'100%',
        fontSize:11,
        paddingBottom:3
    },
    special:{
        fontSize:10,
        paddingLeft:3,
        paddingRight:3,
        paddingBottom:1,
        paddingTop:1,
        color:'#ffffff',
        // zIndex:11,
        // position: 'absolute',
        // left:0,
        // bottom:0
    }
});