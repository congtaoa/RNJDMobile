import React, { Component } from 'react'
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    ScrollView,
    Dimensions,
    Image
} from 'react-native'
import PropTypes from 'prop-types';

const {width, height} = Dimensions.get('window');

export default class ShowImages extends Component {

    constructor(props){
        super(props);
        this.formatterData = this.formatterData.bind(this);

        this.state = {
            currentImages: Array.from(this.props.images),
            currentIndex: 1
        }
    }

    componentDidMount() {
        let arr = Array.from(this.props.images);
        for (let i = 7; i<this.props.images.length-1; i++) {
            arr[i] = null
        }
        this.setState({
            currentImages: arr
        },()=>{
            console.log(this.state.currentImages);
        });
    }
    formatterData(){
        let arr = Array.from(this.state.currentImages);
        let current = this.state.currentIndex;

        if (current - 3 >= 0 && current + 3 <= this.props.images.length-1) {

            for (let i = 0; i<current - 3; i++) {
                console.log('iiii           :',i);
                arr[i] = null
            }
            for (let j = current - 3; j<=current + 3; j++) {
                console.log('iiii:',j);
                arr[j] = this.props.images[j]
            }
            for (let z = current + 3+1; z<this.props.images.length-1; z++) {
                console.log('iiii------------:',z);
                arr[z] = null
            }
        }
        this.setState({
            currentImages: arr
        },()=>{
            console.log(this.state.currentImages);
        });

    }

    render() {
        return <ScrollView ref="scrollView"
                           style={styles.container}
                           pagingEnabled={true}
                           horizontal={true}
                           onMomentumScrollEnd={(event)=>{
                               console.log('event.nativeEvent: ',event.nativeEvent);
                               const index = Number.parseInt(event.nativeEvent.contentOffset.x / width);
                               console.log('当前选中的index：',index);

                               this.setState({
                                   currentIndex: index
                               },()=>{
                                   this.formatterData();
                               })

                           }}
                >

            {
                this.state.currentImages.map((item,index)=>{
                    return item ? <Image key={item.key} resizeMode="contain" style={styles.imageStyle} source={{uri:item.url}} /> :
                        <Image key={index} resizeMode="contain" style={styles.imageStyle} /> // 占位符，此处可以放一些提示图片、提示语之类
                })
            }

        </ScrollView>
    }
}
ShowImages.propTypes = {
    images: PropTypes.array.isRequired
};
ShowImages.defaultProps = {

};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F5FCFF',
        flexDirection: 'row',
    },
    imageStyle: {
        width: width,
        height: height - 64 - 49
    }
});
