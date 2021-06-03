import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
      container: {
          flex: 1,
          padding: 15,
        //   justifyContent: "space-between",
          backgroundColor: '#fff',
          fontSize: 25,
          fontFamily: "Avenir",
      },
      title: {
          fontSize: 50,
          padding:15,
          textAlign: "center",
          marginTop: '20%',
      },
      input: {
          fontSize: 25,
          padding:15,
          textAlign: "left",
          borderColor: "#000",
          borderWidth: 1,
          width: 300,
          alignSelf: "center",
      },
      button: {
        marginTop: 15,
        width: 300,
        alignSelf: "center",
        alignItems: "center",
        backgroundColor: "#c4c4c4",
        fontSize: 25,
        padding:15,
      }
});