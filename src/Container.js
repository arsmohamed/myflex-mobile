// Container.js
import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

const Container = () => {
  return (
    <View style={styles.Main_Container_Style}>

      <View style={styles.TopNav_Style}>
        <View style={styles.Top_Top_Style}>
           <Text >Top-Top</Text>
        </View>
        <View style={styles.Top_Bottom_Style}>
           <Text >Top-Bottom</Text>
        </View>
      </View>

      <View style={styles.Canvas_Container_Style}>
        <Text>Canvas</Text>
      </View>

      <View style={styles.BttomNav_Style}>
        <Text>Bottom</Text>
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
    borderWidth: 1,
    borderColor: 'yellow',
    height: '10%',
    width: '100%',
  },
  Top_Top_Style: {
    borderWidth: 1,
    borderColor: 'black',
    width: '100%',
    height: '50%'
  },
  Top_Bottom_Style: {
    borderWidth: 1,
    borderColor: 'blue',
    width: '100%',
    height: '50%'
  },
  Canvas_Container_Style: {
    borderWidth: 1,
    borderColor: 'black',
    height: '80%',
    width: '100%',
  },
  BttomNav_Style: {
    borderWidth: 1,
    borderColor: 'green',
    height: '10%',
    width: '100%',
  }
});

export default Container;
