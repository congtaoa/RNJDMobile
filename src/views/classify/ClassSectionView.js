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


export default class ClassSectionView extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <View style={[styles.bg,{width:this.props.slideWidth}]}>
                <Text style={styles.header}>{this.props.classSectionTitle}</Text>
                <View style={styles.sectionView}>
                    {
                        this.props.classSectionImageList.map((item,index) => <TouchableOpacity  key={index} style={{width:(this.props.slideWidth - 30)/3}} onPress={() => { this.sectionItemTapped(item) }} >
                            <View style={styles.sectionItem}>
                                <Image source={{uri:item.image}} style={{width:(this.props.slideWidth/3 - 24) , height:70, padding:12}} />
                                <Text style={styles.itemTitle}>{item.title}</Text>
                            </View>   
                        </TouchableOpacity>)
                    }
                   

                </View>
            </View>
        );
    }

    sectionItemTapped(item){

    }

}
 
const styles = StyleSheet.create({
    bg: {
        paddingLeft:10,
        paddingRight:10,
        paddingBottom:10,
        paddingTop:5
    },
    header:{
        marginBottom:7
    },
    sectionView:{
        flexDirection:'row',
        flexWrap: 'wrap',
        backgroundColor:'#fff'
    },
    sectionItem:{
        padding:15,
        flexDirection:'column',
        alignItems:'center'
    },
    itemTitle:{
        paddingTop:12,
        fontSize:12,
        color:'#777'
    }
    
});