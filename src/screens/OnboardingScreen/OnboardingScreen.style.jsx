import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        fontSize: 25,
        width: "500%",
        fontFamily: "Avenir",
    },
    onboardingPage: {
        padding:15,
    },
    onboardingTitle: {
        fontSize: 50,
        padding:15,
        marginTop: 100,
        textAlign: "center",
    },
    onboardingBody: {
        fontSize: 25,
        padding: 15,
        marginTop: 20,
        textAlign: "left",
    },
    bullets: {
        position: 'absolute',
        bottom: 0,
        alignSelf: 'center',
        display: 'flex',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        paddingHorizontal: 10,
        paddingTop: 5,
      },
      bullet: {
        paddingHorizontal: 5,
        fontSize: 20,
      }
});