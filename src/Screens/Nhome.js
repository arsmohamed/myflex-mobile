// ChatScreen.js
import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useDispatch } from "react-redux";
import { changeScreen } from "../store/actions/NavigationActions";
import Ionicons from 'react-native-vector-icons/Ionicons';

const NHome = ({ navigation }) => {
  const dispatch = useDispatch();

  const handleIconClick = () => {
    dispatch(changeScreen("NewChatScreen"));
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "grey",
        // justifyContent: "center",
        // alignItems: "center",
        borderWidth: 1,
        borderColor: 'white',
        flexDirection: 'column'
      }}
    >
       <View
        style={{
          // flex: 1,
          backgroundColor: "red",
          alignItems: "center",
          borderWidth: 1,
          borderColor: 'yellow',
          height: '90%',
          width: '100%'
        }}
       >
           <Text style={{color: 'white'}}>Home asdjfadjsfhkjasdhflkjashflkjdh Screen</Text>
          <TouchableOpacity
              onPress={() => navigation.navigate('Search_Screen')}
              style={{ marginRight: 10 }}
            >
              <Ionicons name="search" size={55} style={{ color: 'white' }} />
            </TouchableOpacity>
       </View>
       <View
        style={{
          // flex: 1,
          backgroundColor: "green",
          height: '10%'
        }}
       >

       </View>
     
    </View>
  );
};

export default NHome;
