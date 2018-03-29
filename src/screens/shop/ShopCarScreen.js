
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

});


