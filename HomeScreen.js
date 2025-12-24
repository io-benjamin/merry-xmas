import React, { useEffect, useRef, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Animated, Platform, Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const { width, height } = Dimensions.get('window');

const AnimatedCard = ({ page, index, navigation }) => {
  const scaleAnim = useRef(new Animated.Value(0)).current;
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    Animated.spring(scaleAnim, {
      toValue: 1,
      delay: index * 100,
      tension: 50,
      friction: 7,
      useNativeDriver: false,
    }).start();
  }, []);

  const handlePressIn = () => {
    Animated.spring(scaleAnim, {
      toValue: 0.95,
      useNativeDriver: false,
    }).start();
  };

  const handlePressOut = () => {
    Animated.spring(scaleAnim, {
      toValue: isHovered ? 1.05 : 1,
      useNativeDriver: false,
    }).start();
  };

  const cardStyle = {
    transform: [{ scale: scaleAnim }],
  };

  return (
    <Animated.View style={cardStyle}>
      <TouchableOpacity
        style={[
          styles.card,
          { backgroundColor: page.color },
          isHovered && styles.cardHovered,
        ]}
        onPress={() => navigation.navigate(page.name)}
        onPressIn={handlePressIn}
        onPressOut={handlePressOut}
        onMouseEnter={() => Platform.OS === 'web' && setIsHovered(true)}
        onMouseLeave={() => Platform.OS === 'web' && setIsHovered(false)}
        activeOpacity={0.8}
      >
        <Text style={styles.cardIcon}>{page.icon}</Text>
        <Text style={styles.cardText}>{page.name}</Text>
        {isHovered && (
          <View style={styles.cardShine} />
        )}
      </TouchableOpacity>
    </Animated.View>
  );
};

const HomeScreen = ({ navigation }) => {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const slideAnim = useRef(new Animated.Value(-50)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 800,
        useNativeDriver: false,
      }),
      Animated.spring(slideAnim, {
        toValue: 0,
        tension: 50,
        friction: 8,
        useNativeDriver: false,
      }),
    ]).start();
  }, []);

  const pages = [
    { name: 'Christmas 2023', icon: '🎄', color: '#FF6B6B', description: 'Our first Christmas together' },
    { name: 'Birthday 2024', icon: '🎂', color: '#4ECDC4', description: 'Celebrating your special day' },
    { name: 'Graduation 2024', icon: '🎓', color: '#FFD93D', description: 'Your amazing achievement' },
    { name: 'Christmas 2024', icon: '🎅', color: '#A8E6A3', description: 'Another magical Christmas' },
    { name: 'Valentines 2025', icon: '❤️', color: '#FF69B4', description: 'Love and romance' },
    { name: 'Christmas 2025', icon: '❄️', color: '#6A89CC', description: 'Looking forward to more memories' },
];

  return (
    <LinearGradient
      colors={['#0f2027', '#203a43', '#2c5364']}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.container}
    >
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Animated.View style={{ opacity: fadeAnim, transform: [{ translateY: slideAnim }] }}>
          <Text style={styles.title}>Our Memories Together ❤️</Text>
          <Text style={styles.subtitle}>Choose a memory to explore</Text>
        </Animated.View>

        <View style={styles.gridContainer}>
          {pages.map((page, index) => (
            <AnimatedCard 
              key={index} 
              page={page} 
              index={index} 
              navigation={navigation}
            />
          ))}
        </View>

        <Animated.View style={[styles.footer, { opacity: fadeAnim }]}>
          <Text style={styles.footerText}>Made with love 💕</Text>
          <Text style={styles.footerSubtext}>{pages.length} beautiful memories</Text>
        </Animated.View>
      </ScrollView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContainer: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: height * 0.05,
    paddingHorizontal: width * 0.05,
    paddingBottom: height * 0.1,
  },
  title: {
    fontSize: width < 375 ? 28 : 36,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 10,
    textAlign: 'center',
    textShadowColor: 'rgba(0, 0, 0, 0.3)',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 4,
    letterSpacing: 1,
    paddingHorizontal: 10,
  },
  subtitle: {
    fontSize: width < 375 ? 16 : 18,
    color: '#FFFFFF',
    marginBottom: 30,
    textAlign: 'center',
    opacity: 0.9,
    fontStyle: 'italic',
    paddingHorizontal: 20,
  },
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    width: '100%',
    maxWidth: 800,
    marginBottom: 30,
  },
  card: {
    width: width < 375 ? width * 0.42 : Math.min(160, width * 0.4),
    height: width < 375 ? width * 0.42 : Math.min(160, width * 0.4),
    margin: width < 375 ? 8 : 12,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.4,
    shadowRadius: 12,
    elevation: 12,
    overflow: 'hidden',
    position: 'relative',
  },
  cardHovered: {
    shadowOffset: { width: 0, height: 12 },
    shadowOpacity: 0.5,
    shadowRadius: 16,
    elevation: 16,
  },
  cardIcon: {
    fontSize: width < 375 ? 45 : 60,
    marginBottom: 8,
    textShadowColor: 'rgba(0, 0, 0, 0.2)',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 4,
  },
  cardText: {
    fontSize: width < 375 ? 13 : 16,
    fontWeight: 'bold',
    color: '#FFFFFF',
    textAlign: 'center',
    textShadowColor: 'rgba(0, 0, 0, 0.3)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 3,
    paddingHorizontal: 8,
  },
  cardShine: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
  },
  footer: {
    marginTop: 20,
    alignItems: 'center',
    paddingBottom: 20,
  },
  footerText: {
    fontSize: width < 375 ? 18 : 20,
    color: '#FFFFFF',
    fontWeight: '600',
    marginBottom: 5,
    opacity: 0.9,
  },
  footerSubtext: {
    fontSize: width < 375 ? 12 : 14,
    color: '#FFFFFF',
    opacity: 0.7,
    fontStyle: 'italic',
  },
});

export default HomeScreen;
