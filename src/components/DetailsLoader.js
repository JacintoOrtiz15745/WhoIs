import React from 'react';
import { View } from 'react-native';
import SkeletonPlaceholder from "react-native-skeleton-placeholder";
import { styles } from '../styles/DetailsLoaderStyles';

const DetailsLoader = () => {
    return (
        <SkeletonPlaceholder>
            <View style={styles.imagenContainer}/>  
            <View style={styles.title}/> 
            <View style={styles.listMoviesContainer}>
                <View style={styles.movieAndOverviewContainer}>
                    <View style={styles.movieTitle}/>
                    <View style={styles.overviewText}/>
                </View>

                <View style={styles.posterContainer}>
                    <View style={styles.posterMovie}/>
                    <View style={styles.popularityText}/>
                </View>
            </View>
            <View style={styles.listMoviesContainer}>
                <View style={styles.movieAndOverviewContainer}>
                    <View style={styles.movieTitle}/>
                    <View style={styles.overviewText}/>
                </View>

                <View style={styles.posterContainer}>
                    <View style={styles.posterMovie}/>
                    <View style={styles.popularityText}/>
                </View>
            </View>
            
        </SkeletonPlaceholder> 
    )
}

export default DetailsLoader