import * as React from 'react';
import { View, Image, ImageBackground, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import { connect } from "react-redux";
import firebase from 'react-native-firebase';
import DefaultPreference from 'react-native-default-preference';

import styles from '../../styles';

import ImgBack from '../../../assets/images/background.jpg';
import { ScrollView } from 'react-native-gesture-handler';

import {onSignIn} from '../../redux/actions';
class SignIn extends React.Component {
  static navigationOptions = {
  };

  constructor(props) {
    super(props);
    this.state = {
      isProcessing: false
    }
  }

  componentDidMount() {
    DefaultPreference
    .get("key")
    .then((key) => {
      if (key == null) return;

      firebase
      .database()
      .ref(`users/${key}`)
      .once("value", (data) => {
        data = data.val();
        if (!data.email) {
          DefaultPreference.set("key", null);
          return;
        }

        this.signInWithFirebase(data.email, data.password);
      })
      .catch(error => {
      })
    })
  }

  onSignIn() {
    const fields = ["inputEmail", "inputPwd"];
    for (var i = 0; i < fields.length; i ++) {
      const field = fields [i];
      if (!this.refs [field]._lastNativeText || this.refs [field]._lastNativeText.trim() == "") {
        this.refs [field].focus();
        return;
      }
    }
    const email = this.refs.inputEmail._lastNativeText;
    const password = this.refs.inputPwd._lastNativeText;

    this.signInWithFirebase(email, password);
  }

  signInWithFirebase(email, password) {
    this.setState({ isProcessing: true });
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(credential => {
        this.props.onSignIn(email);
        this.props.navigation.push("tab");
      })
      .catch(error => {
        Alert.alert("StudyFit", error.message);
      })
      .finally(() => {
        this.setState({ isProcessing: false });
      })
  }

  onForgotPwd() {
    this.props.navigation.push("forgotpwd");
  }

  onSignUp() {
    this.props.navigation.push("signup");
  }

  render() {
    return (
      <ScrollView contentContainerStyle={{flexGrow: 1}} bounces = {false}>
        <ImageBackground source={ImgBack} style={styles.fullSize}>
          <View style={styles.spacer}/>
          <View>
            <Text style={styles.SignIn.logo}>Study Fit</Text>

            <TextInput keyboardType="email-address" placeholder="Email" style={styles.SignIn.input} placeholderTextColor='#eee' ref="inputEmail"/>
            <TextInput secureTextEntry={true} placeholder="Password" style={styles.SignIn.input} placeholderTextColor='#eee' ref="inputPwd"/>

            <TouchableOpacity style={styles.SignIn.mainBtn.container} onPress={this.onSignIn.bind(this)} disabled={this.state.isProcessing}>
              <Text style={styles.SignIn.mainBtn.text}>Sign In</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.SignIn.btnForgotPwd.container} onPress={this.onForgotPwd.bind(this)} disabled={this.state.isProcessing}>
              <Text style={styles.SignIn.btnForgotPwd.text}>Forgot your login in details?</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.spacer}/>
          <View style={styles.SignIn.signUpContainer}>
            <View style={styles.SignIn.signUpContainerView}>
              <Text style={styles.SignIn.signUp.description}>Don't have an account?</Text>
              <TouchableOpacity style={styles.SignIn.signUp.btnContainer} onPress={this.onSignUp.bind(this)} disabled={this.state.isProcessing}>
                <Text style={styles.SignIn.signUp.btnText}>Sign up.</Text>
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
  onSignIn
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
