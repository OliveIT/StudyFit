import * as React from 'react';
import { View, Image, ImageBackground, ScrollView, Text, Dimensions, TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import styles from '../../styles';

import ImgBack from '../../../assets/images/stepBack.jpg';
import ImgRing from '../../../assets/images/stepRing.png';

const {width} = Dimensions.get("window");

class Step extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      steps: 2
    }
  }

  componentDidMount() {
  }

  render() {
    return (
      <ImageBackground style={styles.fullSize} source={ImgBack} imageStyle={{resizeMode: "cover"}}>
        <View style={styles.spacer}></View>
        <ImageBackground source={ImgRing} style={styles.Step.ring} imageStyle={{resizeMode: "contain"}}>
          <View style={styles.spacer}></View>
          <View style={styles.Step.iconBox}>
            {/*<Icon name="male" size={width * 0.3} color="#fff" style={styles.Step.icon}/>*/}
            <Text style={styles.Step.bigText}>{this.state.steps}</Text>
            <Text style={styles.Step.text}>Steps</Text>
          </View>
          <View style={styles.spacer}></View>
        </ImageBackground>
        <View style={styles.spacer}></View>
      </ImageBackground>
    );
  }
}

export default Step;