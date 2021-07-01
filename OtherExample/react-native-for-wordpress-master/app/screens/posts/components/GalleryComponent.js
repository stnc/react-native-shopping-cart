import React, { Component } from 'react';
import { Dimensions, Image, FlatList, StyleSheet, ScrollView, YellowBox, Animated,View } from 'react-native';
import { Content } from 'native-base';


import {  Block, Text as TextStnc } from '../../../components/elements';
import { theme } from '../../../constants';
// import HTML from 'react-native-render-html';
import { MediaConfig } from '../../../constants/clientConfig';
// import console = require('console');

const { width, height } = Dimensions.get('window');

class GalleryComponent extends Component {
    render() {
        const post =  this.props.post;
        const dotPosition = Animated.divide(this.scrollX, width);

        const opacity = dotPosition.interpolate({
            inputRange: [1 - 1, 1, 1 + 1],
            outputRange: [0.5, 1, 0.5],
            extrapolate: 'clamp'
        });
    
        return (
            <Block>
                <TextStnc semibold>Gallery</TextStnc>
                <Block row margin={[theme.sizes.padding * 0.9, 0]}>
                    <ScrollView
                        horizontal
                        pagingEnabled
                        scrollEnabled
                        showsHorizontalScrollIndicator={false}
                        decelerationRate={0}
                        scrollEventThrottle={16}
                        snapToAlignment="center"
                        onScroll={Animated.event([{ nativeEvent: { contentOffset: { x: this.scrollX } } }])}
                    >

                        <Image
                            source={require("./../../../assets/images/explore_1.png")}
                            style={styles.image}
                        />
                        <Image
                            source={require("./../../../assets/images/explore_2.png")}
                            style={styles.image}
                        />
                        <Image
                            source={require("./../../../assets/images/explore_3.png")}
                            style={styles.image}
                        />
                        <Image
                            source={require("./../../../assets/images/explore_1.png")}
                            style={styles.image}
                        />
                        <Image
                            source={require("./../../../assets/images/explore_1.png")}
                            style={styles.image}
                        />

                    </ScrollView>

                    {/* <View style={[styles.flex, styles.row, styles.dotsContainer]}>
                        <Animated.View
                            key={post.slug}
                            style={[styles.dots, { opacity }]}
                        />
                      </View> */}


                    <Block
                        flex={false}
                        card
                        center
                        middle
                        color="rgba(197,204,214,0.20)"
                        style={styles.more}
                    >
                        <TextStnc gray>+3</TextStnc>
                        {/* <TextStnc gray>+{product.images.slice(3).length}</TextStnc> */}
                    </Block>
                </Block>
            </Block>





        )
    }
}





const styles = StyleSheet.create({
    flex: {
        flex: 0,
    },
    column: {
        flexDirection: 'column'
    },
    row: {
        flexDirection: 'row'
    },
    image: {
        width: width / 3.26,
        height: width / 3.26,
        marginRight: theme.sizes.base,
    },
    more: {
        width: 55,
        height: 55,
    },
    dots: {
        width: 8,
        height: 8,
        borderRadius: 4,
        marginHorizontal: 6,
        backgroundColor: theme.colors.gray,
    }, 
    dotsContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        bottom: 36,
        right: 0,
        left: 0
    },
})

YellowBox.ignoreWarnings([
    'Warning: componentWillMount is deprecated',
    'Warning: componentWillReceiveProps is deprecated',
    'Module RCTImageLoader requires',
]);





export default GalleryComponent;