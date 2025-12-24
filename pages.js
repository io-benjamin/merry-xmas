// pages.js

import React from 'react';
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native';
import BirthdayPage from './birthday';
import ChristmasPage from './christmas';
import GraduationPage from './graduation';
import Christmas2024 from './Christmas2024';
import Christmas2025 from './Christmas2025';
import Valentines2025 from './valentines2025';


export const pages = [
  { name: 'Christmas 2023', component: ChristmasPage },
  { name: 'Birthday 2024', component: BirthdayPage },
  { name: 'Graduation 2024', component: GraduationPage },
  { name: 'Christmas 2024', component: Christmas2024 },
  { name: 'Christmas 2025', component: Christmas2025 },
  { name: 'Valentines 2025', component: Valentines2025 },
];

export const NavigationButtons = ({ navigation, currentPage }) => {
  const currentIndex = pages.findIndex((page) => page.name === currentPage);
  const nextIndex = (currentIndex + 1 < pages.length) ? currentIndex + 1 : 0;

  const handleHomePress = () => {
    try {
      navigation.reset({
        index: 0,
        routes: [{ name: 'Home' }],
      });
    } catch (error) {
      navigation.navigate('Home');
    }
  };

  return (
    <View style={styles.buttonContainer}>
      <TouchableOpacity style={styles.button} onPress={handleHomePress}>
        <Text style={styles.buttonText}>🏠 Home</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate(pages[nextIndex].name)}>
        <Text style={styles.buttonText}>Next →</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    position: 'absolute',
    top: 20,
    left: 20,
    right: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    zIndex: 1000,
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#FFFFFF',
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  buttonText: {
    color: '#333',
    fontWeight: 'bold',
    fontSize: 14,
  },
});