import * as React from 'react';
import { View, Image, ScrollView, Text, FlatList } from 'react-native';
import firebase from 'firebase';

import styles from '../../styles';
import Product from '../../components/Product';

class Shop extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: []
    };
  }

  componentDidMount() {
    firebase
    .database()
    .ref('products').on("value", (snapshot) => {
      const data = snapshot.val();
      const keys = Object.keys(data);
      var products = [];
      keys.map(key => products.push(data [key]));
      this.setState({
        products: products
      });
    })
  }

  render() {
    return (
      <View style={styles.fullSize}>
        <View style={styles.page.header}>
          <Text style={styles.page.headerText}>Shop</Text>
        </View>
        <FlatList
          style={styles.Shop.list}
          data={this.state.products}
          numColumns={2}
          renderItem={({item}) => 
            <Product
              uri={item.uri}
              title={item.title}
              price={item.price} />
            }/>
      </View>
    );
  }
}

export default Shop;