import { Redirect } from "expo-router";
import { useEffect, useState } from "react";
import { Image, Text, View } from "react-native";
import tw from "twrnc";

const SplashScreen = () => {

    const [loading, setLoading] = useState(true);
    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 3000)
    }, [])

    if(!loading) {
        return (
            <Redirect href="/(auth)/Login" />
        )
    }
  return (
    <View style={tw`flex-1 flex flex-col justify-center items-center `}>
         <Image
          source={require("@/assets/images/logo.png")}
          style={tw`h-12 w-1/2 block object-contain`}
        />
      <Text style={tw`text-white mt-5 font-medium text-xl w-1/2 text-center`}>
      Alamsyah
      </Text>
      <Image
        source={require("@/assets/images/bg.jpg")}
        style={tw`absolute inset-0 w-full h-full object-cover -z-10`}
      />
    </View>
  );
};
export default SplashScreen;