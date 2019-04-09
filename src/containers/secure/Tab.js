import React from 'react';
import { Button, Text, View, Dimensions } from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import Icon from 'react-native-vector-icons/FontAwesome';

import Shop from './Shop';
import Step from './Step';
import Home from './Home';
import Learn from './Learn';
import Profile from './Profile';

import styles from '../../styles';

export default class Tab extends React.Component {
  state = {
    index: 2,
    routes: [
      { key: 'shop', title: 'Shop', icon: 'shopping-cart' },
      { key: 'step', title: 'Step', icon: 'male' },
      { key: 'home', title: 'Home', icon: 'money' },
      { key: 'learn', title: 'Learning hub', icon: 'pencil' },
      { key: 'profile', title: 'Profile', icon: 'user' },
    ],
  };
 
  render() {
    const activeRoute = this.state.routes [this.state.index];
    this.state.routes [4].navigation = this.props.navigation;
    return (
      <TabView
        navigationState={this.state}
        renderScene={SceneMap({
          shop: Shop,
          step: Step,
          home: Home,
          learn: Learn,
          profile: Profile,
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