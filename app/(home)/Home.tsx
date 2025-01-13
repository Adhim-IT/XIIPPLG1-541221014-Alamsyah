import React from "react";
import { Text, Image, View, TouchableOpacity, Linking, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import tw from "twrnc";

const IgUrl = () =>{
    const url = "";
    Linking.openURL(url)
}

const Home = () => {
  return (
    // <ScrollView>
    <SafeAreaView style={tw`flex-1 bg-white`}>
      <View
        style={tw`flex flex-row justify-between items-center p-4 border-b border-gray-200 fixed-top`}
      >
        <View>
          <Text style={tw`text-2xl font-bold`}>Hi, Alamsyah</Text>
          <Text style={tw`text-gray-400`}>FullStack Developer</Text>
        </View>
        <View>
          <Image
            source={require("@/assets/images/logo.png")}
            style={tw`h-12 w-12 border-2 border-gray-400 rounded-full`}
            resizeMode="contain"
          />
        </View>
      </View>
      <View
        style={tw`flex justify-center items-center p-4 border-b border-gray-200`}
      >
        <Image
          source={require("@/assets/images/bg.jpg")}
          style={tw`w-40 h-40 object-cover border-2 border-gray-400 rounded-full`}
        />
        <Text style={tw`text-sm font-bold mt-2`}>Alamsyah Adhim Nugraha</Text>
        <Text style={tw`text-gray-400`}>541221014</Text>
      </View>

    </SafeAreaView>
    // </ScrollView>
  );
};


export default Home;
