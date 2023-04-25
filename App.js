import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { Alert, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native';
import LoginForm from './src/components/LoginForm';
import Saludar from './src/components/Saludar';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  return (
    <NavigationContainer>{
      <View style={styles.container}>
        <TouchableWithoutFeedback
          onPress={() => {
            Alert.alert('Hemos tocado el titulo')
            clickConsoleLog()
            }
          }
        >
          <Text style={styles.title}>Hola Mundo de David!...</Text>
        </TouchableWithoutFeedback>
        <Text>Open up App.js to start working on your app!</Text>
        <TouchableWithoutFeedback
          onPress={() => Alert.alert('Hemos tocado el cuadro Rojo')}
        >
          <View style = {styles.redBox} />
        </TouchableWithoutFeedback>
        <StatusBar style="auto" />
        <LoginForm></LoginForm>
        <Saludar lastName="Quispe Prado"></Saludar>
        <Saludar name="David" lastName="Quispe Prado"></Saludar>
      </View>
    }</NavigationContainer>
  );
}

function clickConsoleLog() {
  console.log('Hemos tocado el titulo')
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    height: 780,
    width: 393,
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  redBox: {
     width: 100,
     height: 100,
     borderRadius: 20,
     backgroundColor: 'red'
  },
  buttonClick: {
     borderRadius: 20,
     backgroundColor: 'red'
  },
});
