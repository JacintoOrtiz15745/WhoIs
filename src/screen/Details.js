import React, { useState, useEffect } from 'react';
import { View, Text, Image, ImageBackground, TouchableOpacity, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { styles } from '../styles/DetailsStyles';
import { text } from '../utils/Constants';
import GenderTag from '../components/GenderTag';
import RenderData from '../components/RenderData';

const Details = ({ route }) => {

  const navigation = useNavigation();
  const [dataResponse, setDataResponse] = useState([])
  const [flatListData, setFlatListData] = useState([])

  const { actorName } = route.params;
  const actorNameEncode = encodeURI(actorName)

  const fetchData = async () => {
    const response = await fetch(
      text.apiTheMovieDB + actorNameEncode + text.apiTheMovieDBSecondPart ,
    );
    const data = await response.json();
    const actor = await data.results[0]
    const dataFlatList = await actor.known_for
    setDataResponse(actor);
    setFlatListData(dataFlatList)
  };

  useEffect(() => {
    fetchData();
  }, []);

  const imagePath = dataResponse.profile_path
  const leftArrowImage = require('../assets/images/arrowLeft.png')
  console.log(flatListData)

  return (
    <View style={styles.mainContainer}>
      <View style={styles.imageContainer}>
        <ImageBackground style={styles.imageBackground} source={{ uri: text.apiTheMovieDBActorImage + imagePath }} />
        <TouchableOpacity style={styles.leftArrowContainer} onPress={() => navigation.goBack()}>
          <Image style={styles.leftArrow} source={leftArrowImage} />
        </TouchableOpacity>

        <View style={styles.infoMainContainer}>
          <View style={styles.leftContainer}>
            <Text style={styles.actorName}>{actorName}</Text>
            {
              dataResponse.gender === 2 ?
                <View style={styles.tagDirection}>
                  <GenderTag title={text.Hombre} />
                </View>
                :
                <View style={styles.tagDirection}>
                  <GenderTag title={text.Mujer} />
                </View>
            }
          </View>

          <View style={styles.rightContainer}>
            <Text style={styles.popularityTitle}>{text.Popularidad}</Text>
            <Text style={styles.popularityText}>{dataResponse.popularity}{text.Star}</Text>
          </View>
        </View>
        <ImageBackground />
      </View>

      <Text style={styles.movieTitle}>{text.Peliculas}</Text>

      <FlatList
        data={flatListData}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <RenderData
            title={item.original_title}
            overview={item.overview}
            poster_path={item.poster_path}
            vote_average={item.vote_average}
          />
        )}
      />
    </View>
  )
}

export default Details