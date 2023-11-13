import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';

const SeeMoreButton = ({onPress}: {onPress: () => void}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Text style={styles.text}>Zobacz Wiecej</Text>
    </TouchableOpacity>
  );
};

export default SeeMoreButton;

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    borderWidth: 2,
    borderColor: 'blue',
    width: 150,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'blue',
  },
});
