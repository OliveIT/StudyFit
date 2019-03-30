import React from 'react';
import { Button, Text, View, Dimensions } from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import Icon from 'react-native-vector-icons/FontAwesome';

import Home from './Home';
import Shop from './Shop';
import styles from '../../styles';

export default class Tab extends React.Component {
  state = {
    index: 0,
    routes: [
      { key: 'shop', title: 'Shop', icon: 'shopping-cart' },
      { key: 'step', title: 'Home', icon: 'male' },
      { key: 'home', title: 'Home', icon: 'money' },
      { key: 'learn', title: 'Shop', icon: 'pencil' },
    ],
  };
 
  render() {
    const activeRoute = this.state.routes [this.state.index];
    return (
      <TabView
        navigationState={this.state}
        renderScene={SceneMap({
          shop: Shop,
          step: Home,
          home: Shop,
          learn: Home,
        })}
        onIndexChange={index => this.setState({ index })}
        initialLayout={{ width: Dimensions.get('window').width }}
        tabBarPosition="bottom"
        renderTabBar={props =>
          <TabBar
            {...props}
            indicatorStyle={{ backgroundColor: 'white' }}
            style={styles.tabBar}
            renderIcon={({ route, focused, index }) => (
              <Icon name={route.icon} size={30} color={activeRoute.key == route.key ? "#800080" : '#444'} />
            )}
            activeColor={'#f00'}
            renderLabel={({ route, focused, color }) => null}
          />
        }
      />
    );
  }
}