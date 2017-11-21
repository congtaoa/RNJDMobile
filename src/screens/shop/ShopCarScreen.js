
import React, { Component } from 'react'
import { 
    View, 
    Text, 
    StyleSheet, 
    ScrollView, 
    TouchableOpacity, 
    ListView, 
    Image, 
    StatusBar 
} from 'react-native';
import * as IConstants from '../../widget/IConstants';
import chatIcon from '../../assets/images/chat_info.png';


// create a component
export  default class ShopCarScreen extends Component {

    constructor(props) {
        super(props)
        this.state = {

        }

    }

    componentDidMount() {

    }


    render() {
        return (
            <View style={styles.container}>
                <View style={styles.bg}>
                     <Text style={{width:10,height:10,backgroundColor:'transparent'}}></Text>
                     <Text style={styles.midTitle}>{'购物车'}</Text>
                    <Image source={chatIcon} style={{ tintColor: '#888',marginRight:10}} />
                </View>
            </View>
        );
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
    midTitle :{
        fontSize: 17,
        color: '#444',
    },

});


