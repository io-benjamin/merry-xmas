import React, { useEffect, useRef } from 'react';
import { View, StyleSheet, Animated, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const SnowEffect = ({ snowflakesCount = 50 }) => {
  const snowflakes = useRef([...Array(snowflakesCount)].map(() => ({
    anim: new Animated.Value(0),
    left: Math.random() * width,
    size: Math.random() * 3 + 2,
    opacity: Math.random() * 0.5 + 0.3,
    duration: Math.random() * 3000 + 2000,
  }))).current;

  useEffect(() => {
    snowflakes.forEach((snowflake, i) => {
      const animate = () => {
        snowflake.anim.setValue(0);
        Animated.timing(snowflake.anim, {
          toValue: height,
          duration: snowflake.duration,
          useNativeDriver: false,
        }).start(() => animate());
      };
      
      // Stagger the start times
      setTimeout(() => animate(), i * 100);
    });
  }, []);

  return (
    <View style={StyleSheet.absoluteFill} pointerEvents="none">
      {snowflakes.map((snowflake, i) => (
        <Animated.View
          key={i}
          style={[
            styles.snowflake,
            {
              left: snowflake.left,
              width: snowflake.size,
              height: snowflake.size,
              opacity: snowflake.opacity,
              transform: [{ translateY: snowflake.anim }],
            },
          ]}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  snowflake: {
    position: 'absolute',
    backgroundColor: 'white',
    borderRadius: 50,
    top: -10,
  },
});

export default SnowEffect;
