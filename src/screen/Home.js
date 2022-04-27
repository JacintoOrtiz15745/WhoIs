import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import {text} from '../utils/Constants';
import { styles } from '../styles/HomeStyles';

const Icon = require('../assets/images/icon.png')

const Home = () => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.container}> 
        <Text style={styles.HeyDev}>{text.HeyDev}</Text>
        <Text style={styles.subtitle}>{text.KeepUpTheGoodWork}</Text>
        <Text style={styles.whoIs}>{text.QuienEs}</Text>

        <TouchableOpacity style={styles.selectImage}>  
          <Image source={Icon} style={styles.Icon}/> 
          <Text style={styles.textIcon}>{text.PresionaParaElegir}</Text>
        </TouchableOpacity>
      </View> 
    </View>
  );
};

export default Home;
