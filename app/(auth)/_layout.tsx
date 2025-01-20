import { Stack } from "expo-router";
import React from "react";

const AuthLayout = () => {
  return (
    <Stack>
      <Stack.Screen name="Login" options={{ headerShown: false }} />
      <Stack.Screen name="Register" options={{ headerShown: false }} />
      <Stack.Screen name="Home" options={{ headerShown: false }} />
    </Stack>
  );
};

export default AuthLayout;
