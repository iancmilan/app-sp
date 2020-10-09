import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    contentContainer: {
        paddingBottom : 100,
    },
    itemWrapper:{
        padding: 10,
    },
    dayWrapper: {
        borderBottomColor: 'grey',
        borderBottomWidth: 1,
        alignSelf: 'stretch',
        marginTop: 10,
    },
    day: {
        marginBottom: 10,
        fontSize: 15,
        alignSelf: 'center'
    },
    newsWrapper: {
        padding: 5,
        borderColor: 'grey',
        borderWidth: 1,
        borderRadius: 5,
        marginTop: 15,
    },
    newsTitle: {
        fontSize: 18,
    },
    newsSummary: {

    }
});

export default styles;