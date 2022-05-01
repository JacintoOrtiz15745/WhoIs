import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { launchImageLibrary } from 'react-native-image-picker';
import { useNetInfo } from "@react-native-community/netinfo";
import { useNavigation } from '@react-navigation/native';
import { text } from '../utils/Constants';
import { styles } from '../styles/ImagePickerStyles';
import ModalLabel from './ModalLabel';
import ButtonLoader from './ButtonLoader';
import Button from './Button';


const ImagePicker = () => {
    const netInfo = useNetInfo(); 
    const navigation = useNavigation(); 
    const Photo = require('../assets/images/photo.png');
    const Camera = require('../assets/images/camera.png');

    const [pathImage, setPathImage] = useState('')
    const [whoIs, setWhoIs] = useState('')
    const [errorManagement, setErrorManagement] = useState('')

    const options = {
        title: 'Select Image',
        type: 'library',
        storageOptions: {
            skipBackup: true,
            path: 'images',
            mediaType: 'photo',
            selectionLimit: 1,
        }
    }
    
    const openGallery = async () => {
        const images = await launchImageLibrary(options);

        if (images.didCancel !== true) {

            const path = images.assets[0].uri
            setPathImage(path)
            
            if(netInfo.isConnected === true){
                const formData = new FormData();
                formData.append('file', {
                    uri: images.assets[0].uri,
                    type: images.assets[0].type,
                    name: images.assets[0].fileName,
                })

                const response = await fetch(text.apiNomada, {
                        method: 'post',
                        headers: {
                            'Content-Type': 'multipart/form-data',
                            'Nomada': `${text.nomadaKey}`
                        }, 
                        body: formData,
                    })
                    .catch(setErrorManagement(true))
                
                const responseJSON = await response.json();
                setWhoIs(responseJSON); 
            }
            
        }
    }
 
    return (
        <View>
            {pathImage === '' ?
                <>
                    <ModalLabel tittle={text.SeleccionaUnaFoto} />

                    <TouchableOpacity style={styles.galleryIconContainer} onPress={openGallery}>
                        <Image source={Photo} style={styles.selectPhotoandCameraIcon} />
                        <Text style={styles.textPhotoIcons}>{text.GaleriaDeFotos}</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.cameraIconContainer} onPress={openGallery}>
                        <Image source={Camera} style={styles.selectPhotoandCameraIcon} />
                        <Text style={styles.textCameraIcons}>{text.Camara}</Text>
                    </TouchableOpacity>
                </>
                :
                <View style={{ marginBottom: 19, }}>
                    { 
                        netInfo.isConnected === true || errorManagement === true ? 
                            whoIs === '' 
                            ? <ModalLabel tittle={text.Subiendo} /> 
                            : whoIs.error !== '' 
                            ? <ModalLabel tittle={text.EsUnFamoso} /> 
                            : whoIs.actorName !==''
                            ? <ModalLabel tittle={text.Listo} />
                            : <></>
                        :
                            <ModalLabel tittle={text.HuboUnError} />
                        
                    }

                    <Image
                        style={styles.imageContainer}
                        source={{ uri: pathImage }}
                    />
                    
                    {
                        netInfo.isConnected === true || errorManagement === true ?
                            whoIs === '' 
                            ? <ButtonLoader type={'primary'} tittle={text.Buscando} /> 
                            : whoIs.error !== '' 
                            ? 
                                <>
                                    <ButtonLoader type={'warning'} tittle={text.NoSeEncontro} />  
                                    <Button tittle={text.Cerrar}/>
                                </>
                            
                            : whoIs.actorName !== ''
                            ? <ButtonLoader type={'success'} tittle={whoIs.actorName} onPress={() => navigation.navigate('Details')} />
                            : <></>
                            
                        :
                            <ButtonLoader type={'error'} tittle={text.Error} />
                    }
                </View>
            }
        </View>
    )
}

export default ImagePicker