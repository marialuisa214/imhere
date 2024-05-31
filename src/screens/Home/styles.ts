import {StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 24,
      backgroundColor: "#131413"

    },
    eventName: {fontWeight: "bold", fontSize: 26,color: "#d6efd6", marginTop:48},
    eventDate: {fontWeight: "bold", fontSize: 16, color: "#8c8d8c"},
    input: {flex: 1, height: 56,  backgroundColor: "#fff", borderRadius: 7, color: "#000", marginRight: 12, padding: 16, fontSize: 16},
    button:{width: 56, height: 56, borderRadius: 7, backgroundColor: "#31CF", alignItems: 'center', justifyContent: 'center'},
    buttonText:{color: "#fff8", fontSize:35},
    containerInput: { width: '100%', flexDirection: "row", marginTop:28 }
});