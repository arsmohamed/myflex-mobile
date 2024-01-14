import React from 'react';
import { View, StyleSheet, Pressable, Text } from 'react-native';
import Ionicons from "react-native-vector-icons/Ionicons";


const BottomNav = () => {
    return (
      <View style={styles.Bottom_Nav_Style}>
        <Pressable style={styles.Icon_Style}>
          <Ionicons
            name="home"
            size={25}
            style={{ marginRight: 10, color: "white" }}
          />
        </Pressable>
        <Pressable style={styles.Icon_Style}>
          <Ionicons
            name="play"
            size={25}
            style={{ marginRight: 10, color: "white" }}
          />
        </Pressable>
        <Pressable style={styles.Icon_Style}>
          <Ionicons
            name="person"
            size={25}
            style={{ marginRight: 10, color: "white" }}
          />
        </Pressable>
      </View>
    );
  };

  const styles = StyleSheet.create({ 
    Bottom_Nav_Style: {
      // backgroundColor: 'blue',
        borderWidth: 1,
        borderColor: 'blue',
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between'
    },
    Icon_Style: {
        padding: 20
    }
  })

  export default BottomNav;