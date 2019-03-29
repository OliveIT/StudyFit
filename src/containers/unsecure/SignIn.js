import * as React from 'react';
import { View, Image, ImageBackground, Text, Dimensions, TextInput, TouchableOpacity } from 'react-native';
import { connect } from "react-redux";
import { Container, Content } from "native-base";

import { fetchData, setStop } from '../../redux/actions';

import styles from '../../styles';

import ImgBack from '../../../assets/images/background.jpg';

class SignIn extends React.Component {
  static navigationOptions = {
  };

  constructor(props) {
    super(props);
    this.state = {
    }
  }

  componentDidMount() {
    setTimeout(() => {
    }, 1000);
  }

  onSignIn() {}

  onForgotPwd() {}

  onSignUp() {
    this.props.navigation.navigate("signup");
  }

  render() {
    return (
      <ImageBackground source={ImgBack} style={styles.fullSize}>
        <View style={styles.spacer}/>
        <View>
          <Text style={styles.SignIn.logo}>Study Fit</Text>
          <TextInput placeholder="Username" style={styles.SignIn.input} placeholderTextColor='#eee'/>
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