// Container.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Container = () => {
  return (
    <View style={styles.container}>
      <Text>Hello</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Container;
