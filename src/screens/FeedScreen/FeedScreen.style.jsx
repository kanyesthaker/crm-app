import { StatusBar, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
        backgroundColor: "#ffffff",
    },
    header: {
        marginTop: 44,
        fontSize: 50,
        justifyContent: "center",
        textAlign: "center",
    }
})