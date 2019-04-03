import * as React from 'react';
import { View, Image, ImageBackground, ScrollView, Text, Dimensions, TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import styles from '../styles';

const {width} = Dimensions.get("window");

class Product extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
  }

  onPurchase() {
    
  }

  render() {
    const {uri, title, price} = this.props;

    return (
      <View style={styles.Product.container}>
        <Image source={{uri: uri}} style={styles.Product.image} resizeMode="contain"/>
        <Text style={styles.Product.title}>{ (title.length > 20) ? (title.substring(0, 20 - 3) + '...') : title }</Text>
        <View style={styles.Product.priceContainer}>
          <Icon name="money" size={width * 0.1} color="#008000" style={styles.Step.icon}/>
          <Text style={styles.Product.price}>{price}</Text>
        </View>
        <TouchableOpacity style={styles.Product.btnContainer} onPress={this.onPurchase.bind(this)}>
          <Text style={styles.Product.btnText}>Purchase</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default Product;