
import React, { Component } from 'react'
import { 
    View, 
    Text, 
    StyleSheet, 
    ScrollView, 
    TouchableOpacity, 
    ListView, 
    Image, 
    StatusBar,
    Dimensions,
    Platform
} from 'react-native';
import * as IConstants from '../../widget/IConstants';
// import Carousel, { ParallaxImage } from 'react-native-snap-carousel';
import scannIcon from '../../assets/images/scann.png';
import chatIcon from '../../assets/images/chat_info.png';

// import SliderEntry from '../../views/home/SliderEntry';
// import { sliderWidth, itemWidth } from '../../views/styles/SliderEntry.style';

const SLIDER_1_FIRST_ITEM = 1;
// create a component
export  default class LiveMeScreen extends Component {
    
    constructor(props) {
        super(props)
        this.state = {
            entries:IConstants.headerImageList,
            slider1ActiveSlide: SLIDER_1_FIRST_ITEM,
        }
    }

    componentDidMount() {

    }


    render() {
        return (
            <View style={styles.container}>
                {/* <View style={styles.bg}>
                    <Image source={scannIcon}  style={{ tintColor: '#888',marginLeft:10}} />
                     <Text style={styles.midTitle}>{'觅·Me'}</Text>
                    <TouchableOpacity onPress={()=>{

                    }}>
                        <Image source={chatIcon} style={{ tintColor: '#888',marginRight:10}} />
                    </TouchableOpacity>
                </View>

                <Carousel
                    ref={(c) => { this._carousel = c; }}
                    data={IConstants.ENTRIES1}
                    renderItem={this._renderItemWithParallax}
                    sliderWidth={sliderWidth}
                    itemWidth={itemWidth}
                    hasParallaxImages={true}
                    firstItem={SLIDER_1_FIRST_ITEM} // 默认第几个开始
                    inactiveSlideScale={0.88}
                    inactiveSlideOpacity={1}
                    enableMomentum={false}
                    containerCustomStyle={styles.slider}
                    contentContainerCustomStyle={styles.sliderContentContainer}
                    loop={true}
                    loopClonesPerSide={2}
                    autoplay={true}
                    autoplayDelay={500}
                    autoplayInterval={3000}
                    onSnapToItem={(index) => {
                        // 滑动事件回调，滑到哪一个
                        this.setState({ slider1ActiveSlide: index });;
                    }}
              /> */}
            </View>
        );
    }

    // _renderItemWithParallax ({item, index}, parallaxProps) {
    //     return (
    //         <SliderEntry
    //             data={item}
    //             even={(index + 1) % 2 === 0}
    //             parallax={true}
    //             parallaxProps={parallaxProps}
    //         />
    //     );
    // }

}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgb(246,246,246)'
    },
    bg:{
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        marginTop: IConstants.HEIGHT_STATUS_BAR,
        height: IConstants.HEIGHT_NAV_BAR,
        backgroundColor:'transparent',
        borderBottomWidth:1,
        borderBottomColor:'#dedede'
    },
    midTitle :{
        fontSize: 22,
        color: '#444',
    },
    slider: {
        marginTop: 25
    },
    sliderContentContainer: {
    },
});


