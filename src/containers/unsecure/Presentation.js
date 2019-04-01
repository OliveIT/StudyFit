import * as React from 'react';
import { View, Image, ImageBackground, Text, Dimensions, TextInput, TouchableOpacity } from 'react-native';

import styles from '../../styles';

import ImgBook from '../../../assets/images/book.png';
import ImgLifter from '../../../assets/images/lifter.jpg';

class Presentation extends React.Component {
  componentDidMount() {
    setTimeout(() => {
      this.props.navigation.replace("signin");
    }, 1000);
  }

  render() {
    return (
      <View style={styles.fullSize}>
        <View style={styles.Presentation.logo}>
          <Text style={styles.Presentation.mainLogo}>Study Fit</Text>
          <Text style={styles.Presentation.logoDescription}>Achieve academic success whilst increasing fitness levels</Text>
        </View>
        <View style={styles.spacer}></View>
        <View style={styles.Presentation.image}>
          <Image source={ImgBook} style={styles.Presentation.imgBook} resizeMode="contain"/>
          <Image source={ImgLifter} style={styles.Presentation.imgLifter} resizeMode="contain"/>
        </View>
      </View>
    );
  }
}

export default Presentation;