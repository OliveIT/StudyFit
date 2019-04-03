import * as React from 'react';
import { View, Image, ScrollView, Text, FlatList } from 'react-native';

import styles from '../../styles';
import Product from '../../components/Product';

class Shop extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [{
        uri: "https://5.imimg.com/data5/VF/WO/MY-10047938/treadmill-fitness-machine-tm-30-500x500.png",
        title: "Mild Steel",
        price: 5000
      },{
        uri: "http://cdn.shopify.com/s/files/1/0680/1801/products/HS-Gym_G2-hero_6bd1b7d1-8170-4d15-b9de-8a40cb0cde72_500x.png?v=1429563558",
        title: "Life Fitness",
        price: 2000
      },{
        uri: "https://www.lifefitness.com.au/wp-content/uploads/2015/04/CS-SigBenchRack_SSM-hero.png",
        title: "Smith Machine",
        price: 2500
      },{
        uri: "https://lifefitness.com/sites/g/files/dtv111/f/ElevationSeries-CrossTrainer-DiscoverSE3-HD-ArcticSilver-StandardView.png",
        title: "Commercial Cardio Strength Equipment",
        price: 7000
      }]
    }
  }

  componentDidMount() {
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