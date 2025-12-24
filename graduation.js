import React from 'react';
import { View, Image, Text, StyleSheet, ScrollView } from 'react-native';
import ConfettiCannon from 'react-native-confetti-cannon';
import { NavigationButtons } from './pages'; // Importing NavigationButtons component

// Configuration for graduation memories - easy to update and add new memories!
const GRADUATION_CONFIG = {
  title: 'Happy Graduation Kimmy❤️',
  headerImage: require('./assets/graduation-photos/image.png'),
  images: [
    require('./assets/graduation-photos/1.jpg'), 
    require('./assets/graduation-photos/2.jpg'),
    require('./assets/graduation-photos/3.jpg'),
    require('./assets/graduation-photos/4.jpg'),
    require('./assets/graduation-photos/5.jpg'),
    require('./assets/graduation-photos/6.jpg'),
    require('./assets/graduation-photos/7.jpg'),
    require('./assets/graduation-photos/8.jpg'),
    // Add more photos here easily!
  ],
  messages: [
    {
      text: "05/10/2024, CONGRATULATIONS to my beautiful girl, you've never failed to impress me. I have always knew you would be destined to do great things and I am nothing less than proud that you do. I thank you for constantly pushing me to do great things and become a better person, I might not say it but you know you are the reason I work so hard. I push myself because you have built me up and told me my worth and I thank you for that. This achievement for you is nothing less than I expected, you are smart, beautiful, kind, and will do great things in our future. Keep your head up and keep pushing for success, and know i'll be there rooting for you the entire time. I wish you the best of luck and know you don't need it. I know you can do this, sure there might be some hiccups but don't give up on yourself. I am proud of you and know everyone around you is rooting for you. I love you, you are a defintion of success."
    },
    // Add more messages here easily!
  ]
};

const GraduationPage = ({ navigation }) => {
  const { title, headerImage, images, messages } = GRADUATION_CONFIG;

  return (
    <>
      <View style={styles.container}>
        {/* Main container */}
        <View style={styles.backgroundContainer}>
          <ScrollView contentContainerStyle={styles.scrollContainer}>
            <Image source={headerImage} style={styles.garlandImage} />
            <Text style={styles.heading}>{title}</Text>

            {/* Confetti */}
            <View style={styles.confettiContainer}>
              <ConfettiCannon count={400} origin={{ x: -10, y: 0 }} explosionSpeed={200} fadeOut />
            </View>

            {/* Images */}
            <View style={styles.imageContainer}>
              {images.map((image, index) => (
                <Image
                  key={index.toString()}
                  source={image}
                  style={styles.image}
                  resizeMode="cover"
                />
              ))}
            </View>

            {/* Text containers - now supports multiple messages */}
            {messages.map((message, index) => (
              <View key={index.toString()} style={styles.textContainer}>
                <Text style={styles.text}>{message.text}</Text>
              </View>
            ))}
          </ScrollView>
        </View>
      </View>

      {/* Navigation buttons */}
      <NavigationButtons navigation={navigation} currentPage="Graduation" />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundContainer: {
    flex: 1,
    backgroundColor: '#FFFDD0',
  },
  scrollContainer: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 20,
    paddingBottom: 20,
  },
  heading: {
    fontSize: 28,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 20,
    fontFamily: 'cursive',
    color: '#ffd700', 
  },
  garlandImage: {
    width: 300,
    height: 250, // Adjust the height as needed
    marginBottom: 20,
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
});

export default GraduationPage;
