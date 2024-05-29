import {View, Text, Image, StyleSheet, ImageBackground} from 'react-native';
import React from 'react';
import img1 from '../assets/splash.png';

const Splash = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={img1}
        style={styles.backgroundImage}
        resizeMode="cover"></ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    opacity: 0.9,
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    padding: 20,
    borderRadius: 10,
  },
  text: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default Splash;
