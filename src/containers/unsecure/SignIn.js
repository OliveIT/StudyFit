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
//      this.props.navigation.naviga
    }, 1000);
  }

  render() {
    return (
      <View style={[styles.fullSize]}>
        <ImageBackground source={ImgBack} style={styles.fullSize}>
        </ImageBackground>
      </View>
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