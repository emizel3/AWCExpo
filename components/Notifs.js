import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
export default class Notifs extends React.Component {
    
  render() {
    return (
        <View style={{flex: 3, flexDirection: 'column', backgroundColor: '#ffffff'}}>
      <View style={{ flex: .045, flexDirection: 'column', backgroundColor: 'red', justifyContent: "flex-start", alignItems: "center" }}>
        <Text style={{color: '#ffffff', fontSize: 25, fontWeight: 'bold',}}>Messages</Text>
      </View>
        <View style={{ flex: .08, flexDirection: 'column', borderStyle: 'solid', borderRadius: 2, borderWidth: 2, borderColor: '#000000', backgroundColor: '#ffffff', justifyContent: "center", alignItems: "center" }}>
        <Text style={{color: 'black', fontSize: 20, fontWeight: 'normal',}}>Welcome to AWC!</Text>
        </View>
        </View>
    );
  }
}