// App.js
import React from 'react';
import { StyleSheet, View } from 'react-native';
import Container from './src/Container';

export default function App() {
  return (
    <View style={styles.container}>
      <Container />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
