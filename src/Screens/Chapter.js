import {StyleSheet, Text, View, Dimensions} from 'react-native';
import React, {useContext, useEffect, useState} from 'react';
import Pdf from 'react-native-pdf';
import {langContext} from '../Context/Context';
import AsyncStorage from '@react-native-async-storage/async-storage';
const Chapter = ({id}) => {
  const defaultSource = {
    uri: 'https://bhagwad.macrothink.in/public/files/bhagwad-gita/chapter3/eng.pdf',
    cache: true,
  };

  const {language, changeLanguage} = useContext(langContext);

  const storeLanguagePreference = async lang => {
    try {
      await AsyncStorage.getItem('language');
      changeLanguage(lang);
    } catch (error) {
      console.error('Error saving language preference:', error);
    }
  };

  const [pdfUrl, setPdfUrl] = useState([]);

  const fetchChapters = async () => {
    try {
      const response = await fetch(
        `https://bhagwad.macrothink.in/public/api/get-questions`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            lang: language,
            chapter: id,
          }),
        },
      );
      const data = await response.json();
      setPdfUrl(data);
    } catch (error) {
      console.error('Error fetching chapters:', error);
    }
  };

  useEffect(() => {
    fetchChapters();
  }, [language]);

  let sourceUri = '';
  if (pdfUrl.length > 0) {
    sourceUri =
      language === 'en' ? pdfUrl[0].english_pdf : pdfUrl[0].bengali_pdf;
  }

  const source = sourceUri ? {uri: sourceUri, cache: true} : null;

  return (
    <View style={{flex: 1}}>
      <Pdf
        trustAllCerts={false}
        source={source ? source : defaultSource}
        onLoadComplete={(numberOfPages, filePath) => {}}
        // onError={error => {
        //   console.error('Error loading PDF:', error);
        // }}
        style={styles.pdf}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  pdf: {
    flex: 1,
  },
});
export default Chapter;
