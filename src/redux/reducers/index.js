import { combineReducers } from "redux";
import { SET_USER, SET_COINS } from '../types';

const initialState = {
  data: {
    key: "",
    user: {}
  },
  steps: 0
}

const reducer = (state = initialState, action) => {
  switch(action.type) {
      case SET_USER:
        return {...state, data: action.payload};
/*      case SET_COINS:
        state.data.user.coins = action.payload;
        return state;*/
      default: 
        return state;
  }
}


export default combineReducers({
  reducer: reducer,
});
