import React, { useState } from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import Modal from 'react-native-modal';
import { styles } from '../styles/MyModalStyles';
import { text } from '../utils/Constants';
import ImagePicker from './ImagePicker';

function MyModal() {
  const Icon = require('../assets/images/icon.png');

  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const pullData = (isOpen) => { 
      setModalVisible(isOpen);
  }
  
  return (
    <View style={styles.selectImageContainer}>
      <TouchableOpacity style={styles.selectImage} onPress={toggleModal}>
        <Image source={Icon} style={styles.icon} />
        <Text style={styles.textIcon}>{text.PresionaParaElegir}</Text>
      </TouchableOpacity>

      <Modal
        isVisible={isModalVisible}
        onBackdropPress={() => setModalVisible(false)}
        swipeDirection={'down'}
        onSwipeComplete={() => {
          setModalVisible(false);
        }}
        style={styles.modal}>
        <View style={styles.mainContainer}>
          <View style={styles.closeModal}></View>
          <ImagePicker isOpen={pullData}/>
        </View>
      </Modal>
    </View>
  );
}

export default MyModal;
