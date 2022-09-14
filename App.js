const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import InviteFriends from "./screens/InviteFriends";
import SignIn from "./screens/SignIn";
import Calls from "./screens/Calls";
import SalonSpecialists from "./screens/SalonSpecialists";
import ChatCall from "./screens/ChatCall";
import Messages from "./screens/Messages";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);
  const SplashScreen = () => <View />;

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            {/* <Stack.Screen
              name="InviteFriends"
              component={InviteFriends}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SignIn"
              component={SignIn}
              options={{ headerShown: false }}  
            /> */}
            {/* <Stack.Screen
              name="Calls"
              component={Calls}
              options={{ headerShown: false }}
            /> */}
            <Stack.Screen
              name="SalonSpecialists"
              component={SalonSpecialists}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ChatCall"
              component={ChatCall}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Messages"
              component={Messages}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : (
          <SplashScreen />
        )}
      </NavigationContainer>
    </>
  );
};
export default App;
