
import React, { Component } from 'react'
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, ListView, Image, StatusBar } from 'react-native'
import ShowMoreImages from '../../widget/ShowImages'
import * as IConstants from '../../widget/IConstants';
// create a component
export  default class MineScreen extends Component {

    constructor(props) {
        super(props)

        this.state = {
            images: IConstants.PhotoList,
        }

    }

    componentDidMount() {

    }


    render() {
        return (
            <View style={styles.container}>
                <ShowMoreImages images={this.state.images} />
            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    }
});


