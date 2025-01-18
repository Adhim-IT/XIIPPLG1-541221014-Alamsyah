import React, { useState } from "react";
import {
  Text,
  Image,
  View,
  TouchableOpacity,
  ScrollView,
  FlatList,
  Pressable,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import tw from "twrnc";

const projects = ["Project 1", "Project 2", "Project 3"];
const projectCards = [
  {
    id: 1,
    title: "A-Market Payment Gateway",
    description: "A secure and efficient payment gateway for A-Market.",
    image: require("../../assets/images/github-icon.jpg"),
  },
  {
    id: 2,
    title: "Library Management System",
    description: "An automated system for managing library resources and operations.",
    image: require("../../assets/images/github-icon.jpg"),
  },
  {
    id: 3,
    title: "Flutter Chat App",
    description: "A real-time chat application built with Flutter.",
    image: require("../../assets/images/github-icon.jpg"),
  },
];

const Home = () => {
  const [activeFilter, setActiveFilter] = useState("Project 1");
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const renderProjectFilter = ({ item }: { item: string }) => (
    <TouchableOpacity onPress={() => setActiveFilter(item)} style={tw`mr-4`}>
      <View
        style={tw`${
          activeFilter === item ? "bg-black px-5 py-3 rounded-xl" : "px-5 py-3"
        }`}
      >
        <Text
          style={tw`font-semibold ${
            activeFilter === item ? "text-white" : "text-slate-600"
          }`}
        >
          {item}
        </Text>
      </View>
    </TouchableOpacity>
  );

  const renderProjectCard = ({
    item,
  }: {
    item: { id: number; title: string; description: string; image: any };
  }) => (
    <Pressable
      onPressIn={() => setHoveredCard(item.id)}
      onPressOut={() => setHoveredCard(null)}
      style={tw`w-64 h-96 bg-white rounded-xl mr-4 shadow-md overflow-hidden`}
    >
      <Image
        source={item.image}
        style={tw`w-full h-48 rounded-t-xl`}
        resizeMode="cover"
      />
      <View style={tw`p-4 flex-1`}>
        <Text style={tw`text-lg font-bold mb-2`}>{item.title}</Text>
        {hoveredCard === item.id ? (
          <Text style={tw`text-sm text-gray-600`}>{item.description}</Text>
        ) : (
          <Text style={tw`text-sm text-gray-400`}>Tap to see description</Text>
        )}
      </View>
      <View style={tw`p-4 border-t border-gray-200`}>
        <TouchableOpacity style={tw`bg-blue-500 py-2 px-4 rounded-full`}>
          <Text style={tw`text-white text-center font-semibold`}>View Project</Text>
        </TouchableOpacity>
      </View>
    </Pressable>
  );

  return (
    <SafeAreaView style={tw`flex-1 bg-white`}>
      <ScrollView>
        <View style={tw`flex-1 bg-white`}>
          {/* Header */}
          <View
            style={tw`flex flex-row justify-between items-center p-4 border-b border-gray-200`}
          >
            <View>
              <Text style={tw`text-2xl font-bold`}>Hi, Alamsyah</Text>
              <Text style={tw`text-gray-400`}>FullStack Developer</Text>
            </View>
            <Image
              source={require("../../assets/images/logo.png")}
              style={tw`h-12 w-12 border-2 border-gray-400 rounded-full`}
              resizeMode="contain"
            />
          </View>

          {/* Profile */}
          <View
            style={tw`flex justify-center items-center p-4 border-b border-gray-200`}
          >
            <Image
              source={require("../../assets/images/bg.jpg")}
              style={tw`w-40 h-40 object-cover border-2 border-gray-400 rounded-full`}
            />
            <Text style={tw`text-sm font-bold mt-2`}>
              Alamsyah Adhim Nugraha
            </Text>
            <Text style={tw`text-gray-400`}>541221014</Text>
          </View>

          {/* About Me */}
          <View style={tw`p-4 border-b border-gray-200`}>
            <Text style={tw`text-xl font-bold mb-2`}>Tentang Saya</Text>
            <Text style={tw`text-gray-600`}>
              Saya adalah seorang FullStack Developer dengan pengalaman dalam
              membangun aplikasi mobile dan web. Saya memiliki ketertarikan pada
              teknologi baru dan pengembangan perangkat lunak.
            </Text>
          </View>

          {/* Projects */}
          <View style={tw`p-4`}>
            <View style={tw`flex flex-row justify-between items-center mb-4`}>
              <Text style={tw`text-xl font-bold`}>Project</Text>
              <TouchableOpacity>
                <Text style={tw`text-blue-500`}>View all</Text>
              </TouchableOpacity>
            </View>

            <FlatList
              data={projects}
              horizontal
              showsHorizontalScrollIndicator={false}
              keyExtractor={(item) => item}
              renderItem={renderProjectFilter}
            />
          </View>

          <View style={tw`px-4 mb-4`}>
            <FlatList
              data={projectCards}
              horizontal
              showsHorizontalScrollIndicator={false}
              keyExtractor={(item) => item.id.toString()}
              renderItem={renderProjectCard}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;

