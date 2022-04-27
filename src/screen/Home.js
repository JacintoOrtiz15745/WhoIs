import React from 'react';
import {View, Text, StatusBar, TouchableOpacity, Image} from 'react-native';
import {colors, text} from '../utils/Constants';
import {styles} from '../styles/HomeStyles'; 
import MyModal from '../components/MyModal';

const Icon = require('../assets/images/icon.png');

const Home = () => {
  return (
    <View style={styles.mainContainer}>
      <StatusBar backgroundColor={colors.white} barStyle={text.DarkContent} /> 

      <View style={styles.container}>
        <Text style={styles.HeyDev}>{text.HeyDev}</Text>
        <Text style={styles.subtitle}>{text.KeepUpTheGoodWork}</Text>
        <Text style={styles.whoIs}>{text.QuienEs}</Text>
        <View style={styles.selectImageContainer}>
        <MyModal/>
         
        </View>
      </View> 
    </View>
  );
};

export default Home;
