import React from "react";
import { Text, Image, View, TouchableOpacity, Linking, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import tw from "twrnc";



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
      <View style={tw`p-4 border-b border-gray-200`}>
          <Text style={tw`text-xl font-bold mb-2`}>Tentang Saya</Text>
          <Text style={tw`text-gray-600`}>
            Saya adalah seorang FullStack Developer dengan pengalaman dalam
            membangun aplikasi mobile dan web. Saya memiliki ketertarikan pada
            teknologi baru dan pengembangan perangkat lunak.
          </Text>
      </View>
      <View style={tw`h-10`}>

      <View>
        <View style={tw`flex flex-row justify-between items-center`}>
          <Text style={tw `text-xl font-bold px-5`}>Project</Text>
          <Text style={tw `text-blue-500 px-5`}>View all</Text>
        </View>
        <View style={tw`flex flex-row gap-5 overflow-hidden overflow-x-scroll px-5 mt-3 w-full`}>
          <View style={tw`bg-black rounded-xl px-4 py-2`}>
            <Text style={tw`w-fit text-white font-bold`}>Project 1</Text>
          </View>
          <View style={tw`px-4 py-2`}>
            <Text style={tw`w-fit font-semibold text-gray-600`}>Project 2</Text>
          </View>
          <View style={tw`px-4 py-2`}>
            <Text style={tw`w-fit font-semibold text-gray-600`}>Project 3</Text>
          </View>
        </View>
      </View>
      </View>
    </SafeAreaView>
    // </ScrollView>
  );
};

export default Home;
