import React, { useState, useEffect, Suspense } from 'react';
import { View, Text, Image, ImageBackground, TouchableOpacity, ScrollView, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { styles } from '../styles/DetailsStyles';
import { text } from '../utils/Constants';
import GenderTag from '../components/GenderTag';
import RenderData from '../components/RenderData';
import DetailsLoader from '../components/DetailsLoader';

const Details = ({ route }) => {

  const navigation = useNavigation();
  const [dataResponse, setDataResponse] = useState([])
  const [moviesListData, setMoviesListData] = useState([])
  const [catchError, setCatchError] = useState(false)

  const { actorName } = route.params;
  const actorNameEncode = encodeURI(actorName)

  const fetchData = async () => {
    try {
      const response = await fetch(
        text.apiTheMovieDB + actorNameEncode + text.apiTheMovieDBSecondPart ,
      );
      const data = await response.json();
      const actor = await data.results[0]
      const dataList = await actor.known_for
      setDataResponse(actor);
      setMoviesListData(dataList)
    } catch (error) {
      setCatchError(true)
    }

  };

  useEffect(() => {
    fetchData();
  }, []);

  const imagePath = dataResponse.profile_path
  const leftArrowImage = require('../assets/images/arrowLeft.png')

  return (
    <View style={styles.mainContainer}>

      {
        catchError === true ?
          (Alert.alert(text.alertTitle, text.WithoutMovieInfo, [{
            text: text.alertClose, onPress: () => navigation.navigate('Home')
          }]))
          :
          (
            <>

              <TouchableOpacity style={styles.leftArrowContainer} onPress={() => navigation.goBack()}>
                <Image style={styles.leftArrow} source={leftArrowImage} />
              </TouchableOpacity>

              <Suspense fallback={<DetailsLoader />}>

                <ScrollView showsVerticalScrollIndicator={false}>

                  <View style={styles.imageContainer}>
                    <ImageBackground style={styles.imageBackground} source={{ uri: text.apiTheMovieDBActorImage + imagePath }} />

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

                  {moviesListData.map((item) => {
                    return <RenderData
                      key={item.id}
                      title={item.original_title}
                      overview={item.overview}
                      poster_path={item.poster_path}
                      vote_average={item.vote_average}
                    />
                  })}

                </ScrollView>
              </Suspense>

            </>
          )
      }

    </View>
  )
}

export default Details