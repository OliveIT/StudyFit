import * as React from 'react';
import { View, Image, ImageBackground, ScrollView, Text, Dimensions, TextInput, TouchableHighlight, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { connect } from "react-redux";

import styles from '../styles';
import {setCoins} from '../redux/actions';

const {width} = Dimensions.get("window");

class Product extends React.Component {
  constructor(props) {
    super(props);
    this.state = { pressStatus: false };
  }

  componentDidMount() {
  }

  alert(message) {
    Alert.alert(
      "StudyFit",
      message,
      [{text: 'OK', onPress: () => {}}],
      {cancelable: false},
    );
  }

  onPurchase() {
    const {price} = this.props;
    const {coins} = this.props.data.user;

    if (coins >= price) {
      this.props.setCoins(this.props.data, -price);
      this.alert("Thank you, your phuchase was successful.");
    } else {
      this.alert("Sorry, you don't have enough currency to make the purchase.");
    }
  }

  _onHideUnderlay() {
    this.setState({ pressStatus: false });
  }
  _onShowUnderlay() {
      this.setState({ pressStatus: true });
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
        <TouchableHighlight
          style={this.state.pressStatus ? styles.Product.activeBtn.container : styles.Product.btn.container}
          onPress={this.onPurchase.bind(this)}
          onHideUnderlay={this._onHideUnderlay.bind(this)}
          onShowUnderlay={this._onShowUnderlay.bind(this)}
          underlayColor='#800080'>
          <Text style={this.state.pressStatus ? styles.Product.activeBtn.text : styles.Product.btn.text}>Purchase</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  data: state.reducer.data
});

const mapDispatchToProps = {
  setCoins
}

export default connect(mapStateToProps, mapDispatchToProps)(Product);