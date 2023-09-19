import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({

    container: {
        flex: 1, backgroundColor: '#131016', padding: 24
    },
    groupName: {
        color: '#FFF', fontSize: 24, fontWeight: 'bold', marginTop: 48
    },
    groupDate: {
        color: '#6b6b6b', fontSize: 16,
    },
    input: {
        height: 56,
        backgroundColor: "#1f1e25",
        borderRadius: 5,
        color: '#FFF',
        padding: 16,
        fontSize: 16,
        flex: 1,
        marginRight: 12
    },
    listEmptyText: {
        color: "#FFF",
        fontSize: 14,
        textAlign: "center"
    },
    button: {
        width: 56,
        height: 56,
        borderRadius: 5,
        backgroundColor: '#31cf67',
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonText: {
        color: "#FFF",
        fontSize: 24
    },
    form: {
        width: '100%',
        flexDirection: "row",
        marginTop: 36,
        marginBottom: 42
    },


});
