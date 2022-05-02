import React from 'react';
import { View, Text, Image } from 'react-native';
import { styles } from '../styles/RenderDataStyles';
import { text } from '../utils/Constants';

const RenderData = (props) => {

    const { title, overview, poster_path, vote_average } = props;

    return (
        <View style={styles.mainContainer}>
            <View style={styles.infoContainer}>
                <Text style={styles.textTitle}>{title}</Text>
                <Text style={styles.textInfo}>{overview}</Text>
            </View>
            <View style={styles.imageAndVoteContainer}>
                <Image style={styles.imageContainer} source={{ uri: text.apiTheMovieDBActorImage + poster_path }} />
                <Text style={styles.voteAverage}>{vote_average}{text.Star}</Text>
            </View>
        </View>
    )
}

export default RenderData