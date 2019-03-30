import * as React from 'react';
import { View, Image, ImageBackground, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import { connect } from "react-redux";
import firebase from 'firebase';

import { fetchData, setStop } from '../../redux/actions';

import styles from '../../styles';

import ImgBack from '../../../assets/images/background.jpg';
import { ScrollView } from 'react-native-gesture-handler';

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

    this.setState({ isProcessing: true });
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(credential => {
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
      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <ImageBackground source={ImgBack} style={styles.fullSize}>
          <View style={styles.spacer}/>
          <View>
            <Text style={styles.SignIn.logo}>Study Fit</Text>

            <TextInput keyboardType="email-address" placeholder="Email" style={styles.SignIn.input} placeholderTextColor='#eee' ref="inputEmail" value="leosuzin1126@gmail.com"/>
            <TextInput secureTextEntry={true} placeholder="Password" style={styles.SignIn.input} placeholderTextColor='#eee' ref="inputPwd" value="123456"/>

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
  fetchData,
  setStop
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);