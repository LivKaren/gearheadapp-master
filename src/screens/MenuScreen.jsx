import {Button, Surface } from "react-native-paper";
import { styles } from "../config/styles";

 export default function MenuScreen({ navigation }) {
    return (

    
    <Surface style={styles.container}>

<Button
        onPress={() => {
          navigation.navigate("LoginScreen");
        }}
        mode="contained"

        style={{
        marginBottom:100,
        color: "rgb(139,0,0)"
           }}
      >
        carros na espera
        
      </Button>

      <Button
        onPress={() => {
          navigation.navigate("LoginScreen");
        }}
        mode="contained"

        style={{
        marginBottom:100,
        color: "rgb(139,0,0)"
           }}
      >
        histórico de carros
        
      </Button>


      <Button
        onPress={() => {
          navigation.navigate("LoginScreen");
        }}
        mode="contained"

        style={{
        marginBottom:100,
        color: "rgb(139,0,0)"
           }}
      >
        carros pendentes
        
      </Button>

      <Button
        onPress={() => {
          navigation.navigate("LoginScreen");
        }}
        mode="contained"

        style={{
        marginBottom:100,
        color: "rgb(139,0,0)"
           }}
      >
        associar carro ao cliente
        
      </Button>

      <Button
        onPress={() => {
          navigation.navigate("LoginScreen");
        }}
        mode="contained"

        style={{
        marginBottom:100,
        color: "rgb(139,0,0)"
           }}
      >
        caixa do dia
        
      </Button>


    </Surface>
    );
 }