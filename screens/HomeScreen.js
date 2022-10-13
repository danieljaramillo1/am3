import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from "react-native";

export default function HomeScreen(){
    return(<View style={styles.container}>
        <Text style={styles.titulo}>Hello</Text>
        <Text style={styles.subtitulo}>Sign in to your account</Text>
        <TextInput placeholder="User" style={styles.inputstyle}></TextInput>
        <TextInput placeholder="roll" style={styles.inputstyle}></TextInput>
        <TextInput placeholder="Password" style={styles.inputstyle}></TextInput>
        <TouchableOpacity style={styles.buttonstyle} onPress><Text style={styles.subtitulos} >sign in</Text></TouchableOpacity>
        <StatusBar style="auto" />
      </View>);
    
}
const styles = StyleSheet.create({
    container: {
      
      flex: 1,
      backgroundColor:'#f1f1f1',
      alignItems: "center",
      justifyContent: "center",
    },
    titulo:{
      fontSize:80,
      fontWeight:'bold',
      color:'#34434D'
    },
    subtitulo:{
      fontSize:17,
      fontWeight:'bold',
      color:'gray',
      marginBottom:15,
  
    },
    inputstyle:{
      backgroundColor:'white',
      borderColor:'gray',
      padding: 10,
      width: '80%',
      marginTop: 15,
      borderRadius: 30,
      height: 40,
      paddingStart:20,
      
    },
    buttonstyle:{
      marginTop:40,
      width: 155,
      backgroundColor:'#34434D',
      height:45,
      alignItems:'center',
      justifyContent:'center',
      borderRadius: 25,
    },
    subtitulos:{
      fontSize:17,
      fontWeight:'bold',
      color:'white',
      
  
    },
  
  });
