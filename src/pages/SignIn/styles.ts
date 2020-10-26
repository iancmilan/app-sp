import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    teste: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    logoContainer: {
        marginBottom: 20,
    },
    logoImg: {
        width: 200,
        resizeMode: 'contain',
    },
    loginContainer: {
        width: "75%",
    },
    input: {
        height: 45,
        backgroundColor: '#FFF',
        borderWidth: 0.6,
        borderRadius: 8,
        justifyContent: "center",
        paddingHorizontal: 16,
        marginTop: 4,
        marginBottom: 16
    },
    buttonLogin: {
        marginTop: 15,
        height: 45,
        backgroundColor: '#2D8F8A',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,
    },
    buttonLoginText: {
        color: '#FFF',
    },
    buttonCreateAccount: {
        marginTop: 15,
        height: 45,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonCreateAccountText: {
        color: '#353A41',
    },
});

export default styles;