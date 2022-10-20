import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput,TouchableOpacity, Picker} from 'react-native';
import {useForm, Controller} from 'react-hook-form';
import { useState } from 'react';
import { Button } from 'react-native-web';

export default function App() {
const [gender, setGender] =useState('fem')

const {control, handleSubmit, formState:{errors}}= useForm({
  defaultValues:{
    fullname:'',
  }
  
})
    function onSubmit(data) {
        return console.log(data);
    } 
  return (
      <View style={styles.container}>
       <Controller
       control = {control}
       rules ={{
        required: true,
        pattern: /^([a-zA-ZùÙüÜäàáëèéïìíöòóüùúÄÀÁËÈÉÏÌÍÖÒÓÜÚñÑ\s]+)$/,
       }}
       render ={({field:{onChange, onBlur, value}})=>(
        <TextInput
        style={[styles.inputs,{borderWidth: 1, borderColor: errors.fullname?.type == 'required' || errors.fullname ?.type == 'pattern' ? 'red' : 'green'}]}
        placeholder = "Nombre completo"
        onBlur={onBlur}
        value={value}
        onChange ={onChange}

        ></TextInput>
       )}
       name = 'fullname'
       ></Controller>
       {errors.fullname?.type == 'required' && <Text style ={{color:'red'}}>requerido</Text>}
       {errors.fullname?.type == 'pattern' && <Text style ={{color:'red'}}>Solo letras y espacios</Text>}
        
        <TouchableOpacity  style={{backgroundColor:'grey', color:'green',borderRadius:25, width:120, height:25,alignItems:'center',justifyContent:'center',marginTop:15 }}
        onPress={handleSubmit(onSubmit)}><Text >OK</Text></TouchableOpacity>
        
        <Picker
          selectedValue={gender}
          style={{ height: 50, width: 150 }}
          onValueChange={(itemValue, itemIndex) => setGender(itemValue)}
        >
          <Picker.Item label="Masculino" value="masc" />
          <Picker.Item label="Femenino" value="fem" />
        </Picker>

        <Button title="hola"  onPress={()=>{
          alert(gender)
        }}></Button>


        <StatusBar style="auto" />
      </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

});