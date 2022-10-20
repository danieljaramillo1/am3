// import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Picker,
  Switch,
  TextInput,
  Button,
} from "react-native";
import { useForm, Controller } from "react-hook-form";
import { useEffect, useState } from "react";
// import { TextInput } from "react-native-web";

export default function App() {
    const onSubmit = data => console.log(data)
  const [gender, setGender] = useState("f");
  const [isEnable, setIsEnable] = useState(false);
  const toggleSwitch = () => setIsEnable((prev) => !prev);
  // Definir info a validar
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      fullName: "",
      email: "",
      age: "",
      password: "",
      gender,
    },
  });

  useEffect(() => {
    console.log(gender);
  });

  // const onSubmit = (data) => {
  //   console.log(data);
  // };

  return (
    <View style={styles.container}>
      <Controller
        control={control}
        name="fullName"
        rules={{
          required: true,
          pattern: /^([a-zA-ZùÙüÜäàáëèéïìíöòóüùúÄÀÁËÈÉÏÌÍÖÒÓÜÚñÑs]+)$/,
          maxLength: 20,
          minLength: 3,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
        <TextInput
          style={[
              styles.inputs,
              {
                borderColor:
                  errors.fullName?.type == "required" ||
                  errors.fullName?.type == "pattern" ||
                  errors.fullName?.type == "maxLength" ||
                  errors.fullName?.type == "minLength"
                    ? "red"
                    : "black",
              },
            ]}
            placeholder="Nombre Completo"
            onChange={onChange} // send value to hook form
            onBlur={onBlur} // notify when input is touched
            value={value} // return updated value
          />
        )}
      />
      {errors.fullName?.type == "required" && (
        <Text style={{ color: "red", fontWeight: 800 }}>Vacio</Text>
      )}
      {errors.fullName?.type == "pattern" && (
        <Text style={{ color: "red", fontWeight: 800 }}>
          Sin numeros ni caracteres especiales
        </Text>
      )}
      {errors.fullName?.type == "maxLength" && (
        <Text style={{ color: "red", fontWeight: 800 }}>
          Maximo 20 caracteres
        </Text>
      )}
      {errors.fullName?.type == "minLength" && (
        <Text style={{ color: "red", fontWeight: 800 }}>
          Minimo 3 caracteres
        </Text>
      )}

      <Text>Genero</Text>
      <Picker
        selectedValue={gender}
        style={{ height: 30 }}
        onValueChange={(value) => setGender(value)}
      >
        <Picker.Item label="Femenino" value="f" />
        <Picker.Item label="Masculino" value="m" />
      </Picker>

      <Switch
        trackColor={{ false: "red", true: "green" }}
        onValueChange={toggleSwitch}
        value={isEnable}
      />

      <Button
        title="Chequear genero"
        onPress={() => {
          alert(gender);
          alert(isEnable);
        }}
      />
    
      <TouchableOpacity
        style={{ marginTop: 10 }}
        onPress={handleSubmit((data)=>console.log(data))}
      >
        <Text
          style={{
            color: "green",
            padding: 5,
            borderColor: "lime",
            borderWidth: 2,
          }}
        >
          Enviar
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  inputs: {
    borderRadius: 30,
    padding: 10,
    borderWidth: 1,
    textAlign: "center",
  },
});
