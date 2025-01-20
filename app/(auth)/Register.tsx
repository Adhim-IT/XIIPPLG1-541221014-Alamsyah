import type React from "react";
import { useState } from "react";
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
};

type RegisterScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Register'>;

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

const RegisterScreen: React.FC = () => {
  const [username, setUsername] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  // Use the typed navigation
  const navigation = useNavigation<RegisterScreenNavigationProp>();

  const handleSignUp = () => {
    console.log("Sign up pressed with:", { username, email, password });
  };

  const handleAlreadyHaveAccount = () => {
    navigation.navigate("Login");
  };

  return (
    <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={tw`flex-1`}>
      <ScrollView contentContainerStyle={tw`flex-grow bg-white p-6`}>
        <View style={tw`flex-1 justify-between`}>
          {/* Header */}
          <View style={tw`mt-16 mb-10`}>
            <Text style={tw`text-[#1e40af] text-4xl font-bold mb-2`}>Register</Text>
            <Text style={tw`text-gray-600 text-lg`}>Create an account to get started!</Text>
          </View>

          {/* Form */}
          <View style={tw`space-y-6`}>
            <InputField placeholder="Username" value={username} onChangeText={setUsername} icon="👤" />
            <InputField placeholder="Email" value={email} onChangeText={setEmail} icon="✉️" />
            <InputField placeholder="Password" value={password} onChangeText={setPassword} secureTextEntry icon="🔒" />

            <CustomButton label="Sign up" onPress={handleSignUp} />
          </View>

          {/* Already have account */}
          <Pressable
            onPress={handleAlreadyHaveAccount}
            style={tw`mb-6`}
            accessibilityRole="button"
            accessibilityLabel="Already have an account? Sign in"
          >
            <Text style={tw`text-gray-600 text-center text-base`}>
              Already have an account? <Text style={tw`text-[#1e40af] font-semibold`}>Sign in</Text>
            </Text>
          </Pressable>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default RegisterScreen;
