
import React, { Component } from 'react'
import { 
    View, 
    Text, 
    StyleSheet, 
    ScrollView, 
    TouchableOpacity, 
    TouchableHighlight,
    ListView, 
    Image, 
    Dimensions,
    StatusBar 
} from 'react-native'
import * as IConstants from '../../widget/IConstants';
import ClassSliderView from "../../views/classify/ClassSliderView";
import ClassSectionView from "../../views/classify/ClassSectionView";

import voiceIcon from '../../assets/images/voice.png';
import searchIcon from '../../assets/images/search.png';
import scannIcon from '../../assets/images/scann.png';
import chatIcon from '../../assets/images/chat_info.png';


// create a component
export  default class ClassifyScreen extends Component {

    constructor(props) {
        super(props)

        this.state = {
            leftMenuArray:IConstants.leftMenuArray,
            classHeaderImageList:[],
            classSectionTitle:'',
            classSectionTwoTitle:'',
            classSectionOneImageList:[],
            classSectionTwoImageList:[]
        }

    }

    componentDidMount() {
      let  hotRecommend = require('../../assets/config/hotRecommend.json');
      this.setState({classSectionTitle:hotRecommend[0].title})
      this.setState({classSectionOneImageList:hotRecommend[0].list});
      this.setState({classSectionTwoTitle:hotRecommend[1].title})
      this.setState({classSectionTwoImageList:hotRecommend[1].list});
      this.setState({classHeaderImageList:hotRecommend[0].headImage});
    }


    render() {
        return (
            <View style={styles.container}>
                <View style={styles.bg}>
                    <Image source={scannIcon}  style={{ tintColor: '#999',marginLeft:10}} />
                    <View style={styles.midView}>
                        <View style={styles.midLeftView}>
                            <Image source={searchIcon} />
                            <Text style={styles.midTitle}>{'打破边界，青岛国际啤酒节'}</Text>
                        </View>
                        <Image source={voiceIcon} />
                    </View>
                    <Image source={chatIcon} style={{ tintColor: '#999',marginRight:10}} />
                </View>

                <ScrollView style={styles.leftMenuView} showsVerticalScrollIndicator={false}>
                  {
                    this.state.leftMenuArray.map((item, index) => <TouchableOpacity key={index} style={[styles.leftMenuItem,[item.selected ? {backgroundColor: 'rgba(0,0,0,0.05)'} : {}]]} activeOpacity={1} onPress={() => { this.lefMenuItemChanged(item,index) }}>
                           <Text style={[item.selected? { color: 'red' } : {color:'#444'}]}>{item.title}</Text>                                                                                              
                    </TouchableOpacity>)
                  }
                </ScrollView>


                <ScrollView style={styles.rightMenuView} showsVerticalScrollIndicator={false}>
                    <ClassSliderView slideWidth={IConstants.width * 0.75} classHeaderImageList={this.state.classHeaderImageList}/>
                    <ClassSectionView slideWidth={IConstants.width * 0.75} classSectionImageList={this.state.classSectionOneImageList} classSectionTitle={this.state.classSectionTitle}/>
                    <ClassSectionView slideWidth={IConstants.width * 0.75} classSectionImageList={this.state.classSectionTwoImageList} classSectionTitle={this.state.classSectionTwoTitle}/>
                </ScrollView>

            </View>
        );
    }

    lefMenuItemChanged(item,index){
        //左侧menuView
        for(let allItem  of this.state.leftMenuArray)
        {
            if(item == allItem)
            {
                if(item.selected == true)
                {
                    return;
                }else{
                    allItem.selected = !allItem.selected;
                }
            }else {
                allItem.selected = false;
            }
        }
        this.setState({leftMenuArray:IConstants.leftMenuArray});

        //右侧menuView
        let  commonArray = [];
        if(index == 0){
            commonArray = require('../../assets/config/hotRecommend.json');
        }else if(index == 1){
            commonArray= require('../../assets/config/jdShop.json');
        }else if(index == 2){
            commonArray = require('../../assets/config/globalShop.json');
        }else {
            commonArray = require('../../assets/config/globalShop.json');
        }
        this.setState({classSectionOneImageList:commonArray[0].list});
        this.setState({classSectionTitle:commonArray[0].title});
        this.setState({classSectionTwoTitle:commonArray[1].title})
        this.setState({classSectionTwoImageList:commonArray[1].list});
        this.setState({classHeaderImageList:commonArray[0].headImage});
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    bg:{
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        marginTop: IConstants.HEIGHT_STATUS_BAR,
        height: IConstants.HEIGHT_NAV_BAR,
        borderBottomWidth:1,
        borderColor:'rgba(0,0,0,0.05)',
        backgroundColor:'transparent'
    },
    midView:{
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        width:'76%',
        height:30,
        backgroundColor:'rgba(0,0,0,0.05)',
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
        fontSize: 12,
        color: '#888',
    },
    leftMenuView:{
        position: 'absolute',
        top: IConstants.HEIGHT_TOP_BAR,
        left: 0,
        width: '25%',
        height:(IConstants.height - (IConstants.HEIGHT_NAV_BAR + IConstants.HEIGHT_TOP_BAR))
    },
    leftMenuItem:{
        alignItems:'center',
        justifyContent: 'center',
        width:'100%',
        height:50,
        borderBottomWidth:1,
        borderColor:'rgba(0,0,0,0.05)'
    },
    rightMenuView:{
        backgroundColor:'rgba(0,0,0,0.05)',
        position: 'absolute',
        top: IConstants.HEIGHT_TOP_BAR,
        left: '25%',
        width: '75%',
        height:(IConstants.height - (IConstants.HEIGHT_NAV_BAR + IConstants.HEIGHT_TOP_BAR))
    }
});


