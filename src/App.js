/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */
import * as React from 'react';
import { Provider } from "react-redux";
import store from "./redux/store";
import Navigation from "./route";
//import firebase from 'react-native-firebase';
//import {firebaseConfig} from '../app.json';
//import SplashScreen from 'react-native-splash-screen'
//import Splash from "./containers/unsecure/splash";

//SplashScreen.hide();
//if (!firebase.apps.length)
//  firebase.initializeApp(firebaseConfig);

export default class App extends React.Component {
  componentDidMount() {
//    SplashScreen.hide();
  }

  render() {
    return (
    <Provider store={store}>
      <Navigation />
    </Provider>
    );
  }
}