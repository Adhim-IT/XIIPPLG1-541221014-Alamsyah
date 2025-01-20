import React, { useState } from "react";
import { View, Text, TextInput, Pressable, ScrollView, KeyboardAvoidingView, Platform } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import tw from "twrnc";

interface CustomButtonProps {
  label: string;
  onPress: () => void;
  variant?: "primary" | "secondary";
}
type RootStackParamList = {
  Login: undefined;
  Register: undefined;
  Home: undefined;
};

type LoginScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Login'>;

const CustomButton: React.FC<CustomButtonProps> = ({ label, onPress, variant = "primary" }) => {
  const buttonStyles =
    variant === "primary" ? tw`bg-[#1e40af] py-4 rounded-lg shadow-lg` : tw`border border-gray-300 py-4 rounded-lg`;

  const textStyles =
    variant === "primary"
      ? tw`text-white text-center text-lg font-semibold`
      : tw`text-gray-900 text-center text-lg font-semibold`;

  return (
    <Pressable style={buttonStyles} onPress={onPress} accessibilityRole="button" accessibilityLabel={label}>
      <Text style={textStyles}>{label}</Text>
    </Pressable>
  );
};

interface InputFieldProps {
  placeholder: string;
  value: string;
  onChangeText: (text: string) => void;
  secureTextEntry?: boolean;
  icon: string;
}

const InputField: React.FC<InputFieldProps> = ({
  placeholder,
  value,
  onChangeText,
  secureTextEntry = false,
  icon,
}) => (
  <View style={tw`flex-row items-center bg-[#F8F9FE] rounded-lg overflow-hidden mb-4`}>
    <View style={tw`p-4`}>
      <Text style={tw`text-gray-400 text-xl`}>{icon}</Text>
    </View>
    <TextInput
      placeholder={placeholder}
      value={value}
      onChangeText={onChangeText}
      secureTextEntry={secureTextEntry}
      style={tw`flex-1 p-4 text-gray-900`}
      placeholderTextColor="#9CA3AF"
      accessibilityLabel={placeholder}
    />
  </View>
);

const LoginScreen: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const navigation = useNavigation<LoginScreenNavigationProp>();

  const handleSignIn = () => {
    const hardcodedEmail = "test@gmail.com";
    const hardcodedPassword = "test123";

    if (email === hardcodedEmail && password === hardcodedPassword) {
      console.log("Login successful");
      alert("Login successful!");
      navigation.navigate("Home");
    } else {
      console.error("Login failed: Invalid email or password.");
      alert("Invalid email or password.");
    }
  };

  const handleForgotPassword = () => {
    console.log("Forgot password");
  };

  const handleCreateAccount = () => {
    navigation.navigate("Register");
  };

  return (
    <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={tw`flex-1`}>
      <ScrollView contentContainerStyle={tw`flex-grow bg-white p-6`}>
        <View style={tw`flex-1 justify-between`}>
          {/* Header */}
          <View style={tw`mt-16 mb-10`}>
            <Text style={tw`text-[#1e40af] text-4xl font-bold mb-2`}>Login here</Text>
            <Text style={tw`text-gray-600 text-lg`}>Welcome back, you've been missed!</Text>
          </View>

          {/* Form */}
          <View style={tw`space-y-6`}>
            <InputField placeholder="Email" value={email} onChangeText={setEmail} icon="✉️" />
            <InputField placeholder="Password" value={password} onChangeText={setPassword} secureTextEntry icon="🔒" />

            <Pressable
              onPress={handleForgotPassword}
              accessibilityRole="button"
              accessibilityLabel="Forgot your password?"
            >
              <Text style={tw`text-[#1e40af] text-right text-sm font-medium mb-4`}>Forgot your password?</Text>
            </Pressable>

            <CustomButton label="Sign in" onPress={handleSignIn} />
          </View>

          {/* Create Account */}
          <Pressable
            onPress={handleCreateAccount}
            style={tw`mb-6`}
            accessibilityRole="button"
            accessibilityLabel="Don't have an account? Sign up"
          >
            <Text style={tw`text-gray-600 text-center text-base`}>
              Don't have an account? <Text style={tw`text-[#1e40af] font-semibold`}>Sign up</Text>
            </Text>
          </Pressable>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;
