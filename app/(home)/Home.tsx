import React, { useState } from "react";
import {
  Text,
  Image,
  View,
  TouchableOpacity,
  ScrollView,
  FlatList,
  Linking,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import tw from "twrnc";

const projects = ["Project A-Market", "Project Library", "Project Chat App"];
const projectCards = [
  {
    id: 1,
    title: "A-Market Payment Gateway",
    description: "A secure and efficient payment gateway for A-Market.",
    image: require("../../assets/images/github-icon.jpg"),
    category: "Project A-Market",
    url: "https://github.com/Adhim-IT/a-market-paymentgateway",
  },
  {
    id: 2,
    title: "Library Management System",
    description: "An automated system for managing library resources and operations.",
    image: require("../../assets/images/github-icon.jpg"),
    category: "Project Library",
    url: "https://github.com/Adhim-IT/library-filament",
  },
  {
    id: 3,
    title: "Flutter Chat App",
    description: "A real-time chat application built with Flutter.",
    image: require("../../assets/images/github-icon.jpg"),
    category: "Project Chat App",
    url: "https://github.com/Adhim-IT/flutter_chat_app",
  },
];

const Home = () => {
  const [activeFilter, setActiveFilter] = useState("Project A-Market");

  const filteredProjects = projectCards.filter(
    (card) => card.category === activeFilter
  );

  const renderProjectFilter = ({ item }: { item: string }) => (
    <TouchableOpacity onPress={() => setActiveFilter(item)} style={tw`mr-4`}>
      <View
        style={tw`px-5 py-3 rounded-full shadow-md ${
          activeFilter === item ? "bg-teal-600" : "bg-gray-300"
        }`}
      >
        <Text
          style={tw`font-semibold ${
            activeFilter === item ? "text-white" : "text-gray-700"
          }`}
        >
          {item}
        </Text>
      </View>
    </TouchableOpacity>
  );

  const renderProjectCard = ({ item }: { item: typeof projectCards[0] }) => (
    <View style={tw`w-72 bg-white rounded-2xl shadow-lg mr-6 overflow-hidden`}>
      <Image source={item.image} style={tw`w-full h-44`} resizeMode="cover" />
      <View style={tw`p-5`}>
        <Text style={tw`text-xl font-bold mb-2 text-gray-800`}>{item.title}</Text>
        <Text style={tw`text-sm text-gray-600`}>{item.description}</Text>
      </View>
      <TouchableOpacity
        style={tw`bg-teal-500 py-3 px-5 rounded-full self-center my-4 hover:bg-teal-600 hover:text-black`}
        onPress={() => Linking.openURL(item.url)}
      >
        <Text style={tw`text-white font-semibold`}>View Project</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <SafeAreaView style={tw`flex-1 bg-gray-50`}>
      {/* Header Section */}
      <View
        style={tw`p-5 bg-teal-500 flex-row justify-between items-center rounded-b-3xl shadow-md`}
      >
        <View>
          <Text style={tw`text-2xl font-bold text-white`}>Hi, Alamsyah</Text>
          <Text style={tw`text-gray-100`}>FullStack Developer</Text>
        </View>
        <Image
          source={require("../../assets/images/profile.jpeg")}
          style={tw`h-14 w-14 border-2 border-gray-200 rounded-full`}
        />
      </View>

      {/* Content Section */}
      <ScrollView contentContainerStyle={tw`pb-10`}>
        {/* Profile Section */}
        <View style={tw`items-center mt-8`}>
          <Image
            source={require("../../assets/images/profile.jpeg")}
            style={tw`w-36 h-36 rounded-full border-4 border-teal-500 shadow-md`}
          />
          <Text style={tw`text-xl font-bold mt-4 text-gray-800`}>
            Alamsyah Adhim Nugraha
          </Text>
          <Text style={tw`text-gray-500`}>541221014</Text>
        </View>

        {/* About Section */}
        <View style={tw`p-5 mt-6 bg-white rounded-2xl shadow-md mx-4`}>
          <Text style={tw`text-xl font-bold mb-3 text-gray-800`}>About Me</Text>
          <Text style={tw`text-gray-600 leading-relaxed`}>
          I'm Alamsyah Adhim Nugraha, a 17-year-old Web and Chatbot Developer with 2 years of experience in technologies like Next.js, Laravel, Node.js, and OpenAI's API. I strive to create innovative solutions and impactful digital applications.
          </Text>
        </View>

        {/* Project Filter Section */}
        <View style={tw`p-5 mt-6`}>
          <Text style={tw`text-xl font-bold mb-4 text-gray-800`}>Projects</Text>
          <FlatList
            data={projects}
            horizontal
            keyExtractor={(item) => item}
            renderItem={renderProjectFilter}
            showsHorizontalScrollIndicator={false}
          />
        </View>

        {/* Project Cards Section */}
        <FlatList
          data={filteredProjects}
          horizontal
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderProjectCard}
          contentContainerStyle={tw`p-5`}
          showsHorizontalScrollIndicator={false}
        />
        <View style={tw`p-5 mt-6 bg-white rounded-2xl shadow-md mx-4`}>
          <Text style={tw`text-xl font-bold mb-4 text-gray-800`}>Contact</Text>
          <View style={tw`flex-row justify-center`}>
            <TouchableOpacity
              onPress={() => Linking.openURL("https://www.instagram.com/alamadhim?igsh=dzd2YWd3OHU0aDF4")}
              style={tw`mr-6`}
            >
              <Image
                source={require("../../assets/images/ig.jpg")}
                style={tw`h-16 w-16 rounded-full shadow-md border-2 border-gray-200`} 
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => Linking.openURL("https://github.com/Adhim-IT")}
              style={tw`mr-6`}
            >
              <Image
                source={require("../../assets/images/github-icon.jpg")}
                style={tw`h-16 w-16 rounded-full shadow-md border-2 border-gray-200`}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => Linking.openURL("https://www.linkedin.com/in/alamsyah-nugraha/")}
            >
              <Image
                source={require("../../assets/images/linkedin.jpg")}
                style={tw`h-16 w-16 rounded-full shadow-md border-2 border-gray-200`}
              />
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
