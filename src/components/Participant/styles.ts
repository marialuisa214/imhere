import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container:{
        width: '100%',
        flexDirection: "row",
        borderRadius: 5,
        alignItems: 'center',
        backgroundColor: "#1F1E45",
        marginBottom:24
        
    }, 
    name:{
        flex: 1,
        color: "#fff",
        marginLeft:16,

    },
    button:{width: 56, height: 56, borderRadius: 7, backgroundColor: "#E23c44", alignItems: 'center', justifyContent: 'center'},
    buttonText:{color: "#fff8", fontSize:37},
    
})