import * as React from 'react';
import { View, Image, ImageBackground, Text, Dimensions, TextInput, TouchableOpacity } from 'react-native';

import styles from '../../styles';

class Home extends React.Component {
  componentDidMount() {
  }

  render() {
    return (
      <View style={styles.fullSize}>
        <Text>This is Home screen.</Text>
      </View>
    );
  }
}

export default Home;