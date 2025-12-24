import React from 'react';
import { View, Image, Text, StyleSheet, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { NavigationButtons } from './pages'; 
import FallingOrnaments from './FallingOrnaments';


const Christmas2024 = ({ navigation }) => {
  const imageSources = [
    require('./assets/Yearly-Christmas-photos/Photos00001.jpg'),
    require('./assets/Yearly-Christmas-photos/Photos00002.jpg'),
    require('./assets/Yearly-Christmas-photos/Photos00003.jpg'),
    require('./assets/Yearly-Christmas-photos/Photos00005.jpg'),
    require('./assets/Yearly-Christmas-photos/Photos00006.jpg'),
    require('./assets/Yearly-Christmas-photos/Photos00007.jpg'),
    require('./assets/Yearly-Christmas-photos/Photos00008.jpg'),
    require('./assets/Yearly-Christmas-photos/Photos00009.jpg'),
    require('./assets/Yearly-Christmas-photos/Photos00010.jpg'),
    require('./assets/Yearly-Christmas-photos/Photos00011.jpg'),
    require('./assets/Yearly-Christmas-photos/Photos00012.jpg'),
    require('./assets/Yearly-Christmas-photos/Photos00013.jpg'),
    require('./assets/Yearly-Christmas-photos/Photos00014.jpg'),
    require('./assets/Yearly-Christmas-photos/Photos00015.jpg'),
  ];

  return (
    <>
      <LinearGradient
        colors={['#008000', '#FF0000', '#FFD700']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.container}
      >
        {/* Main container */}
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          <Image source={require('./assets//Yearly-Christmas-photos/christmastree.png')} style={styles.treeImage} />
          <Text style={styles.heading}>❤️Merry Christmas 2024❤️</Text>

          {/* Confetti */}
          <View style={styles.confettiContainer}>
            <FallingOrnaments />
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

          {/* Text containers */}
          <View style={styles.textContainer}>
            <Text style={styles.text}>
              Hello, Good morning, good evening depending when you are reading this. It is Christmas baby! Another year well spent celebrating with you. I want to say thank you for all the gifts but most of all thank you for 
              being in my life. I have enjoyed every moment spent with you and growing together during these challenging times of me away. I know it can be difficult since we are so use to not being apart but know that you mean the world to mean and I 
              love you with all my heart. I am working hard to build a life for us that we can enjoy together. Know that I am always thinking of you and I am always here for you for whatever you may need. May we continue to be blessed by our savior and may we continue to grow stronger and 
              wiser with him in our life. I dont feel like my gifts were up to par this year as last year. I hope you enjoyed them but know that next year will be better, I was trying to adapt to the living situation and it was difficult to get things done. Anyways, I love you so very much! Know that you are my world, may we have a merry christmas and happy new year and may we enjoy Guatemala!
            </Text>
          </View>

          <View style={styles.textContainer}>
            <Text style={styles.text}>
                Enjoy these memories from our past year, and our wittle lucyy 🥰
            </Text>
          </View>
        </ScrollView>
      </LinearGradient>

      {/* Navigation buttons */}
      <NavigationButtons navigation={navigation} currentPage="Christmas2024" />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 20,
    paddingBottom: 20,
  },
  scrollContainer: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  heading: {
    fontSize: 28,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 20,
    fontFamily: 'cursive',
    color: '#333',
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
  textContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    borderRadius: 10,
    padding: 10,
    marginBottom: 20,
    width: '90%',
  },
  text: {
    fontSize: 14,
    textAlign: 'center',
    fontFamily: 'sans-serif',
    color: '#333',
  },
  confettiContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  treeImage: {
    width: 300,
    height: 300,
    resizeMode: 'contain',
    marginBottom: 20,
  },
});

export default Christmas2024;
