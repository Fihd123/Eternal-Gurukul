import {StyleSheet, Text, View} from 'react-native';
import {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Drawer from './src/Navigation/Drawer';
import Splash from './src/Screens/Splash';
import {LanguageProvider} from './src/Context/Context';

export default function App() {
  const [splashVisible, setSplashVisible] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setSplashVisible(false);
    }, 3000);
  }, []);

  return (
    <LanguageProvider>
      <NavigationContainer>
        {splashVisible ? <Splash /> : <Drawer />}
      </NavigationContainer>
    </LanguageProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
