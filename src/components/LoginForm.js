import React from "react";
import {StyleSheet, TextInput, Button, Text, View} from 'react-native';

export default function LoginForm() {
    return (
        <View>
            <TextInput placeholder="Usuario or Email"/>
            <TextInput placeholder="Contraseña"/>
            <Button style = {style.buttonClick} title="Enviar" onPress={()=>console.log("Enviando...")}/>
        </View>
    );
}

const style = StyleSheet.create({
  buttonClick: {
     borderRadius: 20,
     backgroundColor: 'red'
  },
});