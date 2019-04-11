import { SET_USER } from '../types';
//import axios from 'axios';
import firebase from 'react-native-firebase';
import DefaultPreference from 'react-native-default-preference';

export const onSignIn = (email) => {
  return (dispatch) => {
    firebase
      .database()
      .ref('users')
      .once("value", (data) => {
        data = data.val();
        Object.keys(data).forEach(key => {
          if (data [key].email == email) {
            DefaultPreference.set("key", key);

            dispatch({ type: SET_USER, payload: {
              key: key,
              user: data [key]
            }});
          }
        });
      })
      .catch(error => {
      })
  };
};

export const setCoins = (data, plusCoins) => {
  return (dispatch) => {
    const {key, user} = data;
    user.coins += plusCoins;

    firebase
    .database()
    .ref(`users/${key}`)
    .update(user, () => {
      dispatch({ type: SET_USER, payload: {
        key: key,
        user: user
      }});
    })
    .catch(error => {
    })
  };
}

export const setStepAndCoins = (data, plusCoins, steps) => {
  return (dispatch) => {
    const {key, user} = data;
    user.coins += plusCoins;
    user.steps = steps;

    firebase
    .database()
    .ref(`users/${key}`)
    .update(user, () => {
      dispatch({ type: SET_USER, payload: {
        key: key,
        user: user
      }});
    })
    .catch(error => {
    })
  };
}

/*
export const setStop = (stop) => {
  return (dispatch) => dispatch({ type: SET_STOP, payload: stop });
}*/