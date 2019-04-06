import * as React from 'react';
import { View, Image, ImageBackground, ScrollView, Text, Dimensions, TextInput, TouchableOpacity, DeviceEventEmitter } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { connect } from "react-redux";

import styles from '../../styles';

import ImgBack from '../../../assets/images/stepBack.jpg';
import ImgRing from '../../../assets/images/stepRing.png';
import {setCoins, setStep} from '../../redux/actions';

const {width} = Dimensions.get("window");

class Step extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    DeviceEventEmitter.addListener('onChangeStepCounts', this.onChangeStepCounts.bind(this));
  }

  onChangeStepCounts(e) {
    this.props.setCoins(this.props.data, 1);
    this.props.setStep(this.props.steps + 1);
  }

  render() {
    return (
      <ImageBackground style={styles.fullSize} source={ImgBack} imageStyle={{resizeMode: "cover"}}>
        <View style={styles.spacer}></View>
        <ImageBackground source={ImgRing} style={styles.Step.ring} imageStyle={{resizeMode: "contain"}}>
          <View style={styles.spacer}></View>
          <View style={styles.Step.iconBox}>
            {/*<Icon name="male" size={width * 0.3} color="#fff" style={styles.Step.icon}/>*/}
            <Text style={styles.Step.bigText}>{this.props.steps}</Text>
            <Text style={styles.Step.text}>Steps</Text>
          </View>
          <View style={styles.spacer}></View>
        </ImageBackground>
        <View style={styles.spacer}></View>
      </ImageBackground>
    );
  }
}

const mapStateToProps = state => ({
  data: state.reducer.data,
  steps: state.reducer.steps
});

const mapDispatchToProps = {
  setCoins,
  setStep
}

export default connect(mapStateToProps, mapDispatchToProps)(Step);