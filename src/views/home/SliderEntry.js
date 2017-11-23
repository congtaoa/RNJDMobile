import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity,ImageBackground } from 'react-native';
import PropTypes from 'prop-types';
import { ParallaxImage } from 'react-native-snap-carousel';
import styles from '../../views/styles/SliderEntry.style';
import { withNavigation } from 'react-navigation';

 class SliderEntry extends Component {

    constructor(props){
        super(props);

    }
    // static propTypes = {
    //     data: PropTypes.object.isRequired,
    //     even: PropTypes.bool,
    //     parallax: PropTypes.bool,
    //     parallaxProps: PropTypes.object,
    //     clickTap:PropTypes.func
    // };

    get image () {
        // const { data: { imageUrl }, parallax, parallaxProps, even } = this.props;

        return this.props.parallax ? (
            <ParallaxImage
              source={{ uri: this.props.data.imageUrl }}
              containerStyle={[styles.imageContainer, this.props.even ? styles.imageContainerEven : {}]}
              style={[styles.image, { position: 'relative' }]}
              parallaxFactor={0.35}
              showSpinner={true}
              spinnerColor={this.props.even ? 'rgba(255, 255, 255, 0.4)' : 'rgba(0, 0, 0, 0.25)'}
              {...this.props.parallaxProps}
            />
        ) : (
            <Image
              source={{ uri: this.props.data.imageUrl }}
              style={styles.image}
            />
        );
    }

    render () {
        // const { data: { title1, subtitle1 }, even,clickTap } = this.props;

        const uppercaseTitle = this.props.data.title1 ? (
            <Text
              style={[styles.title, this.props.even ? styles.titleEven : {}]}
              numberOfLines={2}
            >
                { this.props.data.title1.toUpperCase() }
            </Text>
        ) : false;

        return (
            <TouchableOpacity
              activeOpacity={1}
              style={styles.slideInnerContainer}
              onPress={() => { 
                //   alert(`You've clicked '${this.props.data.title1}'`); 
                    this.props.navigation.navigate('TransfTestScreen');
                }}
            >
                {/* <View style={[styles.imageContainer,this.props.eveneven ? styles.imageContainerEven : {}]}>
                    {this.image}
                     <View style={[styles.radiusMask, this.props.even ? styles.radiusMaskEven : {}]} />
                </View> 
                <View style={[styles.textContainer, this.props.even ? styles.textContainerEven : {}]}>
                    { uppercaseTitle }
                    <Text
                      style={[styles.subtitle, this.props.even ? styles.subtitleEven : {}]}
                      numberOfLines={2}
                    >
                        { this.props.data.subtitle1 }
                    </Text>
                </View>  */}

                <ImageBackground source={{uri:this.props.data.imageUrl}} style={styles.image}>

                </ImageBackground>

            </TouchableOpacity>
        );
    }

}

/**
 * 注意:此控件通过props 传方法然后回调 或者将this.props.navigation 传传下来 都报错'undefined is not an object (evaluating '_this2.props.navigation.navigate')'
 *  withNavigation is a Higher Order Component which passes the navigation prop into wrapped Component. It's useful when you cannnot pass the navigation prop into into the component directly, or don't want to pass it in case of a deeply nested child.
 *   withNavigation 可以在 chaildView  直接使用this.props.navigation
 * */ 
export default SliderEntryWithNavigation = withNavigation(SliderEntry)