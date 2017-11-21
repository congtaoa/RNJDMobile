
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
import NavigationBar from "../../widget/NavigationBar";

// create a component
export  default class TransfTestScreen extends Component {

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
                <NavigationBar style={{backgroundColor:'rgb(44,86,246)'}} titleStyle={{color:'#fff'}} title="小咚" leftTitle={' '} leftImageStyle={{tintColor:'#fff'}} leftAction={() => { this.props.navigation.goBack() }}  rightTitle={"设置"} rightTitleStyle={{color:"#fff"}} rightAction={()=>{}}/>
            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgb(246,246,246)'
    },
   
});


