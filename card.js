import React, { useRef, useEffect, useState } from 'react';
import { View, Animated, Image, StyleSheet, Text } from 'react-native';

export default function ValentinesCard() {
    const [showMain, setShowMain] = useState(false);
    const scaleAnim = useRef(new Animated.Value(0)).current;

    const imageSources = [
        require('./assets/valentines/Val00002.jpg'),
        require('./assets/valentines/Val00001.jpg'),
        require('./assets/valentines/Val00003.jpg'),
    ];

    useEffect(() => {
        Animated.timing(scaleAnim, {
            toValue: 1,
            duration: 5000,
            useNativeDriver: false,
        }).start(() => setShowMain(true));
    }, []);

    if (showMain) {
        return (
            <>
                <View style={styles.container}>
                    <Text style={styles.title}>❤️Happy Valentine's Day!❤️</Text>
                    <Text style={styles.message}>
                        Oh my sweet kimmy❤️, thank you so much for being my valentine. I want to thank you for being so patient with me, for being understanding. I thank you for all the love you have shown me. For always believing in me even if dreams are far fetched. I thank you for being my best friend and the love of my life.
                        I am so sorry I cannot make it for valentines this year. But I promise to make it up to you for our 1 year which is coming soon. Thank you again for loving me. I love you so much, this is just a small token of my love for you. 1 Year here we come. ❤️ Thank you to God that continues to bring up closer together and to him. May we continue to put him in the center of this relationship ❤️.
                    </Text>
                </View>
                <View style={styles.imageContainer}>
                    {imageSources.map((image, index) => (
                        <Image
                            key={index.toString()}
                            source={image}
                            style={styles.image}
                            resizeMode="cover"
                        />
                    ))}
                </View>
            </>
        );
    }

    return (
        <View style={styles.container}>
            <Animated.Image
                source={require('./assets/valentines/heart.png')}
                style={[
                    styles.heart,
                    { transform: [{ scale: scaleAnim }] },
                ]}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
    heart: { width: 700, height: 700 },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        marginTop: 20,
        marginBottom: 20,
        fontFamily: 'cursive',
        color: '#333',
      },    message: {
        backgroundColor: 'rgba(255, 255, 255, 0.7)',
        borderRadius: 10,
        padding: 10,
        marginBottom: 20,
        width: '90%',
      },
    imageContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
    },
    imageContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        marginBottom: 20,
      },
    image: {
        width: 120,
        height: 120,
        margin: 5,
        borderRadius: 10,
    },
    scrollContainer: {
        flexGrow: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});