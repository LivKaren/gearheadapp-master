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
  
      <Stack.Screen
          name="MecanicaDetalhe1Screen"
          component={MecanicaDetalhe1Screen}
          options={{
            title: "Inicial",
          }}
        />
 

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
