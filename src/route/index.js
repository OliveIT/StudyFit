import React from "react";
import { createDrawerNavigator, createStackNavigator, createAppContainer } from "react-navigation";

import Presentation from "../containers/unsecure/Presentation";
import SignIn from "../containers/unsecure/SignIn";
import SignUp from "../containers/unsecure/SignUp";

import Tab from "../containers/secure/Tab";
import ForgotPwd from "../containers/unsecure/ForgotPwd";

export const INITIAL_ROUTE = 'unsecured';
export const INITIAL_SECURED_ROUTE = 'home';
export const INITIAL_UNSECURED_ROUTE = 'presentation';

const unsecuredRoutes = {
  presentation: {
    screen: Presentation
  },
  signin: {
    screen: SignIn
  },
  signup: {
    screen: SignUp
  },
  forgotpwd: {
    screen: ForgotPwd
  },
  tab: {
    screen: Tab
  },
}

const Routes = {
  unsecured: {
    screen: createStackNavigator(unsecuredRoutes, {
        initialRouteName: INITIAL_UNSECURED_ROUTE,
        headerMode: 'none',
    })
  },
};

const mainNavigator = createStackNavigator(Routes, {
  initialRouteName: INITIAL_ROUTE,
  headerMode: 'none',
});

export default createAppContainer(mainNavigator);