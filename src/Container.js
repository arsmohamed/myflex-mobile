// Container.js
import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import BottomNav from './Navigation/BottomNav';
import TopNav from './Navigation/TopNav';

const Container = () => {
  return (
    <View style={styles.Main_Container_Style}>

      <View style={styles.TopNav_Style}>
        <TopNav/>
      </View>

      <View style={styles.Canvas_Container_Style}>
        <Text>Canvas</Text>
      </View>

      <View style={styles.BttomNav_Style}>
        <BottomNav/>
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  Main_Container_Style: {
    flex: 1,
    backgroundColor: "grey",  
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column'
  },
  TopNav_Style: {
    // borderWidth: 1,
    // borderColor: 'yellow',
    height: '10%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'flex-end'
  },
  Canvas_Container_Style: {
    // borderWidth: 1,
    // borderColor: 'black',
    height: '80%',
    width: '100%',
    alignItems: 'center',
  },
  BttomNav_Style: {
    // borderWidth: 1,
    // borderColor: 'green',
    height: '10%',
    width: '100%',
  }
});

export default Container;
