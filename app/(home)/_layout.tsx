import { Stack } from "expo-router";
import React from "react";


const Layout = () => {
  return(
    <Stack initialRouteName="SplashScreen">
      <Stack.Screen
      name="SplashScreen"
      options={{ headerShown: false, animation: 'fade' }}
      />
      <Stack.Screen
      name="Home"
      options={{ headerShown: false, animation: 'fade' }}
      />
    </Stack>
  )
}
export default Layout