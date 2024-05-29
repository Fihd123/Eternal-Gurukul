import React, {useContext, useEffect, useState} from 'react';
import {ScrollView, View, Text, StyleSheet} from 'react-native';
import {langContext} from '../Context/Context';

const Foreward = () => {
  const [foreward, setForeward] = useState('');
  const {language} = useContext(langContext);

  useEffect(() => {
    const fetchForeward = async () => {
      try {
        const response = await fetch(
          `https://bhagwad.macrothink.in/public/api/foreward`,
          {
            method: 'POST',
            headers: {
              'Content-Type': 'appliication/json',
            },
            body: JSON.stringify({lang: language}),
          },
        );
        const data = await response.json();
        setForeward(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchForeward();
  }, [language]);

  return (
    <ScrollView style={styles.bg}>
      <View style={{width: '100%'}}>
        <View style={styles.itemContainer}>
          {language === 'en' ? (
            <>
              <Text style={styles.title}>{foreward.english_title}</Text>
              <Text style={styles.paragraph}>
                {foreward.english_description}
              </Text>
            </>
          ) : (
            <>
              <Text style={styles.title}>{foreward.bengali_title}</Text>
              <Text style={styles.paragraph}>
                {foreward.bengali_description}
              </Text>
            </>
          )}
        </View>
      </View>
    </ScrollView>
  );
};

export default Foreward;

const styles = StyleSheet.create({
  bg: {
    backgroundColor: '#DFD2B8',
  },
  itemContainer: {
    marginVertical: 15,
    margin: 15,
    backgroundColor: 'white',
    padding: 20,
  },
  title: {
    fontSize: 14,
    textAlign: 'center',
    textTransform: 'uppercase',
    fontWeight: '600',
  },
  paragraph: {
    textAlign: 'center',
    marginVertical: 10,
    lineHeight: 28,
    letterSpacing: 0.12,
    justifyContent: 'center',
    fontSize: 12,
  },
});
