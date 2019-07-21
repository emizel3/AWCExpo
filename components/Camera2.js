import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import * as Permissions from 'expo-permissions';
import { Camera } from 'expo-camera';
import {Ionicons} from '@expo/vector-icons';
export default class Camera2 extends React.Component {
  state = {
    hasCameraPermission: null,
    type: Camera.Constants.Type.back,
  };

  async componentDidMount() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({ hasCameraPermission: status === 'granted' });
  }

  render() {
      
    const { hasCameraPermission } = this.state;
    if (hasCameraPermission === null) {
      return <View />;
    } else if (hasCameraPermission === false) {
      return <Text>No access to camera</Text>;
    } else {
      return (
        <View style={{ flex: 1 }}>
          <Camera style={{ flex: .7 }} type={this.state.type} ref={ref => {this.camera = ref;}}>
            <View style={{ flex: 1, backgroundColor: 'transparent', flexDirection: 'column', alignSelf: 'flex-end',}}>
                <Ionicons name='md-reverse-camera' color="white" size={39} marginRight={15} />
            </View>
          <View style={{flex: .15, backgroundColor: 'transparent', flexDirection: 'row', alignSelf: 'center',}}>
          <Ionicons name='ios-radio-button-off' color='white' size={60} marginBottom={15} />
          </View>
        </Camera>
        </View>
      );
    }
  }
}