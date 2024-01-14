import React from 'react';
import { View, StyleSheet, Pressable, Text } from 'react-native';


const BottomNav = () => {
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
        width: '100%',
        justifyContent: 'space-between'
    },
    Icon_Style: {
        padding: 20
    }
  })

  export default BottomNav;