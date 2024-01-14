import React from 'react';
import { View, StyleSheet, Pressable, Text } from 'react-native';


const TopNav = () => {
    return (
      <View style={styles.Bottom_Nav_Style}>
        <Pressable style={styles.Icon_Style}>
        <Text>Home</Text>
        </Pressable>
        <Pressable style={styles.Icon_Style}>
        <Text>Home</Text>
        </Pressable>
        <Pressable style={styles.Icon_Style}>
        <Text>Home</Text>
        </Pressable>
      </View>
    );
  };

  const styles = StyleSheet.create({ 
    Bottom_Nav_Style: {
        flexDirection: 'row',
        backgroundColor: 'blue',
        width: '90%',
        height: '50%',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    Icon_Style: {
        // padding: 15
    }
  })

  export default TopNav;