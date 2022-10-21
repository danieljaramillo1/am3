
import { StyleSheet, Text, View, TextInput, TouchableOpacity,Picker } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { useState, useEffect } from "react";
import {useForm, Controller} from 'react-hook-form';


{/* pantalla de logeo*/}
function HomeScreen ({navigation}){

  const [user, setUser] = useState("");
  const [roll, setRoll] =useState('usr');
  
 const burned = [{user: "daniel" , password : "a123", roll: "adm" },{user: "Jara" , password : "a123", roll: "user" }, ];

 const Verifications = (data) => {
  const user = burned.filter(obj=>obj.user === data.user && obj.password === data.password && obj.roll === "adm")[0]
  console.log(user)
  if(user){navigation.navigate("Cuentas", {user})}

  };
  const {control, handleSubmit, formState: { errors }} = useForm({
    defaultValues:{
      user: "",
      password: "",
      adm: ""
    }
  });
  return(
    <View style={styles.container}>

        <Text style={styles.titulo}>Hello</Text>
        <Text style={styles.subtitulo}>Sign in to your account</Text>

        <Controller
        control = {control}
        name = "user"
        rules = {{
          required: true,
          pattern: /^([a-zA-ZùÙüÜäàáëèéïìíöòóüùúÄÀÁËÈÉÏÌÍÖÒÓÜÚñÑ\s]+)$/,
        }}
        render ={({ field: { onChange, onBlur, value } }) => (
          <TextInput 
          style={[styles.inputstyle,
            {borderColor:
              errors.user?.type == "required" ||
              errors.user?.type == "pattern"
                ? "red"
                : "green",
          },]}       
          placeholder="User"
          onChange ={onChange}  
          onBlur={onBlur}
          value={value}      
          ></TextInput>
        )}
        ></Controller>

        {errors.user?.type == "required" && (<Text style ={{color:"red", fontWeight:800,}}>requerido</Text>)}
        {errors.user?.type == "pattern" && (<Text style ={{color:"red", fontWeight:800,}}>Solo letras y espacios</Text>)}

<Controller
        control = {control}
        name = "password"
        rules = {{
          required: true,
          pattern: /^[0-9a-zA-ZùÙüÜäàáëèéïìíöòóüùúÄÀÁËÈÉÏÌÍÖÒÓÜÚñÑ]+$/,
        }}
        render ={({ field: { onChange, onBlur, value } }) => (
          <TextInput 
          style={[styles.inputstyle,
            {borderColor:
              errors.password?.type == "required" ||
              errors.password?.type == "pattern"
                ? "red"
                : "green",
          },]}       
          placeholder="Password"
          onChange ={onChange}  
          onBlur={onBlur}
          value={value}      
          ></TextInput>
        )}
        ></Controller>

        {errors.password?.type == "required" && (<Text style ={{color:"red", fontWeight:600,}}>requerido</Text>)}
        {errors.password?.type == "pattern" && (<Text style ={{color:"red", fontWeight:600,}}>No se admiten espacios</Text>)}

        <Picker
          selectedValue={roll}
          style={{ height: 40, width: 125,marginTop:15 }}
          onValueChange={(itemValue, itemIndex) => setRoll(itemValue)}>
          <Picker.Item label="Usuario" value="usr" />
          <Picker.Item label="Administrador" value="adm" />
        </Picker>

              
        <TouchableOpacity style={styles.buttonstyle} onPress={handleSubmit(Verifications)}><Text style={styles.subtitulos} >sign in</Text></TouchableOpacity>
       
    </View>
  );
}

function CuentasScreen(props) {
  console.log(props)
  const { user } = props.route.params;
  return (
    <View style={styles.container}>
      <Text>Bienvenido {user.user}</Text>
    </View>
  );
}

function MovimientosScreen() {
  return (
    <View style={styles.container}>
      <Text>Movimientos</Text>
    </View>
  );
}



{/* creo el tab navigator */}
const Tab = createBottomTabNavigator();

function MyTabs(){
    return(<Tab.Navigator initialRouteName="Home" screenOptions={{
      headerShown: false
    }}>
        <Tab.Screen name="Home" component={HomeScreen} options={{
        tabBarStyle: { display: "none" }}}></Tab.Screen>
        <Tab.Screen name="Cuentas" component={CuentasScreen} ></Tab.Screen>
        <Tab.Screen name="Movimientos" component={MovimientosScreen} ></Tab.Screen>
        </Tab.Navigator>
        );
}

{/* creo el stack navigator */}

const HomeCuentasStackNavigator = createNativeStackNavigator();

export default function App() {

  return (
    <NavigationContainer>

        <HomeCuentasStackNavigator.Navigator>
            
            <HomeCuentasStackNavigator.Screen
            name="Inicio"
            component={MyTabs} options={{ title: 'Sistema Bancario' }}>
            </HomeCuentasStackNavigator.Screen>
            <HomeCuentasStackNavigator.Screen
            name="Cuentas"
            component={CuentasScreen}></HomeCuentasStackNavigator.Screen>
        </HomeCuentasStackNavigator.Navigator>

    </NavigationContainer>
  

  );
}

{/*Estilos*/}
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
    borderWidth:1,
    
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

