import React from 'react';
import { StyleSheet, Text, View, Image,} from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import {Camera} from 'expo-camera';
export default class Home extends React.Component {
  render(){
    return (
    <View style={{flex: 1, flexDirection: 'column',}}>
    <View style={{flex: 6, backgroundColor: 'white', justifyContent: 'center',}}>
    <View><Image style={{height: 200, width: 400, resizeMode: 'center',}} source={require('./icon.png')}/></View></View>
    <View style={{
        flex: .5,
        flexDirection: 'row',
        justifyContent: 'space-around', backgroundColor: 'red',}}>
    <Ionicons name='ios-camera' color='white' size={50} onPress={()=>this.props.navigation.navigate('Camera2')}/>
      <Ionicons name='md-pin' color="white" size={50} onPress={()=> this.props.navigation.navigate( 'Location' )}/>
<Ionicons name='ios-notifications' color='white' size={50} onPress={()=> this.props.navigation.navigate('Notifs')}/>
    </View>
    </View>
    );
}  
}
