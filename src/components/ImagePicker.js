import React, { useState } from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import { launchImageLibrary } from 'react-native-image-picker'
import { text } from '../utils/Constants'
import { styles } from '../styles/ImagePickerStyles'
import ModalLabel from './ModalLabel'
import ButtonLoader from './ButtonLoader'
import Button from './Button'

const ImagePicker = () => {

    const Photo = require('../assets/images/photo.png');
    const Camera = require('../assets/images/camera.png');

    const [image, setImage] = useState('')

    const selectImage = () => {
        const options = {
            title: 'Select Image',
            storageOptions: {
                skipBackup: true,
                path: 'images',
            }
        }

        launchImageLibrary(options, response => {
            if (response.errorCode) {
                console.log(response.errorMessage)
            } else if (response.didCancel) {
                console.log('Cancelado')
            } else {
                const path = response.assets[0].uri
                setImage(path)
            }
        })
    }

    return (
        <View>
            {image === '' ?
                <>
                    <ModalLabel tittle={text.SeleccionaUnaFoto} />

                    <TouchableOpacity style={styles.galleryIconContainer} onPress={selectImage}>
                        <Image source={Photo} style={styles.selectPhotoandCameraIcon} />
                        <Text style={styles.textIcons}>{text.GaleriaDeFotos}</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.cameraIconContainer}>
                        <Image source={Camera} style={styles.selectPhotoandCameraIcon} />
                        <Text style={styles.textIcons}>{text.Camara}</Text>
                    </TouchableOpacity>
                </>
                :
                <View style={{marginBottom: 19,}}>
                    <ModalLabel tittle={text.Subiendo} />
                    <Image
                        style={styles.imageContainer}
                        source={{ uri: image }}
                    />
                    <ButtonLoader type={'primary'} tittle={text.Buscando} /> 
                </View> 
            }
        </View>
    )
}

export default ImagePicker