import * as React from 'react';
import { View, Image, ScrollView, Text, Dimensions, TextInput, TouchableOpacity, ImageBackground, Alert } from 'react-native';
import { connect } from "react-redux";

import styles from '../../styles';
import Problems from '../../data/problems.json';

import {setCoins} from '../../redux/actions';

import ImgStopWatch from '../../../assets/images/stopwatchpurple.png';
class Learn extends React.Component {
  timer = null;
  defaultTime = 30;

  constructor(props) {
    super(props);

    this.state = {
      index: 0,
      countTime: this.defaultTime,
      isStart: false,
      isPaused: false,
      isComplete: false,
      rightCount: 0
    }
  }

  componentDidMount() {
    this.timer = setInterval(this.onTimer.bind(this), 1000);
  }

  alert(message) {
    Alert.alert(
      "StudyFit",
      message,
      [{text: 'OK', onPress: () => {}}],
      {cancelable: false},
    );
  }

  onStart() {
    this.setState({
      index: 0,
      countTime: this.defaultTime,
      isStart: true,
      isComplete: false,
      isPaused: false,
      rightCount: 0
    });
  }

  onCheck() {
    const {isPaused, index} = this.state;
    
    if (index == Problems.length - 1)
      this.setState({
        isComplete: true,
        isPaused: false
      });
    else if (isPaused)
      this.setState({
        isPaused: false,
        index: index + 1,
        countTime: this.defaultTime
      });
    else
      this.setState({
        isPaused: true,
      });
  }

  onTimer() {
    if (!this.state.isStart) return;
    if (this.state.isPaused) return;

    const {countTime} = this.state;
    if (countTime == 0) {
      this.setState({
        isPaused: true
      });
	  this.alert("Time is up!");
    } else {
      this.setState({
        countTime: countTime - 1
      })
    }
  }

  onSelectAnswer(quesIndex) {
    const {index, rightCount} = this.state;
    const {answer} = Problems [index];

    if (quesIndex == answer) {
      this.setState({
        rightCount: rightCount + 1,
        isPaused: true
      });
	  let {countTime} = this.state;
	  countTime ++;
	  
      this.props.setCoins(this.props.data, countTime);
	  this.alert(`Great! You got ${countTime} coins.`);
    } else {
	  this.alert("Ops! You selected wrong answer.");
      this.setState({
        isPaused: true
      });
	}
  }

  render() {
    const {index, isStart, isPaused, isComplete, countTime, rightCount} = this.state;
    const {title, answer, questions} = Problems[index];

    return (
      <View style={styles.fullSize}>
        <View style={styles.page.header.container}>
          <Text style={styles.page.header.title}>Learning Hub</Text>
        </View>
        {!isComplete ? (
        !isStart ?
        <View style={styles.page.innerContent}>
          <View style={styles.spacer}/>
          <TouchableOpacity style={styles.Learn.btnStart.container} onPress={this.onStart.bind(this)}>
            <Text style={styles.Learn.btnStart.text}>Start question.</Text>
          </TouchableOpacity>
          <View style={styles.spacer}/>
        </View>
        :
        <ImageBackground style={styles.page.innerContent} source={ImgStopWatch} resizeMode="center">
          <Text style={styles.Learn.note}>Quiz {index + 1} of {Problems.length}</Text>
          <Text style={styles.Learn.title}>{title}</Text>

          {questions.map((question, index) => 
          <TouchableOpacity
            style={[styles.Learn.questionCont, 
                    isPaused ? (index == answer ? styles.Learn.correct : styles.Learn.wrong) : {}]}
            disabled={isPaused}
            onPress={this.onSelectAnswer.bind(this, index)}>
            <Text style={[styles.Learn.question, isPaused ? {color: '#fff'} : {}]}>{question}</Text>
          </TouchableOpacity>
          )}
          <View style={styles.Learn.footer}>
            <Text style={[styles.Learn.timer, (countTime < 10 ? {color: '#FF6347'} : {})]}>{countTime}</Text>
            <View style={styles.spacer}/>
            <TouchableOpacity style={styles.Learn.btnCheck.container} onPress={this.onCheck.bind(this)}>
              <Text style={styles.Learn.btnCheck.text}>{!isPaused ? "Check Answer" : "Next Question"}</Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>)
        :
        <View style={styles.page.innerContent}>
          <View style={styles.spacer}/>
          <Text style={styles.Learn.textResult}>Right: {rightCount} of {Problems.length}</Text>
          <TouchableOpacity style={styles.Learn.btnStart.container} onPress={this.onStart.bind(this)}>
            <Text style={styles.Learn.btnStart.text}>Restart question.</Text>
          </TouchableOpacity>
          <View style={styles.spacer}/>
        </View>}
      </View>
    );
  }
}

const mapStateToProps = state => ({
  data: state.reducer.data
});

const mapDispatchToProps = {
  setCoins
}

export default connect(mapStateToProps, mapDispatchToProps)(Learn);