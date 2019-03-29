import React from "react";
import { createDrawerNavigator, createStackNavigator, createAppContainer } from "react-navigation";

import Presentation from "../containers/unsecure/Presentation";

export const INITIAL_ROUTE = 'unsecured';
export const INITIAL_SECURED_ROUTE = 'home';
export const INITIAL_UNSECURED_ROUTE = 'presentation';


const unsecuredRoutes = {
  presentation: {
    screen: Presentation
  },
}

const Routes = {
  unsecured: {
      screen: createStackNavigator(unsecuredRoutes, {
          initialRouteName: INITIAL_UNSECURED_ROUTE,
          headerMode: 'none',
      })
  },
  
//  secured: {
//  }
};

const mainNavigator = createStackNavigator(Routes, {
  initialRouteName: INITIAL_ROUTE,
  headerMode: 'none',
});




export default createAppContainer(mainNavigator);