import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { pages } from './pages'; // Importing array of page objects and NavigationButtons component
import HomeScreen from './HomeScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        {pages.map((page) => (
          <Stack.Screen key={page.name} name={page.name} component={page.component} />
        ))}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;