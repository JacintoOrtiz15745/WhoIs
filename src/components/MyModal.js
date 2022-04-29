import React, { useState } from 'react';
import { Text, View, Image, TouchableOpacity, StatusBar } from 'react-native';
import Modal from 'react-native-modal';
import { styles } from '../styles/MyModalStyles';
import { colors, text } from '../utils/Constants';
import ButtonLoader from './ButtonLoader';
import ModalLabel from './ModalLabel';

function MyModal() {
  const Icon = require('../assets/images/icon.png');
  const Photo = require('../assets/images/photo.png');
  const Camera = require('../assets/images/camera.png');
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  return (
    <View>
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

          <ModalLabel tittle={text.SeleccionaUnaFoto} />

          <TouchableOpacity style={styles.iconsContainer}>
            <Image source={Photo} style={styles.selectPhotoandCameraIcon} />
            <Text style={styles.textIcons}>{text.GaleriaDeFotos}</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.iconsContainer}>
            <Image source={Camera} style={styles.selectPhotoandCameraIcon} />
            <Text style={styles.textIcons}>{text.Camara}</Text>
          </TouchableOpacity>

        </View>
      </Modal>
    </View>
  );
}

export default MyModal;
