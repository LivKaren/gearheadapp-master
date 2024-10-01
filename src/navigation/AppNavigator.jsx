import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "../screens/LoginScreen";
import HomeScreen from "../screens/HomeScreen";
import RegisterScreen from "../screens/RegisterScreen";
import MenuScreen from "../screens/MenuScreen";
import MecanicaDetalhe1Screen from "../screens/MecanicaDetalhe1Screen";

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{
            title: "Inicial",
          }}
        />
<<<<<<< HEAD
  
      <Stack.Screen
          name="MecanicaDetalhe1Screen"
          component={MecanicaDetalhe1Screen}
          options={{
            title: "Inicial",
          }}
        />
 
=======

     
>>>>>>> be12a0c3004dc9f17b4e1b4799f7d66718f79ee7

        <Stack.Screen
          name="MenuScreen"
          component={MenuScreen}
          options={{
            title: "Inicial",
          }}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}