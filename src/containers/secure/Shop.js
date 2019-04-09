import * as React from 'react';
import { View, Image, ScrollView, Text, FlatList } from 'react-native';
import firebase from 'react-native-firebase';

import styles from '../../styles';
import Product from '../../components/Product';

class Shop extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: []
    };
    /*const products = [{
      uri: "https://cdn.discordapp.com/attachments/442188614583975956/565142846907351040/GoldStandardProtein.jpg",
      title: "Gold standard protein",
      price: 4000
    },{
      uri: "https://cdn.discordapp.com/attachments/442188614583975956/565142852548558848/ComputerScienceBook.jpg",
      title: "Computer science book",
      price: 2000
    },{
      uri: "https://cdn.discordapp.com/attachments/442188614583975956/565142836538769418/Treadmill.jpg",
      title: "Treadmill",
      price: 10000
    },{
      uri: "https://cdn.discordapp.com/attachments/442188614583975956/565142859154456577/Kindle.jpg",
      title: "Kindle",
      price: 8000
    },{
      uri: "https://cdn.discordapp.com/attachments/442188614583975956/565142861218185216/NikeRunningShoes.jpg",
      title: "Nike running shoes",
      price: 6000
    },{
      uri: "https://cdn.discordapp.com/attachments/442188614583975956/565142863906603012/HPLaptop.jpg",
      title: "HP laptop",
      price: 20000
    }];
    products.forEach(product => firebase.database().ref("products").push(product));*/
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
        <View style={styles.page.header.container}>
          <Text style={styles.page.header.title}>Shop</Text>
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