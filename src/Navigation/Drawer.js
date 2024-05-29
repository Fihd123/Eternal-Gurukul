import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Modal,
} from 'react-native';
import React, {useContext, useState} from 'react';
import {
  DrawerToggleButton,
  createDrawerNavigator,
} from '@react-navigation/drawer';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {langContext} from '../Context/Context';
import Forward from '../Screens/Forward';
import Chapter from '../Screens/Chapter';

const drawer = createDrawerNavigator();

const Drawer = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const {language, setLanguage, changeLanguage} = useContext(langContext);
  const [active, setActive] = useState('en');

  const storeLanguagePreference = async lang => {
    try {
      await AsyncStorage.setItem('language', lang);
      changeLanguage(lang);
      setActive(lang);
      setModalVisible(false);
    } catch (error) {
      console.error('Error saving language preference:', error);
    }
  };

  const chapters = [
    {id: 1, name: 'Chapter - 1'},
    {id: 2, name: 'Chapter - 2'},
    {id: 3, name: 'Chapter - 3'},
    {id: 4, name: 'Chapter - 4'},
    {id: 5, name: 'Chapter - 5'},
    {id: 6, name: 'Chapter - 6'},
    {id: 7, name: 'Chapter - 7'},
    {id: 8, name: 'Chapter - 8'},
    {id: 9, name: 'Chapter - 9'},
    {id: 10, name: 'Chapter - 10'},
    {id: 11, name: 'Chapter - 11'},
    {id: 12, name: 'Chapter - 12'},
    {id: 13, name: 'Chapter - 13'},
    {id: 14, name: 'Chapter - 14'},
    {id: 15, name: 'Chapter - 15'},
    {id: 16, name: 'Chapter - 16'},
    {id: 17, name: 'Chapter - 17'},
    {id: 18, name: 'Chapter - 18'},
    {id: 19, name: 'Chapter - 19'},
    {id: 20, name: 'Chapter - 20'},
    {id: 21, name: 'Chapter - 21'},
    {id: 22, name: 'Chapter - 22'},
    {id: 23, name: 'Chapter - 23'},
    {id: 24, name: 'Chapter - 24'},
    {id: 25, name: 'Chapter - 25'},
    {id: 26, name: 'Chapter - 26'},
    {id: 27, name: 'Chapter - 27'},
    {id: 28, name: 'Chapter - 28'},
    {id: 29, name: 'Chapter - 29'},
    {id: 30, name: 'Chapter - 30'},
    {id: 31, name: 'Chapter - 31'},
    {id: 32, name: 'Chapter - 32'},
    {id: 33, name: 'Chapter - 33'},
    {id: 34, name: 'Chapter - 34'},
    {id: 35, name: 'Chapter - 35'},
  ];

  const openModal = () => {
    setModalVisible(true);
  };

  return (
    <View style={{flex: 1}}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(false);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <TouchableOpacity onPress={() => storeLanguagePreference('en')}>
              <Text
                style={
                  active === 'en' ? styles.activeText : styles.languageText
                }>
                English
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.b1}
              onPress={() => storeLanguagePreference('bg')}>
              <Text
                style={[
                  styles.languageText,
                  active === 'bg' && styles.activeText,
                ]}>
                Bengali
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      <drawer.Navigator
        screenOptions={{
          drawerActiveBackgroundColor: '#fff',
          drawerActiveTintColor: '#9E0804',
          drawerInactiveTintColor: '#DFD2b8',
          drawerStyle: {
            padding: 30,
          },
          DrawerItemList: 'none',
          headerTitleAlign: 'center',
          drawerPosition: 'right',
          headerLeft: () => (
            <View style={styles.headerLeft}>
              <Image
                style={{
                  height: 30,
                  width: 30,
                  borderRadius: 30,
                  marginRight: 20,
                }}
                source={require('../assets/logo.png')}
              />
            </View>
          ),
          headerRight: () => (
            <View style={styles.headerRight}>
              <TouchableOpacity style={{marginRight: 10}} onPress={openModal}>
                <Image
                  style={{
                    height: 30,
                    width: '150%',
                    borderRadius: 30,
                    marginRight: 20,
                  }}
                  source={require('../assets/language.jpg')}
                />
              </TouchableOpacity>
              <DrawerToggleButton />
            </View>
          ),
        }}>
        <drawer.Screen name="Forward" component={Forward}></drawer.Screen>
        {chapters.map(chapter => (
          <drawer.Screen
            key={chapter.id}
            name={chapter.name}
            language={language}>
            {props => (
              <Chapter {...props} id={chapter.id} name={chapter.name} />
            )}
          </drawer.Screen>
        ))}
      </drawer.Navigator>
    </View>
  );
};

export default Drawer;

const styles = StyleSheet.create({
  headerLeft: {
    marginLeft: 15,
  },

  headerRight: {
    flexDirection: 'row',
    marginRight: 0,
  },
  languageText: {
    textAlign: 'center',
    color: 'black',
    fontSize: 14,
    textTransform: 'capitalize',
    letterSpacing: 0.6,
    fontWeight: '500',
  },
  activeText: {
    color: '#e36f3f',
    fontWeight: '700',
    fontSize: 14,
    textTransform: 'capitalize',
    letterSpacing: 0.6,
  },
  modalContent: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
  },

  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  b1: {
    width: 80,
    padding: 5,
    backgroundColor: '#',
    borderRadius: 10,
    margin: 5,
  },
  modalView: {
    margin: 20,
    backgroundColor: '#DFD2B8',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
});
