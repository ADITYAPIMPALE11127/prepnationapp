import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';

const CustomButton = ({ title, icon, mode = 'contained', onPress, style, labelStyle, useTouchableOpacity = false }) => {
  if (useTouchableOpacity) {
    return (
      <TouchableOpacity onPress={onPress} style={[styles.touchable, style]}>
        <Button icon={icon} mode={mode} labelStyle={labelStyle}>
          {title}
        </Button>
      </TouchableOpacity>
    );
  }

  return (
    <Button icon={icon} mode={mode} onPress={onPress} style={style} labelStyle={labelStyle}>
      {title}
    </Button>
  );
};

const styles = StyleSheet.create({
  touchable: {
    padding: 5,
    borderRadius: 12,
  },
});

export default CustomButton;
