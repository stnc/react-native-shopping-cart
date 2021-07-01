import { StyleSheet } from 'react-native';
export default StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#3498db',
    },
    container2: {
        padding: 20
    },
    logoContainer: {
        alignItems: 'center',
        flexGrow: 1,
        justifyContent: "center"
    },

    formContainer: {
        backgroundColor: '#3498db',
    },
    
    logo: {
        width: 100,
        height: 100
    },
    title: {
        color: "#fff",
        marginTop: 10,        width: 140,
        textAlign: "center",
        opacity: 0.9
    },
    input: {
        height: 40,
        backgroundColor: "rgba(255,255,255,0.2)",
        marginBottom: 20,
        color: "#fff",
        paddingHorizontal: 10
    },
    buttonText: {
        textAlign: "center",
        color: "#fff",
        fontWeight: '700'
    },
    buttonContainer: {
        backgroundColor: "#2980b9",
        paddingVertical: 10
    },
    buttonExtra: {
        margin: 5,
        borderColor: "rgba(255,255,255,0.5)",
        borderWidth:1
    }
});

