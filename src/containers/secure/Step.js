import * as React from 'react';
import { View, Image, ImageBackground, ScrollView, Text, Dimensions, TextInput, Platform, DeviceEventEmitter } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { connect } from "react-redux";
import Pedometer from 'react-native-pedometer';

import styles from '../../styles';

import ImgBack from '../../../assets/images/stepBack.jpg';
import ImgRing from '../../../assets/images/stepRing.png';
import {setCoins, setStep} from '../../redux/actions';

const {width} = Dimensions.get("window");

class Step extends React.Component {
  lastDate = 0;
  lastSteps = 0;

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    if (Platform.OS == "android")
      DeviceEventEmitter.addListener('onChangeStepCounts', this.onChangeStepCounts.bind(this));
    else {
      this.lastDate = (new Date()).getTime();
      this.lastSteps = 0;
      this.startPedometer();
    }
  }

  
  startPedometer(){
    Pedometer.stopPedometerUpdates();
    Pedometer.startPedometerUpdatesFromDate(this.lastDate, (pedometerData) => {
      if (pedometerData.numberOfSteps != 0
          && pedometerData.numberOfSteps - this.lastSteps > 0) {
        this.onStep(pedometerData.numberOfSteps - this.lastSteps);
        this.lastSteps = pedometerData.numberOfSteps;
      }
    });
  }

  onChangeStepCounts(e) {
    this.onStep(1);
  }

  onStep(count) {
    this.props.setCoins(this.props.data, count);
    this.props.setStep(this.props.steps + count);
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
