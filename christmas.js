import React, { useEffect, useState } from 'react';
import { View, Image, Text, StyleSheet, TouchableOpacity, ScrollView, Animated, Dimensions } from 'react-native';
import SnowEffect from './SnowEffect';
import { NavigationButtons } from './pages'; // Importing NavigationButtons component

const ChristmasPage = ({ navigation }) => {
  const imageSources = [
    require('./assets/photos/image1.jpg'), 
    require('./assets/photos/image2.jpg'),
    require('./assets/photos/image3.jpg'),
    require('./assets/photos/image4.jpg'),
    require('./assets/photos/image5.jpg'),
    require('./assets/photos/image6.jpg'),
    require('./assets/photos/image7.jpg'),
    require('./assets/photos/image8.jpg'),
    require('./assets/photos/image9.jpg'),
    require('./assets/photos/image10.jpg'),
    require('./assets/photos/image11.jpg'),
  ];

  return (
    <>
      <View style={styles.container}>

        {/* Main container */}
        <Image source={require('./assets/garland.png')} style={styles.garlandImage} />
        <Text style={styles.heading}>Merry Christmas Kimmy❤️</Text>

        {/* Snowfall container */}
        <View style={styles.snowContainer}>
          <SnowEffect snowflakesCount={100} />
        </View>

        {/* Images */}
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

        {/* Text container */}
        <View style={styles.textContainer}>
          <Text>
          12/25/2023, Well, Hi baby. I see you found your present. I hope you enjoy this as much as I've enjoyed working on it. I've had all sorts of ideas for this project but didn't know what route to take. This is your Christmas card from me hehe. I have enjoyed our 6 months together again, and I really appreciate your patience with me. I know I can be a lot to handle sometimes, but I'm glad you're willing to put up with me. Back again, this is our journey now. It's us against the world haha. You hold a special place in my heart, and will forever be there for you. I want you to know that I love and care for you with all my heart. I hope you know, although I don't say it often that I do mean that. I'm not the best at expressing my feelings, but I hope this card shows you how much I care for you. I hope you have a wonderful Christmas, and I hope you enjoy your present. I love you Kimmy. Merry Christmas
          </Text>
        </View>

        <View style={styles.textContainer2}>
          <Text>
          Hi again, this is really cool huh??!!
          </Text>
        </View>

      </View>

      {/* Navigation buttons */}
      <NavigationButtons navigation={navigation} currentPage="Christmas" />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#ADD8E6',
    position: 'relative', // To make absolute positioning work within this container
  },
  heading: {
    fontSize: 32,
    fontWeight: 'bold',
    marginTop: -350,
    marginBottom: 20,
    textAlign: 'center',
    fontFamily: 'cursive',
    color: '#333',
  },
  garlandImage: {
    width: 300,
    height: 50,
    resizeMode: 'contain',
    position: 'absolute',
    top: 30,
    left: '50%',
    marginLeft: -150,
    zIndex: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    elevation: 8,
  },
  imageContainer: {
    flexDirection: 'row',
    alignItems: 'align-start',
    overflow: 'scroll',
    width: '100%',
  },
  image: {
    width: 250,
    height: 250,
    marginHorizontal: 5,
    borderRadius: 10,
  },
  textContainer: {
    position: 'absolute',
    bottom: 40,
    left: 20,
    right: 20,
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 2,
  },
  textContainer2: {
    position: 'absolute',
    bottom: 0,
    left: 20,
    right: 20,
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 2,
  },
  snowContainer: {
    position: 'fixed',
    top: 50,
    left: 100,
    right: 100,
    bottom: 0,
    width: '100%', // Adjust the width and height as needed
    height: '100%',
  },
});

export default ChristmasPage;
