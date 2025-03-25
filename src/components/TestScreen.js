import React from "react";
import { useState } from 'react';
import { View } from "react-native";
import CustomCard from "../atoms/CustomCard";
import CustomInputBox from "../atoms/CustomInputBox";
import CustomButton from '../atoms/CustomButton';
const TestScreen = ({ navigation }) => {
    const [name, setName] = useState('');
  return (
    <View style={{top:40}}>

      <CustomCard 
        text="Start Interview" 
        icon="microphone" 
        iconColor="white"
        backgroundColor="green"
        onPress={() => navigation.navigate("Profile")} 
      />

      <CustomCard 
        text="View Past Interview" 
        icon="clock-o" 
        iconColor="light-pink"
        backgroundColor="pink"
        onPress={() => navigation.navigate("View Past Interview")} 
      />
            <CustomCard 
        text="Ai Insights & Reports" 
        icon="lightbulb-o" 
        iconColor="light-pink"
        backgroundColor="cyan"
        onPress={() => navigation.navigate("Ai Insights & Reports")} 
      />
          <CustomInputBox style={{top:-50,left:20 }}
        label="Your Name"
        value={name}
        onChangeText={setName}
      />
     <CustomButton
        style={{ width: 150, height: 50, top:-100,left:20 }}
        title="Click Me"
        useTouchableOpacity={true}
        mode="contained"
        onPress={() => console.log('Button Pressed')}
      />
    </View>
  );
};

export default TestScreen;
