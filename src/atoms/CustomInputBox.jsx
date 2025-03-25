import React from 'react';
import { View } from 'react-native';
import { TextInput } from 'react-native-paper';

const CustomInputBox = ({ label, value, onChangeText, mode = "outlined", style, ...props }) => {
  return (
    <View style={{ width: 300, marginVertical:80}}>
      <TextInput
        label={label}  
        value={value}
        onChangeText={onChangeText}
        mode={mode}
        style={[{ backgroundColor: 'white' }, style]} 
        {...props}
      />
    </View>
  );
};

export default CustomInputBox;
