import * as React from 'react';
import { View, Image, ImageBackground, Text, Dimensions, TextInput, TouchableOpacity } from 'react-native';

import styles from '../../styles';

class Shop extends React.Component {
  componentDidMount() {
  }

  render() {
    return (
      <View style={styles.fullSize}>
        <Text>This is Shop screen.</Text>
      </View>
    );
  }
}

export default Shop;