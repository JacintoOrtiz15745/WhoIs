import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    imagenContainer: {
        width: '100%', 
        height: 375,
    },
    listMoviesContainer: {
        flexDirection: 'row', 
        justifyContent: 'space-between',
        marginTop: 16,
        marginBottom: 16,
    },
    title: {
        width: 141, 
        height: 35, 
        marginTop: 16, 
        marginLeft: 16,
    },
    movieAndOverviewContainer: {
        width: '55%',
        marginLeft: 26, 
    },
    movieTitle: { 
        height: 29,  
    },
    overviewText: { 
        height: 110,  
        marginTop: 10
    },
    posterContainer: {
        alignItems: 'center',  
        marginRight: 26, 
    },
    posterMovie: {
        width: 77, 
        height: 129, 
        borderRadius: 16,
    },
    popularityText: {
        width: 77, 
        height: 24, 
        alignSelf: 'center', 
        marginTop:10, 
    }
})