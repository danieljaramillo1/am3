
import { StyleSheet, Text, View, TextInput, TouchableOpacity,Picker } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { useState, useEffect } from "react";
import {useForm, Controller} from 'react-hook-form';
import { render } from "react-dom";


{/* pantalla de logeo*/}
function HomeScreen ({navigation}){

  const [user, setUser] = useState("");
  const [roll, setRoll] =useState('usr');
  
 const burned = [{user: "Daniel" , password : "a123", roll: "adm" },{user: "Jara" , password : "a123", roll: "user" }, ];

 const Verifications = (data) => {
  const user = burned.filter(obj=>obj.user === data.user && obj.password === data.password && obj.roll === "adm")[0]
  console.log(user)
  if(user){navigation.navigate("Cuentas", {user})}else{alert("Debes ser un admin para ingresar")}


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

{/*Genera numero aleatorio con maximo y minimo*/}
function bigRandom(min,max){
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}



function CuentasScreen(props) {
  
  

  const { user } = props.route.params;



  const showValues  = (data) =>{
    const lbls = [data.identificacion,data.titular,data.titular,data.fecha,];
    return lbls
  }; 


  const {control, handleSubmit, formState: { errors }} = useForm({
    defaultValues:{
      identificacion: "",
      titular: "",
      fecha: "",
      saldo:"",
    }
  });




  
  return (
    <View style={styles.container}>
      <Text style={styles.subtitulo}>Bienvenido...... <Text style={styles.titulo}>{user.user}</Text> </Text>

      <Text style={styles.subtitle}>Ingresa los datos</Text>
      
      

      <Controller
        control = {control}
        name = "identificacion"
        rules = {{
          required: true,
          pattern: /^[0-9]+$/,
        }}
        render ={({ field: { onChange, onBlur, value } }) => (
          <TextInput 
          style={[styles.inputstyle,
            {borderColor:
              errors.identificacion?.type == "required" ||
              errors.identificacion?.type == "pattern"
                ? "red"
                : "green",
          },]}       
          placeholder="Identificacion"
          onChange ={onChange}  
          onBlur={onBlur}
          value={value}      
          ></TextInput>
        )}
        ></Controller>

        {errors.identificacion?.type == "required" && (<Text style ={{color:"red", fontWeight:800,}}>Campo requerido</Text>)}
        {errors.identificacion?.type == "pattern" && (<Text style ={{color:"red", fontWeight:800,}}>Solo numeros admitidos</Text>)}

        <Controller
        control = {control}
        name = "titular"
        rules = {{
          required: true,
          pattern: /^([a-zA-ZùÙüÜäàáëèéïìíöòóüùúÄÀÁËÈÉÏÌÍÖÒÓÜÚñÑ\s]+)$/,
        }}
        render ={({ field: { onChange, onBlur, value } }) => (
          <TextInput 
          style={[styles.inputstyle,
            {borderColor:
              errors.titular?.type == "required" ||
              errors.titular?.type == "pattern"
                ? "red"
                : "green",
          },]}       
          placeholder="Titular"
          onChange ={onChange}  
          onBlur={onBlur}
          value={value}      
          ></TextInput>
        )}
        ></Controller>

        {errors.titular?.type == "required" && (<Text style ={{color:"red", fontWeight:800,}}>Campo requerido</Text>)}
        {errors.titular?.type == "pattern" && (<Text style ={{color:"red", fontWeight:800,}}>Solo se permiten letras y espacios</Text>)}

        <Controller
        control = {control}
        name = "fecha"
        rules = {{
          required: true,
          pattern: /^(?:3[01]|[12][0-9]|0?[1-9])([\-/.])(0?[1-9]|1[1-2])\1\d{4}$/,
        }}
        render ={({ field: { onChange, onBlur, value } }) => (
          <TextInput 
          style={[styles.inputstyle,
            {borderColor:
              errors.fecha?.type == "required" ||
              errors.fecha?.type == "pattern"
                ? "red"
                : "green",
          },]}       
          placeholder="dd-mm-aaaa"
          onChange ={onChange}  
          onBlur={onBlur}
          value={value}      
          ></TextInput>
        )}
        ></Controller>

        {errors.fecha?.type == "required" && (<Text style ={{color:"red", fontWeight:800,}}>Campo requerido</Text>)}
        {errors.fecha?.type == "pattern" && (<Text style ={{color:"red", fontWeight:800,}}>ingresa en el formato dd-mm-aaa</Text>)}
        
        <Controller
        control = {control}
        name = "saldo"
        
        rules = {{
          required: true,
          pattern: /^[1-9]?[0-9]{1}$|^100$/,
          
        }}
        render ={({ field: { onChange, onBlur, value } }) => (
          <TextInput 
          style={[styles.inputstyle,
            {borderColor:
              errors.saldo?.type == "required" ||
              errors.saldo?.type == "pattern"
                ? "red"
                : "green",
          },]}       
          placeholder="Saldo"
          onChange ={onChange}  
          onBlur={onBlur}
          value={value}      
          ></TextInput>
        )}
        ></Controller>

        {errors.saldo?.type == "required" && (<Text style ={{color:"red", fontWeight:800,}}>Campo requerido</Text>)}
        {errors.saldo?.type == "pattern" && (<Text style ={{color:"red", fontWeight:800,}}>Solo numeros entre 1m y 100m</Text>)}

        <TouchableOpacity style={styles.buttonstyle} onPress={handleSubmit(showValues)}><Text style={styles.subtitulos} >Nuevo Cliente</Text></TouchableOpacity>
        
        {lbls.map((word) => {
            
            return (
              <Text key={word} style={{ marginTop: 20 }}>
                {word}
              </Text>
            );
          })}

        <Text style={styles.subtitulo}>numero de cuenta: {bigRandom(10000000000,1000000000000)}</Text>
        <Text style={styles.subtitulo}>identificacion:</Text>
        <Text style={styles.subtitulo}>titular: </Text>
        <Text style={styles.subtitulo}>fecha: </Text>
        <Text style={styles.subtitulo}>saldo: </Text>
 
          
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
    fontSize:22,
    fontWeight:'bold',
    color:'white',
  },
  subtitle:{
    fontSize:22,
    fontWeight:'bold',
    color:'red',
    marginBottom:20,
  },

});

