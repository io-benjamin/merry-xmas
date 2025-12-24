import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Animated, Image, ScrollView, Platform, Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { NavigationButtons } from './pages';
const { width } = Dimensions.get('window');
const MEMORIES = [
  {
    id: 1,
    media: require('./assets/2025-Christmas/memory1.png'), 
    question: 'Do you remember what did this day??',
    options: ['Enjoyed the view', 'Picking tiny apples', 'Enjoying each others presences'],
    answer: 1,
  },
    {
    id: 2,
    media: require('./assets/2025-Christmas/memory2.png'), 
    question: 'What kind of bagel did you get?',
    options: ['Baconn egg cheesee', 'Bacon egg and cheese de Okiii wayy', 'Sausage Egg and Cheese with Aioli'],
    answer: 2,
  },
    {
    id: 3,
    media: require('./assets/2025-Christmas/memory3.png'), 
    question: 'What did we have to steal on this trip?',
    options: ['Kayaks', 'Scorpion Repellent', 'Trash bags', 'Oil'],
    answer: 3,
  },
    {
    id: 4,
    media: require('./assets/2025-Christmas/memory4.png'), 
    question: 'What was the lunch you had here?',
    options: ['A sandwich', 'Churrascaria', 'Salad, Rice and Steak', 'Sushi'],
    answer: 2,
  },
    {
    id: 5,
    media: require('./assets/2025-Christmas/memory5.png'), 
    question: 'What kind of tacos did we have?',
    options: ['Asada', 'Chorizo', 'Veggie', 'Carnitas'],
    answer: 0,
  },
    {
    id: 6,
    media: require('./assets/2025-Christmas/memory6.png'), 
    question: 'What song were we waiting for that whole night?',
    options: ['Before you leave me', 'Save you a seat', 'Carry you home', 'Ordinary'],
    answer: 3,
  },
];

