import * as React from 'react';
import { View, Image, ImageBackground, Text, TextInput, TouchableOpacity } from 'react-native';
import { connect } from "react-redux";

import styles from '../../styles';

import ImgBack from '../../../assets/images/background.jpg';
import { ScrollView } from 'react-native-gesture-handler';

class ForgotPwd extends React.Component {
  static navigationOptions = {
  };

  constructor(props) {
    super(props);
    this.state = {
    }
  }

  componentDidMount() {
  }

  onSignIn() {}

  onForgotPwd() {
    this.props.navigation.navigate("forgotpwd");
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
            <TextInput keyboardType="email-address" placeholder="Email" style={styles.SignIn.input} placeholderTextColor='#eee'/>
            <TextInput secureTextEntry={true} placeholder="Password" style={styles.SignIn.input} placeholderTextColor='#eee'/>
            <TouchableOpacity style={styles.SignIn.mainBtn.container} onPress={this.onSignIn.bind(this)}>
              <Text style={styles.SignIn.mainBtn.text}>Sign In</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.SignIn.btnForgotPwd.container} onPress={this.onForgotPwd.bind(this)}>
              <Text style={styles.SignIn.btnForgotPwd.text}>Forgot your login in details?</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.spacer}/>
          <View style={styles.SignIn.signUpContainer}>
            <View style={styles.SignIn.signUpContainerView}>
              <Text style={styles.SignIn.signUp.description}>Don't have an account?</Text>
              <TouchableOpacity style={styles.SignIn.signUp.btnContainer} onPress={this.onSignUp.bind(this)}>
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
}

export default connect(mapStateToProps, mapDispatchToProps)(ForgotPwd);