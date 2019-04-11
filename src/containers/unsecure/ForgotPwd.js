import * as React from 'react';
import { View, Image, ImageBackground, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import { connect } from "react-redux";
import firebase from 'react-native-firebase';

import styles from '../../styles';

import ImgBack from '../../../assets/images/background.jpg';
import { ScrollView } from 'react-native-gesture-handler';

class ForgotPwd extends React.Component {
  static navigationOptions = {
  };

  constructor(props) {
    super(props);
    this.state = {
      isProcessing: false
    }
  }

  componentDidMount() {
  }

  onSend() {
    const email = this.refs.inputEmail._lastNativeText;
    this.setState({ isProcessing: true });
    firebase
      .auth()
      .sendPasswordResetEmail(email)
      .then(() => {
        Alert.alert(
          "StudyFit",
          "Please check your email.",
          [{text: 'OK', onPress: () => this.props.navigation.pop()}],
          {cancelable: false},
        );
      })
      .catch((error) => {
        Alert.alert("StudyFit", error.message);
      })
      .finally(() => {
        this.setState({ isProcessing: false });
      })
  }

  onSignIn() {
    this.props.navigation.pop();
  }

  render() {
    return (
      <ScrollView contentContainerStyle={{flexGrow: 1}} bounces = {false}>
        <ImageBackground source={ImgBack} style={styles.fullSize}>
          <View style={styles.spacer}/>
          <View>
            <Text style={styles.SignIn.logo}>Study Fit</Text>

            <TextInput keyboardType="email-address" placeholder="Email" ref="inputEmail" style={styles.SignIn.input} placeholderTextColor='#eee'/>

            <TouchableOpacity style={styles.SignIn.mainBtn.container} onPress={this.onSend.bind(this)} disabled={this.state.isProcessing}>
              <Text style={styles.SignIn.mainBtn.text}>Send Verification Code</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.spacer}/>
          <View style={styles.SignIn.signUpContainer}>
            <View style={styles.SignIn.signUpContainerView}>
              <Text style={styles.SignIn.signUp.description}>I have an account.</Text>
              <TouchableOpacity style={styles.SignIn.signUp.btnContainer} onPress={this.onSignIn.bind(this)}>
                <Text style={styles.SignIn.signUp.btnText}>Sign In.</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ImageBackground>
      </ScrollView>
    );
  }
}

const mapStateToProps = state => ({
  data: state.reducer.data
});

const mapDispatchToProps = {
}

export default connect(mapStateToProps, mapDispatchToProps)(ForgotPwd);