const Christmas2025 = ({ navigation }) => {
  const [currentMemoryIndex, setCurrentMemoryIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [answered, setAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [showFinal, setShowFinal] = useState(false);
  const slideAnim = new Animated.Value(0);

  const currentMemory = MEMORIES[currentMemoryIndex];

  const handleAnswerPress = (index) => {
    if (!answered) {
      setSelectedAnswer(index);
      setAnswered(true);
      if (index === currentMemory.answer) {
        setScore(score + 1);
        // Auto-advance after 1 second if correct
        setTimeout(() => {
          handleNextMemory();
        }, 1000);
      }
    }
  };

  const handleNextMemory = () => {
    if (currentMemoryIndex < MEMORIES.length - 1) {
      Animated.timing(slideAnim, {
        toValue: 1,
        duration: 300,
        useNativeDriver: false,
      }).start(() => {
        setCurrentMemoryIndex(currentMemoryIndex + 1);
        setSelectedAnswer(null);
        setAnswered(false);
        slideAnim.setValue(0);
      });
    } else {
      setShowFinal(true);
    }
  };

  const handleRestart = () => {
    setCurrentMemoryIndex(0);
    setSelectedAnswer(null);
    setAnswered(false);
    setScore(0);
    setShowFinal(false);
  };

  return (
    <>
      <LinearGradient
        colors={['#0a1a3e', '#1a2a5e', '#2a3a7e']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.container}
      >
        <View style={styles.starsBackground} pointerEvents="none">
          {[...Array(30)].map((_, i) => (
            <View
              key={i}
              style={[
                styles.backgroundStar,
                {
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  opacity: Math.random() * 0.6 + 0.2,
                },
              ]}
            />
          ))}
        </View>

        {!showFinal ? (
          <ScrollView contentContainerStyle={styles.gameContainer}>
            {/* Header */}
            <View style={styles.header}>
              <Text style={styles.title}>🎄 Guess the Memory 🎄</Text>
              <Text style={styles.progress}>
                {currentMemoryIndex + 1} of {MEMORIES.length}
              </Text>
            </View>

            {/* Photo */}
            <View style={styles.mediaContainer}>
              {currentMemory.media ? (
                <Image
                  source={currentMemory.media}
                  style={styles.photo}
                  resizeMode="cover"
                />
              ) : (
                <View style={styles.mediaPlaceholder}>
                  <Text style={styles.placeholderText}>📷</Text>
                  <Text style={styles.placeholderSubtext}>Add your photo here!</Text>
                </View>
              )}
            </View>

            <Text style={styles.question}>{currentMemory.question}</Text>

            <View style={styles.optionsContainer}>
              {currentMemory.options.map((option, index) => (
                <TouchableOpacity
                  key={index}
                  style={[
                    styles.optionButton,
                    selectedAnswer === index && styles.optionButtonSelected,
                    answered && index === currentMemory.answer && styles.optionButtonCorrect,
                    answered && index !== currentMemory.answer && selectedAnswer === index && styles.optionButtonWrong,
                  ]}
                  onPress={() => handleAnswerPress(index)}
                  disabled={answered}
                >
                  <Text style={styles.optionText}>{option}</Text>
                  {answered && index === currentMemory.answer && <Text style={styles.correctIcon}>✅</Text>}
                  {answered && index !== currentMemory.answer && selectedAnswer === index && <Text style={styles.wrongIcon}>❌</Text>}
                </TouchableOpacity>
              ))}
            </View>

            {answered && selectedAnswer !== currentMemory.answer && (
              <TouchableOpacity
                style={styles.nextButton}
                onPress={handleNextMemory}
              >
                <Text style={styles.nextButtonText}>
                  {currentMemoryIndex < MEMORIES.length - 1 ? 'Next Memory →' : 'See Results'}
                </Text>
              </TouchableOpacity>
            )}

            <Text style={styles.score}>Score: {score}/{MEMORIES.length}</Text>
          </ScrollView>
        ) : (
          <View style={styles.finalContainer}>
            <Text style={styles.finalTitle}>🎉 Game Complete! 🎉</Text>
            <View style={styles.scoreBox}>
              <Text style={styles.finalScore}>{score} / {MEMORIES.length}</Text>
              <Text style={styles.scoreMessage}>
                {score === MEMORIES.length
                  ? "Perfect! You remember baby!!❤️"
                  : score >= MEMORIES.length * 0.7
                  ? "Great job! You remember so much! 💕"
                  : "Good try! Let's make more memories together! 💖"}
              </Text>
            <Text style={styles.scoreMessage}>
              I hope you enjoyed playing this little game I made for you. I hope it brought back some fun memories of us this year. Thank you for being so amazing and apart of my life. I am so blessed in many ways to have you by my side. May God continue to bless us and our future.  
              I look forward everyday to making many more memories with you. I love you Kimmy! Merry Christmas 2025! 🎄❤️
            </Text>

            </View>
            <TouchableOpacity
              style={styles.restartButton}
              onPress={handleRestart}
            >
              <Text style={styles.restartButtonText}>Play Again</Text>
            </TouchableOpacity>
          </View>
        )}
      </LinearGradient>

      <NavigationButtons navigation={navigation} currentPage="Christmas 2025" />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    overflow: 'hidden',
  },
  starsBackground: {
    ...StyleSheet.absoluteFillObject,
    zIndex: 1,
  },
  backgroundStar: {
    position: 'absolute',
    width: 2,
    height: 2,
    backgroundColor: '#FFFFFF',
    borderRadius: 1,
  },
  gameContainer: {
    flexGrow: 1,
    zIndex: 2,
    paddingTop: 90,
    paddingBottom: 100,
    paddingHorizontal: 15,
  },
  header: {
    alignItems: 'center',
    marginBottom: 25,
    marginTop: 10,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FFD700',
    textShadowColor: 'rgba(0, 0, 0, 0.5)',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 4,
  },
  progress: {
    fontSize: 14,
    color: '#FFFFFF',
    marginTop: 8,
    opacity: 0.9,
  },
  photoContainer: {
    alignItems: 'center',
    marginBottom: 20,
    borderRadius: 15,
    overflow: 'hidden',
    borderColor: '#FFD700',
    borderWidth: 3,
  },
  mediaContainer: {
    alignItems: 'center',
    marginBottom: 20,
    borderRadius: 15,
    overflow: 'hidden',
    borderColor: '#FFD700',
    borderWidth: 3,
    maxWidth: '90%',
    alignSelf: 'center',
  },
  photo: {
    width: Math.min(320, width * 0.9),
    height: Math.min(320, width * 0.9),
    borderRadius: 12,
  },
  mediaPlaceholder: {
    width: Math.min(320, width * 0.9),
    height: Math.min(320, width * 0.9),
    borderRadius: 12,
    backgroundColor: 'rgba(255, 215, 0, 0.2)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  photoPlaceholder: {
    width: Math.min(320, width * 0.9),
    height: Math.min(320, width * 0.9),
    borderRadius: 12,
    backgroundColor: 'rgba(255, 215, 0, 0.2)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  placeholderText: {
    fontSize: 80,
    marginBottom: 10,
  },
  placeholderSubtext: {
    fontSize: 14,
    color: '#FFD700',
    fontWeight: '600',
  },
  question: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFFFFF',
    textAlign: 'center',
    marginBottom: 20,
    textShadowColor: 'rgba(0, 0, 0, 0.5)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 3,
  },
  optionsContainer: {
    gap: 12,
    marginBottom: 20,
  },
  optionButton: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderColor: '#FFD700',
    borderWidth: 2,
    borderRadius: 10,
    padding: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  optionButtonSelected: {
    backgroundColor: 'rgba(255, 215, 0, 0.3)',
    borderColor: '#FFD700',
  },
  optionButtonCorrect: {
    backgroundColor: 'rgba(34, 197, 94, 0.3)',
    borderColor: '#22C55E',
  },
  optionButtonWrong: {
    backgroundColor: 'rgba(239, 68, 68, 0.3)',
    borderColor: '#EF4444',
  },
  optionText: {
    fontSize: 16,
    color: '#FFFFFF',
    fontWeight: '500',
    flex: 1,
  },
  correctIcon: {
    fontSize: 20,
  },
  wrongIcon: {
    fontSize: 20,
  },
  nextButton: {
    backgroundColor: '#FFD700',
    borderRadius: 10,
    padding: 15,
    alignItems: 'center',
    marginBottom: 15,
  },
  nextButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#0a1a3e',
  },
  score: {
    fontSize: 16,
    color: '#FFD700',
    textAlign: 'center',
    fontWeight: '600',
  },
  finalContainer: {
    flex: 1,
    zIndex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  finalTitle: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#FFD700',
    marginBottom: 30,
    textShadowColor: 'rgba(0, 0, 0, 0.5)',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 4,
  },
  scoreBox: {
    backgroundColor: 'rgba(26, 42, 94, 0.9)',
    borderRadius: 20,
    padding: 30,
    borderColor: '#FFD700',
    borderWidth: 3,
    alignItems: 'center',
    marginBottom: 40,
  },
  finalScore: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#FFD700',
    marginBottom: 15,
  },
  scoreMessage: {
    fontSize: 18,
    color: '#FFFFFF',
    textAlign: 'center',
    fontWeight: '500',
  },
  restartButton: {
    backgroundColor: '#FFD700',
    borderRadius: 10,
    paddingVertical: 15,
    paddingHorizontal: 40,
  },
  restartButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#0a1a3e',
  },
});

export default Christmas2025;
