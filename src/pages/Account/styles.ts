import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container : {
        flex: 1,
    },
    profile: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 70,
    },
    avatar: {
        width: 140,
        height: 140,
        borderRadius: 70,
    },
    name: {
        marginTop: 20,
        fontSize: 15,
    },
    email: {
        marginTop: 15,
        fontSize: 15,
    },
    buttonContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-end',
        marginBottom: 36,
    },
    buttonLogOut: {
        backgroundColor: '#FF4D4F',
        width: 300,
        height: 40,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonLogOutText: {
        color: '#FFF',
    },
});

export default styles;