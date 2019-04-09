import * as React from 'react';
import { View, Image, ImageBackground, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import { connect } from "react-redux";
import firebase from 'react-native-firebase';

import styles from '../../styles';

import ImgBack from '../../../assets/images/background.jpg';
import { ScrollView } from 'react-native-gesture-handler';

import {onSignIn} from '../../redux/actions';

class SignUp extends React.Component {
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

  onSignIn() {
    this.props.navigation.pop();
  }

  validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };

  onSignUp() {
    const fields = ["inputFirstName", "inputLastName", "inputEmail", "inputPwd", "inputConfirmPwd"];
    for (var i = 0; i < fields.length; i ++) {
      const field = fields [i];
      if (!this.refs [field]._lastNativeText || this.refs [field]._lastNativeText.trim() == "") {
        this.refs [field].focus();
        return;
      }
    }
    const params = {
      firstName: this.refs.inputFirstName._lastNativeText,
      lastName: this.refs.inputLastName._lastNativeText,
      email: this.refs.inputEmail._lastNativeText,
      password: this.refs.inputPwd._lastNativeText,
      coins: 0,
    };
    const confirmPwd = this.refs.inputConfirmPwd._lastNativeText;

    if (!this.validateEmail(params.email)) {
      this.refs.inputEmail.focus();
      return;
    }

    if (params.password != confirmPwd) {
      this.refs.inputConfirmPwd.focus();
      return;
    }

    this.setState({ isProcessing: true });
    firebase
      .auth()
      .createUserWithEmailAndPassword(params.email, params.password)
      .then(() => {
        this.createUser(params);
      })
      .catch(error => {
        this.setState({ isProcessing: false });
        Alert.alert("StudyFit", error.message);
      });
  }

  createUser(params) {
    firebase
      .database()
      .ref('users')
      .push(params)
      .then((data) => {
        this.props.onSignIn(params.email);
        this.props.navigation.replace("tab");
      })
      .catch(error => {
        Alert.alert("StudyFit", error.message);
      })
      .finally(() => {
        this.setState({ isProcessing: false });
      })
  }

  render() {
    return (
      <ScrollView contentContainerStyle={{flexGrow: 1}} bounces = {false}>
        <ImageBackground source={ImgBack} style={styles.fullSize}>
          <View style={styles.spacer}/>
          <View>
            <Text style={styles.SignIn.logo}>Study Fit</Text>
            
            <TextInput placeholder="First name" style={styles.SignIn.input} placeholderTextColor='#eee' ref="inputFirstName" value="leo"/>
            <TextInput placeholder="Last name" style={styles.SignIn.input} placeholderTextColor='#eee' ref="inputLastName" value="suzin"/>
            <TextInput keyboardType="email-address" placeholder="Email" style={styles.SignIn.input} placeholderTextColor='#eee' ref="inputEmail" value="leosuzin1126@gmail.com"/>
            <TextInput secureTextEntry={true} placeholder="Password" style={styles.SignIn.input} placeholderTextColor='#eee' ref="inputPwd" value="123456"/>
            <TextInput secureTextEntry={true} placeholder="Confirm Password" style={styles.SignIn.input} placeholderTextColor='#eee' ref="inputConfirmPwd" value="123456"/>

            <TouchableOpacity style={styles.SignIn.mainBtn.container} onPress={this.onSignUp.bind(this)} disabled={this.state.isProcessing}>
              <Text style={styles.SignIn.mainBtn.text}>Sign Up</Text>
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
  onSignIn
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);